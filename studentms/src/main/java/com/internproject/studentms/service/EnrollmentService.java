package com.internproject.studentms.service;

import com.internproject.studentms.entity.Enrollment;
import com.internproject.studentms.repository.EnrollmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollmentService {

    private final EnrollmentRepository repo;

    public EnrollmentService(EnrollmentRepository repo) {
        this.repo = repo;
    }

    public Enrollment save(Enrollment enrollment) {
        return repo.save(enrollment);
    }

    public List<Enrollment> getAll() {
        return repo.findAll();
    }

    public Optional<Enrollment> getById(Long id) {
        return repo.findById(id);
    }

    public Enrollment update(Long id, Enrollment updated) {

        Enrollment e = repo.findById(id).orElseThrow();

        e.setSemester(updated.getSemester());
        e.setGrade(updated.getGrade());
        e.setStudent(updated.getStudent());
        e.setCourse(updated.getCourse());

        return repo.save(e);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}