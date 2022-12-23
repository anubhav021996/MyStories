import React, { useEffect } from "react";
import io from "socket.io-client";
let socket;

const SocketClient = () => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch(`/api/socket`);
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  return null;
};

export default SocketClient;
