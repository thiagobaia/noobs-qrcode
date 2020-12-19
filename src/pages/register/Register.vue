<template>
  <form class="flex">
    <div class="flex flex-col m-auto max-w-xl pt-32 cursor-default px-2">
      <span>Register</span>
      <label>
        <input class="my-4 w-full p-2 shadow-xl rounded focus:outline-none" type="text" placeholder="Name">
      </label>
      <label>
        <input class="my-4 w-full p-2 shadow-xl rounded focus:outline-none" type="text" placeholder="age">
      </label>
      <label>submit
        <input class="my-4 w-full p-2 shadow-xl rounded focus:outline-none" type="email" placeholder="email">
      </label>
      <label>
        <input class="my-4 w-full p-2 shadow-xl rounded focus:outline-none" type="password" placeholder="password">
      </label>
      <input type="button" value="Submit" @click.prevent="" class="bg-white py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium
         text-gray-700 hover:text-gray-500 focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50
         active:text-gray-800 transition duration-150 ease-in-out">
    </div>
  </form>
</template>

<script>
export default {
  name: "Register.vue"
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>




