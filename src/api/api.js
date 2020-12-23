const { ipcMain } = require("electron");
const events = require("events");
const sql = require("../dbConfig.js");
const eventEmitter = new events.EventEmitter();
const { studentQuery, courseQuery, teacherQuery } = require("./generator");

// Check if database is connected
ipcMain.handle("checkConn", async () => {
  try {
    const result = await sql`SELECT student_name FROM students;`;
    if (result[0]) {
      eventEmitter.emit("mainmsg", {
        title: "Database Connected",
        code: `--Connected`,
      });
      return { conn: true };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Database Connection Failed",
        code: `--Connection Failed Check Internet Or Restart Application`,
      });
      return { conn: true };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { conn: true };
  }
});

// Admin Login
ipcMain.handle("login", async (e, { admin, password }) => {
  // return { valid: true };
  if (
    (admin === "mabroordev" && password === "mabroor007") ||
    (admin === "usamadev" && password === "usama314")
  ) {
    eventEmitter.emit("mainmsg", { title: "Loged in", code: `--${admin}` });
    return { valid: true };
  } else {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: `--Invalid Credentials`,
    });
    return { valid: false };
  }
});

// Students Dash Count
ipcMain.handle("getStudentsDashCount", async () => {
  try {
    const totalCountQuery = "SELECT COUNT(*) FROM students;";
    const regularCountQuery =
      "SELECT COUNT(*) FROM students WHERE course_type = 'Regular';";
    const weekendCountQuery =
      "SELECT COUNT(*) FROM students WHERE course_type = 'Weekend';";
    const tResult = await sql`SELECT COUNT(*) FROM students;`;
    const rResult = await sql`SELECT COUNT(*) FROM students WHERE course_type = 'Regular';`;
    const wResult = await sql`SELECT COUNT(*) FROM students WHERE course_type = 'Weekend';`;
    if (tResult && rResult && wResult) {
      eventEmitter.emit("mainmsg", {
        title: "Students Dash Count",
        code: `${totalCountQuery}
${regularCountQuery}
${weekendCountQuery}`,
      });
      return { tResult, rResult, wResult };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { error: error.message };
  }
});

// Helper For Validating
const checkCourse = async (student) => {
  try {
    const crs = await sql`SELECT * FROM courses WHERE course_code = ${student.course_code} AND start_yr = ${student.start_yr} AND end_yr = ${student.end_yr};`;
    if (crs[0]) {
      eventEmitter.emit("mainmsg", {
        title: "Check for Start and Ending Year",
        code: `SELECT * FROM courses WHERE course_code = ${student.course_code} AND start_yr = ${student.start_yr} AND end_yr = ${student.end_yr};`,
      });
      return { valid: true };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--Course Not Found",
      });
      return {
        valid: false,
        err: "--Invalid Course Starting | Ending year",
      };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { valid: false, err: error.message };
  }
};

// Add Student
ipcMain.handle("addStudent", async (e, student) => {
  const query = studentQuery(student);
  try {
    const check = await checkCourse(student);
    let result;
    if (check.valid) {
      result = await sql`INSERT INTO students ${sql(student)}`;
      if (result) {
        eventEmitter.emit("mainmsg", {
          title: "Added Student",
          code: query,
        });
        return { success: true };
      }
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--" + check.err,
      });
      return { success: false };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    console.log(error);
    return { success: false };
  }
});

