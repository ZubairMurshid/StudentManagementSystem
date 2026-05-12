package com.internproject.studentms.service;

import com.internproject.studentms.entity.Course;
import com.internproject.studentms.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository repo;

    public CourseService(CourseRepository repo) {
        this.repo = repo;
    }

    public Course save(Course course) {
        return repo.save(course);
    }

    public List<Course> getAll() {
        return repo.findAll();
    }

    public Optional<Course> getById(Long id) {
        return repo.findById(id);
    }

    public Course update(Long id, Course updated) {

        Course c = repo.findById(id).orElseThrow();

        c.setCourseName(updated.getCourseName());
        c.setCourseCode(updated.getCourseCode());
        c.setCredits(updated.getCredits());

        return repo.save(c);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}