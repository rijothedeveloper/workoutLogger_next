import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import UserContext from "../UserContext";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";

export default function Home() {
  const [flashmessage, setFlashMessage] = useState({
    show: false,
    message: "",
    color: "green",
  });

  const [user, setUser] = useState({
    username: "",
    token: "",
    loggedIn: false,
  });

  function handleLogout() {
    setUser({
      username: "",
      tokken: "",
      loggedIn: false,
    });
    setFlashMessage({
      show: true,
      message: "Logged out",
      color: "#089e79",
    });
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header onLogout={handleLogout} />
      <Main />
    </UserContext.Provider>
  );
}
