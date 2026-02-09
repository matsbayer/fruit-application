import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 8080;

//TODO: define complex target URLs for calls to different services at a single endpoint

// Everything regarding fruits will be proxied to the fruit service
app.use(
  "/api/fruits",
  createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true
  })
);
