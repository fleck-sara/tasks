import React, { useState } from "react";
//import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function EditQuiz({ question }: { question: Question }): JSX.Element {
    const [body, setbody] = useState<string>(question.body);
    const [points, setpoints] = useState<number>(question.points);
    function updateBody(event: ChangeEvent) {
        setbody(event.target.value);
    }
    function updatePoints(event: ChangeEvent) {
        const pts = parseInt(event.target.value);
        if (!isNaN(pts)) {
            setpoints(pts);
        } else {
            setpoints(0);
        }
    }
    function save() {
        question.body = body;
        question.points = points;
    }
    return (
        <div>
            <Form.Group controlId="formEditQuestionBody">
                <Form.Label>Question: </Form.Label>
                <Form.Control value={body} onChange={updateBody} />
            </Form.Group>
            <Form.Group controlId="formEditQuestionPoints">
                <Form.Label>Points: (Enter an Integer)</Form.Label>
                <Form.Control value={points} onChange={updatePoints} />
            </Form.Group>
            <Button onClick={save} variant="success" className="me-4">
                Save
            </Button>
        </div>
    );
}
