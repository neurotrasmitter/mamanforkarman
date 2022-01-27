const familyStorage = {
  namespaced: true,
  state: {
    tasks: window.localStorage.getItem("familyTasks")
      ? JSON.parse(window.localStorage.getItem("familyTasks"))
      : [],
  },
  getters: {},
  mutations: {
    ADD_TASK({tasks}, payload) {
      let id = 0;
      if (tasks.length != 0) {
        id = tasks[tasks.length - 1].id + 1;
      }
      if (payload.text != "") {
        tasks.push({
          id: id,
          text: payload.text,
          isCompleted: false,
        });
        window.localStorage.setItem("familyTasks", JSON.stringify(tasks));
      } else {
        alert("Text field is empty");
      }
    },
    REMOVE_TASK({ tasks }, payload) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == payload.id) {
          tasks.splice(i, 1);
          window.localStorage.setItem("familyTasks", JSON.stringify(tasks));
        }
      }
    },
    EDIT_TASK({ tasks }, payload) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == payload.id) {
          tasks[i].text = payload.text;
          window.localStorage.setItem("familyTasks", JSON.stringify(tasks));
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
export default familyStorage;
