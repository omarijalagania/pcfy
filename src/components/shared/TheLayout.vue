<script>
import TheNav from "./TheNav.vue"
export default {
  components: {
    TheNav,
  },
}
</script>

<template>
  <div
    class="min-h-screen relative flex flex-col justify-center items-center bg-gray-200"
  >
    <img
      class="object-cover absolute left-16 top-12 cursor-pointer"
      src="../../assets/images/back.png"
      alt="back-icon"
    />
    <TheNav />
    <slot></slot>
  </div>
</template>
