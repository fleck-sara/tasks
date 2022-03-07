import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    //return <div>Change Type</div>;
    function flipType(): void {
        if (value === "multiple_choice_question") {
            setValue("short_answer_question");
        } else {
            setValue("multiple_choice_question");
        }
    }
    return (
        <>
            <div>
                <Button onClick={flipType}>Change Type</Button>
            </div>
            <div>
                {value === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </>
    );
}
