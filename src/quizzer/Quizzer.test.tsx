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
    test("Check Correctness", () => {
        const questions = screen.queryAllByText("Take/View Quiz");
        questions[0].click();
        const textbox = screen.queryAllByRole("textbox");
        userEvent.type(textbox[0], "swimming");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
    });
    test("Check Correctness", () => {
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
});
