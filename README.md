# JobApps — Job Application Tracker

A full-stack web application for tracking job applications, built with React and Spring Boot.
Users can add, organize, and monitor their job search progress with status tracking, 
recruiter contact management, and a personalized color coded card system.

## Demo
<img width="3024" height="1720" alt="image" src="https://github.com/user-attachments/assets/3808dff2-dba0-4c3a-ab40-29b56b685685" />
<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/746e8f03-33ab-4bb4-b0a7-06e5a88db4a0" />
<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/7112cb00-b4e9-475e-b2f8-5b2a66a4d5d7" />
<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/ea0baf9a-fb34-4287-a652-627982fa13f6" />

## Features
- JWT authentication: register, login, stay logged in
- Add and manage job applications with full details (company, role, salary, recruiter info)
- Status tracking: Submitted, Under Review, Interview Scheduled, Offer Extended, Hired, Rejected
- Color code applications with a pastel palette for personal organization
- Slide out side panel with full application details
- Filter applications by status
- Account management: update name, email, and password
- Dashboard with application stats

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- CSS Modules
- MUI X Charts

**Backend**
- Java 21 / Spring Boot
- Spring Security + JWT
- Spring Data JPA
- PostgreSQL

## Getting Started

### Prerequisites
- Java 21
- Node.js
- PostgreSQL

### Backend
```bash
cd backend
# add your .env with DB credentials and JWT secret
./mvnw spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

The app runs on `http://localhost:5173` with the API on `http://localhost:8080`.

## Project Status
Actively in development, dashboard and additional features in progress.

## Author
Rodolfo Medina — Computer Science student at CSUN
