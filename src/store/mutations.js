const mutations = {
  setRegistration (state, payload) {
    state.registration = payload
  },
  setCurrentCity (state, city) {
    state.currentCity = city
  },
  setUser (state, user) {
    state.user = {...state.user, ...user}
  },
  setCityListAndCategories (state, {cityList, categories}) {
    state.cityList = cityList
    state.categories = categories
  }
}

export default mutations
