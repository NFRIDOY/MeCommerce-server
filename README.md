
<div align="center">
  <h1>About The Project
  <div style="color: #808080">
  SporteX: Sports-Facility-Booking-Platform-Server
  </div></h1>
  <h5><a href="https://sports-facility-booking-platform-server-ten.vercel.app">
  Live</a> </h5>
</div>

## Table of Contents
  - [Introduction](#introduction)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Endpoints](#endpoints)
  - [Technology Stack](#technology-stack)
  - [Installation Guidelines](#installation-guidelines)


--- 

# Sports-Facility-Booking-Platform-Server

## Introduction

This project focuses on the integration of a Back-end for a sports facility booking platform. The system various APIs for the sports facilitie platform, user, signup, login with jwt token, create bookings, manage their bookings etc. The goal is to provide a seamless and interactive experience for users and administrators in the front-end, ensuring smooth API communication between the frontend and backend.

## Project Description

The sports facility booking platform enables users to browse and reserve sports venues such as basketball courts, tennis courts, football fields, and more. The platform is designed to cater to both regular users, who wish to make bookings, and administrators, who manage the facility details, schedules, and user reservations.

This integration involves creating a responsive and user-friendly frontend interface using modern web development technologies. The frontend communicates with the backend via RESTful API calls to fetch data, manage bookings, and display relevant information to users and administrators.

The user dashboard will allow users to manage their profiles, view available facilities, and make reservations, while the admin dashboard will offer tools for administrators to manage facility schedules, view user bookings, and perform necessary updates to the platform.

## Features

### 1. **User Registration and Profile Management**
   - **Sign Up**: 
     - Register new users securely to access the platform.
     - Manage user profiles, allowing updates to personal information and account settings.
   - **Login**: 
     - Existing users can log in to view and manage their bookings and profile information.
     - Both users and administrators can access different functionalities based on their roles.

### 2. **Sports Facility Management**
   - **Facility Viewing**:
     - Users can view all available sports facilities and their schedules in real-time.
     - Facility details include name, location, hourly price, and availability status.
   - **Facility Booking**:
     - Users can book a facility for their preferred time slots.
     - Users can view, modify, or cancel their current bookings directly through the platform.
   - **Facility Administration**:
     - Admins have access to manage facilities, including adding new facilities, updating information, and deleting entries.
     - Admins can also manage user bookings and view user accounts for oversight.

### 3. **Authentication and Authorization with JWT**
   - Secure login and registration system using JSON Web Tokens (JWT).
   - Role-Based Access Control (RBAC) is implemented to differentiate between user and admin privileges, ensuring that sensitive actions like facility management are restricted to authorized admins only.

### 4. **API Integrations**
   - **RESTful API** communication ensures real-time synchronization between the frontend and backend for seamless data updates.
   - Comprehensive error handling and data validation are applied on both frontend and backend sides to maintain system integrity and provide meaningful feedback to users.

---

### **API Routes**

## Endpoints

### 1. **Authentication Routes**
   - **Endpoint**: `/api/auth`
   - **Router**: `AuthRoutes`
   - **Description**: Handles user authentication and registration.

   | Method | Endpoint           | Description                   |
   |--------|--------------------|-------------------------------|
   | POST   | `/login`           | User login and JWT issuance.  |
   | POST   | `/signup`        | User registration.            |

### 2. **User Management Routes**
   - **Endpoint**: `/api/user`
   - **Router**: `UserRoutes`
   - **Description**: Manages user profiles and user-specific actions.

   | Method | Endpoint           | Description                   |
   |--------|--------------------|-------------------------------|
   | GET    | `/bookings`        | Get all bookings for a user.  |

### 3. **Sports Facility Routes**
   - **Endpoint**: `/api/facility`
   - **Router**: `FacilityRoutes`
   - **Description**: Manages sports facility data including viewing, adding, updating, and deleting facilities.

   | Method | Endpoint             | Description                     |
   |--------|----------------------|---------------------------------|
   | GET    | `/`                  | Get a list of all facilities.  |
   | GET    | `/:id`              | Get details of a specific facility by ID. |
   | POST   | `/`              | Add a new facility (Admin only).|
   | PUT    | `/update/:id`       | Update an existing facility (Admin only).|
   | DELETE | `/delete/:id`       | Delete a facility (Admin only).|

### 4. **Availability Check Routes**
   - **Endpoint**: `/api/check-availability`
   - **Router**: `FacilityRoutes`
   - **Description**: Checks the availability of facilities for a given time slot.

   | Method | Endpoint             | Description                     |
   |--------|----------------------|---------------------------------|
   | GET    | `/:id`              | Check availability of a specific facility based on time slot. |

### 5. **Booking Routes**
   - **Endpoint**: `/api/bookings`
   - **Router**: `BookingRoutes`
   - **Description**: Handles booking creation, management, and updates.

   | Method | Endpoint            | Description                     |
   |--------|---------------------|---------------------------------|
   | POST   | `/`                 | Create a new booking with user auth.|
   | POST   | `/create-booking`   | Create a new booking without user auth.|
   | GET    | `/:id`              | View details of a specific booking by ID.|
   | PUT    | `/update/:id`       | Update an existing booking.    |



### **Notes**
- Ensure that proper authentication headers are provided for secured routes.
- Admin-only actions require users to have the appropriate role and permissions.
- Data validation and error handling are applied to provide meaningful feedback for incorrect or invalid requests.

---

## Technology Stack

### Backend
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


## Installation Guideline

Follow these steps to set up the Sports Facility Booking Platform on your local machine.

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or later).
- Ensure you have [npm](https://www.npmjs.com/) (comes bundled with Node.js) or [yarn](https://classic.yarnpkg.com/en/docs/install/) installed.

### Steps to Install

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd sports-facility-booking-platform-server
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

