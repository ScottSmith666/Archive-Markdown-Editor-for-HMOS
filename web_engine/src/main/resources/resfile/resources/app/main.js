const { app, BrowserWindow, Tray, nativeImage, Menu } = require('electron');
const path = require('path');

// app.disableHardwareAcceleration();
// app.commandLine.appendSwitch('disable-gpu');

let mainWindow, tray;

function createWindow() {
    tray = new Tray(nativeImage.createFromPath(path.join(__dirname, 'electron_white.png')));
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
    });
    mainWindow.setWindowButtonVisibility(true);
    mainWindow.loadFile('index.html');
}
app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    createWindow();
});
