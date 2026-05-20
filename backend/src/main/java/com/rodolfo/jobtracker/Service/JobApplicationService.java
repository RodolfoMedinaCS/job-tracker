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
        return jobApplicationRepository.findByUser(user);
    }


    //save job application
    public JobApplicationDTO saveApplication(JobApplication application){
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        application.setUser(user);
            jobApplicationRepository.save(application);
        return new JobApplicationDTO(application.getCompany(), application.getJobTitle(),
                application.getStatus(), application.getDateApplied(), application.getNotes(),application.getId());
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
        return jobApplicationStats;
    }

    public JobApplicationDTO getApplication(Long id) {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email).orElseThrow();
        JobApplication application = jobApplicationRepository.findByIdAndUser(id,user).orElseThrow();
        return new JobApplicationDTO(application.getCompany(), application.getJobTitle(),
                application.getStatus(), application.getDateApplied(), application.getNotes(),application.getId());
    }
}
