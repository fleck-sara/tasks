import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { useState } from "react";
import { Takequiz } from "./TakeQuiz";
import { Question } from "../interfaces/question";
import { EditQuiz } from "./EditQuiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [takequiz, settakequiz] = useState<boolean>(false);
    const [edit, setedit] = useState<boolean>(false);
    const questions: Question[] = quiz.questions;
    function changeedit() {
        setedit(!edit);
    }
    function changetakequiz() {
        settakequiz(!takequiz);
    }
    function editquiz() {
        if (edit) {
            return questions.map((question: Question) => (
                <div key={question.id}>
                    <EditQuiz
                        question={question}
                        changeEditing={changeedit}
                    ></EditQuiz>
                </div>
            ));
        }
        return null;
    }
    return takequiz ? (
        <div>
            {questions.map((question: Question) => (
                <div key={question.id}>
                    <Takequiz
                        type={question.type}
                        name={question.name}
                        body={question.body}
                        points={question.points}
                        options={question.options}
                        expectedanswer={question.expected}
                    ></Takequiz>
                </div>
            ))}
            <Button
                className="float-right me-3"
                size="sm"
                variant="success"
                onClick={() => changetakequiz()}
            >
                Return
            </Button>
            <hr></hr>
        </div>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>Title: {quiz.title}</h3>
                    <i>Description: {quiz.description}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Length: {quiz.questions.length}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        className="float-right me-3"
                        size="sm"
                        onClick={() => changetakequiz()}
                    >
                        Take/View Quiz
                    </Button>
                    <Button
                        className="me-3"
                        size="sm"
                        variant="success"
                        onClick={() => changeedit()}
                    >
                        Edit Quiz
                    </Button>
                    {editquiz()}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr></hr>
                </Col>
            </Row>
        </Container>
    );
}
