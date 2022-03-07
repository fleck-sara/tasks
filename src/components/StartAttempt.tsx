import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setnumAttempts] = useState<number>(4);
    const [inProgress, setinProgress] = useState<boolean>(false);
    function startquiz(): void {
        setinProgress(true);
        setnumAttempts(numAttempts - 1);
    }
    return (
        <div>
            <div>
                <Button
                    onClick={() => setnumAttempts(1 + numAttempts)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
                number of attempts: {numAttempts}.
            </div>
            <div>
                <Button
                    onClick={() => startquiz()}
                    disabled={inProgress || numAttempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setinProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
