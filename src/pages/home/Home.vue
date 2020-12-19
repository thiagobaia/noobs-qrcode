<template>

  <div class="flex text-xs font-serif">
    <div class="text-3xl bg-blue-600">Noobs Qrcode</div>
    <div class="mt-5">
      <router-link to="/register" class="logo mt-4 mr-1 text-black p-2 cursor-pointer hover:bg-gray-300 rounded-b-sm">
        <a class="font-serif ">Register </a>
      </router-link>
      <router-link to="/login" class="mt-3 mr-20 border-2 text-black border-gray-400 border-opacity-100 rounded-full
       py-2 px-6 cursor-pointer hover:bg-gray-300 hover:text-white ">
        <a class="font-serif ">Login</a>
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
