const { ipcMain } = require("electron");
const events = require("events");
const sql = require("../dbConfig.js");
const eventEmitter = new events.EventEmitter();
const { studentQuery } = require("./generator");

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
      return { conn: false };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: "Error",
      code: "--" + error.message,
    });
    return { conn: false };
  }
});

// Admin Login
ipcMain.handle("login", async (e, { admin, password }) => {
  return { valid: true };
  if (admin === "mabroordev" && password === "mabroordev") {
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

// Searching
ipcMain.handle("search", async (e, { text, pType, opt }) => {
  if (pType === "StudentsHome") {
    return getStudentsSearch(text, opt);
  }
  if (pType === "TeachersHome") {
    return { done: true, results: "Teachers" };
  }
  if (pType === "CoursesHome") {
    return { done: true, results: "Courses" };
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
    console.log(error);
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

module.exports = eventEmitter;
