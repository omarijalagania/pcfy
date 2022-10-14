<script>
export default {}
</script>

<template>
  <nav class="mt-24 mb-10">
    <ul class="flex space-x-10">
      <li
        class="pb-2"
        :class="
          this.$route.path === '/client-info' ? 'border-b-2 border-black' : ''
        "
      >
        <router-link class="text-xl font-bold" to="/client-info"
          >თანამშრომლის ინფო</router-link
        >
      </li>
      <li
        class="pb-2"
        :class="
          this.$route.path === '/pc-info' ? 'border-b-2 border-black' : ''
        "
      >
        <router-link class="text-xl font-bold" to="/pc-info"
          >ლეპტოპის მახასიათებლები</router-link
        >
      </li>
    </ul>
  </nav>
</template>
