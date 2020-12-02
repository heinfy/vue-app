const getters = {
  // getter 的返回值会根据它的依赖被缓存起来
  globalBool: state => state.globalBool,
  globalStr: state => state.globalStr,
  globalObj: state => state.globalObj,
  token: state => state.user.token
}
export default getters
