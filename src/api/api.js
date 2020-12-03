const { ipcMain } = require('electron');
const sql = require('../dbConfig.js');

ipcMain.handle('msg', async (event, msg) => {
  console.log("Msg From Renderer :",msg);
  return "OK";
});

ipcMain.handle('getUsers', async (event, msg) => {
  const result = await sql`SELECT * FROM person;`;
  return result;
});
