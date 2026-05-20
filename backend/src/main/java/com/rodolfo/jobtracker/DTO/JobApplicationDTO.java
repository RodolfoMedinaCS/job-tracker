package com.rodolfo.jobtracker.DTO;

import com.rodolfo.jobtracker.Entity.ApplicationStatus;

import java.time.LocalDate;

public class JobApplicationDTO {

    private String company;
    private String jobTitle;
    private ApplicationStatus status;
    private LocalDate dateApplied;
    private String notes;
    private Long id;

    public JobApplicationDTO(String company, String jobTitle, ApplicationStatus status,
                             LocalDate dateApplied, String notes, Long id){
        this.company = company;
        this.jobTitle = jobTitle;
        this.status = status;
        this.dateApplied = dateApplied;
        this.notes = notes;
        this.id = id;
    }

    //getters
    public String getCompany(){return company;}
    public String getJobTitle(){return jobTitle;}
    public ApplicationStatus getStatus(){return status;}
    public LocalDate getDateApplied(){return dateApplied;}
    public String getNotes(){return notes;}

    public Long getId() {
        return id;
    }

    //setters
    public void setCompany(String company){this.company = company;}
    public void setjobTitle(String jobTitle){this.jobTitle = jobTitle;}
    public void setStatus(ApplicationStatus status){this.status = status;}
    public void setDateApplied(LocalDate dateApplied){this.dateApplied = dateApplied;}
    public void setNotes(String notes){this.notes = notes;}

    public void setId(Long id) {
        this.id = id;
    }
}
