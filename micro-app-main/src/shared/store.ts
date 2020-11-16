//在主应用中创建 store 用于管理全局状态池
import { createStore } from "redux";

export type State = {
  sharedValue?: string;
  vue2react?: string;
  react2main?: string;
};

type Action = {
  type: string;
  payload: any;
};

//redux 创建了一个全局状态池，并设置了一个 reducer 用于修改 sharedValue 的值
const reducer = (state: State = {}, action: Action): State => {
  switch (action.type) {    
    // 设置 Token
    case "SET_SHAREDVALUE":
      console.log(state)
      return {
        ...state,
        sharedValue: action.payload,
      };
      // 设置 Token
    case "SET_VUE2REACT":
      return {
        ...state,
        vue2react: action.payload,
      };
    case "SET_REACT2MAIN":
        return {
          ...state,
          react2main: action.payload,
        };
    default:
      return state;
  }
};

const store = createStore<State, Action, unknown, unknown>(reducer);

export default store;
