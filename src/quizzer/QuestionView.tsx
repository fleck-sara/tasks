import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";
export function QuestionView({
    question
}: {
    question: Question;
}): JSX.Element {
    function isMultChoice(): boolean {
        return question.type === "multiple_choice_question";
    }
    const qtype = isMultChoice();
    return qtype ? (
        <Container>
            <Row>
                <Col>
                    <h4>Title: {question.name}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>{question.body} </h6>
                </Col>
                <Col>
                    <i>Points: {question.points}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>The Answer options are:</h6>
                    {question.options.map((o: string) => (
                        <div key={question.id}>
                            <h6>{o}</h6>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h4>Title: {question.name}</h4>
                    <h6>{question.body} </h6>
                    <i>Points: {question.points}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>open ended question</p>
                </Col>
            </Row>
        </Container>
    );
}
