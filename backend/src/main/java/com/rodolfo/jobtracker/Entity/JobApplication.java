package com.rodolfo.jobtracker.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "job_applications")
public class JobApplication {

    @Id
    @GeneratedValue
    private Long id;

    private String company;
    private String jobTitle;
    private ApplicationStatus status;
    private LocalDate dateApplied;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public JobApplication(){}
    public JobApplication(String company, String jobTitle, ApplicationStatus status, LocalDate dateApplied,
                          String notes) {
        this.company = company;
        this.jobTitle = jobTitle;
        this.status = status;
        this.dateApplied = dateApplied;
        this.notes = notes;
    }

    //getters
    public String getCompany(){return company;}
    public String getJobTitle(){return jobTitle;}
    public ApplicationStatus getStatus(){return status;}
    public LocalDate getDateApplied(){return dateApplied;}
    public String getNotes(){return notes;}
    public Long getId(){return id;}
    public User getUser() {
        return user;
    }

    //setters
    public void setCompany(String company){this.company = company;}
    public void setjobTitle(String jobTitle){this.jobTitle = jobTitle;}
    public void setStatus(ApplicationStatus status){this.status = status;}
    public void setDateApplied(LocalDate dateApplied){this.dateApplied = dateApplied;}
    public void setNotes(String notes){this.notes = notes;}
    public void setId(Long id){this.id = id;}
    public void setUser(User user) {
        this.user = user;
    }
}
