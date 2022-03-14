import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
        </div>
    );
}

export default App;
