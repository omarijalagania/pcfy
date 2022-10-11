<script>
export default {
  props: ["name"],
}
</script>

<template>
  <button class="w-96 h-14 bg-blue-400 rounded-md text-white">
    {{ name }}
  </button>
</template>
