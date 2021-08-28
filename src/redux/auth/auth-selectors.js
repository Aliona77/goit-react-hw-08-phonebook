const getIsLogin = (state) => state.auth.isLogin;

const getUserName = (state) => state.auth.user.name;

const authSelectors = {
  getIsLogin,
  getUserName,
};
export default authSelectors;
