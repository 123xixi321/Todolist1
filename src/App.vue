<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-warp">
        <MyHeader :addTodo="addTodo" />
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos"  :clearAllTodo="clearAllTodo" :clearAll="clearAll"/>
      </div>
    </div>
  </div>

</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import MyList from "@/components/MyList";

export default {
  name:'App',
  components: {MyHeader,MyFooter,MyList},
  data(){
    return{
      todos :
      JSON.parse(localStorage.getItem('todos') ||'[]')
    }
  },
  methods:{
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach(todo => {
        if(todo.id === id) todo.done = !todo.done
      });
    },
    deleteTodo(id){
      this.todos = this.todos.filter( todo => todo.id !== id)
    },
    checkAllTodo(done){
      this.todos.forEach((todo) => {todo.done=done})
    },
    clearAllTodo(){
      this.todos = this.todos.filter((todo) =>{
        return !todo.done
      })
    }

  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }

  // methods: {
  //   addTodo(todoObj){
  //     this.todos.unshift(todoObj)
  //   },
  //   checkTodo(id){
  //     this.todos.forEach(todo =>{
  //       if(todo.id ===id) todo.done = !todo.done
  //     });
  //   }


}

</script>

<style>
  /*#app*/
  .todo-container{
    width:700px;
    margin: 0 auto;
}
  .todo-container .todo-warp{
    padding: 10px;
    border: 1px solid red;
    border-radius: 10px;
  }
</style>

