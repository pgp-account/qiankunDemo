//action通讯
import { initGlobalState, MicroAppStateActions } from "qiankun";

//初始化state中的值
const initialState = {};
const actions: MicroAppStateActions = initGlobalState(initialState);

export default actions;