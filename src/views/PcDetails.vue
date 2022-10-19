<script>
import TheLayout from "../components/shared/TheLayout.vue"
import {
  getOneLaptop,
  getBrands,
  getTeams,
  getPositions,
} from "../services/axios"
export default {
  components: {
    TheLayout,
  },
  data() {
    return {
      laptop: {},
      brands: [],
      teams: [],
      positions: [],
      url: process.env.VUE_APP_IMG_URL,
      filteredBrand: [],
      filteredTeam: [],
      filteredPosition: [],
    }
  },
  async created() {
    const data = {
      id: this.$route.params.id,
      token: process.env.VUE_APP_TOKEN,
    }
    try {
      this.laptop = await getOneLaptop(data)
      this.brands = await getBrands()
      this.teams = await getTeams()
      this.positions = await getPositions()

      this.filteredBrand = this.brands.filter(
        (brand) => brand.id === this.laptop.laptop.brand_id,
      )
      this.filteredTeam = this.teams.filter(
        (team) => team.id === this.laptop.user.team_id,
      )

      this.filteredPosition = this.positions.filter(
        (position) => position.id === this.laptop.user.position_id,
      )
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<template>
  <TheLayout>
    <div
      class="flex md:w-[1005px] mt-8 md:mt-0 flex-col md:flex-row items-center"
    >
      <img
        class="w-[358px] h-[191px] md:w-[577px] md:h-[342px] md:mr-16 object-cover"
        :src="`${url}${this.laptop.laptop?.image}`"
        alt="pc"
      />
      <div
        class="flex w-full mt-8 md:mt-0 md:w-[90%] flex-col space-y-1 md:space-y-5"
      >
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">სახელი:</p>
          <div class="w-1/2">
            <p class="text-gray-400 truncate">
              {{ laptop.user.name + " " + laptop.user.surname }}
            </p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">თიმი:</p>
          <div class="w-1/2">
            <p class="text-gray-400 truncate">
              {{ this.filteredTeam[0].name }}
            </p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">პოზიცია:</p>
          <div class="w-1/2">
            <p class="text-gray-400 truncate">
              {{ this.filteredPosition[0].name }}
            </p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">მეილი:</p>
          <div class="w-1/2">
            <p class="text-gray-400 truncate">{{ this.laptop.user.email }}</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">ტელ.ნომერი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.user.phone_number }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[360px] md:mx-0 md:w-[1005px] h-[2px] my-7 md:my-0 md:mt-20 md:mb-16 bg-[#C7C7C7]"
    />
    <div class="md:w-[1005px] w-[360px] flex flex-col md:flex-row">
      <div class="flex md:w-[58%] flex-col space-y-1 md:space-y-5">
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">ლეპტოპის სახელი:</p>
          <div class="w-1/2">
            <p class="text-gray-400 truncate">
              {{ this.laptop.laptop.name }}
            </p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">ლეპტოპის ბრენდი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.filteredBrand[0].name }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">RAM:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.ram }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">მეხსიერების ტიპი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">
              {{ this.laptop.laptop.hard_drive_type }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex md:w-[30%] flex-col space-y-1 md:space-y-5">
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">CPU:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.cpu.name }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">CPU-ს ბირთვი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.cpu.cores }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">CPU-ს ნაკადი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.cpu.threads }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[360px] md:mx-0 md:w-[1005px] h-[2px] my-7 md:my-0 md:mt-20 md:mb-16 bg-[#C7C7C7]"
    />
    <div class="md:w-[1005px] w-[360px] flex flex-col md:flex-row">
      <div class="flex md:w-[58%] flex-col space-y-1 md:space-y-5">
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">მდგომარეობა:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.state }}</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">ლეპტოპის ფასი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.price }}</p>
          </div>
        </div>
      </div>
      <div class="flex md:w-[40%] flex-col space-y-1 md:space-y-5">
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">შეძენის რიცხვი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">{{ this.laptop.laptop.purchase_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </TheLayout>
</template>
