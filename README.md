🔐 Authentication API (JWT Based)

📌 Project Overview

This project implements User Authentication and Authorization using JWT (JSON Web Token) in a Node.js application.
It follows the MVC architecture and provides secure endpoints for user registration, login, and protected user data access.

⸻

🚀 Tech Stack
	•	Node.js
	•	Express.js
	•	MongoDB (Mongoose)
	•	JSON Web Token (JWT)
	•	bcryptjs
	•	Postman

📂 Folder Structure

	src/
├── config/        # Database connection
├── controllers/   # Business logic
├── middleware/    # Auth middleware
├── models/        # Mongoose models
├── routes/        # API routes
├── utils/         # Helper functions (JWT)
├── app.js
server.js

⚙️ Installation & Setup

1. Clone the repository

	git clone https://github.com/bharathi9989/Authendication-task
2. Install dependencies
   npm install

3. Create .env file

   PORT=2048
	MONGO_URI=mongodb+srv://ervelubharathis_db_user:Pr6mlf0PpBBAKZv3@authdb.ta2bpzq.mongodb.net/?appName=authDB
	JWT_SECRET=guviauthendication

4. Run the server
   	npm run dev

🌐 Base URL
	http://localhost:2048

🔑 API Endpoints

🔹 Register User

POST /api/auth/register

Request Body:

	{
  "username": "bharathi",
  "email": "bharathi@guvi.com",
  "password": "bharathi@123"
}

Response:

	{
  "message": "User registered successfully"
}

🔹 Login User

POST /api/auth/login

Request Body:

		{
  "email": "bharathi@guvi.com",
  "password": "bharathi@123"
}

Response:
	{
  "token": "JWT_TOKEN"
}

🔹 Get Current User (Protected)

GET /api/auth/me

Headers:

Authorization: Bearer <token>

Response:	

	{
  "id": "user_id",
  "email": "bharathi@guvi.com"
}


🔐 Authentication Flow
	1.	User registers with email and password
	2.	Password is hashed using bcrypt
	3.	User logs in and receives JWT token
	4.	Token is sent in headers for protected routes
	5.	Middleware verifies token and allows access

⸻

🧪 API Testing

All APIs are tested using Postman

Postman Collection:

link :  https://documenter.getpostman.com/view/48296551/2sBXqDrhjk


⸻

🚀 Deployment

Backend deployed on Render:


⸻

📌 Features
	•	Secure password hashing
	•	JWT-based authentication
	•	Protected routes
	•	Clean MVC architecture
	•	Error handling

⸻

👨‍💻 Author

Velubharathi

	
