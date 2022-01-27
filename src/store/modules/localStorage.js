const locStorage = {
  namespaced: true,
  state: {
    tasks: window.localStorage.getItem("tasks")
      ? JSON.parse(window.localStorage.getItem("tasks"))
      : [],
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
        window.localStorage.setItem("tasks", JSON.stringify(state.tasks));
      } else {
        alert("Text field is empty");
      }
    },
    REMOVE_TASK({ tasks }, payload) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == payload.id) {
          tasks.splice(i, 1);
          window.localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      }
    },
    EDIT_TASK({ tasks }, payload) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == payload.id) {
          tasks[i].text = payload.text;
          window.localStorage.setItem("tasks", JSON.stringify(tasks));
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
    editTask({ commit }, object) {
      commit("EDIT_TASK", {
        id: object.id,
        text: object.text,
      });
    },
  },
};
export default locStorage;
