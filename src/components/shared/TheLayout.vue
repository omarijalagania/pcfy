<script>
import TheNav from "./TheNav.vue"
export default {
  components: {
    TheNav,
  },
  methods: {
    getBack() {
      this.$router.go(-1)
      setInterval(() => {
        window.location.reload()
      }, 100)
      clearInterval()
    },
  },
}
</script>

<template>
  <div
    :class="
      this.$route.path === '/list' ||
      this.$route.path === `/laptop/${this.$route.params.id}`
        ? '!bg-white'
        : ''
    "
    class="min-h-screen flex flex-col items-center bg-gray-200"
  >
    <img
      @click="this.getBack()"
      class="hidden md:block object-cover absolute left-16 top-12 cursor-pointer"
      src="../../assets/images/back.png"
      alt="back-icon"
    />

    <img
      @click="this.getBack()"
      class="block md:hidden object-cover absolute left-3 top-9 cursor-pointer"
      src="../../assets/images/mobile-arrow.png"
      alt="back-icon"
    />
    <TheNav />
    <slot></slot>
  </div>
</template>
