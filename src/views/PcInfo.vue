<script>
import TheLayout from "../components/shared/TheLayout.vue"
import useVuelidate from "@vuelidate/core"
import { pcValidation } from "../validations/pcValidation"
import { getBrands, getCpus } from "@/services/axios"
import TheButton from "@/components/shared/TheButton.vue"
import DropZone from "@/components/DropZone.vue"
import { addLaptop } from "../services/axios"

export default {
  components: {
    TheLayout,
    TheButton,
    DropZone,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      brands: [],
      cpus: [],
      brand: this.$store.state.brand,
      laptop_name: this.$store.state.laptop_name,
      laptop_cpu: this.$store.state.laptop_cpu,
      laptop_cpu_cores: this.$store.state.laptop_cpu_cores,
      laptop_cpu_threads: this.$store.state.laptop_cpu_threads,
      laptop_ram: this.$store.state.laptop_ram,
      laptop_hard_drive_type: this.$store.state.laptop_hard_drive_type,
      laptop_purchase_date: this.$store.state.laptop_purchase_date,
      laptop_price: this.$store.state.laptop_price,
      laptop_state: this.$store.state.laptop_state,
      laptop_image: "",
      showUploadAgain: false,
      isError: false,
      localStorageData: {},
      filteredCpu: [],
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

      if (
        result ||
        this.laptop_image !== "" ||
        this.$store.state.validateClient !== true
      ) {
        this.isError = false
        const data = {
          name: this.localStorageData.name,
          surname: this.localStorageData.surname,
          team_id: this.localStorageData.team,
          position_id: this.localStorageData.position,
          phone_number: this.localStorageData.phone_number,
          email: this.localStorageData.email,
          token: process.env.VUE_APP_TOKEN,
          laptop_name: this.localStorageData.laptop_name,
          laptop_cpu: this.filteredCpu[0].name,
          laptop_cpu_cores: this.localStorageData.laptop_cpu_cores,
          laptop_cpu_threads: this.localStorageData.laptop_cpu_threads,
          laptop_ram: this.localStorageData.laptop_ram,
          laptop_hard_drive_type: this.localStorageData.laptop_hard_drive_type,
          laptop_purchase_date: this.localStorageData.laptop_purchase_date,
          laptop_price: +this.localStorageData.laptop_price,
          laptop_image: this.laptop_image,
          laptop_brand_id: this.localStorageData.brand,
          laptop_state:
            this.localStorageData.laptop_state === "???????????????" ? "new" : "used",
        }

        try {
          if (this.localStorageData !== {}) {
            const response = await addLaptop(data)
            if (response.status === 200) {
              this.$router.push("/success")
            }
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        this.isError = true
        console.log("error")
      }
    },
    drop($e) {
      this.laptop_image = $e.dataTransfer.files[0]

      this.showUploadAgain = true
    },

    selectedFile() {
      this.laptop_image = document.querySelector(".dropzoneFile").files[0]
      this.showUploadAgain = true
    },
  },
  watch: {
    brand() {
      this.$store.commit("addBrand", this.brand)
    },
    laptop_name() {
      this.$store.commit("addLaptopName", this.laptop_name)
    },
    laptop_cpu() {
      this.$store.commit("addLaptopCpu", this.laptop_cpu)
    },
    laptop_cpu_cores() {
      this.$store.commit("addLaptopCpuCores", this.laptop_cpu_cores)
    },
    laptop_cpu_threads() {
      this.$store.commit("addLaptopCpuThreads", this.laptop_cpu_threads)
    },
    laptop_ram() {
      this.$store.commit("addLaptopRam", this.laptop_ram)
    },
    laptop_hard_drive_type() {
      this.$store.commit("addLaptopHardDriveType", this.laptop_hard_drive_type)
    },
    laptop_purchase_date() {
      this.$store.commit("addLaptopPurchaseDate", this.laptop_purchase_date)
    },
    laptop_price() {
      this.$store.commit("addLaptopPrice", this.laptop_price)
    },
    laptop_state() {
      this.$store.commit("addLaptopState", this.laptop_state)
    },
    laptop_image() {
      if (this.laptop_image !== "") {
        this.isError = false
      }
    },
  },
  async created() {
    this.localStorageData = JSON.parse(localStorage.getItem("vuex"))
    try {
      this.brands = await getBrands()
      this.cpus = await getCpus()
    } catch (error) {
      console.log(error)
    }
    if (this.localStorageData !== {}) {
      this.filteredCpu = this.cpus.filter(
        (cpu) => cpu.id === this.localStorageData.laptop_cpu,
      )
    }
  },
}
</script>

<template>
  <TheLayout>
    <section class="bg-white w-full md:w-[1280px] md:mb-32 flex justify-center">
      <form
        encType="multipart/form-data"
        @submit.prevent="submitPcData"
        class="md:w-[1024px] relative md:px-10 md:py-20"
      >
        <div class="flex justify-center w-full mb-3">
          <DropZone
            :laptopImage="this.laptop_image"
            :showUpload="this.showUploadAgain"
            :isError="this.isError"
            @drop.prevent="drop"
            @change="selectedFile"
          />
        </div>
        <div
          v-if="this.showUploadAgain"
          class="flex justify-between items-center"
        >
          <div class="flex">
            <div class="truncate space-x-2 flex max-w-[100px] md:max-w-[200px]">
              <img
                class="object-cover"
                src="./../assets/images/check.png"
                alt="checked"
              />
              <p>{{ this.laptop_image.name }}</p>
            </div>
            <p class="ml-2">
              {{ (this.laptop_image.size / 1048576).toFixed(1) }} MB
            </p>
          </div>
          <label
            class="w-[187px] md:w-[233px] flex text-lg md:text-xl font-medium justify-center items-center rounded-md text-white h-[46px] md:h-[60px] bg-blue-400"
            for="dropzoneFile"
            >????????????????????? ?????????????????????
          </label>
        </div>
        <div
          class="flex md:flex-row flex-col items-center w-full justify-between"
        >
          <div class="flex flex-col mt-7 md:mt-0 space-y-1">
            <label
              :class="{ 'text-redError': v$.laptop_name.$error }"
              class="font-medium text-lg"
              for="laptop_name"
              >???????????????????????? ??????????????????</label
            >
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ '!border-redError': v$.laptop_name.$error }"
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
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_name.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">
                  ???????????????????????? ??????????????????, ?????????????????????, !@#$%^&*()_+=
                </p>
              </div>
            </div>
          </div>
          <select
            name="brand"
            id="brand"
            class="h-[60px] appearance-none bg-lightGray outline-none border-2 px-5 mt-10 md:mt-[20px] w-[360px]"
            :class="{ 'border-redError': v$.brand.$error }"
            v-model="v$.brand.$model"
          >
            <option disabled value="">???????????????????????? ??????????????????</option>
            <option
              v-for="option in brands"
              :key="option.id"
              :value="option.id"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div
          class="w-[360px] mx-auto md:mx-0 md:w-full h-[2px] md:mt-20 my-8 md:mb-16 bg-[#C7C7C7]"
        />
        <div class="flex md:flex-row flex-col item-center justify-between">
          <select
            name="laptop_cpu"
            id="laptop_cpu"
            class="h-[60px] appearance-none bg-lightGray outline-none border-2 px-5 md:mt-[53px] w-[360px] md:w-[280px]"
            :class="{ 'border-redError': v$.laptop_cpu.$error }"
            v-model="v$.laptop_cpu.$model"
          >
            <option disabled value="">CPU</option>
            <option v-for="option in cpus" :key="option.id" :value="option.id">
              {{ option.name }}
            </option>
          </select>
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-redError': v$.laptop_cpu_cores.$error }"
              class="font-medium text-lg mt-5"
              for="laptop_name"
              >CPU ??????????????????</label
            >
            <input
              class="h-[60px] w-[360px] md:w-[270px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ '!border-redError': v$.laptop_cpu_cores.$error }"
              v-model="v$.laptop_cpu_cores.$model"
              placeholder="16"
              type="number"
              id="laptop_cpu_cores"
              name="laptop_cpu_cores"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_cpu_cores.$errors"
                :key="index"
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_cpu_cores.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">?????????????????? ?????????????????????</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-redError': v$.laptop_cpu_threads.$error }"
              class="font-medium text-lg mt-7 md:mt-5"
              for="laptop_name"
              >CPU-??? ??????????????????</label
            >
            <input
              class="h-[60px] w-[360px] md:w-[270px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ '!border-redError': v$.laptop_cpu_threads.$error }"
              v-model="v$.laptop_cpu_threads.$model"
              placeholder="0000"
              type="number"
              id="laptop_cpu_threads"
              name="laptop_cpu_threads"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_cpu_threads.$errors"
                :key="index"
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div
                v-if="v$.laptop_cpu_threads.$errors.length === 0"
                class="h-1"
              >
                <p class="font-light text-sm text-gray-500">?????????????????? ?????????????????????</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col mt-7 md:mt-28">
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-redError': v$.laptop_ram.$error }"
              class="font-medium text-lg"
              for="laptop_name"
              >???????????????????????? RAM (GB)</label
            >
            <input
              class="h-[60px] w-[360px] md:w-[400px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ '!border-redError': v$.laptop_ram.$error }"
              v-model="v$.laptop_ram.$model"
              placeholder="16"
              type="number"
              id="laptop_ram"
              name="laptop_ram"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_ram.$errors"
                :key="index"
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_ram.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">
                  ???????????????????????? RAM (GB)
                </p>
              </div>
            </div>
          </div>
          <div class="mt-7 md:mt-0 md:ml-20">
            <p
              :class="{ 'text-redError': v$.laptop_hard_drive_type.$error }"
              class="font-medium flex items-center text-lg"
            >
              ????????????????????????????????? ????????????
              <img
                v-if="v$.laptop_hard_drive_type.$error"
                class="w-5 h-5 ml-3"
                src="../assets/images/warning.png"
                alt="warning"
              />
            </p>
            <div class="flex space-x-12 items-center mt-5">
              <div>
                <input
                  type="radio"
                  v-model="v$.laptop_hard_drive_type.$model"
                  value="SSD"
                  name="laptop_hard_drive_type"
                  id="SSD"
                />
                <label class="ml-3 font-normal text-lg" for="SSD">SSD</label>
              </div>

              <div>
                <input
                  type="radio"
                  v-model="v$.laptop_hard_drive_type.$model"
                  value="HDD"
                  name="laptop_hard_drive_type"
                  id="HDD"
                />
                <label class="ml-3 font-normal text-lg" for="SSD">HDD</label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-[360px] mx-auto md:mx-0 md:w-full h-[2px] my-7 md:my-0 md:mt-20 md:mb-16 bg-[#C7C7C7]"
        />

        <div class="flex md:flex-row flex-col items-center justify-between">
          <div class="flex flex-col space-y-1">
            <label class="font-medium text-lg" for="laptop_purchase_date"
              >????????????????????? ?????????????????? (????????????????????????)</label
            >
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ 'border-redError': v$.laptop_purchase_date.$error }"
              v-model="v$.laptop_purchase_date.$model"
              placeholder="?????? / ?????? / ????????????"
              type="date"
              id="laptop_purchase_date"
              name="laptop_purchase_date"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-redError': v$.laptop_price.$error }"
              class="font-medium mt-7 md:mt-0 text-lg"
              for="laptop_price"
              >???????????????????????? ????????????</label
            >
            <div class="relative">
              <input
                class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
                :class="{ '!border-redError': v$.laptop_price.$error }"
                v-model="v$.laptop_price.$model"
                placeholder="0000"
                type="text"
                id="laptop_price"
                name="laptop_price"
              />
              <p
                class="text-gray-400 absolute right-5 top-1/2 -translate-y-1/2"
              >
                ???
              </p>
            </div>
            <div class="h-1">
              <p
                v-for="(error, index) of v$.laptop_price.$errors"
                :key="index"
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.laptop_price.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">?????????????????? ?????????????????????</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-7 md:mt-24">
          <p
            :class="{ 'text-redError': v$.laptop_state.$error }"
            class="font-medium text-lg"
          >
            ???????????????????????? ?????????????????????????????????
          </p>
          <div class="flex space-x-12 items-center mt-5">
            <div>
              <input
                type="radio"
                v-model="v$.laptop_state.$model"
                value="???????????????"
                name="laptop_state"
                id="new"
              />
              <label class="ml-3 font-normal text-lg" for="new">???????????????</label>
            </div>

            <div>
              <input
                type="radio"
                v-model="v$.laptop_state.$model"
                value="?????????????????????"
                name="laptop_state"
                id="secondary"
              />
              <label class="ml-3 font-normal text-lg" for="secondary"
                >?????????????????????</label
              >
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mb-10 md:mb-0 mt-24">
          <p
            @click="this.$router.push('/client-info')"
            class="font-medium text-lg text-blue-400 cursor-pointer"
          >
            ????????????
          </p>
          <TheButton width="w-[162px] md:w-[219px]" name="????????????????????????????????????" />
        </div>
      </form>
    </section>
  </TheLayout>
</template>