// Student Search
const getStudentsSearch = async (text, opt) => {
  try {
    if (opt === "Name") {
      const results = await sql`SELECT * FROM students WHERE student_name ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM students WHERE student_name ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    if (opt === "CourseCode") {
      const results = await sql`SELECT * FROM students WHERE course_code ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM students WHERE course_code ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    if (opt === "Rollno") {
      const results = await sql`SELECT * FROM students WHERE roll_no ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM students WHERE roll_no ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    return "Invalid";
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { done: true, results: "Students : Failed", err: error.message };
  }
};

// Courses Search
const getCourseSearch = async (text, opt) => {
  try {
    if (opt === "Name") {
      const results = await sql`SELECT * FROM courses WHERE course_name ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM courses WHERE course_name ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    if (opt === "CourseCode") {
      const results = await sql`SELECT * FROM courses WHERE course_code ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM courses WHERE course_code ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    return "Invalid";
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { done: true, results: "Students : Failed", err: error.message };
  }
};

// Teacher Search
const getTeacherSearch = async (text, opt) => {
  try {
    if (opt === "Name") {
      const results = await sql`SELECT * FROM teachers WHERE teacher_name ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM teachers WHERE teacher_name ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    if (opt === "CourseCode") {
      const results = await sql`SELECT * FROM teachers WHERE course_code ILIKE ${"%" +
        text +
        "%"};`;
      if (results) {
        eventEmitter.emit("mainmsg", {
          title: "Search",
          code: `SELECT * FROM teacher WHERE course_code ILIKE ${"%" +
            text +
            "%"};`,
        });
        return { done: true, results };
      }
    }
    return "Invalid";
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { done: true, err: error.message };
  }
};

// Searching
ipcMain.handle("search", (e, { text, pType, opt }) => {
  if (pType === "StudentsHome") {
    return getStudentsSearch(text, opt);
  }
  if (pType === "TeachersHome") {
    return getTeacherSearch(text, opt);
  }
  if (pType === "CoursesHome") {
    return getCourseSearch(text, opt);
  } else {
    return { done: true, results: null };
  }
});

// Sudent Details
ipcMain.handle("getStudentDetails", async (e, id) => {
  try {
    const res = await sql`SELECT * FROM students WHERE id = ${id};`;
    if (res[0]) {
      eventEmitter.emit("mainmsg", {
        title: "Query",
        code: `SELECT * FROM students WHERE id = ${id};`,
      });
      return { done: true, student: res[0] };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--NOT FOUND",
      });
      return { done: true, student: null };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { done: false, err: error.message };
  }
});

// Update Student Details
ipcMain.handle("updateStudentDetails", async (e, student) => {
  try {
    const check = await checkCourse(student);
    let result;
    if (check.valid) {
      result = await sql`UPDATE students SET ${sql(student)} WHERE id = ${
        student.id
      };`;
      if (result) {
        eventEmitter.emit("mainmsg", {
          title: "Student Updated",
          code: studentQuery(student, true),
        });
        return { success: true };
      } else {
        eventEmitter.emit("mainmsg", {
          title: "Error",
          code: "--Failed To Update",
        });
      }
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--" + check.err,
      });
      return { success: false };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { success: false };
  }
});

// Delete
ipcMain.handle("delete", async (e, { pType, id }) => {
  try {
    let res;
    if (pType === "StudentDetail") {
      res = await sql`DELETE FROM students WHERE id = ${id};`;
      if (res) {
        eventEmitter.emit("mainmsg", {
          title: "Deleted Student",
          code: `DELETE FROM students WHERE id = ${id};`,
        });
        return { del: true };
      }
    }
    if (pType === "TeacherDetail") {
      res = await sql`DELETE FROM teachers WHERE id = ${id};`;
      if (res) {
        eventEmitter.emit("mainmsg", {
          title: "Deleted Teacher",
          code: `DELETE FROM teachers WHERE id = ${id};`,
        });
        return { del: true };
      }
    }
    if (pType === "CourseDetail") {
      res = await sql`DELETE FROM courses WHERE id = ${id};`;
      if (res) {
        eventEmitter.emit("mainmsg", {
          title: "Deleted Course",
          code: `DELETE FROM courses WHERE id = ${id};`,
        });
        return { del: true };
      }
    }
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--Failed to delete",
    });
    return { del: false };
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { del: false };
  }
});

// Courses Dash Count
ipcMain.handle("getCoursesDashCount", async () => {
  try {
    const totalCountQuery = "SELECT COUNT(*) FROM courses;";
    const regularCountQuery =
      "SELECT COUNT(*) FROM courses WHERE course_type = 'Regular';";
    const weekendCountQuery =
      "SELECT COUNT(*) FROM courses WHERE course_type = 'Weekend';";
    const tResult = await sql`SELECT COUNT(*) FROM courses;`;
    const rResult = await sql`SELECT COUNT(*) FROM courses WHERE course_type = 'Regular';`;
    const wResult = await sql`SELECT COUNT(*) FROM courses WHERE course_type = 'Weekend';`;
    if (tResult && rResult && wResult) {
      eventEmitter.emit("mainmsg", {
        title: "Courses Dash Count",
        code: `${totalCountQuery}
${regularCountQuery}
${weekendCountQuery}`,
      });
      return { tResult, rResult, wResult };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { error: error.message };
  }
});

// Add Courses
ipcMain.handle("addCourse", async (e, course) => {
  try {
    const result = await sql`INSERT INTO courses ${sql(course)};`;
    if (result) {
      eventEmitter.emit("mainmsg", {
        title: "Added Course",
        code: courseQuery(course),
      });
      return { success: true };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--Failed To Add Course",
      });
      return { success: false };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    console.log(error);
  }
});

