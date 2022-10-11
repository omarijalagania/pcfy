<script>
import TheLayout from "../components/shared/TheLayout.vue"
import TheInput from "../components/shared/TheInput.vue"
export default {
  components: {
    TheLayout,
    TheInput,
  },
}
</script>

<template>
  <TheLayout>
    <section class="bg-white w-[1226px] flex justify-center h-[973px]">
      <div class="w-[1024px] px-10 py-20">
        <div class="flex flex-col space-y-1">
          <label class="font-medium text-lg" for="name">სახელი</label>
          <TheInput placeholder="გრიშა" type="text" id="name" name="name" />
        </div>
      </div>
    </section>
  </TheLayout>
</template>
