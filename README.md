# 💼 Hamar Job Portal

A full-stack job portal where **job seekers** find and apply for jobs and **recruiters** post openings and track applicants. Built with the MERN stack and secured with JWT authentication.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)



## 📸 Screenshots

<!-- TODO: add 2-3 screenshots or a GIF, e.g. home page, job listings, recruiter dashboard -->
![Home page](./screenshots/home.png)

## ✨ Features

**Job Seekers**
- Register and log in securely (JWT authentication)
- Browse and view job listings
- Apply for jobs and track application status

**Recruiters**
- Post new job openings
- View applicants for each job
- TODO: edit/delete jobs, update application status (keep only what your app does)

**General**
- Role-based access control (Job Seeker / Recruiter)
- Protected routes on frontend and backend
- REST API built with Express and MongoDB

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Auth | JSON Web Tokens (JWT) |

## 📁 Project Structure

```
Hamar-Job-Portal/
├── client/     # React frontend
└── server/     # Express backend + API
```
<!-- TODO: adjust folder names to match your repo -->

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or later)
- MongoDB (local or MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/Shashank150503/Hamar-Job-Portal.git
cd Hamar-Job-Portal
```

### 2. Set up the backend
```bash
cd server
npm install
```
Create a `.env` file in `server/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start the server:
```bash
npm start
```

### 3. Set up the frontend
```bash
cd ../client
npm install
npm start
```
The app runs at `http://localhost:3000`.

## 🔌 API Overview

<!-- TODO: update with your real routes -->
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| GET | `/api/jobs` | List all jobs |
| POST | `/api/jobs` | Create a job (recruiter only) |
| POST | `/api/jobs/:id/apply` | Apply to a job (job seeker only) |

## 🚧 Future Improvements

- Resume upload
- Job search filters and pagination
- Email notifications for application updates

## 👤 Author

**Shashank Kumar Singh**
[GitHub](https://github.com/Shashank150503) · [LinkedIn](https://www.linkedin.com/in/shashank-kumar-9ab383231/)
