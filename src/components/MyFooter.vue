<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTodo}}</span>/全部{{total}}</span>
    <button class="btn btn-danger" @click="clearAllTodo">清除已完成的任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos','checkAllTodo','todo'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTodo(){
      return this.todos.reduce((pre,todo) => pre + (todo.done ? 1:0),0);
    },
    isAll:{
      get(){
        return this.total === this.doneTodo && this.total > 0;
      },
      set(value){
        this.checkAllTodo(value);
      }
    }
  },
  // methods:{
  //   clearAll(){
  //     this.checkAllTodo()
  //   }
  // }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label{
    position: relative;
    top: 1px;
  }
  .todo-footer label input {
    position: relative;
    top: 0px;
    cursor: pointer;
  }
  .todo-footer button {
    float: right;
    margin-top: 10px;
    background: yellowgreen;
  }
</style>