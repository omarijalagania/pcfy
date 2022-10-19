<script>
import TheButton from "../components/shared/TheButton.vue"
export default {
  components: {
    TheButton,
  },
  methods: {
    handleButtonClick() {
      this.$router.push("/client-info")
    },
  },
}
</script>

<template>
  <div class="h-screen">
    <div class="flex pt-20 flex-col justify-center items-center">
      <img alt="Vue logo" src="../assets/images/logo.png" />
      <img
        class="hidden md:block mt-40 w-[750px] h-auto object-cover"
        src="../assets/images/main.png"
        alt="main image"
      />
      <img
        class="md:hidden mt-40 w-[268px] h-[349px] object-cover"
        src="../assets/images/mobile-pc.png"
        alt="main image"
      />
      <div class="mt-20 md:mt-28 flex flex-col space-y-6">
        <TheButton
          @click="handleButtonClick"
          width="w-96"
          name="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"
        />
        <TheButton
          @click="this.$router.push('/list')"
          width="w-96"
          name="ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"
        />
      </div>
    </div>
  </div>
</template>
