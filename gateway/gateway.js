import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 8080;

// WICHTIG: Prüfen, ob die URL aus Docker ankommt
const fruitsTarget = process.env.FRUITS_URL;
console.log(`[Config] Proxy Ziel für Fruits ist: ${fruitsTarget}`);

app.use((req, res, next) => {
  console.log(`--- GATEWAY RECV: ${req.method} ${req.url} ---`);
  next();
});

// Das Gateway reagiert NUR auf diesen Präfix
app.use(
  "/api/fruits",

  createProxyMiddleware({
    target: fruitsTarget,

    changeOrigin: true,

    // Express mountet auf /api/fruits, daher ist "path" hier meist "/" oder "/..."

    // Wir bauen daraus /fruits + path

    pathRewrite: (path) => "/fruits" + path,

    onProxyReq: (proxyReq, req) => {
      console.log(
        `[ProxyReq] ${req.method} ${req.originalUrl} -> ${fruitsTarget}${proxyReq.path}`,
      );
    },

    onProxyRes: (proxyRes, req) => {
      console.log(
        `[ProxyRes] ${req.method} ${req.originalUrl} <- ${proxyRes.statusCode}`,
      );
    },

    onError: (err, req, res) => {
      console.error("[ProxyError]", err.message);

      res.status(502).json({ error: "Bad Gateway", detail: err.message });
    },
  }),
);

app.get("/", (req, res) => {
  res.send("Gateway ist online. Versuche /api/fruits");
});

app.listen(PORT, () => {
  console.log(`🚀 Gateway is running on port ${PORT}`);
});
