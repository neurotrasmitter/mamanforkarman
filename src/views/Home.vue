<template>
  <div class="home" >
    <task-input />
    <div style="display: flex">
      <NavBar />
      <TaskList :storage="'homeStorage'"/>
    </div>

  </div>
</template>

<script>
import TaskInput from '../components/taskInput';
import TaskList from "../components/TaskList";
import NavBar from "../components/NavBar";
export default {
  name: 'Home',
  components: {
    NavBar,
    TaskList,
    TaskInput,
  },
};
</script>
