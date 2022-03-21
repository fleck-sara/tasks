import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    changeView
}: {
    questions: Question[];
    changeView: () => void;
}): JSX.Element {
    return (
        <Stack gap={3} onClick={changeView}>
            {questions.map((question: Question) => (
                <div key={question.id}>
                    <QuestionView question={question}></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
