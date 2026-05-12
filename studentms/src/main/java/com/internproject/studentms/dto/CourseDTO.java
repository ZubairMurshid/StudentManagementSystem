package com.internproject.studentms.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDTO {

    private Long id;

    @NotBlank(message = "Course name is required")
    private String courseName;

    @NotBlank(message = "Course code is required")
    private String courseCode;

    @NotNull(message = "Credits cannot be null")
    @Min(value = 1, message = "Credits must be at least 1")
    private Integer credits;
}