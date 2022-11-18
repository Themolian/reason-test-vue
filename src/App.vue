<template>
  <div id="app">
    <Header />
    <Hero />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/global/Header.vue";
import Hero from "@/components/global/Hero.vue";
export default {
  components: {
    Header,
    Hero
  }
}
</script>
