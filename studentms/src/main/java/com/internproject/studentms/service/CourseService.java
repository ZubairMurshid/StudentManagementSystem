package com.internproject.studentms.service;

import com.internproject.studentms.dto.CourseDTO;
import com.internproject.studentms.entity.Course;
import com.internproject.studentms.exception.ResourceNotFoundException;
import com.internproject.studentms.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public CourseDTO save(CourseDTO courseDTO) {
        Course course = mapToEntity(courseDTO);
        Course savedCourse = courseRepository.save(course);
        return mapToDTO(savedCourse);
    }

    public List<CourseDTO> getAll() {
        return courseRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public CourseDTO getById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));
        return mapToDTO(course);
    }

    public CourseDTO update(Long id, CourseDTO updatedDTO) {
        Course existingCourse = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));

        existingCourse.setCourseName(updatedDTO.getCourseName());
        existingCourse.setCourseCode(updatedDTO.getCourseCode());
        existingCourse.setCredits(updatedDTO.getCredits());

        Course updatedCourse = courseRepository.save(existingCourse);
        return mapToDTO(updatedCourse);
    }

    public void delete(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));
        courseRepository.delete(course);
    }

    private Course mapToEntity(CourseDTO dto) {
        Course course = new Course();
        course.setCourseName(dto.getCourseName());
        course.setCourseCode(dto.getCourseCode());
        course.setCredits(dto.getCredits());
        return course;
    }

    private CourseDTO mapToDTO(Course course) {
        CourseDTO dto = new CourseDTO();
        dto.setId(course.getId());
        dto.setCourseName(course.getCourseName());
        dto.setCourseCode(course.getCourseCode());
        dto.setCredits(course.getCredits());
        return dto;
    }
}