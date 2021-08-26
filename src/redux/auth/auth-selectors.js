const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;

// const getIsLoggedIn = (state) => state.auth.isLoggedIn;

// const getUsername = (state) => state.auth.user.name;

// const getUserEmail = state => state.auth.user.email;

//  const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrent;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
//   getUserEmail,
//   getIsFetchingCurrent
// };
// export default authSelectors;
