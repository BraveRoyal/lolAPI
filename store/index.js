export const state = () => ({
  campeao: {
    campeoes: [],
    loadingcampeoes: true,
    campeao: '',
  },
})

export const mutations = {
  add(state, camps) {
    state.campeao.campeoes = Object.entries(camps)
    state.campeao.loadingcampeoes = false
  },
  addCampeao(state, camp) {
    state.campeao.campeao = camp
  },
}
