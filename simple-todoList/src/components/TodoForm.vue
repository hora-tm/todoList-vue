<template>
   <div id="todo-header" class="header rounded">
        <h2 style="margin:5px">Todo List</h2>
            <div class=" d-flex align-items-center mt-3 justify-content-center">
                <input v-model="form.name" class="rounded" type="text" id="myInput" placeholder="Title...">
                <button @click="addTodoItem()" class="addBtn ml-2 my-auto h-100 rounded py-2 px-3" type="button">Add</button>
            </div>
    </div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    data() {
        return {
            form: {
                name:'',
                done:false
            }
        }
    },
       methods: {
        ...mapActions({
            addTodo :'addTodoItem'
        }),

        addTodoItem(){
            this.addTodo(this.form)
        }
       }
}
</script>

<style>
.header {
  background-color: #ceabd6;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
    /* padding: 10px; */
    /* width: 25%; */
    /* background: #d9d9d9; */
    min-height: 100%;
    color: #fff;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
  /* border-radius: 0; */
    background-color: rgb(156, 68, 173);
    border: none;
    outline: none;
    color: #fff;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>