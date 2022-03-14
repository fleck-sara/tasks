import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import pic from "./quizzer/sketch.png";
function App(): JSX.Element {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <Quizzer></Quizzer>
                <hr></hr>
            </div>
            <div>
                <img src={pic} />
            </div>
            <div className="App">
                <span>Completed Features: sketch</span>
            </div>
        </div>
    );
}

export default App;
