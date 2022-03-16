import React from "react";
import { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";
import { Stack } from "react-bootstrap";
import { QuestionList } from "./QuestionList";

export function QuizList({ quizzes }: { quizzes: Quiz[] }): JSX.Element {
    const [viewqs, setviewqs] = useState<boolean>(false);
    function changeView() {
        setviewqs(!viewqs);
    }
    return viewqs ? (
        <QuestionList
            questions={quizzes[0].questions}
            changeView={changeView}
        ></QuestionList>
    ) : (
        <>
            <Stack gap={3} onClick={changeView}>
                {quizzes.map((quiz: Quiz) => (
                    <div key={quiz.id}>
                        <QuizView quiz={quiz}></QuizView>
                    </div>
                ))}
            </Stack>
        </>
    );
}
