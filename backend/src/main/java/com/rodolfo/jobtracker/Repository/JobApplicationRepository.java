package com.rodolfo.jobtracker.Repository;

import com.rodolfo.jobtracker.DTO.JobApplicationDTO;
import com.rodolfo.jobtracker.Entity.ApplicationStatus;
import com.rodolfo.jobtracker.Entity.JobApplication;
import com.rodolfo.jobtracker.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    int countByStatus(ApplicationStatus status, User user);
    List<JobApplication> findByUser(User user);
    Optional<JobApplication> findByIdAndUser(Long id, User user);

    void deleteByIdAndUser(Long id, User user);

}
