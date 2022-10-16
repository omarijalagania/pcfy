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
  props: ["showUpload"],
}
</script>

<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{
      'border-green-500': active,
      'border-none bg-gray-100': this.showUpload,
    }"
    class="border-2 border-dashed border-blue-400 bg-white rounded-md h-[425px] w-full flex flex-col items-center justify-center"
  >
    <span
      v-if="!this.showUpload"
      class="font-semibold text-xl text-specialBlue mb-3"
      >ჩააგდე ან ატვირთე
    </span>
    <span
      v-if="!this.showUpload"
      class="font-semibold text-xl text-specialBlue mb-16"
      >ლეპტოპის ფოტო</span
    >
    <label
      v-if="!this.showUpload"
      class="w-[233px] flex text-xl font-medium justify-center items-center rounded-md text-white h-[60px] bg-blue-400"
      for="dropzoneFile"
      >ატვირთე
    </label>
    <input
      accept=".png, .jpg, .jpeg"
      type="file"
      id="dropzoneFile"
      class="dropzoneFile hidden"
    />
  </div>
</template>
