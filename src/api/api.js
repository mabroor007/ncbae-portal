const { ipcMain } = require("electron");
const events = require("events");
const sql = require("../dbConfig.js");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("conn", async () => {
  try {
    const result = await sql`SELECT student_name FROM students;`;
    if (result) {
      eventEmitter.emit("dbConnected");
    }
  } catch (error) {
    console.log(error);
    eventEmitter.emit("conn");
  }
});

eventEmitter.emit("conn");

ipcMain.handle("login", async (e, { admin, password }) => {
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

module.exports = eventEmitter;
