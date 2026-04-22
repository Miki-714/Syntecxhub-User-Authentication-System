# 🛡️ Syntecxhub User Authentication System

A robust and secure **Node.js** authentication backend using **Express**, **MongoDB**, and **JSON Web Tokens (JWT)**. This system handles user registration, secure password hashing, and protected route access.

---

## 🚀 Features

* **User Signup**: Securely register users with unique emails and usernames.
* **Password Hashing**: Uses `bcryptjs` for industry-standard salted password hashing.
* **JWT Authentication**: Issues signed tokens upon successful login for stateless authentication.
* **Protected Routes**: Middleware to restrict access to specific endpoints for authorized users only.
* **Database Integration**: Powered by **MongoDB Atlas** using the Mongoose ODM.
* **API Testing**: Includes a `.rest` file for quick testing via VS Code REST Client.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (via Mongoose)
* **Security**: JSON Web Tokens (JWT), BcryptJS
* **Environment Management**: Dotenv

---

## 📂 Project Structure

```text
Syntecxhub-Auth/
├── config/
│   └── db.js         # MongoDB connection logic
├── middleware/
│   └── auth.js       # JWT verification middleware
├── models/
│   └── User.js       # Mongoose User Schema & Hooks
├── routes/
│   └── auth.js       # Signup & Login routes
├── .env              # Environment variables (Ignored by Git)
├── server.js         # Main entry point
└── test.rest         # API testing queries
```

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/syntecxhub-auth.git
    cd syntecxhub-auth
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your credentials:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_random_secret_string
    ```

4.  **Run the application:**
    ```bash
    # For development (if using nodemon)
    npm run dev

    # For production
    node server.js
    ```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/signup` | Register a new user | Public |
| **POST** | `/api/auth/login` | Authenticate user & get token | Public |
| **GET** | `/api/protected` | Access sensitive data | Private (JWT Required) |

---

## 🧪 Testing

Open the `test.rest` file in VS Code and ensure you have the **REST Client** extension installed.
1.  Run the **Signup** request.
2.  Run the **Login** request and copy the returned `token`.
3.  Paste the token into the `Authorization` header variable to access the **Protected** route.
