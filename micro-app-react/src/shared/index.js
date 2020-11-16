//子应用有独立运行的能力，所以子应用也应该实现 shared，以便在独立运行时可以拥有兼容处理能力。
class Shared {
  /**
   * Shared：子应用自身的 shared，子应用独立运行时将使用该 shared，子应用的 shared 使用 localStorage 来操作 token；
   */

  /**
   * 获取 sharedValue
   */
  getSharedValue() {
    // 子应用独立运行时，在 localStorage 中获取 sharedValue
    return localStorage.getItem("sharedValue") || "";
  }

  /**
   * 设置 sharedValue
   */
  setSharedValue(sharedValue) {
    // 子应用独立运行时，在 localStorage 中设置 token
    localStorage.setItem("sharedValue", sharedValue);
  }

  /**
   * 获取 vue2react
   */
  getVue2react() {
    // 子应用独立运行时，在 localStorage 中获取 vue2react
    return localStorage.getItem("vue2react") || "";
  }

  /**
   * 设置 vue2react
   */
  setVue2react(vue2react) {
    localStorage.setItem("vue2react", vue2react);
  }
  /**
   * 获取 react2main
   */
  getReact2main() {
    // 子应用独立运行时，在 localStorage 中获取 react2main
    return localStorage.getItem("react2main") || "";
  }

  /**
   * 设置 react2main
   */
  setReact2main(react2main) {
    localStorage.setItem("react2main", react2main);
  }
}

class SharedModule {
  /**
   * SharedModule：用于管理 shared，例如重载 shared 实例、获取 shared 实例等等；
   */

  static shared = new Shared();

  /**
   * 重载 shared
   */
  static overloadShared(shared) {
    SharedModule.shared = shared;
  }

  /**
   * 获取 shared 实例
   */
  static getShared() {
    return SharedModule.shared;
  }
}

export default SharedModule;