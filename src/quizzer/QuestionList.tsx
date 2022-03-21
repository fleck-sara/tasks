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
    function getPublishedQuestions(questions: Question[]): Question[] {
        const publishedQs = questions.filter(
            (q: Question): boolean => q.published
        );
        return publishedQs;
    }
    const publishedQs = getPublishedQuestions(questions);
    return (
        <Stack gap={3} onClick={changeView}>
            {publishedQs.map((question: Question) => (
                <div key={question.id}>
                    <QuestionView question={question}></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
