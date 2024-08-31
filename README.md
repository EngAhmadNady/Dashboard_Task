# react Dashboard Task (node, express, and mongo for providing fast, stable, and suitable backend environment to teset react project)

![Dashboard Screenshot](client/public/readme_assets/screenshot.jpg) 

This user interface for a reports dashboard that displays various data visualizations. dashboard project is task built using react meanly and for ensuring performance and stability I made use of the MERN stack technologies(MongoDB, Express.js, React, Node.js), providing a versatile interface for managing various aspects of data visualization, client interaction, and administrative functionalities. It also offers light and dark mode themes for optimal user experience and is designed to be responsive across different devices.

## Table of Contents

1. [Demo](#demo)
2. [Introduction](#introduction)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Packages Used](#packages-used)
6. [Installation](#installation)
7. [Folder Structure](#folder-structure)
8. [Running the Application](#running-the-application)
9. [Documentation](#documentation)

## Demo

You can see the task in live recorded video at https://www.canva.com/design/DAGPcrVg5fU/R2643Q7r03zGto16wdomGA/watch?utm_content=DAGPcrVg5fU&utm_campaign=designshare&utm_medium=link&utm_source=editor

## Introduction

This project provides a user-friendly interface with multiple tabs for handling various aspects of data visualization,and analytics reports. The frontend is developed with React, integrating Nivo for graph components and MUI for visual components and MUI-X for table. Meanwhile, the backend utilizes Express.js and MongoDB via Mongoose for data handling.

## Features

### Tabs

- **Transactions**: Reports that track and visualize transaction details with the ability of exporting reports in csv format or pdf format throw clicking on print and choosing to save report as pdf format.
- **Daily**: Displays daily sales data analysis chart allows users to select specific data points or ranges on the chart both vertically and horizontally.
- **Breakdown**: Provides a detailed breakdown graph of sales data.
- **Overview**: Presents a general overview chart of sales performance.

### Visual Customization

- **Light and Dark Mode**: The dashboard offers users the flexibility to switch between light and dark mode, ensuring optimal viewing comfort under different preferences and lighting conditions.

### Responsiveness

- **Responsive Design**: The dashboard is designed to be responsive, adapting seamlessly to various screen sizes and devices. Whether accessed from desktops, tablets, or mobile devices, users can expect a consistent and user-friendly experience across different platforms.
- **Data Selection**
-Vertical and Horizontal Data Selection: Allow users to select specific data points or ranges on the graphs and charts, both vertically and horizontally.
-Implement selection as a filter to highlight or focus on the selected data in the visualizations.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Nivo**: Data visualization library for React.
- **Material-UI (MUI/MUI-X)**: React UI components for modern web applications.
- **React Router DOM**: For client-side routing within the application.

### Backend

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

### Other Technologies Must be known

- **HTML/CSS**: Frontend markup and styling.
- **JavaScript (ES6+)**: Programming language used in both frontend and backend.

## Packages Used

### Client-side

- **@emotion/react**: Library for CSS-in-JS styling.
- **@mui/icons-material**: Material-UI icons for the application.
- **@mui/material**: Material-UI components for UI design.
- **@mui/x-data-grid**: Data grid component for Material-UI.
- **@nivo/bar**, **@nivo/core**, **@nivo/geo**, **@nivo/line**, **@nivo/pie**: Nivo chart components.
- **react-datepicker**: Datepicker component for React.
- **react-redux**: Official React bindings for Redux state management.
- **react-router-dom**: Declarative routing for React applications.

### Server-side

- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware for enabling cross-origin resource sharing.
- **dotenv**: Module for loading environment variables from a .env file into process.env.
- **express**: Web application framework for Node.js.
- **helmet**: Middleware for securing HTTP headers.
- **mongoose**: ODM library for MongoDB and Node.js.
- **morgan**: HTTP request logger middleware for Node.js.
- **nodemon**: Utility for automatically restarting the Node.js server upon file changes.

### Installation

#### Environment Variables Setup

The project depends on environment variables for configuration. Follow the instructions below to set up the necessary environment variables:

#### Client-side Environment Variables

Create a `.env` file in the `client` directory and add the following variable:

```bash
VITE_APP_BASE_URL="http://localhost:5001"
```

This variable defines the base URL for API requests in the client-side code.

#### Server-side Environment Variables

Create a `.env` file in the `server` directory and add the following variables:
**Note**: you could use my DB URL to easy testing app directly "mongodb+srv://engahmadnady71:VdlmtmZ21V7P3akR@cluster0.dqskq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

```bash
MONGO_URL="MONGODB_URL"
PORT=5001
```

Ensure to replace `MONGODB_URL` with your actual MongoDB URL or use mine. The `PORT` variable specifies the port number for the server.

**Note**: Environment variables containing sensitive information like API keys, database credentials, or any other secrets should not be committed to version control. Ensure that the `.env` files are included in your project's `.gitignore` file to prevent accidental exposure of sensitive data.

### Getting started

1- Clone this repository to your local machine .

2- Install and run client dependencies:

```bash
cd client
npm install
npm run dev
```

3- Install and run server dependencies:

```bash
cd server
npm install
npm run dev
```

Open your web browser and visit http://localhost:5173 to see the website in action during development.

## Folder Structure

The project structure is organized as follows:

Dashboard_Task/
│
├── client/               # Client-side codebase (React)
│   ├── public/
│   ├── src/
|   |   ├── assets/       # Static assets
│   │   ├── components/   # React components
│   │   ├── scenes/       # Different pages for the dashboard
│   │   ├── state/        # API service functions
│   │   ├── main.jsx      # Main application component
|   ├── .env              # Environment variables (not committed to version control)
|   ├── package.json      # Client-side dependencies and scripts
│   │   └── ...
│   └── ...
│
├── server/               # Server-side codebase (Node.js, Express)
│   ├── controllers/      # Route controllers
│   ├── models/           # Database models (Mongoose)
│   ├── routes/           # API routes
│   ├── data/             # Raw data used to populate the database
│   ├── app.js            # Express app configuration
|   ├── .env              # Environment variables (not committed to version control)
|   ├── package.json      # Server-side dependencies and scripts
scripts
│   │   └── ...
│   └── ...

This structure separates the client and server codebases for better organization and modularity.

## Running the Application

- Start the server: `npm run dev` in the `server` directory.
- Start the client: `npm run dev` within the `client` directory.

## Documentation

- **[React Documentation](https://reactjs.org/docs/getting-started.html)**: Explore React documentation for building user interfaces.
- **[Nivo Documentation](https://nivo.rocks/docs/)**: Discover Nivo documentation for data visualization components in React.
- **[Material-UI Documentation](https://mui.com/getting-started/usage/)**: Dive into Material-UI documentation for React UI components.
- **[Express.js Documentation](https://expressjs.com/en/starter/installing.html)**: Learn more about Express.js for building web applications with Node.js.
- **[MongoDB Documentation](https://docs.mongodb.com/)**: Explore MongoDB documentation for NoSQL database management.
- **[Mongoose Documentation](https://mongoosejs.com/docs/)**: Refer to Mongoose documentation for MongoDB object modeling in Node.js.
- **[React Router DOM Documentation](https://reactrouter.com/web/guides/quick-start)**: Learn how to use React Router DOM for client-side routing within the application.

---
