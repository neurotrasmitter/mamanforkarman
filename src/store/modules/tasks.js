const taskStorage = {
  namespaced: true,
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    ADD_TASK(state, payload) {
      let id = 0;
      if (state.tasks.length != 0) {
        id = state.tasks[state.tasks.length - 1].id + 1;
      }
      if (payload.text != "") {
        state.tasks.push({
          id: id,
          text: payload.text,
          isCompleted: false,
        });
      } else {
        alert("Text field is empty");
      }
    },
    REMOVE_TASK({ tasks }, payload) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == payload.id) {
          tasks.splice(i, 1);
        }
      }
    },
    EDIT_TASK({ tasks }, payload){
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == payload.id) {
          tasks[i].text = payload.text;
        }
      }
    },
  },
  actions: {
    addTask({ commit }, text) {
      commit("ADD_TASK", {
        text: text,
      });
    },
    removeTask({ commit }, id) {
      commit("REMOVE_TASK", {
        id: id,
      });
    },
    editTask({commit}, object){
      commit("EDIT_TASK", {
        id: object.id,
        text: object.text,
      })
    }
  },
};
export default taskStorage;
