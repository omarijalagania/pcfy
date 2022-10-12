<script>
import TheLayout from "../components/shared/TheLayout.vue"
import { getTeams, getPositions } from "../services/axios"
import TheButton from "@/components/shared/TheButton.vue"
import useVuelidate from "@vuelidate/core"
import { clientValidation } from "../validations/clientValidation"

export default {
  components: {
    TheLayout,

    TheButton,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      teams: [],
      positions: [],
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      team: "",
      position: "",
    }
  },
  methods: {
    async submitData() {
      const result = await this.v$.$validate()
      if (result) {
        console.log("success")
      } else {
        console.log("error")
      }
    },
  },
  validations() {
    return {
      ...clientValidation,
    }
  },
  async created() {
    try {
      this.teams = await getTeams()
      this.positions = await getPositions()
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<template>
  <TheLayout>
    <section class="bg-white w-[1226px] flex justify-center h-[973px]">
      <form
        @submit.prevent="submitData"
        class="w-[1024px] relative px-10 py-20"
      >
        <div class="flex justify-between items-center">
          <div class="flex flex-col space-y-1">
            <label class="font-medium text-lg" for="name">სახელი</label>
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              v-model="v$.name.$model"
              placeholder="გრიშა"
              type="text"
              id="name"
              name="name"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.name.$errors"
                :key="index"
                class="font-light text-sm text-gray-500"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <label class="font-medium text-lg" for="surname">გვარი</label>
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              placeholder="ბაგრატიონი"
              v-model="v$.surname.$model"
              type="text"
              id="surname"
              name="surname"
            />
            <div class="h-1">
              <p
                v-for="(error, index) of v$.surname.$errors"
                :key="index"
                class="font-light text-sm text-gray-500"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>
        <select
          name="team"
          id="team"
          class="h-[60px] bg-lightGray my-[52px] w-full"
          v-model="v$.team.$model"
        >
          <option v-for="option in teams" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
          <div class="h-1">
            <p
              v-for="(error, index) of v$.team.$errors"
              :key="index"
              class="font-light text-sm text-gray-500"
            >
              {{ error.$message }}
            </p>
          </div>
        </select>
        <select class="h-[60px] bg-lightGray mb-[52px] w-full">
          <option
            v-for="option in positions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </select>
        <div class="flex flex-col space-y-1">
          <label class="font-medium text-lg" for="email">მეილი</label>
          <input
            class="h-[60px] w-full border-blue-400 border-2 px-4 outline-none rounded-md"
            placeholder="grish666@redberry.ge"
            type="email"
            id="email"
            name="email"
            v-model="v$.email.$model"
          />
          <div class="h-1">
            <p
              v-for="(error, index) of v$.email.$errors"
              :key="index"
              class="font-light text-sm text-gray-500"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>

        <div class="flex flex-col mt-[52px] space-y-1">
          <label class="font-medium text-lg" for="phone_number"
            >ტელეფონის ნომერი</label
          >
          <input
            class="h-[60px] w-full border-blue-400 border-2 px-4 outline-none rounded-md"
            placeholder="+995 598 00 07 01"
            type="text"
            id="phone_number"
            name="phone_number"
            v-model="v$.phone_number.$model"
          />
          <div class="h-1">
            <p
              v-for="(error, index) of v$.phone_number.$errors"
              :key="index"
              class="font-light text-sm text-gray-500"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="mt-[150px] absolute px-10 right-0">
          <TheButton width="w-[176px]" name="შემდეგი" />
        </div>
      </form>
    </section>
  </TheLayout>
</template>
