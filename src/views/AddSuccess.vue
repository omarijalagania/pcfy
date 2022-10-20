<script>
import TheButton from "../components/shared/TheButton.vue"

export default {
  components: { TheButton },
}
</script>

<template>
  <div class="h-screen flex flex-col items-center">
    <img class="object-cover" src="../assets/images/frame.png" alt="frame" />
    <h2 class="font-bold text-2xl mb-16">ჩანაწერი დამატებულია!</h2>
    <TheButton width="w-[297px]" name="სიაში გადაყვანა" />

    <router-link
      :key="$route.path"
      class="mt-7 font-medium text-xl text-[#62A1EB]"
      to="/"
      >მთავარი</router-link
    >
  </div>
</template>
