import { UPDATE_QUESTION_TYPES, UPDATE_QUESTION_SETTINGS } from './actypes';

/**
 * update question types
 */
export const actionUpdateQuestionTypes = (value) => {
  return {
    type: UPDATE_QUESTION_TYPES,
    value,
  };
};

/**
 * update question settings
 */
export const actionUpdateQuestionSettings = (value) => {
  return {
    type: UPDATE_QUESTION_SETTINGS,
    value,
  };
};
