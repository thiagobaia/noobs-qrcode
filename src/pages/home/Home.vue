<template>
  <div class="grid grid-row-3">
    <div class="flex row-span-1 justify-end bg-indigo-600 py-4 px-14 gap-4">
      <router-link to="/register" class="justify-items-start">
        <a class="py-2 px-4 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-700" type="submit">Register</a>
      </router-link>
      <router-link to="/login">
        <a class="py-2 px-4 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-700" type="submit">Login</a>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",

};
</script>

<style scoped>

</style>
