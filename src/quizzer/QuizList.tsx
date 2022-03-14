import React from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";
import { Stack } from "react-bootstrap";

export function QuizList({ quizzes }: { quizzes: Quiz[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id}>
                    <QuizView quiz={quiz}></QuizView>
                </div>
            ))}
        </Stack>
    );
}
