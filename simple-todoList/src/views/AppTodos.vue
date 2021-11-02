<template>
<div class="">
    <div id="todo-container" class="mt-5 mx-auto rounded shadow-sm p-4">
        <todo-form></todo-form>
        <div v-for="todo in todos" :key="todo.id">
            <todo-item :todo="todo"></todo-item>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

import TodoForm from '@/components/TodoForm'
import TodoItem from '@/components/TodoItem'

export default {
    components: {
        TodoForm,
        TodoItem
    },
    mounted() {
        this.getTodos()
    },
    methods: {
        ...mapActions({
            getTodos: 'getTodos',
        }),

    },
    computed: {
        ...mapGetters({
            todos: 'todos'
        })
    },

}
</script>

<style scoped>

#todo-container{
  background-color: #fff;
  max-width: 700px;
}
/* Remove margins and padding from the list */

/* Style the close button */
/* .close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #5ca19e;
  color: white;
} */

/* Style the header */
</style>
