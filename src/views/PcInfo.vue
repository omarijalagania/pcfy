<script>
import TheLayout from "../components/shared/TheLayout.vue"
import useVuelidate from "@vuelidate/core"
import { pcValidation } from "../validations/pcValidation"
import { getBrands, getCpus } from "@/services/axios"

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
      cpu: [],
      laptop_name: "",
      laptop_cpu_cores: 14,
      laptop_cpu_threads: 365,
      laptop_ram: 16,
      laptop_hard_drive_type: "",
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
      this.brand = await getBrands()
      this.cpu = await getCpus()
      console.log(this.brand)
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
        <div class="w-full h-[2px] mt-20 mb-16 bg-[#C7C7C7]" />
        <div class="flex item-center justify-between">
          <select
            name="laptop_cpu"
            id="laptop_cpu"
            class="h-[60px] bg-lightGray outline-none border-2 px-5 mt-[32px] w-[270px]"
            :class="{ 'border-red-500': v$.laptop_cpu.$error }"
            v-model="v$.laptop_cpu.$model"
          >
            <option disabled value="">CPU</option>
            <option v-for="option in cpu" :key="option.id" :value="option.id">
              {{ option.name }}
            </option>
          </select>
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-red-500': v$.laptop_cpu_cores.$error }"
              class="font-medium text-lg"
              for="laptop_name"
              >ლეპტოპის სახელი</label
            >
            <input
              class="h-[60px] w-[270px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ 'border-red-500': v$.laptop_cpu_cores.$error }"
              v-model="v$.laptop_cpu_cores.$model"
              placeholder="HP"
              type="number"
              id="laptop_cpu_cores"
              name="laptop_cpu_cores"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_cpu_cores.$errors"
                :key="index"
                class="font-light text-sm text-red-500"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_cpu_cores.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">მხოლოდ ციფრები</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-red-500': v$.laptop_cpu_threads.$error }"
              class="font-medium text-lg"
              for="laptop_name"
              >CPU-ს ნაკადი</label
            >
            <input
              class="h-[60px] w-[270px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ 'border-red-500': v$.laptop_cpu_threads.$error }"
              v-model="v$.laptop_cpu_threads.$model"
              placeholder="HP"
              type="number"
              id="laptop_cpu_threads"
              name="laptop_cpu_threads"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_cpu_threads.$errors"
                :key="index"
                class="font-light text-sm text-red-500"
              >
                {{ error.$message }}
              </p>
              <div
                v-if="v$.laptop_cpu_threads.$errors.length === 0"
                class="h-1"
              >
                <p class="font-light text-sm text-gray-500">მხოლოდ ციფრები</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-28">
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-red-500': v$.laptop_ram.$error }"
              class="font-medium text-lg"
              for="laptop_name"
              >CPU-ს ნაკადი</label
            >
            <input
              class="h-[60px] w-[400px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ 'border-red-500': v$.laptop_ram.$error }"
              v-model="v$.laptop_ram.$model"
              placeholder="HP"
              type="number"
              id="laptop_ram"
              name="laptop_ram"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_ram.$errors"
                :key="index"
                class="font-light text-sm text-red-500"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_ram.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">
                  ლეპტოპის RAM (GB)
                </p>
              </div>
            </div>
          </div>
          <input type="radio" />
        </div>
      </form>
    </section>
  </TheLayout>
</template>
