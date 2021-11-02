import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[]
  },
  mutations: {
    SET_TODOS(state,val){
      state.todos = val
    }
  },
  actions: {
    async getTodos({commit}){
           await axios.get("http://localhost:3001/todos")
                .then(res => {
                  commit('SET_TODOS', res.data)
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })      
    },
    async addTodoItem({dispatch},item){
      await axios.post("http://localhost:3001/todos",item)
                .then(res => {
                  dispatch('getTodos')
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
    },
    async removeTodoItem({dispatch},id){
      await axios.delete("http://localhost:3001/todos/"+id)
        .then(res => {
          dispatch('getTodos')
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    async doneTodoItem({dispatch},payload){
      await axios.patch('http://localhost:3001/todos/'+ payload.id, {
        done: !payload.done
      })
        .then(res => {
          dispatch('getTodos')
        })
        .catch(err => {
            console.log(err.response)
        })
    }
  },
  modules: {
  },
  getters: {
    todos(state) {
        return state.todos
    },
  }
})
