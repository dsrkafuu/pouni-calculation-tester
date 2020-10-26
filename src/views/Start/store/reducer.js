import { UPDATE_QUESTION_TYPES } from './actypes';

const defaultState = {
  questionTypes: {
    fillBlank: 5,
    judge: 5,
    select: 5,
  },
};

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update question types
    case UPDATE_QUESTION_TYPES:
      return Object.assign({}, prevState, {
        // data from `action` only has one key, need to merge with `prevState`
        questionTypes: { ...prevState.questionTypes, ...action.value },
      });
    // init
    default:
      return prevState;
  }
};

export default reducer;
