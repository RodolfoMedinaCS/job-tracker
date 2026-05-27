# JobApps — Job Application Tracker
 
A full-stack web application for tracking your job search. Add applications, monitor their status, manage recruiter contacts, and visualize your progress — all in one place.
 
# [Live Demo](https://spontaneous-choux-80874f.netlify.app)
<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/1a1ff11b-09fe-4115-a786-ef5c81399f4b" />

<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/c0a6166f-3669-4cb1-ad99-cb824bd6d10f" />

<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/7fe86a95-a22f-45d4-81d9-3d56aa4872ee" />


<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/f33d8d32-0c8a-4781-9135-fd9694fcada1" />

<img width="3024" height="1722" alt="image" src="https://github.com/user-attachments/assets/ea0baf9a-fb34-4287-a652-627982fa13f6" />

## Features
- **JWT Authentication** — register, login, and stay authenticated with secure token-based sessions
- **Application Tracking** — add full job details: company, role, salary range, job type, work type, and posting URL
- **Status Management** — track each application through Submitted, Under Review, Interview Scheduled, Offer Extended, Hired, or Rejected
- **Color Coding** — personalize cards with a pastel palette to organize at a glance
- **Slide out Side Panel** — view full application details, recruiter contact info, and notes without leaving the page
- **Search & Filter** — search by company or job title, filter by status
- **Dashboard** — stats overview, status breakdown pie chart, response rate, and recent applications
- **Account Management** — update name, email, password, or delete your account


---
 
## Tech Stack
 
**Frontend**
- React (Vite)
- React Router
- CSS Modules
- MUI X Charts
**Backend**
- Java 21 / Spring Boot
- Spring Security + JWT
- Spring Data JPA / Hibernate
- PostgreSQL
**Deployment**
- Frontend → Netlify
- Backend → Railway
- Database → Railway (PostgreSQL)
  
---
 
## What I Built
 
Designed and built the complete full-stack architecture from scratch. This includes a REST API with JWT based authentication, a relational PostgreSQL database, and a React frontend with client side routing and protected pages. I handled the full deployment pipeline, backend containerized and deployed to Railway, frontend deployed to Netlify with environment based API configuration. All auth, data, and routing logic was written without external boilerplate or templates.
 
---

## Getting Started Locally
 
### Prerequisites
- Java 21
- Node.js
- PostgreSQL
### Backend
 
Set the following environment variables (or add them to your `application.properties`):
 
```
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/your_db
SPRING_DATASOURCE_USERNAME=your_username
SPRING_DATASOURCE_PASSWORD=your_password
APPLICATION_SECURITY_JWT_SECRET_KEY=your_base64_secret
SPRING_JPA_HIBERNATE_DDL_AUTO=update
```
 
Then run:
 
```bash
cd backend
./mvnw spring-boot:run
```
 
### Frontend
 
Create a `.env` file inside the `frontend/` folder:
 
```
VITE_API_URL=http://localhost:8080
```
 
Then run:
 
```bash
cd frontend
npm install
npm run dev
```
 
The app runs on `http://localhost:5173`.
 
---
 
## Project Status
 
Deployed and functional. Planned additions: pagination, interview date reminders, and CSV export.
 
---
 
## Author
 
Rodolfo Medina — Computer Science student at California State University, Northridge
 
Rodolfo Medina — Computer Science student at CSUN
