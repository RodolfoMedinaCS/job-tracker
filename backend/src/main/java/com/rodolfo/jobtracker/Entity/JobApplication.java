package com.rodolfo.jobtracker.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "job_applications")
public class JobApplication {

    @Id
    @GeneratedValue
    private Long id;

    //company
    private String company;
    private String companyWebsite;
    private String location;
    @Enumerated(EnumType.STRING)
    private WorkType workType; // eventually enum

    //position
    private String jobTitle;
    @Enumerated(EnumType.STRING)
    private JobType jobType; //eventually enum
    private String jobUrl;

    //application details
    private LocalDate dateApplied;
    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;
    private Integer salaryMin;
    private Integer salaryMax;

    //recruiter contact
    private String recruiterName;
    private String recruiterEmail;

    //notes
    private String notes;

    //application color
    private String color;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public JobApplication(){}
    public JobApplication(String company, String companyWebsite, String location, WorkType workType, String jobTitle,
                          JobType jobType, String jobUrl, LocalDate dateApplied, ApplicationStatus status, int salaryMin,
                          int salaryMax, String recruiterName, String recruiterEmail, String notes, String color) {
        this.company = company; //
        this.companyWebsite = companyWebsite; //
        this.location = location;//
        this.workType = workType; //***
        this.jobTitle = jobTitle; //
        this.jobType = jobType; // ***
        this.jobUrl = jobUrl; //
        this.dateApplied = dateApplied; //
        this.status = status; // ***
        this.salaryMin = salaryMin; //
        this.salaryMax = salaryMax; //
        this.recruiterName = recruiterName;//
        this.recruiterEmail = recruiterEmail;//
        this.notes = notes; //
        this.color = color;
    }

    //getters
    public String getCompany(){return company;}
    public String getJobTitle(){return jobTitle;}
    public ApplicationStatus getStatus(){return status;}
    public LocalDate getDateApplied(){return dateApplied;}
    public String getNotes(){return notes;}
    public String getCompanyWebsite(){return companyWebsite;}
    public String getLocation(){return location;}
    public String getJobUrl(){return jobUrl;}
    public Integer getSalaryMin(){return salaryMin;}
    public Integer getSalaryMax(){return salaryMax;}
    public String getRecruiterName(){return recruiterName;}
    public String getRecruiterEmail(){return recruiterEmail;}
    public WorkType getWorkType(){return workType;}
    public JobType getJobType(){return jobType;}
    public String getColor(){return color;}

    public Long getId(){return id;}
    public User getUser() {return user;}

    //setters
    public void setCompany(String company){this.company = company;}
    public void setjobTitle(String jobTitle){this.jobTitle = jobTitle;}
    public void setStatus(ApplicationStatus status){this.status = status;}
    public void setDateApplied(LocalDate dateApplied){this.dateApplied = dateApplied;}
    public void setNotes(String notes){this.notes = notes;}
    public void setCompanyWebsite(String companyWebsite){this.companyWebsite = companyWebsite;}
    public void setLocation(String location){this.location = location;}
    public void setJobUrl(String jobUrl){this.jobUrl = jobUrl;}
    public void setSalaryMin(Integer salaryMin){this.salaryMin = salaryMin;}
    public void setSalaryMax(Integer salaryMax){this.salaryMax = salaryMax;}
    public void setRecruiterName(String recruiterName){this.recruiterName = recruiterName;}
    public void setRecruiterEmail(String recruiterEmail) {this.recruiterEmail = recruiterEmail;}
    public void setWorkType(WorkType workType){this.workType = workType;}
    public void setJobType(JobType jobType){this.jobType = jobType;}
    public void setColor(String color) {this.color = color;}

    public void setId(Long id){this.id = id;}
    public void setUser(User user) {this.user = user;}
}
