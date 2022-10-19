<script>
export default {}
</script>

<template>
  <div
    class="w-[358px] md:w-[563px] h-[135px] md:h-[205px] mx-auto md:mx-0 bg-[#EAFAFF] rounded-lg border-[1px] border-blue-300"
  >
    <div class="p-3 flex items-center justify-around rounded-md">
      <img
        class="w-[164px] md:w-[266px] h-[108px] md:h-[178px] rounded-md object-cover"
        src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
        alt="pc"
      />
      <div
        class="flex w-1/2 flex-col space-y-2 md:space-y-9 ml-7 justify-center"
      >
        <p class="font-medium text-sm md:text-lg">ირინე ჩანქსელიანი</p>
        <p class="font-normal text-sm md:text-lg">Pentium II</p>
        <router-link
          to="/"
          class="cursor-pointer text-sm text-specialBlue underline"
          >მეტის ნახვა</router-link
        >
      </div>
    </div>
  </div>
</template>
