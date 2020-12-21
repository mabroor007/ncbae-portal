export const defQueries = [
  {
    title: "Created A Table students",
    code: `CREATE TABLE students(
    id uuid DEFAULT uuid_generate_v4 (),
    roll_no VARCHAR(20) UNIQUE NOT NULL,
    student_name VARCHAR(50) NOT NULL,
    father_name VARCHAR(50) NOT NULL,
    gender VARCHAR(8) NOT NULL CHECK(gender = 'Male' OR gender = 'Female' OR gender = 'Other'),
    course_type VARCHAR(7) NOT NULL CHECK(course_type = 'Regular' OR course_type = 'Weekend'),
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(35) UNIQUE NOT NULL,
    student_address VARCHAR(100) NOT NULL,
    course_name VARCHAR(30) NOT NULL,
    start_yr INTEGER NOT NULL,
    end_yr INTEGER NOT NULL,
    course_code VARCHAR(25) REFERENCES courses(course_code) NOT NULL,
    profile_pic TEXT NOT NULL
);`,
  },
  {
    title: "Created A Table teachers",
    code: `CREATE TABLE teachers(
    id uuid DEFAULT uuid_generate_v4 (),
    teacher_name VARCHAR(35) NOT NULL,
    gender VARCHAR(8) NOT NULL CHECK(gender = 'Male' OR gender = 'Female' OR gender = 'Other'),
    qualification VARCHAR(100) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(35) UNIQUE NOT NULL,
    course_name VARCHAR(40) NOT NULL,
    course_code VARCHAR(25) REFERENCES courses(course_code) NOT NULL,
    subject_name VARCHAR(40) NOT NULL,
    profile_pic TEXT NOT NULL

);`,
  },
  {
    title: "Created A Table courses",
    code: `CREATE TABLE courses(
    id uuid DEFAULT uuid_generate_v4 (),
    course_name VARCHAR(30) NOT NULL,
    course_code VARCHAR(25) UNIQUE NOT NULL,
    course_type VARCHAR(7) NOT NULL CHECK(course_type = 'Regular' OR course_type = 'Weekend'),
    fee VARCHAR(50) NOT NULL,
    genre VARCHAR(25) NOT NULL,
    start_yr INTEGER NOT NULL,
    end_yr INTEGER NOT NULL
);`,
  },
  {
    title: "Setup Created Database",
    code: `CREATE DATABASE ncbae;`,
  },
];
