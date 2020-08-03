export const state = () => ({
  campeoes: [],
})

export const mutations = {
  add(state, camps) {
    state.campeoes = Object.entries(camps)
  },
}
