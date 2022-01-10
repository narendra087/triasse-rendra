const state = () => ({
  isLoggedIn: false,
  user: null,
})

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user,
}

const actions = {
  loginUser({ commit }, data) {
    const tempData = {
      id: 1,
      name: 'Rendra',
      image: 'img-icon-user.svg',
    }
    commit("setUser", tempData);
  },
  logoutUser({ commit }) {
    commit("clearUser");
  },
}

const mutations = {
  setUser: (state, data) => {
    state.user = data
    state.isLoggedIn = true;
  },
  clearUser: (state) => {
    state.user = null
    state.isLoggedIn = false;
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
