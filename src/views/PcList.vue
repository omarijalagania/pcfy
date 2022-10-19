<script>
import PcCard from "../components/PcCard.vue"
import TheLayout from "../components/shared/TheLayout.vue"
export default {
  components: {
    PcCard,
    TheLayout,
  },
}
</script>

<template>
  <TheLayout>
    <div class="mt-5 mx-auto w-full md:mt-0">
      <div
        class="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16"
      >
        <PcCard />
        <PcCard />
        <PcCard />
      </div>
    </div>
  </TheLayout>
</template>
