<template>
  <UserNavbar></UserNavbar>
  <router-view />
  <UserFooter></UserFooter>
</template>

<script>
// @ is an alias to /src
import UserNavbar from '@/components/UserNavbar.vue';
import UserFooter from '@/components/UserFooter.vue';
import emitter from '@/assets/methods/emitter';

export default {
  name: 'Home',
  components: {
    UserNavbar,
    UserFooter,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/components/_layout.scss';
</style>
