<div align="center">
  <h1>About The Project</h1>
  <div style="color: #808080">
    MeCommerce - Server
  </div>
  <h5><a href="">Live</a></h5>
</div>

# MeCommerce - Backend

## Table of Contents
  - [Introduction](#introduction)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Endpoints](#endpoints)
  - [Technology Stack](#technology-stack)
  - [Installation Guidelines](#installation-guidelines)

---

## Introduction

This project focuses on developing the backend for **MeCommerce**, an e-commerce platform that provides APIs for user registration, authentication, product management, and more. The aim is to build a secure, efficient, and scalable backend that seamlessly integrates with the frontend to deliver an optimal shopping experience.

## Project Description

**MeCommerce** is an online e-commerce website where users can create accounts, log in, browse through a wide variety of products, add items to their cart, and complete purchases. The backend handles user management, product catalog, order processing, and authentication to ensure smooth and secure transactions.

## Features

### 1. **User Registration and Profile Management**
   - **Sign Up**: 
     - Secure user registration to access the platform.
     - Manage user profiles with options to update personal information and settings.
   - **Login**: 
     - Existing users can log in to manage their accounts.
     - Role-based functionalities for both users and administrators.

### 2. **Product Management**
   - **Product Viewing**:
     - Users can view available products with detailed information such as price, description, and images.
     - Products can be filtered by categories or searched using keywords.
   - **Product Administration**:
     - Admins can add, update, or delete products and manage the product catalog.

### 3. **Shopping Cart and Checkout**
   - **Cart Operations**:
     - Users can add products to their cart, update quantities, or remove items.
     - The backend handles price calculations and manages cart data.
   - **Checkout Process**:
     - Secure and streamlined checkout, including payment and order summary.

### 4. **Authentication and Authorization with JWT**
   - Secure login and registration using JSON Web Tokens (JWT).
   - Role-Based Access Control (RBAC) to differentiate between regular users and administrators, ensuring only authorized users can perform restricted actions.

### 5. **API Integrations**
   - **RESTful API** communication for real-time data exchange between frontend and backend.
   - Comprehensive error handling and validation to maintain system integrity and provide meaningful feedback.

---

## Endpoints

### 1. **Authentication Routes**
   - **Endpoint**: `/api/auth`
   - **Router**: `AuthRoutes`
   - **Description**: Handles user authentication and registration.

   | Method | Endpoint | Description                 |
   |--------|----------|-----------------------------|
   | POST   | `/login` | User login and JWT issuance |
   | POST   | `/signup` | User registration           |

### 2. **User Management Routes**
   - **Endpoint**: `/api/user`
   - **Router**: `UserRoutes`
   - **Description**: Manages user profiles and user-specific actions.

   | Method | Endpoint   | Description                       |
   |--------|------------|-----------------------------------|
   | GET    | `/profile` | Retrieve user profile information |
   | PUT    | `/profile` | Update user profile information   |

### 3. **Product Routes**
   - **Endpoint**: `/api/product`
   - **Router**: `ProductRoutes`
   - **Description**: Manages product data, including viewing, adding, updating, and deleting products.

   | Method | Endpoint       | Description                      |
   |--------|-----------------|----------------------------------|
   | GET    | `/`            | Retrieve all products            |
   | GET    | `/:id`         | Get details of a specific product|
   | POST   | `/`            | Add a new product (Admin only)   |
   | PUT    | `/:id`         | Update an existing product (Admin only) |
   | DELETE | `/:id`         | Delete a product (Admin only)    |

### 4. **Cart Routes**
   - **Endpoint**: `/api/cart`
   - **Router**: `CartRoutes`
   - **Description**: Handles cart operations such as adding items, updating quantities, and removing items.

   | Method | Endpoint      | Description                      |
   |--------|---------------|----------------------------------|
   | GET    | `/`           | Get items in the user's cart     |
   | POST   | `/add`        | Add a product to the cart        |
   | PUT    | `/update`     | Update product quantity in the cart |
   | DELETE | `/remove/:id` | Remove a product from the cart   |

### **Notes**
- Authentication headers are required for protected routes.
- Admin-only routes require appropriate permissions.
- Data validation and error handling ensure robust and secure operations.

---

## Technology Stack
- **TypeScript**: A typed superset of JavaScript for safer and more efficient development.
- **Express**: A web framework for building APIs and web applications.
- **Mongoose**: An ODM library for MongoDB to manage database interactions.
- **bcryptjs**: For securely hashing passwords.
- **jsonwebtoken**: For creating and verifying JWTs for authentication.
- **cors**: Middleware for handling CORS requests.
- **slugify**: To generate URL-friendly slugs for product names.
- **zod**: A schema declaration and validation library for TypeScript.

### Development Tools
- **ts-node-dev**: Automatically restarts the server during development on file changes.
- **ESLint**: Identifies and fixes code quality issues.
- **Nodemon**: Restarts the server automatically on code changes.
- **dotenv**: Loads environment variables from a `.env` file.

---

## Installation Guidelines

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/docs/install/)

### Steps to Install

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NFRIDOY/mecommerce-server.git
   cd mecommerce-server
