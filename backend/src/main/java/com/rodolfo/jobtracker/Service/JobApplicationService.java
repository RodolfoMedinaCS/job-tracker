package com.rodolfo.jobtracker.Service;

import com.rodolfo.jobtracker.DTO.JobApplicationDTO;
import com.rodolfo.jobtracker.DTO.Stats;
import com.rodolfo.jobtracker.Entity.ApplicationStatus;
import com.rodolfo.jobtracker.Entity.JobApplication;
import com.rodolfo.jobtracker.Entity.User;
import com.rodolfo.jobtracker.Repository.JobApplicationRepository;
import com.rodolfo.jobtracker.Repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;
    private final UserRepository userRepository;

    public JobApplicationService(JobApplicationRepository jobApplicationRepository,
                                 UserRepository userRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.userRepository = userRepository;
    }

    //get all users applications
    public List<JobApplicationDTO> getAllApplications(){
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        return jobApplicationRepository.findByUser(user)
                .stream()
                .map(application -> new JobApplicationDTO(
                        application.getCompany(),
                        application.getCompanyWebsite(),
                        application.getLocation(),
                        application.getWorkType(),
                        application.getJobTitle(),
                        application.getJobType(),
                        application.getJobUrl(),
                        application.getDateApplied(),
                        application.getStatus(),
                        application.getSalaryMin(),
                        application.getSalaryMax(),
                        application.getRecruiterName(),
                        application.getRecruiterEmail(),
                        application.getNotes(),
                        application.getId()))
                .toList();
    }


    //save job application
    public JobApplicationDTO saveApplication(JobApplication application){
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        application.setUser(user);
        jobApplicationRepository.save(application);
        return new JobApplicationDTO(application.getCompany(), application.getCompanyWebsite(),application.getLocation(),
                application.getWorkType(),application.getJobTitle(),application.getJobType(),application.getJobUrl(),
                application.getDateApplied(), application.getStatus(), application.getSalaryMin(),application.getSalaryMax(),
                application.getRecruiterName(), application.getRecruiterEmail(), application.getNotes(),application.getId());
    }

    //delete job application
    public void deleteJobApplication(Long id){
        String email = SecurityContextHolder.getContext()
                        .getAuthentication()
                                .getName();

        User user = userRepository.findByEmail(email).orElseThrow();
        jobApplicationRepository.deleteByIdAndUser(id, user);
    }

    public void updateApplication(Long id, JobApplication jobApplication) {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email).orElseThrow();
        JobApplication existing = jobApplicationRepository.findByIdAndUser(id,user).orElseThrow();

        if(jobApplication.getCompany() != null){
            existing.setCompany(jobApplication.getCompany());
        }
        if(jobApplication.getJobTitle() != null){
            existing.setjobTitle(jobApplication.getJobTitle());
        }
        if(jobApplication.getStatus() != null){
            existing.setStatus(jobApplication.getStatus());
        }
        if(jobApplication.getDateApplied() != null){
            existing.setDateApplied(jobApplication.getDateApplied());
        }
        if(jobApplication.getNotes() != null){
            existing.setNotes(jobApplication.getNotes());
        }
        if(jobApplication.getCompanyWebsite() != null){
            existing.setCompanyWebsite(jobApplication.getCompanyWebsite());
        }
        if(jobApplication.getLocation() != null){
            existing.setLocation(jobApplication.getLocation());
        }
        if(jobApplication.getWorkType() != null){
            existing.setWorkType(jobApplication.getWorkType());
        }
        if(jobApplication.getJobType() != null){
            existing.setJobType(jobApplication.getJobType());
        }
        if(jobApplication.getJobUrl() != null){
            existing.setJobUrl(jobApplication.getJobUrl());
        }
        if(jobApplication.getSalaryMin() != null){
            existing.setSalaryMin(jobApplication.getSalaryMin());
        }
        if(jobApplication.getSalaryMax() != null){
            existing.setSalaryMax(jobApplication.getSalaryMax());
        }
        if(jobApplication.getRecruiterName() != null){
            existing.setRecruiterName(jobApplication.getRecruiterName());
        }
        if(jobApplication.getRecruiterEmail() != null){
            existing.setRecruiterEmail(jobApplication.getRecruiterEmail());
        }

        jobApplicationRepository.save(existing);
    }

    public Stats getStats() {
        String email = SecurityContextHolder.getContext()
                        .getAuthentication()
                                .getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        Stats jobApplicationStats = new Stats();
        jobApplicationStats.setTotalSubmitted(jobApplicationRepository.countByStatus(ApplicationStatus.SUBMITTED, user));
        jobApplicationStats.setTotalRejected(jobApplicationRepository.countByStatus(ApplicationStatus.REJECTED, user));
        jobApplicationStats.setTotalHired(jobApplicationRepository.countByStatus(ApplicationStatus.HIRED, user));
        jobApplicationStats.setTotalUnderReview(jobApplicationRepository.countByStatus(ApplicationStatus.UNDER_REVIEW, user));
        jobApplicationStats.setTotalOfferExtended(jobApplicationRepository.countByStatus(ApplicationStatus.OFFER_EXTENDED, user));
        jobApplicationStats.setInterviewScheduled(jobApplicationRepository.countByStatus(ApplicationStatus.INTERVIEW_SCHEDULED, user));
        return jobApplicationStats;
    }

    public JobApplicationDTO getApplication(Long id) {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email).orElseThrow();
        JobApplication application = jobApplicationRepository.findByIdAndUser(id,user).orElseThrow();
        return new JobApplicationDTO(application.getCompany(), application.getCompanyWebsite(),application.getLocation(),
                application.getWorkType(),application.getJobTitle(),application.getJobType(),application.getJobUrl(),
                application.getDateApplied(), application.getStatus(), application.getSalaryMin(),application.getSalaryMax(),
                application.getRecruiterName(), application.getRecruiterEmail(), application.getNotes(),application.getId());
    }
}
