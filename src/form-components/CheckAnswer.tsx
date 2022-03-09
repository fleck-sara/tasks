import React, { useState } from "react";
import { Form } from "react-bootstrap";
// Simplify type definition of the Change Event
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    function isCorrect(answer: string): string {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <>
            <div>
                <Form.Group controlId="formCheckAnswer">
                    <Form.Label>What is your answer?</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
                <div>{isCorrect(answer)}</div>
            </div>
            <div>
                <h3>Check Answer</h3>
            </div>
        </>
    );
}
