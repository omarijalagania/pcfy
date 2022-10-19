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
    <div class="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      <PcCard />
      <PcCard />
      <PcCard />
    </div>
  </TheLayout>
</template>
