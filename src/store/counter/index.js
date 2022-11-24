import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';
const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 5
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters 
};


export default counterModule;