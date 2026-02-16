# Fruit Application

A microservices-based project demonstrating a polyglot persistence architecture.

## Architecture

The system consists of a **React** frontend communicating through a **Node.js/Express API Gateway** with three specialized backend services:

* **User Service**: Manages profiles and authentication.
    * Database: **PostgreSQL**
* **Fruit Service**: Handles fruit data and catalogs.
    * Database: **MongoDB**
* **Inventory Service**: Manages stock and availability.
    * Database: **MariaDB**

## Tech Stack

* **Frontend**: React
* **Gateway**: Node.js / Express
* **Backend Services**: Node.js / Express
* **Databases**: PostgreSQL, MongoDB, MariaDB

## Setup

1. Clone the repository
2. Navigate into repo `cd fruit-application`
3. Run `docker compose up -d`
4. Visit in browser
