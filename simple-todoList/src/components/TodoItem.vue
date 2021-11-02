<template>
<div class="todo d-flex my-2">
    <div type="button" @click="doneItem" class="todo-item d-flex rounded w-100 mr-2" :class="{checked: todo.done}">
        <div id="todo-name">
            {{todo.name}}
        </div>       
    </div>
     <button id="remove-btn" class="px-2 py-1 rounded ml-auto" type="button" @click="removeItem">
            remove
        </button>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    props: ['todo'],
    methods: {
        ...mapActions({
            removeTodoItem: 'removeTodoItem',
            doneTodoItem: 'doneTodoItem'
        }),
        removeItem() {
            this.removeTodoItem(this.todo.id)
        },
        doneItem() {
            this.doneTodoItem({
                id: this.todo.id,
                done: this.todo.done
            })
        }
    }
}
</script>

<style>
.todo {
    margin: 0;
    padding: 0;
}

/* Style the list items */
.todo .todo-item {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    list-style-type: none;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
.todo .todo-item:nth-child(odd) {
    background: #f9f9f9;
}

/* Darker background-color on hover */
.todo .todo-item:hover {
    background: #ddd;
}

/* When clicked on, add a background color and strike out text */
.todo .todo-item.checked {
    background: rgb(160, 158, 160);
    color: rgb(235, 235, 235);
}

.todo .todo-item.checked #todo-name {
    text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
.todo .todo-item.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 16px;
    /* margin-top: auto; */
    left: 16px;
    transform: rotate(45deg);
    height: 16px;
    width: 7px;
}

#remove-btn {
    border: none;
    background-color: rgb(204, 115, 115);
    outline: none;
    color: #fff;
}
</style>
