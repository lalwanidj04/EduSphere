import React from "react";
import { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen"; 
import SignUpScreen from "./src/screens/SignUpScreen"; 
import LoginScreen from "./src/screens/LoginScreen";
import ContentScreen from "./src/screens/ContentScreen"; 
import NotesSharing from "./src/screens/NotesSharing";
import Notes from "./src/screens/Notes";


const App = () => {
    const [currentScreen, setCurrentScreen] = useState("Home");

    const navigateTo = (screen: string) => {
        setCurrentScreen(screen);
    };
    
    return (
        <>
          {currentScreen === "Home" && <HomeScreen navigateTo={navigateTo} />}
          {currentScreen === "SignUp" && <SignUpScreen navigateTo={navigateTo}/>}
          {currentScreen === "Login" && <LoginScreen navigateTo={navigateTo}/>}
          {currentScreen === "Content" && <ContentScreen navigateTo={navigateTo}/>}
          {currentScreen === "Notes" && <Notes />}
        </>
    );
    
};

export default App;
