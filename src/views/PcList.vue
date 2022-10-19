<script>
import PcCard from "../components/PcCard.vue"
import TheLayout from "../components/shared/TheLayout.vue"
import { getLaptops } from "../services/axios"
export default {
  components: {
    PcCard,
    TheLayout,
  },
  data() {
    return {
      laptops: [],
    }
  },
  async created() {
    try {
      this.laptops = await getLaptops()
      console.log(this.laptops)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<template>
  <TheLayout>
    <div class="mt-5 mx-auto w-full md:mt-0">
      <div
        class="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16"
        v-for="laptop in laptops"
        :key="laptop.laptop.id"
      >
        <PcCard :laptop="laptop" />
      </div>
    </div>
  </TheLayout>
</template>
