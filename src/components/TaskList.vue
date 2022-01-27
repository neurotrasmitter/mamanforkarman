<template>
  <div>
    <b-container fluid>
      {{storage}} | {{typeof storage}}
      <b-list-group>
        <b-list-group-item v-for="task in undoneTodo" :key="task.id">
          <Task :task-object="task" />
        </b-list-group-item>
        {{ tasks }}
        <b-list-group-item v-for="task in doneTodo" :key="task.id">
          <Task :task-object="task" />
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Task from "./Task";
export default {
  name: "TaskList",
  props: ["storage"],
  components: { Task },
  computed: {
    ...mapState("familyStorage", ["tasks"]),
    doneTodo() {
      return this.tasks.filter((task) => task.isCompleted);
    },
    undoneTodo() {
      return this.tasks.filter((task) => !task.isCompleted);
    },
  },
};
</script>

<style scoped></style>
