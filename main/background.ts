import { app, ipcMain, nativeTheme } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { createAboutWindow } from "./helpers/about-window";
import { mainMenu } from "./helpers/menu";
import { platform } from "process";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

console.log(`This platform is ${platform}`);

(async () => {
  const titleApp = "Transportes MJM";
  app.setName(titleApp);
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1200,
    minWidth: 600,
    height: 800,
    minHeight: 700,
    title: titleApp,
    center: true,
    maximizable: true,
    backgroundColor: "#F2F2F2",
    fullscreen: false,
    frame: true,
  });

  mainMenu(mainWindow);

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools();
  }

  ipcMain.handle("dark-mode:toggle", async () => {
    console.log("dark-mode:toggle");
    console.log(nativeTheme.shouldUseDarkColors);

    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle("dark-mode:system", async () => {
    return (nativeTheme.themeSource = "system");
  });

  ipcMain.on("show-about-window", async () => {
    let aboutWindow = null;
    if (!aboutWindow) {
      try {
        aboutWindow = await createAboutWindow();
        aboutWindow.show();
      } catch (error) {
        console.log("======================");
        console.log("error: ", error);
        console.log("======================");
      }
    } else {
      aboutWindow.show();
    }
  });
})();

// Se asegura que al cerrar la ventana se termine de ejecutar
// la apliación. "darwin" es Mac OS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
