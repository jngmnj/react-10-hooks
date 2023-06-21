import { useEffect, useRef, useState } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    console.log("여기");
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      console.log("granted");
      new Notification(title, options);
    }
  };
  return fireNotif;
};


export default useNotification;