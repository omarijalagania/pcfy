<script>
import TheButton from "./shared/TheButton.vue"
export default {
  components: {
    TheButton,
  },
}
</script>

<template>
  <div class="h-screen">
    <div class="flex pt-20 pb-24 flex-col justify-center items-center">
      <img alt="Vue logo" src="../assets/images/logo.png" />
      <img class="mt-44" src="../assets/images/main.png" alt="main image" />
      <div class="mt-28 flex flex-col space-y-6">
        <TheButton name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ" />
        <TheButton name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ" />
      </div>
    </div>
  </div>
</template>
