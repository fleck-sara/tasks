import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function Takequiz({
    name,
    body,
    points,
    options,
    type,
    expectedanswer
}: {
    name: string;
    type: string;
    body: string;
    points: number;
    options: string[];
    expectedanswer: string;
}): JSX.Element {
    const [answer, setanswer] = useState<string>("");
    const [choice, setchoice] = useState<string>(options[0]);

    function updatechoice(event: ChangeEvent) {
        setchoice(event.target.value);
    }
    function isCorrect(answer: string): string {
        if (answer === expectedanswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    const isMultipleChoice = type === "multiple_choice_question";

    function updateanswer(event: ChangeEvent) {
        setanswer(event.target.value);
    }
    return isMultipleChoice ? (
        <div>
            <Container>
                <Row>
                    <Form.Group controlId="Multiple Choice">
                        <Col>
                            <Form.Label> Title: {name} </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label> Question: {body} </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label> points: {points} </Form.Label>
                        </Col>
                        <Col>
                            <Form.Select value={choice} onChange={updatechoice}>
                                {options.map((o: string) => (
                                    <option key={o} value={o}>
                                        {o}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Row>
                <div>{isCorrect(choice)}</div>
            </Container>
        </div>
    ) : (
        <>
            <Container>
                <Row>
                    <Form.Group controlId="form-open-endedquestion">
                        <Col>
                            <Form.Label>Title: {name}</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label> Question: {body} </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label> points: {points} </Form.Label>
                        </Col>
                        <Form.Control
                            value={answer}
                            onChange={updateanswer}
                        ></Form.Control>
                    </Form.Group>
                </Row>
                <div>{isCorrect(answer)}</div>
            </Container>
        </>
    );
}
