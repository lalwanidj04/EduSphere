import React from "react";
import { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen"; // Adjust the path
import SignUpScreen from "./src/screens/SignUpScreen"; // Adjust the path
import LoginScreen from "./src/screens/LoginScreen";


const App = () => {
    const [currentScreen, setCurrentScreen] = useState("Home");

    const navigateTo = (screen) => {
        setCurrentScreen(screen);
    };
    
    return (
        <>
          {currentScreen === "Home" && <HomeScreen navigateTo={navigateTo} />}
          {currentScreen === "SignUp" && <SignUpScreen/>}
          {currentScreen === "Login" && <LoginScreen/>}
        </>
    );
    
};

export default App;
