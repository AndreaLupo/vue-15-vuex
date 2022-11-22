<template>
  <h1>{{counter}}</h1>
  <p>We do more...</p>
</template>

<script>
export default {
    computed: {
        counter( ) {
            return this.$store.getters.normalizedCounter;
        }
    }
}
</script>

<style>

</style>