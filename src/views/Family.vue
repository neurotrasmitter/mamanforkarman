<template>
  <div class="home">
    <task-input />
    <div style="display: flex">
      <NavBar />
      <TaskList :storage="'familyStorage'" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import TaskList from "../components/TaskList";
import TaskInput from "../components/taskInput";
export default {
  name: "Family",
  components: { TaskInput, TaskList, NavBar },
};
</script>

<style scoped></style>
