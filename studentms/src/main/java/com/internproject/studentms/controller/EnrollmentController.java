package com.internproject.studentms.controller;

import com.internproject.studentms.entity.Enrollment;
import com.internproject.studentms.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
@CrossOrigin(origins = "*")
public class EnrollmentController {

    private final EnrollmentService service;

    public EnrollmentController(EnrollmentService service) {
        this.service = service;
    }

    @PostMapping
    public Enrollment create(@RequestBody Enrollment enrollment) {
        return service.save(enrollment);
    }

    @GetMapping
    public List<Enrollment> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Enrollment getById(@PathVariable Long id) {
        return service.getById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Enrollment update(@PathVariable Long id,
                             @RequestBody Enrollment enrollment) {
        return service.update(id, enrollment);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Enrollment deleted";
    }
}