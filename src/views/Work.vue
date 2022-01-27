<template>
  <div class="home">
    <task-input />
    <div style="display: flex">
      <NavBar />
      <TaskList :storage="'workStorage'" />
    </div>
  </div>
</template>

<script>
import TaskInput from "../components/taskInput";
import NavBar from "../components/NavBar";
import TaskList from "../components/TaskList";
export default {
  name: "Work",
  components: { TaskList, NavBar, TaskInput },
};
</script>

<style scoped></style>
