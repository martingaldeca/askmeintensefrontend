/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusEnum } from './StatusEnum';
export type SimpleQuestion = {
    uuid: string;
    /**
     * Question text, this is the main question that will appear to the asker
     */
    question: string;
    /**
     * The status of the question
     *
     * * `APPROVED` - APPROVED
     * * `DENIED` - DENIED
     * * `PENDING_REVIEW` - PENDING_REVIEW
     */
    status?: StatusEnum;
    /**
     * Example of one valid answer for the question
     */
    example?: string | null;
};

