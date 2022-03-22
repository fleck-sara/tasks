import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { useState } from "react";
import { Takequiz } from "./TakeQuiz";
import { Question } from "../interfaces/question";
import { EditQuestion } from "./EditQuestion";
import { EditQuiz } from "./EditQuiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [takequiz, settakequiz] = useState<boolean>(false);
    const [edit, setedit] = useState<boolean>(false);
    const [editquiz, seteditquiz] = useState<boolean>(false);
    function changeeditquiz() {
        seteditquiz(!editquiz);
    }
    const questions: Question[] = quiz.questions;
    function changeedit() {
        setedit(!edit);
    }
    function changetakequiz() {
        settakequiz(!takequiz);
    }
    function getPublishedQuestions(questions: Question[]): Question[] {
        const publishedQs = questions.filter(
            (q: Question): boolean => q.published
        );
        return publishedQs;
    }
    function editquestions() {
        if (edit) {
            return questions.map((question: Question) => (
                <div key={question.id}>
                    <EditQuestion
                        question={question}
                        changeEditing={changeedit}
                    ></EditQuestion>
                </div>
            ));
        }
        return null;
    }
    function editQuiz() {
        if (editquiz) {
            return (
                <EditQuiz
                    quiz={quiz}
                    changeEditQuiz={changeeditquiz}
                ></EditQuiz>
            );
        }
        return null;
    }
    return takequiz ? (
        <div>
            {getPublishedQuestions(questions).map((question: Question) => (
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
                        Edit Questions
                    </Button>
                    {editquestions()}
                    <Button
                        className="me-3"
                        size="sm"
                        variant="success"
                        onClick={() => changeeditquiz()}
                    >
                        Edit Quiz
                    </Button>
                    {editQuiz()}
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
