<script>
import TheLayout from "../components/shared/TheLayout.vue"
import useVuelidate from "@vuelidate/core"
import { pcValidation } from "../validations/pcValidation"
import { getBrands } from "@/services/axios"

export default {
  components: {
    TheLayout,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      brand: [],
      laptop_name: "",
    }
  },
  validations() {
    return {
      ...pcValidation,
    }
  },
  methods: {
    async submitPcData() {
      const result = await this.v$.$validate()
      if (result) {
        console.log("success")
      } else {
        console.log("error")
      }
    },
  },
  async created() {
    try {
      this.brands = await getBrands()
      console.log(this.brands)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<template>
  <TheLayout>
    <section class="bg-white w-[1280px] flex justify-center min-h-[973px]">
      <form
        @submit.prevent="submitPcData"
        class="w-[1024px] relative px-10 py-20"
      >
        <div class="flex items-center w-full justify-between">
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-red-500': v$.laptop_name.$error }"
              class="font-medium text-lg"
              for="laptop_name"
              >ლეპტოპის სახელი</label
            >
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ 'border-red-500': v$.laptop_name.$error }"
              v-model="v$.laptop_name.$model"
              placeholder="HP"
              type="text"
              id="laptop_name"
              name="laptop_name"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_name.$errors"
                :key="index"
                class="font-light text-sm text-red-500"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_name.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">
                  ლათინური ასოები, ციფრები, !@#$%^&*()_+=
                </p>
              </div>
            </div>
          </div>
          <select
            name="brand"
            id="brand"
            class="h-[60px] bg-lightGray outline-none border-2 px-5 mt-[20px] w-[360px]"
            :class="{ 'border-red-500': v$.brand.$error }"
            v-model="v$.brand.$model"
          >
            <option disabled value="">ლეპტოპის ბრენდი</option>
            <option v-for="option in brand" :key="option.id" :value="option.id">
              {{ option.name }}
            </option>
          </select>
        </div>
      </form>
    </section>
  </TheLayout>
</template>
