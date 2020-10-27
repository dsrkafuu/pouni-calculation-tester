import { UPDATE_QUESTION_TYPES, UPDATE_QUESTION_SETTINGS } from './actypes';

// intergated settings
const EASY_SETTINGS = {
  hhc: 'easy',
  range: 10,
  minus: false,
  bracket: false,
  dot: false,
  dotRange: 1,
};
const HARD_SETTINGS = {
  hhc: 'hard',
  range: 100,
  minus: true,
  bracket: true,
  dot: true,
  dotRange: 2,
};

const defaultState = {
  questionTypes: {
    fillBlank: 5, // fill in blanks
    judge: 5, // judgements
    select: 5, // selections
  },
  questionSettings: EASY_SETTINGS,
};

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update question types
    case UPDATE_QUESTION_TYPES:
      return Object.assign({}, prevState, {
        // data from `action` only has one key, need to merge with `prevState`
        questionTypes: { ...prevState.questionTypes, ...action.value },
      });
    // update question settings
    case UPDATE_QUESTION_SETTINGS:
      if (action.value.hhc === 'easy') {
        return Object.assign({}, prevState, {
          questionSettings: EASY_SETTINGS,
        });
      } else if (action.value.hhc === 'hard') {
        return Object.assign({}, prevState, {
          questionSettings: HARD_SETTINGS,
        });
      }
      return Object.assign({}, prevState, {
        // always full object, no need to merge
        questionSettings: action.value,
      });
    // init
    default:
      return prevState;
  }
};

export default reducer;
