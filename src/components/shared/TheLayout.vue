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
    class="min-h-screen flex flex-col justify-center items-center bg-gray-200"
  >
    <TheNav />
    <slot></slot>
  </div>
</template>
