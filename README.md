Student Management System
=========================

Overview
--------

The Student Management System is a full-stack web application built using Java Spring Boot, PostgreSQL, and React.\
The system is designed to manage student-related information in a relational database while practicing backend development concepts such as REST APIs, CRUD operations, JPA relationships, and PostgreSQL integration.

This project was developed to strengthen skills in:

-   Java Spring Boot

-   PostgreSQL

-   RESTful API development

-   JPA/Hibernate

-   React frontend integration

-   Database relationships and normalization

* * * * *

Features
========

Student Management
------------------

-   Add new students

-   View all students

-   Update student details

-   Delete students

Department Management
---------------------

-   Create and manage departments

-   Assign students to departments

Course Management
-----------------

-   Create and manage courses

-   Store course details such as course code and credits

Enrollment Management
---------------------

-   Enroll students into courses

-   Store semester and grade information

-   Manage many-to-many relationships between students and courses

* * * * *

Technologies Used
=================

Backend
-------

-   Java

-   Spring Boot

-   Spring Data JPA

-   Hibernate

-   Maven

Database
--------

-   PostgreSQL

-   DBeaver

Frontend
--------

-   React

-   Axios

-   React Router

Testing Tools
-------------

-   Postman

* * * * *

Database Structure
==================

The project contains the following main tables:

1\. Students
------------

Stores student information.

### Fields

-   id

-   first_name

-   last_name

-   email

-   dob

-   gender

-   phone

-   address

-   department_id

* * * * *

2\. Departments
---------------

Stores department details.

### Fields

-   id

-   department_name

-   hod_name

* * * * *

3\. Courses
-----------

Stores available courses/modules.

### Fields

-   id

-   course_name

-   course_code

-   credits

* * * * *

4\. Enrollments
---------------

Bridge table connecting students and courses.

### Fields

-   id

-   student_id

-   course_id

-   semester

-   grade

* * * * *

Entity Relationships
====================

Department → Students
---------------------

One-to-Many relationship

One department can have multiple students.

* * * * *

Student → Enrollments
---------------------

One-to-Many relationship

One student can have multiple enrollments.

* * * * *

Course → Enrollments
--------------------

One-to-Many relationship

One course can have multiple enrollments.

* * * * *

Student ↔ Course
----------------

Many-to-Many relationship implemented using the Enrollments bridge table.

* * * * *

REST API Endpoints
==================

Students
--------

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/students | Get all students |
| GET | /api/students/{id} | Get student by ID |
| POST | /api/students | Create student |
| PUT | /api/students/{id} | Update student |
| DELETE | /api/students/{id} | Delete student |

* * * * *

Departments
-----------

| Method | Endpoint |
| --- | --- |
| GET | /api/departments |
| POST | /api/departments |
| PUT | /api/departments/{id} |
| DELETE | /api/departments/{id} |

* * * * *

Courses
-------

| Method | Endpoint |
| --- | --- |
| GET | /api/courses |
| POST | /api/courses |
| PUT | /api/courses/{id} |
| DELETE | /api/courses/{id} |

* * * * *

Enrollments
-----------

| Method | Endpoint |
| --- | --- |
| GET | /api/enrollments |
| POST | /api/enrollments |
| PUT | /api/enrollments/{id} |
| DELETE | /api/enrollments/{id} |

* * * * *

Project Structure
=================

```
src/main/java/com/example/studentmanagement

├── controller
├── service
├── repository
├── entity
├── dto
├── exception
└── config

```

* * * * *

How to Run the Project
======================

1\. Clone the Repository
------------------------

```
git clone <repository-url>

```

* * * * *

2\. Create PostgreSQL Database
------------------------------

```
CREATE DATABASE student_management;

```

* * * * *

3\. Configure application.properties
------------------------------------

```
spring.datasource.url=jdbc:postgresql://localhost:5432/student_management
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

```

* * * * *

4\. Run the Spring Boot Application
-----------------------------------

Run:

```
StudentManagementApplication.java

```

Server will start on:

```
http://localhost:8080

```

* * * * *

Sample JSON Request
===================

Create Student
--------------

```
{
  "firstName": "Zubair",
  "lastName": "Murshid",
  "email": "zubair@gmail.com",
  "gender": "Male",
  "phone": "0771234567",
  "address": "Colombo",
  "department": {
    "id": 1
  }
}

```

* * * * *

Future Improvements
===================

-   DTO implementation

-   Input validation

-   Global exception handling

-   Pagination and search

-   JWT authentication

-   Role-based access control

-   React frontend integration

-   Dashboard analytics

* * * * *

Learning Outcomes
=================

Through this project, the following concepts were practiced:

-   CRUD operations

-   REST API development

-   PostgreSQL relationships

-   JPA/Hibernate mappings

-   Foreign keys and joins

-   Spring Boot layered architecture

-   Backend-to-database integration

-   API testing using Postman

* * * * *

Author
======

Developed by Zubair Murshid using Java Spring Boot, PostgreSQL, and React.
