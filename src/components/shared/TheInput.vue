<script>
export default {
  props: ["inputClass", "type", "placeholder", "value"],
}
</script>

<template>
  <input
    class="h-[60px] w-[360px] border-blue-400 border-2 px-4 rounded-md"
    :class="inputClass"
    :type="type"
    :placeholder="placeholder"
    :value="value"
  />
</template>
