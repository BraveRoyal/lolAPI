export const state = () => ({
  campeao: {
    campeoes: [],
    pageCampeao: '',
    loadingcampeoes: true,
    campeao: {},
  },
})

export const mutations = {
  add(state, camps) {
    state.campeao.campeoes = Object.entries(camps)
    state.campeao.loadingcampeoes = false
  },
  addPage(state, id) {
    state.campeao.pageCampeao = id
  },
  addCampeao(state, camp) {
    state.campeao.campeao = camp
  },
}
