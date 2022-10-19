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
    <div class="flex md:w-[1005px] items-center">
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
    <div
      class="w-[360px] md:mx-0 md:w-[1005px] h-[2px] my-7 md:my-0 md:mt-20 md:mb-16 bg-[#C7C7C7]"
    />
    <div class="md:w-[1005px] flex">
      <div class="flex w-[58%] flex-col space-y-5">
        <div class="flex justify-between">
          <p class="font-medium text-xl">ლეპტოპის სახელი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">Pavilion d334</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium text-xl">ლეპტოპის ბრენდი:</p>
          <div class="w-1/2"><p class="text-gray-400">HP</p></div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium text-xl">RAM:</p>
          <div class="w-1/2">
            <p class="text-gray-400">16</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium text-xl">მეხსიერების ტიპი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">SSD</p>
          </div>
        </div>
      </div>
      <!--ssssssss-->
      <div class="flex w-[30%] flex-col space-y-5">
        <div class="flex justify-between">
          <p class="font-medium text-xl">CPU:</p>
          <div class="w-1/2">
            <p class="text-gray-400">intel i5</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium text-xl">CPU-ს ბირთვი:</p>
          <div class="w-1/2"><p class="text-gray-400">13</p></div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium text-xl">CPU-ს ნაკადი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">79</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[360px] md:mx-0 md:w-[1005px] h-[2px] my-7 md:my-0 md:mt-20 md:mb-16 bg-[#C7C7C7]"
    />
    <div class="md:w-[1005px] flex">
      <div class="flex w-[58%] flex-col space-y-5">
        <div class="flex justify-between">
          <p class="font-medium text-xl">ლეპტოპის მდგომარეობა:</p>
          <div class="w-1/2">
            <p class="text-gray-400">ახალი</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium text-xl">ლეპტოპის ფასი:</p>
          <div class="w-1/2"><p class="text-gray-400">1300 ლ</p></div>
        </div>
      </div>
      <div class="flex w-[40%] flex-col space-y-5">
        <div class="flex justify-between">
          <p class="font-medium text-xl">შეძენის რიცხვი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">12/06/2022</p>
          </div>
        </div>
      </div>
    </div>
  </TheLayout>
</template>
