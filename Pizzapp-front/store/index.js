import Vuex from "vuex"

import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedMenu: []
        },
        mutations: {
            loadMenu(state, menuItems) {
                state.loadedMenu = menuItems
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("http://127.0.0.1:8080/menu/fetchAll")
                    .then(res => {
                        vuexContext.commit('loadMenu', res.data)
                    })
                    .catch(e => console.log(e))
            }
        },
        getters:{
            loadedMenu(state){
                return state.loadedMenu
            }
        }
    })
}

export default createStore