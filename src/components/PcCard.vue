<script>
export default {
  props: ["laptop"],
  data() {
    return {
      url: process.env.VUE_APP_IMG_URL,
    }
  },
}
</script>

<template>
  <div
    class="w-[358px] md:w-[563px] h-[135px] md:h-[205px] mx-auto md:mx-0 bg-[#EAFAFF] rounded-lg border-[1px] border-blue-300"
  >
    <div class="p-3 flex items-center justify-around rounded-md">
      <img
        class="w-[164px] md:w-[266px] h-[108px] md:h-[178px] rounded-md object-cover"
        :src="`${this.url}${laptop.laptop.image}`"
        alt="pc"
      />
      <div
        class="flex w-1/2 flex-col space-y-2 md:space-y-9 ml-7 justify-center"
      >
        <p class="font-medium text-sm md:text-lg truncate">
          {{ laptop.user.name + " " + laptop.user.surname }}
        </p>
        <p class="font-normal text-sm md:text-lg truncate">
          {{ laptop.laptop.name }}
        </p>
        <router-link
          :key="$route.path"
          :to="`/laptop/${laptop.laptop.id}`"
          class="cursor-pointer text-sm text-specialBlue underline"
          >მეტის ნახვა</router-link
        >
      </div>
    </div>
  </div>
</template>
