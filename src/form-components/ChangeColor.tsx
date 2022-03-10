import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [color, setcolor] = useState<string>("");
    return (
        <>
            <div>
                <h3>Change Color</h3>
            </div>
            <div>
                {colors.map(
                    (c: string): JSX.Element => (
                        <Form.Check
                            key={c}
                            inline
                            type="radio"
                            name="color"
                            onChange={(e) => setcolor(e.target.value)}
                            style={{ backgroundColor: c }}
                            id={c}
                            label={c}
                            value={c}
                            checked={color === c}
                        />
                    )
                )}
            </div>
            <div>
                <span>You have chosen </span>
                <a data-testid="colored-box" style={{ backgroundColor: color }}>
                    {color}.
                </a>
            </div>
        </>
    );
}
