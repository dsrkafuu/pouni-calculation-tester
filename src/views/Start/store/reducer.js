import { fromJS } from 'immutable';
import { UPDATE_QUESTION_TYPES, UPDATE_QUESTION_SETTINGSS } from './actions';

// intergated settings
const EASY_SETTINGS = fromJS({
  hhc: 'easy',
  range: 10,
  minus: false,
  bracket: false,
  dot: false,
  dotRange: 1,
});
const HARD_SETTINGS = fromJS({
  hhc: 'hard',
  range: 100,
  minus: true,
  bracket: true,
  dot: true,
  dotRange: 2,
});

const defaultState = fromJS({
  questionTypes: {
    fillBlank: 5, // fill in blanks
    judge: 5, // judgements
    select: 5, // selections
  },
  questionSettings: EASY_SETTINGS,
});

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update question types
    case UPDATE_QUESTION_TYPES:
      return prevState.mergeDeep(fromJS({ questionTypes: action.value }));
    // update question settings
    case UPDATE_QUESTION_SETTINGSS:
      if (action.value.hhc === 'easy') {
        return prevState.mergeDeep(fromJS({ questionSettings: EASY_SETTINGS }));
      } else if (action.value.hhc === 'hard') {
        return prevState.mergeDeep(fromJS({ questionSettings: HARD_SETTINGS }));
      }
      return prevState.mergeDeep(fromJS({ questionSettings: action.value }));
    // init
    default:
      return prevState;
  }
};

export default reducer;
