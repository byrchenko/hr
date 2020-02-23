import {ASSESSMENT_QUESTIONS_ENTITY} from "../_store/entities";
import {sendAnswers} from "../_service/ApiMethods";

import {
    assessmentStart,
    closeAssessment,
    fetchDataError,
    fetchDataLoading,
    fetchDataSuccess,
} from "./index";

/**
 * Start the assessment
 *
 * @param assessmentId
 * @param employee
 */
export const startAssessment = (assessmentId, employee) => {
    return dispatch => {
        dispatch(assessmentStart(employee, assessmentId));

        dispatch(fetchQuestions(assessmentId, employee.id, 1))
    }
};

/**
 * Go to the next assessment step
 *
 * @param assessmentId
 * @param questions
 * @param employeeId
 * @param position
 */
export const nextStep = (
    assessmentId,
    questions,
    employeeId,
    position
) => {
    return dispatch => {
        dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

        Promise.all([
            sendAnswers(assessmentId, questions),
            fetchQuestions(assessmentId, employeeId, position + 1)
        ])
            .then(response => response.json())
            .then(parsed => dispatch(fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, parsed[1])))
            .catch(err => {
                console.warn(err);

                dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY));
            });
    };
};

/**
 * Go to the previous assessment step
 *
 * @param assessmentId
 * @param employeeId
 * @param position
 * @returns {function(...[*]=)}
 */
export const prevStep = (
    assessmentId,
    employeeId,
    position
) => {
    return dispatch => {
        dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

        fetchQuestions(assessmentId, employeeId, position - 1)
            .then(response => response.json())
            .then(parsed => {
                dispatch(fetchDataSuccess(ASSESSMENT_QUESTIONS_ENTITY, parsed))
            })
            .catch(err => {
                console.warn(err);

                dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY))
            })
    }
};

/**
 * Finish assessment
 *
 * @param questions
 * @param assessmentId
 */
export const finishAssessment = (questions, assessmentId) => {
    return dispatch => {
        dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

        sendAnswers(assessmentId, questions)
            .then(response => {
                response.status === 200
                    ? dispatch(closeAssessment())
                    : dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY))
            })
            .catch(err => console.warn(err))
    };
};

/**
 * Fetch assessment questions
 *
 * @param assessmentId
 * @param userId
 * @param step
 */
export const fetchQuestions = (assessmentId, userId, step) => {
    return dispatch => {
        dispatch(fetchDataLoading(ASSESSMENT_QUESTIONS_ENTITY));

        fetchQuestions(assessmentId, userId, step)
            .then(result => result.json())
            .then(json => dispatch(fetchDataSuccess(
                ASSESSMENT_QUESTIONS_ENTITY,
                json,
            )))
            .catch(() => dispatch(fetchDataError(ASSESSMENT_QUESTIONS_ENTITY)));
    };
};
