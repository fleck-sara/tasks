import React, { useState } from "react";
import { Button, NavItem } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [num, setnum] = useState<number>(1);
    const [num2, setnum2] = useState<number>(2);
    return (
        <>
            <div>
                <Button onClick={() => setnum(d6())}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={() => setnum2(d6())}>Roll Right</Button>
            </div>
            <span data-testid="left-die"> You rolled a: {num}</span>
            <span data-testid="right-die"> And a: {num2}</span>
            <div>
                {num === num2 && num !== 1 ? (
                    <span> You win! </span>
                ) : (
                    <span> </span>
                )}
            </div>
            <div>
                {num === 1 && num2 === 1 ? (
                    <span> You Lose. </span>
                ) : (
                    <span> </span>
                )}
            </div>
        </>
    );
}
