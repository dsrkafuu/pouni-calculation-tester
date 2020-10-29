// update question types
export const UPDATE_QUESTION_TYPES = 'UPDATE_QUESTION_TYPES';
export const actionQuestionTypes = (value) => ({
  type: UPDATE_QUESTION_TYPES,
  value,
});

// update question settings
export const UPDATE_QUESTION_SETTINGSS = 'UPDATE_QUESTION_SETTINGSS';
export const actionQuestionSettings = (value) => ({
  type: UPDATE_QUESTION_SETTINGSS,
  value,
});

// clean cache
export const CLEAN_SETTINGS_CACHE = 'CLEAN_SETTINGS_CACHE';
export const actionCleanSettingsCache = () => ({
  type: CLEAN_SETTINGS_CACHE,
});
