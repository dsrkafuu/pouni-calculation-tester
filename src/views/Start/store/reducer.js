import { UPDATE_SETTINGS } from './actypes';

const defaultState = {
  // 各题型数量
  questionTypes: {
    fillBlank: 4,
    judge: 3,
    select: 3,
  },
};

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    // 更新生成设置
    case UPDATE_SETTINGS:
      return Object.assign({}, prevState, action.value);
    // 初始化
    default:
      return prevState;
  }
};

export default reducer;
