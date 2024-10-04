
<div align="center">
  <h1>About The Project: 
  <span style="color: #808080">
  Sports-Facility-Booking-Platform-Server
  </span></h1>
  <h5><a href="https://sports-facility-booking-platform-server-ten.vercel.app">
  Live</a> </h5>
</div>

## Table of Contents
  - [Introduction](#introduction)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Technology Stack](#technology-stack)
  - [Installation Guidelines](#installation-guidelines)


--- 

# Sports-Facility-Booking-Platform

## Introduction

This project focuses on the integration of a frontend interface with an existing backend system for a sports facility booking platform. The system allows users to book various sports facilities, manage their bookings, and interact with an intuitive user interface. The backend was initially developed in Assignment 3, and in this phase, we are expanding its functionality by implementing both user and admin dashboards. The goal is to provide a seamless and interactive experience for users and administrators alike, ensuring smooth API communication between the frontend and backend.

## Project Description

The sports facility booking platform enables users to browse and reserve sports venues such as basketball courts, tennis courts, football fields, and more. The platform is designed to cater to both regular users, who wish to make bookings, and administrators, who manage the facility details, schedules, and user reservations.

This integration involves creating a responsive and user-friendly frontend interface using modern web development technologies. The frontend communicates with the backend via RESTful API calls to fetch data, manage bookings, and display relevant information to users and administrators.

The user dashboard will allow users to manage their profiles, view available facilities, and make reservations, while the admin dashboard will offer tools for administrators to manage facility schedules, view user bookings, and perform necessary updates to the platform.

## Features

### 1. User Dashboard
- View available sports facilities.
- Book a facility for a selected time slot.
- View, modify, or cancel current bookings.
- Manage user profile and account settings.

### 2. Admin Dashboard
- View all available facilities and their schedules.
- Manage facility bookings and availability.
- Add, update, or delete sports facilities and their details.
- View and manage user bookings and accounts.

### 3. Authentication and Authorization
- User login and registration system.
- Role-based access control (RBAC) to separate user and admin privileges.

### 4. API Integration
- RESTful API communication between frontend and backend for real-time data updates.
- Error handling and validation on both frontend and backend sides.

### 5. Responsive Design
- A responsive and mobile-friendly interface to ensure usability on various devices.

### 6. Notifications
- Email or in-app notifications for booking confirmations, cancellations, and updates.

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

