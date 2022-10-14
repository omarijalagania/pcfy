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
    class="h-screen relative flex flex-col justify-center items-center bg-gray-200"
  >
    <img
      class="object-cover absolute left-16 top-12 cursor-pointer"
      src="../../assets/images/back.png"
      alt="back-icon"
    />
    <TheNav />
    <slot></slot>

    <img
      class="object-cover mt-10 mb-20"
      src="../../assets/images/redberry.png"
      alt="footer"
    />
  </div>
</template>
