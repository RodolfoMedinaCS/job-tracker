package com.rodolfo.jobtracker.Controller;


import com.rodolfo.jobtracker.DTO.JobApplicationDTO;
import com.rodolfo.jobtracker.DTO.Stats;
import com.rodolfo.jobtracker.Entity.JobApplication;
import com.rodolfo.jobtracker.Service.JobApplicationService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    //save application
    @PostMapping("/api/v1/applications")
    public JobApplicationDTO saveApplication(@RequestBody JobApplication jobApplication){
        return jobApplicationService.saveApplication(jobApplication);
    }

    //get all applications
    @GetMapping("/api/v1/applications")
    public List<JobApplicationDTO> getAllApplications(){
        return jobApplicationService.getAllApplications();
    }

    //get single application
    @GetMapping("/api/v1/applications/{id}")
    public JobApplicationDTO getApplication(@PathVariable Long id){
        return jobApplicationService.getApplication(id);
    }

    //delete application
    @Transactional
    @DeleteMapping("/api/v1/applications/{id}")
    public void deleteApplication(@PathVariable Long id){
        jobApplicationService.deleteJobApplication(id);
    }

    //update application
    @PatchMapping("/api/v1/applications/{id}")
    public void updateApplication(@PathVariable Long id , @RequestBody JobApplication jobApplication){
        jobApplicationService.updateApplication(id, jobApplication);
    }

    //get user stats
    @GetMapping("p")
    public Stats getStats(){
        return jobApplicationService.getStats();
    }

}
