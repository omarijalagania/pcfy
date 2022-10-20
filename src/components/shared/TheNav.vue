<script>
export default {}
</script>

<template>
  <nav class="mt-7 md:mt-20 md:mb-10">
    <h2
      v-if="this.$route.path === '/list'"
      class="font-bold text-lg md:text-3xl text-center"
    >
      ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ
    </h2>
    <h2
      v-if="this.$route.path === `/laptop/${this.$route.params.id}`"
      class="font-bold text-lg md:text-3xl text-center"
    >
      ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ
    </h2>
    <ul
      v-if="
        this.$route.path !== '/list' &&
        this.$route.path !== `/laptop/${this.$route.params.id}`
      "
      class="flex md:space-x-10"
    >
      <li
        class="pb-2"
        :class="
          this.$route.path === '/client-info'
            ? 'md:border-b-2 !block md:border-black'
            : '!hidden md:!block'
        "
      >
        <router-link
          :key="$route.path"
          class="text-xl font-bold"
          to="/client-info"
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
          :key="$route.path"
          class="text-xl font-bold"
          :to="this.$store.state.validateClient ? '/pc-info' : ''"
          >ლეპტოპის მახასიათებლები</router-link
        >
        <p class="block md:hidden text-center text-[#898989]">2/2</p>
      </li>
    </ul>
  </nav>
</template>
