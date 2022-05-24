export const state = () => ({
  campeao: {
    campeoes: [],
    loadingcampeoes: true,
    campeao: "",
    searchn: "",
  },
});

export const mutations = {
  add(state, camps) {
    state.campeao.campeoes = Object.entries(camps);
    state.campeao.loadingcampeoes = false;
  },
  addCampeao(state, camp) {
    state.campeao.campeao = camp;
  },
  addSearchn(state, searchn) {
    state.campeao.searchn = searchn;
  },
};