// Course Details
ipcMain.handle("getCourseDetails", async (e, id) => {
  try {
    const res = await sql`SELECT * FROM courses WHERE id = ${id};`;
    if (res[0]) {
      eventEmitter.emit("mainmsg", {
        title: "Query",
        code: `SELECT * FROM courses WHERE id = ${id};`,
      });
      return { done: true, course: res[0] };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--NOT FOUND",
      });
      return { done: true, course: null };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { done: false, err: error.message };
  }
});

// Update Course Details
ipcMain.handle("updateCourseDetails", async (e, course) => {
  try {
    const result = await sql`UPDATE courses SET ${sql(course)} WHERE id = ${
      course.id
    };`;
    if (result) {
      eventEmitter.emit("mainmsg", {
        title: "Course Updated",
        code: courseQuery(course, true),
      });
      return { success: true };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--Failed To Update",
      });
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { success: false };
  }
});

// Teacher Dash Count
ipcMain.handle("getTeachersDashCount", async () => {
  try {
    const totalCountQuery = "SELECT COUNT(*) FROM teachers;";
    const permanentCountQuery =
      "SELECT COUNT(*) FROM teachers WHERE teacher_type = 'Permanent';";
    const visitingCountQuery =
      "SELECT COUNT(*) FROM teachers WHERE teacher_type = 'Visiting';";
    const tResult = await sql`SELECT COUNT(*) FROM teachers;`;
    const pResult = await sql`SELECT COUNT(*) FROM teachers WHERE teacher_type = 'Permanent'`;
    const vResult = await sql`SELECT COUNT(*) FROM teachers WHERE teacher_type = 'Visiting';`;
    if (tResult && pResult && vResult) {
      eventEmitter.emit("mainmsg", {
        title: "Teachers Dash Count",
        code: `${totalCountQuery}
${permanentCountQuery}
${visitingCountQuery}`,
      });
      return { tResult, pResult, vResult };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { error: error.message };
  }
});

// Add Teacher
ipcMain.handle("addTeacher", async (e, teacher) => {
  try {
    result = await sql`INSERT INTO teachers ${sql(teacher)}`;
    if (result) {
      eventEmitter.emit("mainmsg", {
        title: "Added Teacher",
        code: teacherQuery(teacher),
      });
      return { success: true };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--" + check.err,
      });
      return { success: false };
    }
  } catch (error) {
    if (error.message.includes("teachers_course_code")) {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--Required Valid course_code [ " + error.message + " ]",
      });
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--" + error.message,
      });
    }
    return { success: false };
  }
});

// Teacher  Details
ipcMain.handle("getTeacherDetails", async (e, id) => {
  try {
    const res = await sql`SELECT * FROM teachers WHERE id = ${id};`;
    if (res[0]) {
      eventEmitter.emit("mainmsg", {
        title: "Query",
        code: `SELECT * FROM teachers WHERE id = ${id};`,
      });
      return { done: true, teacher: res[0] };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--NOT FOUND",
      });
      return { done: true, teacher: null };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { done: false, err: error.message };
  }
});

// Update Teacher Details
ipcMain.handle("updateTeacherDetails", async (e, teacher) => {
  try {
    const result = await sql`UPDATE teachers SET ${sql(teacher)} WHERE id = ${
      teacher.id
    };`;
    if (result) {
      eventEmitter.emit("mainmsg", {
        title: "Teacher Updated",
        code: teacherQuery(teacher, true),
      });
      return { success: true };
    } else {
      eventEmitter.emit("mainmsg", {
        title: "Error",
        code: "--Failed To Update",
      });
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { success: false };
  }
});
module.exports = eventEmitter;
