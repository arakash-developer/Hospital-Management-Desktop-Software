const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Hospital Management Desktop Software",
    // icon: __dirname + '/assets/icon.png',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  });

  // Create the start URL
  const startUrl = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true,
  });

  // Load the HTML file using the start URL
  mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
  createMainWindow();
});
