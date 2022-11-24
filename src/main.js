import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 5
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        /** payload is custom, can be anything */
        increase(state, payload) {
            console.log(state);
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        /**
         * Can use asynchrounous code here!
         * @param {*} context 
         */
         increment(context) {
            setTimeout(function() {
                context.commit('increment');
            }, 1000);
        },
        increase(context, payload) {
            console.log(context);
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter;
            if(finalCounter < 0) {
                return 0;
            }
            if(finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
        testAuth(state, getters, rootState, rootGetters) {
            console.log(state, getters,rootState, rootGetters);
            return rootState.isLoggedIn;
        }
    }
};

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false});
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
