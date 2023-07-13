import { createSelector } from "reselect";

export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
// export const getAuth = ({ auth }) => {
//     console.log(auth)
//     const {isLogin, token} = auth;
//     return {isLogin, token};
// }

const selectAuth = ({ auth }) => auth;
export const getAuth = createSelector([selectAuth], (auth) => auth);
