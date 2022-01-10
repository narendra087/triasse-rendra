const state = () => ({
  activeFilter: {
    province: '',
    city: '',
    examination: '',
  },
})

const getters = {
  activeFilter: (state) => state.activeFilter,
}

const actions = {
  updateFilter({ commit }, data) {
    commit("setFilter", data);
  }
}

const mutations = {
  setFilter: (state, data) => {
    state.activeFilter[data.target] = data.filter
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
