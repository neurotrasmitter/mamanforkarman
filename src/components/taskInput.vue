<template>
  <div @keydown.enter="addTaskAndRefreshTextField(text)">
    <p>
      <input type="text" v-model="text" /><button
        @click="addTaskAndRefreshTextField(text)"
      >
        submit
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "taskInput",
  data: () => ({
    text: "",
  }),
  methods: {
    ...mapActions("familyStorage", ["addTask"]),
    addTaskAndRefreshTextField(text) {
      this.addTask(text);
      this.text = "";
    },
  },
};
</script>

<style scoped></style>
