import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [numAttemptsLeft, setnumAttemptsLeft] = useState<number>(3);
    const [numAreq, setnumAreq] = useState<string>("");
    function numRequested(numAreq: string): number {
        const num = parseInt(numAreq);
        if (isNaN(num)) {
            return 0;
        } else {
            return num;
        }
    }
    return (
        <>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <div>
                <Form.Group controlId="formNumAttemptsRequested">
                    <Form.Label>How many attempts?</Form.Label>
                    <Form.Control
                        type="number"
                        value={numAreq}
                        onChange={(event: ChangeEvent) =>
                            setnumAreq(event.target.value)
                        }
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() =>
                        setnumAttemptsLeft(
                            numAttemptsLeft + numRequested(numAreq)
                        )
                    }
                >
                    gain
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setnumAttemptsLeft(numAttemptsLeft - 1)}
                    disabled={numAttemptsLeft === 0}
                >
                    use
                </Button>
            </div>
            <div>
                <span>The number of attempts left is: {numAttemptsLeft} </span>
            </div>
        </>
    );
}
