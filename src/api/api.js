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
      return { conn: true };
    } else {
      return { conn: false };
    }
  } catch (error) {
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
    console.log(error);
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
      return {
        valid: false,
        err: "Invalid Starting | Ending year for course",
      };
    }
  } catch (error) {
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
        title: check.err,
        code: query,
      });
      return { success: false };
    }
  } catch (error) {
    eventEmitter.emit("mainmsg", {
      title: error.message,
      code: query,
    });
    console.log(error);
    return { success: false };
  }
});

module.exports = eventEmitter;
