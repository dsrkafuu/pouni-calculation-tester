import { fromJS } from 'immutable';
import { UPDATE_QUESTION_TYPES, UPDATE_QUESTION_SETTINGSS } from './actions';
// ls
import LocalStorage from '../../plugins/LocalStorage';
const ls = new LocalStorage();

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
    fillBlank: 2, // fill in blanks
    judge: 4, // judgements
    select: 3, // selections
  },
  questionSettings: EASY_SETTINGS,
});

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // update question types
    case UPDATE_QUESTION_TYPES: {
      const newState = prevState.mergeDeep(fromJS({ questionTypes: action.value }));
      ls.save('settings', newState.toJS());
      return newState;
    }
    // update question settings
    case UPDATE_QUESTION_SETTINGSS: {
      let newState;
      if (action.value.hhc === 'easy') {
        newState = prevState.mergeDeep(fromJS({ questionSettings: EASY_SETTINGS }));
      } else if (action.value.hhc === 'hard') {
        newState = prevState.mergeDeep(fromJS({ questionSettings: HARD_SETTINGS }));
      } else {
        newState = prevState.mergeDeep(fromJS({ questionSettings: action.value }));
      }
      ls.save('settings', newState.toJS());
      return newState;
    }
    // first init
    default: {
      const settings = ls.load('settings');
      if (settings) {
        // load from storage
        return fromJS(settings);
      } else {
        // init data
        return prevState;
      }
    }
  }
};

export default reducer;
