import { app, Menu, ipcMain } from "electron";
import { createWindow } from "./index";
const isProd: boolean = process.env.NODE_ENV === "production";

const randomGenerator = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const createAboutWindow = async () => {
  const name = `about-${randomGenerator(10, 300)}`;
  let aboutWindow = createWindow(name, {
    width: 400,
    height: 200,
    show: false,
    alwaysOnTop: true,
    focusable: true,
    center: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    title: "Sobre MJM Desktop",
  });

  if (isProd) {
    await aboutWindow.loadURL("app://./about.html");
  } else {
    const port = process.argv[2];
    await aboutWindow.loadURL(`http://localhost:${port}/about`);
  }

  aboutWindow.on("close", () => {
    aboutWindow = null;
  });

  aboutWindow.on("closed", () => {
    aboutWindow = null;
  });

  return aboutWindow;
};
