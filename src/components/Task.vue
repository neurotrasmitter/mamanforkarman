<template>
  <div>
    <b-container class="grey-fill" >
      <p v-if="isEdited">
        <input type="text" v-model="text" @keydown.esc="changeEditMode(false)" @keydown.enter="editText(text)">
        <b-icon-x class="hover-red" style="float: right"  @click="changeEditMode(false)"/>
        <b-icon-check class="hover-blue" style="float: right"  @click="editText(text)"/>
      </p>
      <p v-else>
        <input type="checkbox" v-model="taskObject.isCompleted"/>
        {{ taskObject.text }}
        <b-icon-x-circle class="hover-red" style="float: right" @click="removeTask(taskObject.id)"/>
        <b-icon-pencil class="hover-blue" style="float: right" @click="changeEditMode(true)"/>
      </p>
    </b-container>
  </div>
</template>

<script>
  import { mapActions } from "vuex"
export default {
  name: 'Task',
  props: ['taskObject'],
  data: () => ({
    isEdited: false,
    text: "",
  }),
  methods: {
    ...mapActions("locStorage", ["removeTask", "editTask"]),
    changeEditMode(mode) {
      this.isEdited = mode;
      this.text = this.taskObject.text;
    },
    editText(text){
      this.editTask({id:this.taskObject.id, text:text});
      this.changeEditMode(false);
    }
  }
};
</script>

<style scoped>
  .hover-blue {
    color: black;
  }
  .hover-blue:hover {
    color: blue;
  }
  .hover-red {
    color: black;
  }
  .hover-red:hover {
    color: red;
  }
  .grey-fill {
    background-color: grey;
    max-width: 80%;
    border-radius: 5px;
    text-align: left;
  }
</style>
