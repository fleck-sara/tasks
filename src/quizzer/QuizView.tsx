import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { useState } from "react";
import { Takequiz } from "./TakeQuiz";
import { Question } from "../interfaces/question";
import { EditQuestion } from "./EditQuestion";
import { EditQuiz } from "./EditQuiz";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [takequiz, settakequiz] = useState<boolean>(false);
    const [edit, setedit] = useState<boolean>(false);
    const [editquiz, seteditquiz] = useState<boolean>(false);
    const [title, settitle] = useState<string>("enter question title here");
    const questions: Question[] = quiz.questions;
    const [q, setquestions] = useState<Question[]>(questions);

    function addQuestion() {
        const newQuestion: Question = {
            id: Math.floor(Math.random() * 50),
            name: title,
            body: "",
            type: "short_answer_question",
            options: [],
            expected: "",
            points: 0,
            published: true
        };
        const newquestionlist = [...q, newQuestion];
        setquestions(newquestionlist);
    }

    function changeeditquiz() {
        seteditquiz(!editquiz);
    }

    function changeedit() {
        setedit(!edit);
    }
    function changetakequiz() {
        settakequiz(!takequiz);
    }
    function getPublishedQuestions(): Question[] {
        const publishedQs = q.filter((qs: Question): boolean => qs.published);
        return publishedQs;
    }
    function updatetitle(event: ChangeEvent) {
        settitle(event.target.value);
    }
    function deletequestionbyid(qID: number) {
        const qs = [...q].filter(
            (questions: Question): boolean => questions.id != qID
        );
        setquestions(qs);
    }
    function editquestions() {
        if (edit) {
            return q.map((question: Question) => (
                <div key={question.id}>
                    <EditQuestion
                        question={question}
                        changeEditing={changeedit}
                    ></EditQuestion>
                    <Button
                        className="me-3"
                        variant="danger"
                        onClick={() => deletequestionbyid(question.id)}
                    >
                        delete question
                    </Button>
                </div>
            ));
        }
        return null;
    }
    function displayaddq() {
        if (edit) {
            return (
                <>
                    <div>
                        <Form.Group controlId="formAddQuestion">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                value={title}
                                onChange={updatetitle}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Button
                            className="me-3"
                            variant="success"
                            onClick={() => addQuestion()}
                        >
                            Add Question
                        </Button>
                    </div>
                    <hr></hr>
                </>
            );
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
    const publishedQs = getPublishedQuestions();
    return takequiz ? (
        <div>
            {publishedQs.map((question: Question) => (
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
                    {displayaddq()}
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
