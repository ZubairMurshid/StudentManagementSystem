package com.internproject.studentms.service;



import com.internproject.studentms.entity.Student;
import com.internproject.studentms.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public Student save(Student student) {
        return repo.save(student);
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Optional<Student> getById(Long id) {
        return repo.findById(id);
    }

    public Student update(Long id, Student updated) {
        Student s = repo.findById(id).orElseThrow();

        s.setFirstName(updated.getFirstName());
        s.setLastName(updated.getLastName());
        s.setEmail(updated.getEmail());
        s.setDob(updated.getDob());
        s.setGender(updated.getGender());
        s.setPhone(updated.getPhone());
        s.setAddress(updated.getAddress());

        return repo.save(s);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}