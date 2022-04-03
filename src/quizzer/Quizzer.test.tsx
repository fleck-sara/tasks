import React from "react";
import { render, screen } from "@testing-library/react";
//add screen to curly braces in above line when needed
import { App } from "../App";
import userEvent from "@testing-library/user-event";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
    test("Quiz 1 is visible", () => {
        const title = screen.queryByText(/Title: Quiz about the developer/i);
        expect(title).toBeInTheDocument();
    });
    test("Quiz 2 is visible", () => {
        const title = screen.queryByText(/Title: Trivia/i);
        expect(title).toBeInTheDocument();
    });
    test("Description 1 is visible", () => {
        const description = screen.queryByText(
            /Description: this is a quiz about/i
        );
        expect(description).toBeInTheDocument();
    });
    test("Description 2 is visible", () => {
        const description = screen.queryByText(
            /Description: This is a trivia quiz about UD/i
        );
        expect(description).toBeInTheDocument();
    });
    test("Quizzes have questions", () => {
        const questions = screen.queryAllByText("Take/View Quiz");
        questions[0].click();
        const q = screen.queryByText(/Question: What state/i);
        expect(q).toBeInTheDocument();
    });
    test("Quizzes have questions", () => {
        const questions = screen.queryAllByText("Take/View Quiz");
        questions[0].click();
        const q = screen.queryByText(/points: 5/i);
        expect(q).toBeInTheDocument();
    });
    test("Quizzes have questions", () => {
        const questions = screen.queryAllByText("Take/View Quiz");
        questions[0].click();
        const q = screen.queryByText(/Title: favorite pet/i);
        expect(q).toBeInTheDocument();
    });
    test("Quizzes have two types of questions and can check correctness", () => {
        const questions = screen.queryAllByText("Take/View Quiz");
        questions[0].click();
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[0], "swimming");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
    });
    test("Quizzes have two types of questions and can check correctness", () => {
        const questions = screen.queryAllByText("Take/View Quiz");
        questions[0].click();
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[0], "taking pictures");
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Publish/Unpublish Questions", () => {
        const questions = screen.queryAllByText("Edit Questions");
        questions[0].click();
        const publish = screen.getByTestId("publish/unpublish");
        publish.click();
        expect(
            screen.queryByText(/this question is currently unpublished/i)
        ).toBeInTheDocument();
    });
    test("Edit Questions", () => {
        const questions = screen.queryAllByText("Edit Questions");
        questions[0].click();
        const txtbox = screen.queryAllByRole("textbox");
        userEvent.type(txtbox[0], "hello");
        const savebtns = screen.queryAllByTestId("save");
        savebtns[0].click();
        const q = screen.queryAllByText("Take/View Quiz");
        q[0].click();
        expect(screen.queryByText(/hello/i)).toBeInTheDocument();
    });
    test("Edit Questions", () => {
        const questions = screen.queryAllByText("Edit Questions");
        questions[0].click();
        const txtbox = screen.queryAllByRole("textbox");
        userEvent.type(txtbox[1], "i am editing question");
        const savebtns = screen.queryAllByTestId("save");
        savebtns[0].click();
        const q = screen.queryAllByText("Take/View Quiz");
        q[0].click();
        expect(
            screen.queryByText(/i am editing question/i)
        ).toBeInTheDocument();
    });
    test("Edit Points", () => {
        const questions = screen.queryAllByText("Edit Questions");
        questions[0].click();
        const txtbox = screen.queryAllByRole("textbox");
        userEvent.type(txtbox[2], "5");
        const savebtns = screen.queryAllByTestId("save");
        savebtns[0].click();
        const q = screen.queryAllByText("Take/View Quiz");
        q[0].click();
        expect(screen.queryByText(/points: 5/i)).toBeInTheDocument();
    });
    test("Can add quizzes", () => {
        const addquiz = screen.queryAllByText("Add Quiz");
        addquiz[0].click();
        expect(
            screen.queryByText(/Title: Enter title here/i)
        ).toBeInTheDocument();
    });
    test("Add Questions", () => {
        const questions = screen.queryAllByText("Edit Questions");
        questions[0].click();
        const addquestion = screen.queryAllByText("Add Question");
        addquestion[0].click();
        const savebtns = screen.queryAllByTestId("save");
        savebtns[0].click();
        const q = screen.queryAllByText("Take/View Quiz");
        q[0].click();
        expect(
            screen.queryByText(/Title: enter question title here/i)
        ).toBeInTheDocument();
    });
});
