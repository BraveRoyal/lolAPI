export const state = () => ({
  campeao: {
    campeoes: [],
    pageCampeao: '',
    loadingcampeoes: true,
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
}
