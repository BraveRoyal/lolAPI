export const state = () => ({
  campeoes: [],
  pageCampeao: '',
})

export const mutations = {
  add(state, camps) {
    state.campeoes = Object.entries(camps)
  },
  addPage(state, id) {
    state.pageCampeao = id
  },
}
