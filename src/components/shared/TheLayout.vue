<script>
import TheNav from "./TheNav.vue"
export default {
  components: {
    TheNav,
  },
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-200">
    <img
      @click="this.$router.back()"
      class="hidden md:block object-cover absolute left-16 top-12 cursor-pointer"
      src="../../assets/images/back.png"
      alt="back-icon"
    />
    <img
      @click="this.$router.back()"
      class="block md:hidden object-cover absolute left-3 top-10 cursor-pointer"
      src="../../assets/images/mobile-arrow.png"
      alt="back-icon"
    />
    <TheNav />
    <slot></slot>
  </div>
</template>
