<template>
  <ServerNavbar></ServerNavbar>
  <router-view />
</template>

<script>
import ServerNavbar from '../components/ServerNavbar.vue';

export default {
  components: {
    ServerNavbar,
  },
};
</script>

<style lang="scss">
@import '../assets/components/_navbar.scss';
</style>
