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
    <div
      class="flex md:w-[1005px] mt-8 md:mt-0 flex-col md:flex-row items-center"
    >
      <img
        class="w-[358px] h-[191px] md:w-[577px] md:h-[342px] md:mr-16 object-cover"
        src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
        alt="pc"
      />
      <div
        class="flex w-full mt-8 md:mt-0 md:w-[90%] flex-col space-y-1 md:space-y-5"
      >
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">სახელი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">გრიშა ონიანი</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">თიმი:</p>
          <div class="w-1/2"><p class="text-gray-400">დიზაინერი</p></div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">პოზიცია:</p>
          <div class="w-1/2">
            <p class="text-gray-400">დეველოპერი</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">მეილი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">grisha@redberry.ge</p>
          </div>
        </div>
        <div class="flex justify-between space-x-20">
          <p class="font-medium md:text-xl text-sm">ტელ.ნომერი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">+995 599 95 59 59</p>
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
            <p class="text-gray-400">Pavilion d334</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">ლეპტოპის ბრენდი:</p>
          <div class="w-1/2"><p class="text-gray-400">HP</p></div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">RAM:</p>
          <div class="w-1/2">
            <p class="text-gray-400">16</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">მეხსიერების ტიპი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">SSD</p>
          </div>
        </div>
      </div>
      <!--ssssssss-->
      <div class="flex md:w-[30%] flex-col space-y-1 md:space-y-5">
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">CPU:</p>
          <div class="w-1/2">
            <p class="text-gray-400">intel i5</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">CPU-ს ბირთვი:</p>
          <div class="w-1/2"><p class="text-gray-400">13</p></div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">CPU-ს ნაკადი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">79</p>
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
            <p class="text-gray-400">ახალი</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">ლეპტოპის ფასი:</p>
          <div class="w-1/2"><p class="text-gray-400">1300 ლ</p></div>
        </div>
      </div>
      <div class="flex md:w-[40%] flex-col space-y-1 md:space-y-5">
        <div class="flex justify-between">
          <p class="font-medium md:text-xl text-sm">შეძენის რიცხვი:</p>
          <div class="w-1/2">
            <p class="text-gray-400">12/06/2022</p>
          </div>
        </div>
      </div>
    </div>
  </TheLayout>
</template>
