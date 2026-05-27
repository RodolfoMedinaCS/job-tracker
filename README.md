# JobApps — Job Application Tracker

A full-stack web application for tracking job applications, built with React and Spring Boot.
Users can add, organize, and monitor their job search progress with status tracking, 
recruiter contact management, and a personalized color coded card system.

## Demo
<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/1a1ff11b-09fe-4115-a786-ef5c81399f4b" />

<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/c0a6166f-3669-4cb1-ad99-cb824bd6d10f" />

<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/7fe86a95-a22f-45d4-81d9-3d56aa4872ee" />


<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/f33d8d32-0c8a-4781-9135-fd9694fcada1" />

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
