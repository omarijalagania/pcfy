<script>
import PcCard from "../components/PcCard.vue"
import TheLayout from "../components/shared/TheLayout.vue"
import TheLoader from "../components/shared/TheLoader.vue"
import { getLaptops } from "../services/axios"
export default {
  components: {
    PcCard,
    TheLayout,
    TheLoader,
  },
  data() {
    return {
      laptops: [],
    }
  },
  async created() {
    try {
      this.laptops = await getLaptops()
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<template>
  <TheLayout>
    <TheLoader v-if="this.laptops.length === 0" />
    <div
      class="mt-5 md:w-[1178px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 md:mt-0"
      v-else
    >
      <div class="mx-auto" v-for="laptop in laptops" :key="laptop.laptop.id">
        <PcCard :laptop="laptop" />
      </div>
    </div>
  </TheLayout>
</template>
