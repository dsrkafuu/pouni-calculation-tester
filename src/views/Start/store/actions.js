import { UPDATE_SETTINGS } from './actypes';

/**
 * 更新题目生成设置
 */
export const getActUpdateSettings = (value) => {
  return {
    type: UPDATE_SETTINGS,
    value,
  };
};
