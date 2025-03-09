import React, { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen"; 
import SignUpScreen from "./src/screens/SignUpScreen"; 
import LoginScreen from "./src/screens/LoginScreen";
import ContentScreen from "./src/screens/ContentScreen"; 
import NotesSharing from "./src/screens/NotesSharing";
import Notes from "./src/screens/Notes";
import GameHomeScreen from "./src/screens/GameHomeScreen";
import GameLevelsScreen from "./src/screens/GameLevelsScreen";
import CrosswordScreen from "./src/screens/CrosswordScreen";

const App = () => {
    const [currentScreen, setCurrentScreen] = useState("Home");
    const [params, setParams] = useState<any>(null);

    const navigateTo = (screen: string, newParams: any = null) => {
        setCurrentScreen(screen);
        setParams(newParams);
    };
    
    return (
        <>
          {currentScreen === "Home" && <HomeScreen navigateTo={navigateTo} />}
          {currentScreen === "SignUp" && <SignUpScreen navigateTo={navigateTo}/>}
          {currentScreen === "Login" && <LoginScreen navigateTo={navigateTo}/>}
          {currentScreen === "Content" && <ContentScreen navigateTo={navigateTo}/>}
          {currentScreen === "Notes" && <Notes />}
          {currentScreen === "GameHome" && <GameHomeScreen navigateTo={navigateTo}/>}
          {currentScreen === "Levels" && (
              <GameLevelsScreen navigateTo={navigateTo} newLevel={params?.newLevel} />
          )}
          {currentScreen === "Crossword" && params && (
              <CrosswordScreen route={{ params }} navigateTo={navigateTo} />
          )}
        </>
    );
};

export default App;
