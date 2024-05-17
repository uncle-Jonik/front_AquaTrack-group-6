export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => {
    return state.user.userInfo;
};

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectAccessToken = (state) => state.user.accessToken;

export const selectRefreshToken = (state) => state.user.refreshToken;