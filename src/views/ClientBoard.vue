<template>
  <ClientNavbar></ClientNavbar>
  <router-view />
  <ClientFooter></ClientFooter>
</template>

<script>
// @ is an alias to /src
import ClientNavbar from '@/components/ClientNavbar.vue';
import ClientFooter from '@/components/ClientFooter.vue';
import emitter from '@/assets/methods/emitter';

export default {
  name: 'Home',
  components: {
    ClientNavbar,
    ClientFooter,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss">
@import '../assets/components/_layout.scss';
</style>
