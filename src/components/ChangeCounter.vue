<template>
  <button @click="increment">Add 2!</button>
  <button @click="add">Add 11!</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        add() {
            // this.$store.dispatch('increment');
            this.increase({value:11});
        },
        ...mapActions(['increment', 'increase'])

    }
}
</script>

<style>

</style>