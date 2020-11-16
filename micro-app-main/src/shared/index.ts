import store from "./store";

class Shared {
  /**
   * 获取 sharedValue
   */
  public getSharedValue(): string {
    const state = store.getState();
    return state.sharedValue || "";
  }

  /**
   * 设置 sharedValue
   */
  public setSharedValue(sharedValue: string): void {
    // 将 sharedValue 的值记录在 store 中
    store.dispatch({
      type: "SET_SHAREDVALUE",
      payload: sharedValue
    });
  }

  /**
   * 获取 vue2react
   */
  public getVue2react(): string {
    const state = store.getState();
    return state.vue2react || "";
  }

  /**
   * 设置 vue2react
   */
  public setVue2react(vue2react: string): void {
    // 将 vue2react 的值记录在 store 中
    store.dispatch({
      type: "SET_VUE2REACT",
      payload: vue2react
    });
  }
  
  /**
   * 获取 react2main
   */
  public getReact2main(): string {
    const state = store.getState();
    return state.react2main || "";
  }

  /**
   * 设置 react2main
   */
  public setReact2main(react2main: string): void {
    // 将 react2main 的值记录在 store 中
    store.dispatch({
      type: "SET_REACT2MAIN",
      payload: react2main
    });
  }
}

const shared = new Shared();
export default shared;