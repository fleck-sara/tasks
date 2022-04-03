import React, { useState } from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import pic from "./quizzer/sketch.png";
import { Quiz } from "./interfaces/quiz";
import { QuizList } from "./quizzer/QuizList";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const QUIZ: Quiz[] = [
    {
        id: "First-quiz",
        title: "Quiz about the developer",
        description: "this is a quiz about the coder of this quizzer :)",
        questions: [
            {
                id: 1,
                name: "place of residence",
                body: "What state is this developer from?",
                type: "multiple_choice_question",
                options: ["", "DE", "MD", "PA", "NY"],
                expected: "PA",
                points: 2,
                published: true
            },
            {
                id: 2,
                name: "hobbies",
                body: "what is a hobby this CISC student likes to do?",
                type: "short_answer_question",
                options: [],
                expected: "swimming",
                points: 5,
                published: true
            },
            {
                id: 3,
                name: "favorite pet",
                body: "what is this CISC student's favorite type of pet?",
                type: "multiple_choice_question",
                options: [
                    "",
                    "cats",
                    "giraffes",
                    "hamsters",
                    "guinea pigs",
                    "dogs"
                ],
                expected: "dogs",
                points: 2,
                published: true
            }
        ]
    },
    {
        id: "Second-quiz",
        title: "Trivia",
        description: "This is a trivia quiz about UD",
        questions: [
            {
                id: 4,
                name: "Mascot",
                body: "What is the UD mascot?",
                type: "multiple_choice_question",
                options: [
                    "",
                    "YouDee, a blue hen",
                    "a blue chicken name blue",
                    "the blue wave",
                    "YouDee, a blue goat"
                ],
                expected: "YouDee, a blue hen",
                points: 2,
                published: true
            },
            {
                id: 5,
                name: "Year founded",
                body: "What year was UD founded?",
                type: "short_answer_question",
                options: [],
                expected: "1743",
                points: 5,
                published: true
            },
            {
                id: 6,
                name: "UD colors?",
                body: "What are UD's colors?",
                type: "multiple_choice_question",
                options: [
                    "",
                    "red and yellow",
                    "blue and yellow",
                    "blue and white",
                    "black and yellow"
                ],
                expected: "blue and yellow",
                points: 2,
                published: true
            }
        ]
    }
];

export function App(): JSX.Element {
    const [quiz, setquiz] = useState<Quiz[]>(QUIZ);
    const [title, settitle] = useState<string>("Enter title here");
    const [description, setdescription] = useState<string>(
        "Enter description here"
    );
    function updatetitle(event: ChangeEvent) {
        settitle(event.target.value);
    }
    function updatedescription(event: ChangeEvent) {
        setdescription(event.target.value);
    }
    function addQuiz() {
        const newQuiz = {
            id: "new-quiz",
            title: title,
            description: description,
            questions: []
        };
        const newquizlist = [...quiz, newQuiz];
        updatequiz(newquizlist);
    }
    function updatequiz(newquiz: Quiz[]) {
        setquiz(newquiz);
    }
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
                    Completed Features: sketch, quizzes are visible, quizzes
                    have questions (short answer and multiple choice), check
                    correctness, can edit questions, publish/unpublish
                    questions. Can edit the fields of a quiz, and add new
                    quizzes. Can add and delete questions. All features have
                    tests.
                </span>
            </div>
            <hr></hr>
            <div>
                <QuizList quizzes={quiz}></QuizList>
            </div>
            <div>
                <Form.Group controlId="formAddQuiz">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control value={title} onChange={updatetitle} />
                </Form.Group>
                <Form.Group controlId="formAddQuestion">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control
                        value={description}
                        onChange={updatedescription}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    className="me-3"
                    variant="success"
                    onClick={() => addQuiz()}
                >
                    Add Quiz
                </Button>
            </div>
            <hr></hr>
        </div>
    );
}

export default App;
