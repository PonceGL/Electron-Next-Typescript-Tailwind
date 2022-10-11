import { app } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import path from "path";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  app.setName("PonceGL");
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1200,
    minWidth: 499,
    height: 800,
    minHeight: 700,
    title: "PonceGL",
    center: true,
    maximizable: true,
    backgroundColor: "#F2F2F2",
    fullscreen: false,
    // icon: path.join(
    //   __dirname,
    //   "./public/images/PonceGL-Logo-Concept-Tree.jpeg"
    // ),
    frame: true,
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

// Se asegura que al cerrar la ventana se termine de ejecutar
// la apliación. "darwin" es Mac OS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
