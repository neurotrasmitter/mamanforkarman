import Vue from 'vue';
import Vuex from 'vuex';
import homeStorage from "./modules/HomeStorage";
import familyStorage from "./modules/FamilyStorage";
import workStorage from "./modules/WorkStorage";
import locStorage from "./modules/localStorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    homeStorage,
    familyStorage,
    workStorage,
    locStorage,
  },
});
