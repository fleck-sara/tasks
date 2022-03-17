import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import pic from "./quizzer/sketch.png";
import { Quiz } from "./interfaces/quiz";
import { QuizList } from "./quizzer/QuizList";
const QUIZ: Quiz[] = [
    {
        id: "First-quiz",
        title: "first quiz",
        description: "this is a quiz about goats at UD",
        questions: [
            {
                id: 3,
                name: "Goats",
                body: "How many goats are there usually on the Green?",
                type: "multiple_choice_question",
                options: [
                    "Zero, why would there be goats on the green?",
                    "18420",
                    "Two"
                ],
                expected: "Two",
                points: 10,
                published: true
            }
        ]
    }
];

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
                <span>
                    Completed Features: sketch, quizzes (1 sample) viewable,
                    clicking shows questions (1 sample), a Take Quiz button
                    appears, but its implementation does not work yet
                </span>
            </div>
            <hr></hr>
            <div>
                <QuizList quizzes={QUIZ}></QuizList>
            </div>
            <hr></hr>
        </div>
    );
}

export default App;
