package com.controller;

import com.model.Job;
import com.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    // Save new job listing
    @PostMapping("/add")
    public Job addJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    // Fetch all job listings
    @GetMapping("/all")
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }
}

