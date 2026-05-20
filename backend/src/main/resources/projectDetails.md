Auth

As a user I want to register with my email and password so that I have my own private account
As a user I want to log in so that I can access my applications
As a user I want to stay logged in so that I don't have to log in every time I open the app

Managing applications

As a user I want to add a job application so that I can keep track of where I've applied
As a user I want to see all my applications in one place so that I have a clear overview
As a user I want to update the status of an application so that I can track my progress
As a user I want to add notes to an application so that I can remember important details
As a user I want to delete an application so that I can remove ones I no longer care about

Organization

As a user I want to filter my applications by status so that I can focus on what needs attention
As a user I want to sort by date applied so that I can see my most recent applications first

Stats

As a user I want to see how many jobs I've applied to so that I know my total effort
As a user I want to see my interview rate so that I can gauge how well my applications are performing
As a user I want to see a breakdown by status so that I have a quick snapshot of where everything stands





GET is to READ data 
GET /tasks/uuid         returns a specific task 
GET /tasks          returns all tasks
request body [none]

POST is to CREATE data 
POST /tasks          creates a new task
request body{
    "title": "walk dog",
    "description": "Rex needs a walk!",
    "status": "HIGH"
}

PUT is to create or Full UPDATE a task                  //difference between post and put is PUT is for specific UUID's if it doesn't exist youd better off create it with POST 
PUT /tasks/uuid         updates a specific task
request body{
    "title": "walk dog",
    "description": "Rex needs a walk!",
    "status": "HIGH"
}

PATCH is to update only specific fields of a task 
PATCH /tasks/uuid         updates a specific task
request body{
    "title":
}

DELETE is to DELETE data
DELETE /tasks/uuid         deletes a specific task
request body[none]







API ENDPOINTS

POST  /api/auth/register    → create account
POST  /api/auth/login       → returns JWT token

GET    /api/applications      → get all your applications
POST   /api/applications      → add new application
PUT    /api/applications/{id} → update one application
DELETE /api/applications/{id} → delete one application
GET    /api/applications/stats → your stats summary




TABLES: 

users
id, email, password, created_at

applications
id, user_id, company, job_title,
status, date_applied, notes



this is my tech stack:
Your stack
Backend:

Java — language you already know
Spring Boot — runs your server, handles your endpoints
Spring Security + JWT — handles login and auth
Spring Data JPA — talks to your database without writing SQL
PostgreSQL — stores all your data permanently

Frontend:

React — your UI, built with JavaScript you already know
Vite — just sets up your React project in one command
Axios — sends requests from React to your Spring Boot backend
Tailwind CSS — styling without writing much CSS

Tools:

IntelliJ — for your Java backend
VS Code — for your React frontend
Postman — to test your backend before React exists
GitHub — version control, employers will look at this