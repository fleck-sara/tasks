import React, { useState } from "react";
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
    const [options, setoptions] = useState<string[]>(question.options);
    const [addoption, setaddoption] = useState<string>("");
    const [deleteoption, setdeleteoption] = useState<string>("");

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
    function addOption(event: ChangeEvent) {
        setaddoption(event.target.value);
    }
    function deleteOption(event: ChangeEvent) {
        const delOption = event.target.value;
        const delOption2 = delOption.toLowerCase();
        const delOption3 = delOption2.trim();
        setdeleteoption(delOption3);
    }
    function addOptions() {
        const newOption = addoption;
        const newOptions = [...options, newOption];
        setoptions(newOptions);
    }
    function deleteOptions() {
        const lcaseoptions = options.map((o: string): string =>
            o.toLowerCase()
        );
        const removeoption = lcaseoptions.filter(
            (o: string): boolean => o !== deleteoption
        );
        setoptions(removeoption);
    }
    function save() {
        question.body = body;
        question.points = points;
        question.name = name;
        question.published = published;
        question.options = options;
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
            {options.map((o: string) => (
                <div key={""}>
                    <span>{o}</span>
                </div>
            ))}
            <Form.Group controlId="formaddoption">
                <Form.Label>Add Option: </Form.Label>
                <Form.Control value={addoption} onChange={addOption} />
            </Form.Group>
            <Button
                onClick={addOptions}
                variant="success"
                size="sm"
                className="me-4"
            >
                add
            </Button>
            <Form.Group controlId="formdeleteoption">
                <Form.Label>
                    Type the option you would like to delete:
                </Form.Label>
                <Form.Control value={deleteoption} onChange={deleteOption} />
            </Form.Group>
            <Button
                onClick={deleteOptions}
                variant="danger"
                size="sm"
                className="me-4"
            >
                delete
            </Button>
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
