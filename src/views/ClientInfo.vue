<script>
import TheLayout from "../components/shared/TheLayout.vue"
import TheInput from "../components/shared/TheInput.vue"
import { getTeams, getPositions } from "../services/axios"
import TheButton from "@/components/shared/TheButton.vue"
export default {
  components: {
    TheLayout,
    TheInput,
    TheButton,
  },
  data() {
    return {
      teams: [],
      positions: [],
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
      <div class="w-[1024px] relative px-10 py-20">
        <div class="flex justify-between items-center">
          <div class="flex flex-col space-y-1">
            <label class="font-medium text-lg" for="name">სახელი</label>
            <TheInput placeholder="გრიშა" type="text" id="name" name="name" />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="font-medium text-lg" for="surname">გვარი</label>
            <TheInput
              placeholder="ბაგრატიონი"
              type="text"
              id="surname"
              name="surname"
            />
          </div>
        </div>
        <select class="h-[60px] bg-lightGray my-[52px] w-full">
          <option v-for="option in teams" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
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
          <TheInput
            inputClass="!w-full"
            placeholder="grish666@redberry.ge"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div class="flex flex-col mt-[52px] space-y-1">
          <label class="font-medium text-lg" for="phone_number"
            >ტელეფონის ნომერი</label
          >
          <TheInput
            inputClass="!w-full"
            placeholder="+995 598 00 07 01"
            type="text"
            id="phone_number"
            name="phone_number"
          />
        </div>
        <div class="mt-[150px] absolute px-10 right-0">
          <TheButton width="w-[176px]" name="შემდეგი" />
        </div>
      </div>
    </section>
  </TheLayout>
</template>
