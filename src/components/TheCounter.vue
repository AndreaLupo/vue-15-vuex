<template>
  <h3>TheCounter: {{finalCounter}}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        /* counter( ) {
            return this.$store.getters.finalCounter;

        }, */
        ...mapGetters('numbers' ,['final-counter'])
    }
}
</script>

<style>

</style>