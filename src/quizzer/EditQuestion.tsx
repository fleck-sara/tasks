import React, { useState } from "react";
//import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function EditQuestion({
    question,
    changeEditing
}: {
    changeEditing: () => void;
    question: Question;
}): JSX.Element {
    const [body, setbody] = useState<string>(question.body);
    const [points, setpoints] = useState<number>(question.points);
    const [name, setname] = useState<string>(question.name);
    const [published, setpublished] = useState<boolean>(question.published);
    function updateBody(event: ChangeEvent) {
        setbody(event.target.value);
    }
    function updatepublished() {
        setpublished(!published);
    }
    function updatename(event: ChangeEvent) {
        setname(event.target.value);
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
        question.name = name;
        question.published = published;
        changeEditing();
    }
    function cancel() {
        changeEditing();
    }
    function isPublished(): string {
        if (published) {
            return "this question is currently published";
        } else {
            return "this question is currently unpublished";
        }
    }
    return (
        <div>
            <Form.Group controlId="formEditQuestionName">
                <Form.Label> Name: </Form.Label>
                <Form.Control value={name} onChange={updatename} />
            </Form.Group>
            <Form.Group controlId="formEditQuestionBody">
                <Form.Label>Question: </Form.Label>
                <Form.Control value={body} onChange={updateBody} />
            </Form.Group>
            <Form.Group controlId="formEditQuestionPoints">
                <Form.Label>Points: (Enter an Integer)</Form.Label>
                <Form.Control value={points} onChange={updatePoints} />
                <Form.Label>{isPublished()}</Form.Label>
            </Form.Group>
            <Button onClick={updatepublished} size="sm" className="me-4">
                publish/unpublish
            </Button>
            <Button onClick={save} variant="success" size="sm" className="me-4">
                Save
            </Button>
            <Button
                onClick={cancel}
                variant="warning"
                size="sm"
                className="me-4"
            >
                Cancel
            </Button>
        </div>
    );
}
