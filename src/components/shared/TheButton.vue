<script>
export default {
  props: ["name", "width"],
}
</script>

<template>
  <button :class="width" class="h-14 text-xl bg-blue-400 rounded-md text-white">
    {{ name }}
  </button>
</template>
