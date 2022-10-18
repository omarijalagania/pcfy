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
      name: this.$store.state.name,
      surname: this.$store.state.surname,
      email: this.$store.state.email,
      phone_number: this.$store.state.phone_number,
      team: this.$store.state.team,
      position: this.$store.state.position,
      isValid: false,
    }
  },

  methods: {
    async submitData() {
      const result = await this.v$.$validate()
      if (result) {
        this.$store.commit("validateClient", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone_number: this.phone_number,
          team: this.team,
          position: this.position,
        })
        this.$store.commit("validateClient", true)
        this.$router.push("/pc-info")
      } else {
        this.$store.commit("validateClient", false)
      }
    },
  },
  watch: {
    name() {
      this.$store.commit("addName", this.name)
      if (this.v$.name.$invalid) {
        this.$store.commit("validateClient", false)
      } else {
        this.$store.commit("validateClient", true)
      }
    },
    surname() {
      this.$store.commit("addSurname", this.surname)
      if (this.v$.surname.$invalid) {
        this.$store.commit("validateClient", false)
      } else {
        this.$store.commit("validateClient", true)
      }
    },
    email() {
      this.$store.commit("addEmail", this.email)
      if (this.v$.email.$invalid) {
        this.$store.commit("validateClient", false)
      } else {
        this.$store.commit("validateClient", true)
      }
    },
    phone_number() {
      this.$store.commit("addPhoneNumber", this.phone_number)
      if (this.v$.phone_number.$invalid) {
        this.$store.commit("validateClient", false)
      } else {
        this.$store.commit("validateClient", true)
      }
    },
    team() {
      this.$store.commit("addTeam", this.team)
      if (this.v$.team.$invalid) {
        this.$store.commit("validateClient", false)
      } else {
        this.$store.commit("validateClient", true)
      }
    },
    position() {
      this.$store.commit("addPosition", this.position)
      if (this.v$.position.$invalid) {
        this.$store.commit("validateClient", false)
      } else {
        this.$store.commit("validateClient", true)
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
    <section
      class="bg-white md:w-[1280px] md:h-[973px] md:mb-32 flex justify-center"
    >
      <form
        @submit.prevent="submitData"
        class="md:w-[1024px] relative pt-10 md:px-10 md:pt-20"
      >
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col space-y-1">
            <label
              :class="{ 'text-redError': v$.name.$error }"
              class="font-medium text-lg"
              for="name"
              >სახელი</label
            >
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ '!border-redError': v$.name.$error }"
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
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.name.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </p>
              </div>
            </div>
          </div>
          <div class="flex mt-8 md:mt-0 flex-col space-y-1">
            <label
              :class="{ 'text-redError': v$.surname.$error }"
              class="font-medium text-lg"
              for="surname"
              >გვარი</label
            >
            <input
              class="h-[60px] w-[360px] border-blue-400 border-2 px-4 outline-none rounded-md"
              :class="{ '!border-redError': v$.surname.$error }"
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
                class="font-light text-sm text-redError"
              >
                {{ error.$message }}
              </p>
              <div v-if="v$.surname.$errors.length === 0" class="h-1">
                <p class="font-light text-sm text-gray-500">
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </p>
              </div>
            </div>
          </div>
        </div>
        <select
          name="team"
          id="team"
          class="h-[60px] appearance-none bg-lightGray outline-none border-2 mx-5 px-5 mt-[40px] md:mt-[52px] w-[360px] md:mx-0 md:w-full"
          :class="{ 'border-redError': v$.team.$error }"
          v-model="v$.team.$model"
        >
          <option disabled value="">თიმი</option>
          <option v-for="option in teams" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
        </select>

        <select
          v-model="v$.position.$model"
          class="h-[60px] appearance-none mb-[30px] md:mb-6 md:my-[52px] px-5 outline-none border-2 bg-lightGray mx-5 mt-[40px] md:mt-[52px] w-[360px] md:mx-0 md:w-full"
          :class="{ 'border-redError': v$.position.$error }"
        >
          <option disabled value="">პოზიცია</option>
          <option
            v-for="option in positions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </select>

        <div class="flex flex-col space-y-1">
          <label
            :class="{ 'text-redError': v$.email.$error }"
            class="font-medium px-5 md:px-0 text-lg"
            for="email"
            >მეილი</label
          >
          <input
            class="h-[60px] w-[360px] mx-auto md:mx-0 md:w-full border-blue-400 border-2 px-4 outline-none rounded-md"
            :class="{ '!border-redError': v$.email.$error }"
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
              class="font-light px-5 md:px-0 text-sm text-redError"
            >
              {{ error.$message }}
            </p>
            <div v-if="v$.email.$errors.length === 0" class="h-1">
              <p class="font-light px-5 md:px-0 text-sm text-gray-500">
                უნდა მთავრდებოდეს @redberry.ge-ით
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-[52px] mb-[100px] space-y-1">
          <label
            :class="{ 'text-redError': v$.phone_number.$error }"
            class="font-medium px-5 md:px-0 text-lg"
            for="phone_number"
            >ტელეფონის ნომერი</label
          >
          <input
            class="h-[60px] w-[360px] mx-auto md:mx-0 md:w-full border-blue-400 border-2 px-4 outline-none rounded-md"
            :class="{ '!border-redError': v$.phone_number.$error }"
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
              class="font-light px-5 md:px-0 text-sm text-redError"
            >
              {{ error.$message }}
            </p>
            <div v-if="v$.phone_number.$errors.length === 0" class="h-1">
              <p class="font-light px-5 md:px-0 text-sm text-gray-500">
                უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-end mb-5 md:mb-0 px-5 md:px-0">
          <TheButton width="w-[132px] md:w-[176px]" name="შემდეგი" />
        </div>
      </form>
    </section>
  </TheLayout>
</template>
