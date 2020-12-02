
const state = {
  globalBool: false,
  globalStr: '全局数据',
  globalObj: {
    name: '胡图图',
    age: 10
  }
}

const mutations = {
  SET_GLOBAL_BOOL: state => {
    state.globalBool = !state.globalBool
  },
  SET_GLOBAL_STR: (state, globalStr) => {
    state.globalStr = globalStr
  },
  SET_GLOBAL_OBJ: (state, globalObj) => {
    if(globalObj.name) state.globalObj.name = globalObj.name
    if(globalObj.age) state.globalObj.age = globalObj.age
  }
}

const actions = {
  // globalBool
  setGlobalBool({ commit }) {
    commit('SET_GLOBAL_BOOL')
  },
  syncSetGlobalBool({ commit }) {
    commit('SET_GLOBAL_BOOL')
  },
  async asyncSetGlobalBool({ commit, dispatch }) {
    // commit('SET_GLOBAL_BOOL')
    await dispatch('getInfo')
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_GLOBAL_BOOL')
        console.log(state.globalBool)
        resolve()
      }, 2000)
    })
    // ajax
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     commit('SET_GLOBAL_BOOL')
    //     resolve(response)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },
  // globalStr
  setGlobalStr({ commit }, globalStr) {
    commit('SET_GLOBAL_STR', globalStr)
  },
  syncSetGlobalStr({ commit }, globalStr) {
    commit('SET_GLOBAL_STR', globalStr)
  },
  async asyncSetGlobalStr({ commit, dispatch }, globalStr) {
    // commit('SET_GLOBAL_STR', globalStr)
    await dispatch('getInfo1', globalStr)
  },
  getInfo1({ commit, state }, globalStr) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_GLOBAL_STR', globalStr)
        console.log(state.globalStr)
        resolve()
      }, 2000)
    })
  },
  // globalObj
  setGlobalObj({ commit }, { globalObj }) {
    commit('SET_GLOBAL_OBJ', globalObj)
  },
  syncSetGlobalObj({ commit }, { globalObj }) {
    setTimeout(() => {
      commit('SET_GLOBAL_OBJ', globalObj)
    }, 2000)
  },
  async asyncSetGlobalObj({ commit, dispatch }, globalObj) {
    // commit('SET_GLOBAL_OBJ', globalObj)
    await dispatch('getInfo1', globalObj)
  },
  getInfo2({ commit, state }, globalObj) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_GLOBAL_OBJ', globalObj)
        console.log(state.globalObj)
        resolve()
      }, 2000)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
