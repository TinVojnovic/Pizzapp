import Vuex from "vuex"

import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedMenu: [],
            shoppingCart: []
        },
        mutations: {
            loadMenu(state, menuItems) {
                state.loadedMenu = menuItems
            },
            addToCart(state, item) {
                state.shoppingCart.push(item)
            },
            removeFromCart(state, itemId){
                const id = state.shoppingCart.findIndex(id => id === itemId)
                state.shoppingCart.splice(id)
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("http://127.0.0.1:8080/menu/fetchAll")
                    .then(res => {
                        vuexContext.commit('loadMenu', res.data)
                    })
                    .catch(e => console.log(e))
            },
            addToCart(vuexContext, item){
                vuexContext.commit('addToCart', item)
            }
        },
        getters:{
            loadedMenu(state){
                return state.loadedMenu
            },
            shoppingCart(state){
                return state.shoppingCart
            }
        }
    })
}

export default createStore