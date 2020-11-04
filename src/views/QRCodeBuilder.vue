<template>
  <div class="bg-gray-200">
    <form action="#" method="POST">
      <div class="m-auto max-w-xl pt-32 cursor-default">
        <label>
          <input placeholder="Title" class="my-4 w-full p-2 shadow-xl rounded focus:outline-none">
          <textarea class="form-input block w-full h-48 shadow-xl pb-10 rounded p-2 mb-4 focus:outline-none" placeholder="Content"/>
        </label>
        <button type="button" class=" bg-white py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "QRCodeBuilder"
};
</script>

<style scoped>

</style>
