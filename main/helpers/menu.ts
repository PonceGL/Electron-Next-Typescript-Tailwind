import { app, Menu } from "electron";

import { createWindow } from "../helpers";
const isProd: boolean = process.env.NODE_ENV === "production";

export const mainMenu = (win: any) => {
  const appName = app.getName();
  const appVersion = app.getVersion();
  const openAboutWindow = async () => {
    const aboutWindow = createWindow("about", {
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

    //   ipcMain.on("show-about-window", async () => {
    //     aboutWindow.show();
    //   });
  };

  //   console.log("====================================");
  //   console.log(app);
  //   console.log(app.getVersion());
  //   console.log("====================================");

  const navigate = async (route: string) => {
    if (isProd) {
      await win.loadURL(`app://./${route}.html`);
    } else {
      const port = process.argv[2];
      await win.loadURL(`http://localhost:${port}/${route}`);
    }
  };

  const mainMenuTemplate = [
    {
      label: appName,
      submenu: [
        {
          label: "Arir web MJM",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://mjmpaqueteria.com/");
          },
        },
        {
          label: "Preferences",
          click: async () => {
            await navigate("next");
          },
        },
        { role: "reload", label: "Recargar" },
        {
          role: "close",
          label: "Cerrar",
          accelerator: "CmdOrCtrl+Q",
          click() {
            app.quit();
          },
        },
      ],
    },
    {
      label: "Editar",
      submenu: [
        { role: "undo", label: "Deshacer" },
        { role: "redo", label: "Rehacer" },
        { type: "separator" },
        { role: "cut", label: "Cortar" },
        { role: "copy", label: "Copiar" },
        { role: "paste", label: "Pegar" },
        { role: "togglefullscreen", label: "Pantalla completa" },
        { role: "minimize", label: "Minimizar" },
        !isProd && {
          role: "toggledevtools",
          label: "Alternar las herramientas de desarrollo",
        },
      ],
    },
    {
      label: "Modo Sscuro",
      submenu: [
        {
          label: "Alternar entre Definido por el usuario y sistema",
          click: async () => {
            win.webContents
              .executeJavaScript(
                'localStorage.getItem("colorThemeDefinedByUser");',
                true
              )
              .then((result: any) => {
                console.log("result: ", result);
                console.log("typeof result: ", typeof result);
                if (result === "true") {
                  console.log("executeJavaScript send null");
                  win.webContents
                    .executeJavaScript(
                      'localStorage.setItem("colorThemeDefinedByUser", null);',
                      true
                    )
                    .then()
                    .catch((error: Error) => console.log(error));
                } else {
                  console.log("executeJavaScript send True");
                  win.webContents
                    .executeJavaScript(
                      'localStorage.setItem("colorThemeDefinedByUser", "true");',
                      true
                    )
                    .then()
                    .catch((error: Error) => console.log(error));
                }
              })
              .catch((error: Error) => console.log(error));
          },
        },
      ],
    },
  ];

  // Llama al menu principal
  // @ts-ignore: Unreachable code error
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
};

const templateMainMenu = [
  // { role: 'appMenu' }
  ...(process.platform === "darwin" && [
    {
      label: app.name,
      submenu: [
        { role: "about" },
        { type: "separator" },
        { role: "services" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideothers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" },
      ],
    },
  ]),
  // {
  //   label: "Archivo",
  //   submenu: [
  //     process.platform === "darwin"
  //       ? { role: "close", label: "Cerrar" }
  //       : { role: "quit", label: "Salir" },
  //   ],
  // },
  {
    label: "Editar",
    submenu: [
      { role: "undo", label: "Deshacer" },
      { role: "redo", label: "Rehacer" },
      { type: "separator" },
      { role: "cut", label: "Cortar" },
      { role: "copy", label: "Copiar" },
      { role: "paste", label: "Pegar" },
      ...(process.platform === "darwin"
        ? [
            {
              role: "pasteAndMatchStyle",
              label: "Pegar y Combinar el Estilo",
            },
            { role: "delete", label: "Borrar" },
            { role: "selectAll", label: "Seleccionar todo" },
            { type: "separator" },
            {
              label: "Discurso",
              submenu: [
                { role: "startSpeaking", label: "Empieza a hablar" },
                { role: "stopSpeaking", label: "Deja de hablar" },
              ],
            },
          ]
        : [
            { role: "delete", label: "Borrar" },
            { type: "separator" },
            { role: "selectAll", label: "Seleccionar todo" },
          ]),
    ],
  },
  // { role: 'viewMenu' }
  {
    label: "Ver",
    submenu: [
      { role: "reload", label: "Recargar" },
      { role: "forcereload", label: "Recarga forzada" },
      {
        role: "toggledevtools",
        label: "Alternar las herramientas de desarrollo",
      },
      { type: "separator" },
      { role: "resetZoom", label: "Restablecer el zoom" },
      { role: "zoomIn", label: "Ampliar" },
      { role: "zoomOut", label: "Alejar" },
      { type: "separator" },
      { role: "togglefullscreen", label: "Activar la pantalla completa" },
    ],
  },
  // { role: 'windowMenu' }
  {
    label: "Ventana",
    submenu: [
      { role: "minimize", label: "Minimizar" },
      { role: "zoom", label: "Ampliar" },
      ...(process.platform === "darwin"
        ? [
            { type: "separator" },
            { role: "front", label: "Traer al frente" },
            { type: "separator" },
            { role: "window", label: "Ventana" },
          ]
        : [
            { type: "separator" },
            {
              role: "close",
              label: "Cerrar",
              accelerator: "CmdOrCtrl+Q",
              click() {
                app.quit();
              },
            },
          ]),
    ],
  },
  {
    role: "Ayuda",
    submenu: [
      {
        label: "Más información",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal("https://electronjs.org");
        },
      },
    ],
  },
];
