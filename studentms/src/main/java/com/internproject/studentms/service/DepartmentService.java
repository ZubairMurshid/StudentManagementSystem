package com.internproject.studentms.service;

import com.internproject.studentms.entity.Department;
import com.internproject.studentms.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    private final DepartmentRepository repo;

    public DepartmentService(DepartmentRepository repo) {
        this.repo = repo;
    }

    public Department save(Department department) {
        return repo.save(department);
    }

    public List<Department> getAll() {
        return repo.findAll();
    }

    public Optional<Department> getById(Long id) {
        return repo.findById(id);
    }

    public Department update(Long id, Department updated) {

        Department d = repo.findById(id).orElseThrow();

        d.setDepartmentName(updated.getDepartmentName());
        d.setHodName(updated.getHodName());

        return repo.save(d);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}