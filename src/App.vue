<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <change-counter></change-counter>
    <button @click="add">Add 10</button>
  </base-container>
  <base-container title="auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    add() {
      // this.$store.commit('increase', {value: 10});
      this.$store.dispatch('numbers/increase', {value: 10});
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>