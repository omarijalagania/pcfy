<script>
import { ref } from "vue"
export default {
  name: "DropZone",
  setup() {
    const active = ref(false)
    const toggleActive = () => {
      active.value = !active.value
    }

    return { active, toggleActive }
  },
  methods: {
    imagePreview(file) {
      let imageUrl = ""
      if (file) {
        // eslint-disable-next-line no-unused-vars
        return (imageUrl = URL.createObjectURL(file))
      }
    },
  },
  props: ["laptopImage", "isError", "showUpload"],
}
</script>

<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{
      'border-green-500 bg-green-100': active,
      'border-none bg-gray-100': this.showUpload,
      '!bg-red-50 !border-2 !border-red-500': this.isError && !this.showUpload,
    }"
    class="border-2 border-dashed border-blue-400 bg-white mt-5 md:mt-0 rounded-md md:h-[425px] h-[244px] w-[360px] md:w-full flex md:flex-col flex-col-reverse items-center justify-center"
  >
    <img
      class="object-cover md:h-[425px] h-[244px] w-[360px] md:w-full rounded-md"
      v-if="this.showUpload"
      :src="this.imagePreview(this.laptopImage)"
    />
    <span
      v-if="!this.showUpload"
      class="font-normal md:font-semibold text-base md:text-xl text-specialBlue md:mb-3"
      >ჩააგდე ან ატვირთე
    </span>
    <span
      v-if="!this.showUpload"
      class="font-normal md:font-semibold text-base md:text-xl text-specialBlue md:mb-16"
      >ლეპტოპის ფოტო</span
    >
    <label
      v-if="!this.showUpload"
      class="w-[233px] relative flex text-xl font-medium justify-center items-center rounded-md text-white h-[60px] md:bg-blue-400"
      for="dropzoneFile"
      >ატვირთე
      <img
        class="block absolute left-1/2 -translate-x-1/2 md:hidden mb-6"
        src="../assets/images/dslr.png"
      />
    </label>
    <input
      accept=".png, .jpg, .jpeg"
      type="file"
      id="dropzoneFile"
      class="dropzoneFile hidden"
    />
  </div>
</template>
