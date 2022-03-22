import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { Question } from "../interfaces/question";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function EditQuiz({
    quiz,
    changeEditQuiz
}: {
    changeEditQuiz: () => void;
    quiz: Quiz;
}): JSX.Element {
    const [title, settitle] = useState<string>(quiz.title);
    const [dsecription, setdescription] = useState<string>(quiz.description);
    const [questions, setquestions] = useState<Question[]>(quiz.questions);
    return <div>hello</div>;
}
