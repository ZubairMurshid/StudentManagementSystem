package com.internproject.studentms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "courses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseName;

    @Column(unique = true)
    private String courseCode;

    private Integer credits;

    @OneToMany(mappedBy = "course")
    private List<Enrollment> enrollments;
}