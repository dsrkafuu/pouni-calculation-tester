import { UPDATE_QUESTION_TYPES } from './actypes';

/**
 * update question types
 */
export const actionUpdateQuestionTypes = (value) => {
  return {
    type: UPDATE_QUESTION_TYPES,
    value,
  };
};
