//import Q from "q";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQs = questions.filter((q: Question): boolean => q.published);
    return publishedQs;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQs = questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0
    );
    return nonEmptyQs;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const qfound = questions.find((q: Question): boolean => q.id === id);
    if (typeof qfound === "undefined") {
        return null;
    }
    return qfound;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeq = questions.filter((q: Question): boolean => q.id != id);
    return removeq;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((q: Question): string => q.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, q: Question) => currentTotal + q.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQs = getPublishedQuestions(questions);
    const sum = publishedQs.reduce(
        (currentTotal: number, q: Question) => currentTotal + q.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const qCSV = questions
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");
    const qCSV2 = "id,name,options,points,published\n" + qCSV;
    return qCSV2;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const published = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            body: q.body,
            type: q.type,
            options: q.options,
            expected: q.expected,
            points: q.points,
            published: true
        })
    );
    return published;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const qtype = questions.filter(
        (q: Question): boolean => q.type === "multiple_choice_question"
    );
    return qtype.length === questions.length || qtype.length === 0;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    const blankq: Question = {
        id: id,
        name: name,
        body: "",
        options: [],
        expected: "",
        points: 1,
        published: false,
        type: type
    };
    return blankq;
}
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const q = makeBlankQuestion(id, name, type);
    const qs = [...questions, q];
    return qs;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const renameq = questions.map((q: Question): Question => {
        const newq: Question = { ...q };
        if (q.id === targetId) {
            newq.name = newName;
        }
        return newq;
    });
    return renameq;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const renameq = questions.map((q: Question): Question => {
        const newq: Question = { ...q };
        if (q.id === targetId) {
            newq.type = newQuestionType;
            if (
                newQuestionType == "short_answer_question" &&
                q.type !== newQuestionType
            ) {
                newq.options = [];
            }
        }
        return newq;
    });
    return renameq;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    const editoption = questions.map((q: Question): Question => {
        const newq: Question = { ...q };
        if (q.id === targetId) {
            const options = [...q.options];
            if (targetOptionIndex === -1) {
                newq.options = [...q.options, newOption];
            } else {
                options.splice(targetOptionIndex, 1, newOption);
                newq.options = [...options];
            }
        }
        return newq;
    });
    return editoption;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const newQ = {
        ...oldQuestion,
        name: "Copy of " + oldQuestion.name,
        published: false,
        id: id
    };
    return newQ;
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const i = questions.findIndex((q: Question): boolean => q.id === targetId);
    const dupquestions = [...questions];
    if (i >= 0) {
        const dupq = questions.find(
            (q: Question): boolean => q.id === targetId
        );
        const dupq2 = { ...dupq };
        const newq = duplicateQuestion(newId, dupq2);
        dupquestions.splice(i + 1, 0, newq);
    }
    return dupquestions;
}
