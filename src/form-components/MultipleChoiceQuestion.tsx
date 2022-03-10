import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setchoice] = useState<string>(options[0]);
    function updatechoice(event: ChangeEvent) {
        setchoice(event.target.value);
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
                <h3>Multiple Choice Question</h3>
            </div>
            <div>
                <Form.Group controlId="Multiple Choice">
                    <Form.Label>What is the answer?</Form.Label>
                    <Form.Select value={choice} onChange={updatechoice}>
                        {options.map((o: string) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>{isCorrect(choice)}</div>
            </div>
        </>
    );
}
