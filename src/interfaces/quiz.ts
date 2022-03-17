import { Question } from "./question";
//import { Answer } from "./answer";

export interface Quiz {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}
