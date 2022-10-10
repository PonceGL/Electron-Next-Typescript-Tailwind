interface Props {
  title: string;
  body: string;
  interaction?: boolean;
  callback?: () => void | null;
}
const customNotification = ({
  title,
  body,
  interaction = true,
  callback = null,
}: Props) => {
  const customNotification = new Notification(title, {
    body: body,
    lang: "es-ES",
    // icon: "/images/Transportes-MJM-icon.png",
    // badge: "/images/Transportes-MJM-icon.png",
    requireInteraction: interaction,
    // actions: [
    //   { action: "like", title: "Like" },
    //   { action: "reply", title: "Reply" },
    // ],
  });

  //   console.log("showNotification ====================================");
  //   console.log(title);
  //   console.log(body);
  //   console.log(interaction);
  //   console.log(customNotification);

  customNotification.onclick = () => {
    if (callback !== null) {
      callback();
    }
    console.log("Notification clicked");
  };
};

export const showNotification = ({
  title,
  body,
  interaction = false,
  callback = null,
}: Props) => {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    customNotification({ title, body, interaction, callback });
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        customNotification({
          title,
          body,
          interaction,
          callback,
        });
      }
    });
  }
};
