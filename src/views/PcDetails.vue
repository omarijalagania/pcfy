<script>
import TheLayout from "../components/shared/TheLayout.vue"
export default {
  components: {
    TheLayout,
  },
}
</script>

<template>
  <TheLayout>
    <div class="flex items-center">
      <img
        class="w-[577px] h-[342px] mr-16 object-cover"
        src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
        alt="pc"
      />
      <div class="flex w-[90%] flex-col space-y-5">
        <div class="flex justify-between space-x-20">
          <p class="font-medium text-xl">სახელი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">გრიშა ონიანი</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium text-xl">თიმი:</p>
          <div class="w-1/2"><p class="text-gray-400">დიზაინერი</p></div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium text-xl">პოზიცია:</p>
          <div class="w-1/2">
            <p class="text-gray-400">დეველოპერი</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium text-xl">მეილი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">grisha@redberry.ge</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium text-xl">ტელ.ნომერი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">+995 599 95 59 59</p>
          </div>
        </div>
      </div>
    </div>
  </TheLayout>
</template>
