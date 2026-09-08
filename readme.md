# Full-Stack MERN E-Commerce Web Application

> 🌐 **Live Website Link:** [https://mern-ecommerce-c86z.onrender.com](https://mern-ecommerce-c86z.onrender.com/)
> 
> 🔑 **Demo Login Credentials:**  
> • **Admin Panel:** `admin@ecommerce.com` / `admin123`  
> • **Customer Account:** `demo@gmail.com` / `helloWorld@123`

A modern, responsive e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js), Redux Toolkit for centralized state management, and Material-UI (MUI) for a clean, intuitive user interface.

This application provides dedicated interfaces and capabilities for both **Customers (Users)** and **Administrators (Admin)**.

---


## Key Features

### User Experience
- **Authentication & Security:** User registration, secure login, OTP verification, password reset, and JWT cookie-based session management.
- **Product Discovery:** Browse products by categories, brands, price filters, ratings, and pagination.
- **Reviews & Ratings:** Add, edit, and delete reviews with real-time rating updates.
- **Cart & Wishlist:** Real-time shopping cart calculation, save products to wishlist with personal notes.
- **Checkout & Orders:** Multi-step checkout with multiple delivery addresses, order history, and detailed status tracking.
- **User Profile:** Manage contact details, delivery addresses, and past order activity.

### Admin Panel
- **Product Management:** Add new products, edit details (price, stock, images, categories), and soft-delete/restore products.
- **Order Management:** View all user orders, filter by status, and update shipment/delivery status in real-time.
- **Dashboard Overview:** Monitor order status, stock levels, and store inventory.

---

## Tech Stack

- **Frontend:** React.js, Redux Toolkit, Material-UI (MUI), React Router v6, Axios, Framer Motion
- **Backend:** Node.js, Express.js, Mongoose (MongoDB ODM)
- **Database:** MongoDB (Atlas Cloud / Local)
- **Authentication:** JWT (JSON Web Tokens), bcryptjs, Nodemailer (OTP / Reset)

---

## Project Structure

```
mern-ecommerce-project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── features/
    │   ├── hooks/
    │   ├── pages/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## Setup & Installation

### 1. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:
```env
PORT=8000
MONGO_URI="your_mongodb_connection_string"
ORIGIN="http://localhost:3000"
SECRET_KEY="your_jwt_secret_key"
EMAIL="your_email@example.com"
PASSWORD="your_email_app_password"
LOGIN_TOKEN_EXPIRATION="30d"
OTP_EXPIRATION_TIME="120000"
PASSWORD_RESET_TOKEN_EXPIRATION="2m"
COOKIE_EXPIRATION_DAYS="30"
PRODUCTION="false"
```

Start the backend server:
```bash
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:
```env
REACT_APP_BASE_URL="http://localhost:8000"
```

Start the frontend application:
```bash
npm start
```
