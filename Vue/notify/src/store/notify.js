import loadMore from '../assets/js/loadMore'
import axios from 'axios'
import { Store } from 'vuex'
export default {
    state: {
        messages: [],
        messagesMain: []
    },
    mutations: {
        setMessage (state, payload) {
            state.messages = payload
        },
        setMessageMain (state, payload) {
            state.messagesMain = payload
        },
        loadMessages (state, payload) {
            state.messagesMain = [...state.messagesMain, ...payload]
        }
    },
    actions: {
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        },
        setMessageMain ({commit}, payload) {
            commit('setMessageMain', payload)
        },
        loadMessages ({commit, getters}) {
            let res = getters.getMessageFilter
            commit('loadMessages', loadMore(res))
        },
        getNotify () {
            this.dispatch('setLoading', true)
            axios
            .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
              .then(response => {
                let res = response.data.notify,
                    messages = [],
                    messagesMain = [];
      
                for (let i = 0; i < res.length; i++) {
                  if (res[i].main) messagesMain.push(res[i])
                  else messages.push(res[i])
                }
                this.dispatch('setMessage', messages)
                this.dispatch('setMessageMain', messagesMain)
              })
              .catch(error => {
                console.log(error);
                this.error = 'Error: Network Error'
                this.dispatch('setError', this.error)
              })
              .finally(() => (this.dispatch('setLoading', false)))
        },
        getNotifyLazy() {
            this.dispatch('setLoading', true)
            setTimeout(() => {
             this.dispatch('getNotify')
           }, 1800)
        },
    },
    getters: {
        getMessage (state) {
            return state.messages
        },
        getMessageFilter (state) {
            return state.messages.filter(mes => {
                return mes.main === false
            })
        },
        getMessageMain (state) {
            return state.messagesMain
        }
    }
}