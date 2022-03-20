import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function Takequiz({
    title,
    options,
    type,
    expectedanswer
}: {
    type: string;
    title: string;
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
            <Form.Group controlId="Multiple Choice">
                <Form.Label>{title}</Form.Label>
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
    ) : (
        <>
            <div>
                <Form.Group controlId="form-open-endedquestion">
                    <Form.Label>{title}</Form.Label>
                    <Form.Control value={answer} onChange={updateanswer} />
                </Form.Group>
            </div>
            <div>{isCorrect(answer)}</div>
        </>
    );
}
