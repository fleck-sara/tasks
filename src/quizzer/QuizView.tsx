import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>This is the title of the quiz: {quiz.title}</h3>
                    <i>Description: {quiz.description}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Length: {quiz.questions.length}</p>
                </Col>
            </Row>
        </Container>
    );
}
