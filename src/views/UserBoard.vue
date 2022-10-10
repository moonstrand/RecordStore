<template>
  <UserNavbar></UserNavbar>
  <router-view />
  <UserFooter></UserFooter>
</template>

<script>
// @ is an alias to /src
import UserNavbar from '@/components/UserNavbar.vue';
import UserFooter from '@/components/UserFooter.vue';
import emitter from '@/methods/emitter';
import toast from '@/methods/toast';

export default {
  name: 'Home',
  components: {
    UserNavbar,
    UserFooter,
  },
  provide() {
    return {
      emitter,
      toast,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_layout.scss';
</style>
