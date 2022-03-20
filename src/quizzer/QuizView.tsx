import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { useState } from "react";
import { Takequiz } from "./TakeQuiz";
import { Question } from "../interfaces/question";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [takequiz, settakequiz] = useState<boolean>(false);
    function changetakequiz() {
        settakequiz(!takequiz);
    }
    const questions: Question[] = quiz.questions;
    return takequiz ? (
        <div>
            {questions.map((question: Question) => (
                <div key={question.id}>
                    <Takequiz
                        type={question.type}
                        title={question.body}
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
                        variant="success"
                        onClick={() => changetakequiz()}
                    >
                        Take/View Quiz
                    </Button>
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
