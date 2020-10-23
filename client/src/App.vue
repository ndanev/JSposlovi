<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
