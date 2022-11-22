import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        /** payload is custom, can be anything */
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
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
        }
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
        }
    }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
