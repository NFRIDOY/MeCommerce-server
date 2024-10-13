
<div align="center">
  <h1>About The Project
  <div style="color: #808080">
  Recipi: Recipe Sharing Community - Server
  </div></h1>
  <h5><a href="">
  Live</a> </h5>
</div>

# Recipe Sharing Community - Backend

## Table of Contents
  - [Introduction](#introduction)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Endpoints](#endpoints)
  - [Technology Stack](#technology-stack)
  - [Installation Guidelines](#installation-guidelines)


--- 

## Introduction

This project focuses on developing the backend for the Recipe Sharing Community platform. The system provides various APIs for user registration, authentication, recipe management, and more, allowing users to share, view, and manage recipes. The goal is to create a robust and efficient backend that integrates seamlessly with the frontend, ensuring smooth communication and data flow.

## Project Description

The Recipe Sharing Community platform allows users to share their culinary creations, discover new recipes, and interact with other food enthusiasts. Users can create an account, login, browse through recipes, and manage their submissions. Administrators can manage user accounts, moderate recipes, and oversee platform activities.

## Features

### 1. **User Registration and Profile Management**
   - **Sign Up**: 
     - Register new users securely to access the platform.
     - Manage user profiles, allowing updates to personal information and account settings.
   - **Login**: 
     - Existing users can log in to view and manage their profile information.
     - Both users and administrators can access different functionalities based on their roles.

### 2. **Recipe Management**
   - **Recipe Viewing**:
     - Users can view all available recipes with detailed information such as ingredients, steps, and cooking time.
     - Recipes can be filtered by category, cuisine, or user preferences.
   - **Recipe Creation**:
     - Users can add new recipes, including images, ingredients, and cooking instructions.
     - Users can update or delete their own recipes.
   - **Recipe Administration**:
     - Admins have access to manage recipes, including approving or rejecting submitted recipes and moderating content.

### 3. **Authentication and Authorization with JWT**
   - Secure login and registration system using JSON Web Tokens (JWT).
   - Role-Based Access Control (RBAC) differentiates between user and admin privileges, ensuring that sensitive actions like recipe moderation are restricted to authorized admins only.

### 4. **API Integrations**
   - **RESTful API** communication ensures real-time synchronization between the frontend and backend for seamless data updates.
   - Comprehensive error handling and data validation are applied on both frontend and backend sides to maintain system integrity and provide meaningful feedback to users.

---

## **API Routes**

## Endpoints

### 1. **Authentication Routes**
   - **Endpoint**: `/api/auth`
   - **Router**: `AuthRoutes`
   - **Description**: Handles user authentication and registration.

   | Method | Endpoint           | Description                   |
   |--------|--------------------|-------------------------------|
   | POST   | `/login`           | User login and JWT issuance.  |
   | POST   | `/signup`          | User registration.            |

### 2. **User Management Routes**
   - **Endpoint**: `/api/user`
   - **Router**: `UserRoutes`
   - **Description**: Manages user profiles and user-specific actions.

   | Method | Endpoint           | Description                   |
   |--------|--------------------|-------------------------------|
   | GET    | `/profile`         | Get profile information for a user.  |
   | PUT    | `/profile`         | Update user profile.          |

### 3. **Recipe Routes**
   - **Endpoint**: `/api/recipe`
   - **Router**: `RecipeRoutes`
   - **Description**: Manages recipe data including viewing, adding, updating, and deleting recipes.

   | Method | Endpoint             | Description                     |
   |--------|----------------------|---------------------------------|
   | GET    | `/`                  | Get a list of all recipes.      |
   | GET    | `/:id`              | Get details of a specific recipe by ID. |
   | POST   | `/`                 | Add a new recipe (User only).   |
   | PUT    | `/update/:id`       | Update an existing recipe (User only).|
   | DELETE | `/delete/:id`       | Delete a recipe (User/Admin).   |

### 4. **Search Routes**
   - **Endpoint**: `/api/search`
   - **Router**: `SearchRoutes`
   - **Description**: Searches recipes based on keywords, categories, or ingredients.

   | Method | Endpoint             | Description                     |
   |--------|----------------------|---------------------------------|
   | GET    | `/`                 | Search recipes using query parameters. |

### 5. **Admin Routes**
   - **Endpoint**: `/api/admin`
   - **Router**: `AdminRoutes`
   - **Description**: Handles admin functionalities like managing users and moderating content.

   | Method | Endpoint            | Description                     |
   |--------|---------------------|---------------------------------|
   | GET    | `/users`           | View all registered users.      |
   | DELETE | `/user/:id`        | Delete a user account.          |

### **Notes**
- Ensure that proper authentication headers are provided for secured routes.
- Admin-only actions require users to have the appropriate role and permissions.
- Data validation and error handling are applied to provide meaningful feedback for incorrect or invalid requests.

---







## Technology Stack
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Express**: A minimalist web framework for building APIs and web applications.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to manage database interactions.
- **bcryptjs**: A library to hash passwords securely.
- **jsonwebtoken**: A tool for creating and verifying JSON Web Tokens (JWT), used for authentication.
- **cors**: A middleware for handling Cross-Origin Resource Sharing (CORS) in APIs.
- **date-fns**: A modern date utility library for formatting, manipulating, and comparing dates.
- **slugify**: A library used to create URL-friendly slugs from strings.
- **zod**: A TypeScript-first schema declaration and validation library.

### Development Tools
- **ts-node-dev**: A development tool to use TypeScript in Node.js without compiling, with auto-restart on file changes.
- **ESLint**: A tool for identifying and fixing issues in JavaScript/TypeScript code.
- **TypeScript**: Used for type safety and better development experience.
- **Nodemon**: A utility that automatically restarts the server when code changes are detected during development.
- **dotenv**: A module to load environment variables from a `.env` file.

### Dev Dependencies
- **@types/cors**: TypeScript definitions for the `cors` middleware.
- **@types/express**: TypeScript definitions for Express.
- **@types/node**: TypeScript definitions for Node.js.
- **@types/bcryptjs**: TypeScript definitions for bcryptjs.
- **eslint**: A static code analysis tool for identifying and fixing problematic patterns in code.
- **typescript-eslint**: ESLint tooling for TypeScript.
- **@vercel/node**: For building and deploying serverless functions on Vercel.
- **@vercel/build-utils**: A utility library for building serverless functions for Vercel.

---

## Installation Guideline

Follow these steps to set up the Sports Facility Booking Platform on your local machine.

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or later).
- Ensure you have [npm](https://www.npmjs.com/) (comes bundled with Node.js) or [yarn](https://classic.yarnpkg.com/en/docs/install/) installed.

### Steps to Install

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NFRIDOY/recipi-recipe-sharing-community-server.git
   cd recipi-recipe-sharing-community-server
   ```
2. **Install**
   ```bash
   npm install
   ```
3. **Run**
   ```bash
   npm run start:dev
   ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    PORT=5000
    DB_URL=your_db_connection_uri
    NODE_ENV=development
    salt_round=789
    JWT_ACCESS_SECRET=your_JWT_ACCESS_SECRET
    JWT_ACCESS_EXPIRES_IN=123d
    JWT_REFRESH_SECRET=your_JWT_REFRESH_SECRET
    JWT_REFRESH_EXPIRES_IN=365d
   ```

##### Enjoy 

