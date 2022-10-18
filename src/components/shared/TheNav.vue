<script>
export default {}
</script>

<template>
  <nav class="mt-7 md:mt-20 md:mb-10">
    <ul class="flex md:space-x-10">
      <li
        class="pb-2"
        :class="
          this.$route.path === '/client-info'
            ? 'md:border-b-2 !block md:border-black'
            : '!hidden md:!block'
        "
      >
        <router-link class="text-xl font-bold" to="/client-info"
          >თანამშრომლის ინფო</router-link
        >
        <p class="block md:hidden text-center text-[#898989]">1/2</p>
      </li>
      <li
        class="pb-2 md:block"
        :class="
          this.$route.path === '/pc-info'
            ? 'md:border-b-2 !block  md:border-black'
            : '!hidden md:!block'
        "
      >
        <router-link
          class="text-xl font-bold"
          :to="this.$store.state.validateClient ? '/pc-info' : ''"
          >ლეპტოპის მახასიათებლები</router-link
        >
        <p class="block md:hidden text-center text-[#898989]">2/2</p>
      </li>
    </ul>
  </nav>
</template>
