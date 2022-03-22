import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
//import { Question } from "../interfaces/question";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function EditQuiz({
    quiz,
    changeEditQuiz
}: {
    changeEditQuiz: () => void;
    quiz: Quiz;
}): JSX.Element {
    const [title, settitle] = useState<string>(quiz.title);
    const [description, setdescription] = useState<string>(quiz.description);
    //const [questions, setquestions] = useState<Question[]>(quiz.questions);

    function updatetitle(event: ChangeEvent) {
        settitle(event.target.value);
    }
    function updatedescription(event: ChangeEvent) {
        setdescription(event.target.value);
    }
    function save() {
        quiz.title = title;
        quiz.description = description;
        changeEditQuiz();
    }
    function cancel() {
        changeEditQuiz();
    }
    return (
        <div>
            <Form.Group controlId="formEditQuizTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control value={title} onChange={updatetitle} />
            </Form.Group>
            <Form.Group controlId="formEditQuizDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                    value={description}
                    onChange={updatedescription}
                />
            </Form.Group>
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
