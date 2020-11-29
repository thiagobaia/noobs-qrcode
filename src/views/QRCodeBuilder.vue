<template>
  <form>
    <div class="m-auto max-w-xl pt-32 cursor-default">
      <label>
        <input v-model="conteudo.title" class="my-4 w-full p-2 shadow-xl rounded focus:outline-none" placeholder="Title"
               type="text">
      </label>
      <label>
        <textarea type="text" v-model="conteudo.content" class="form-input block w-full h-48 shadow-xl pb-10 rounded p-2 mb-4 focus:outline-none" placeholder="Content"/>
      </label>
      <input type="button" value="Submit" @click.prevent="Qrcodebuilder" class=" bg-white py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium
         text-gray-700 hover:text-gray-500 focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50
         active:text-gray-800 transition duration-150 ease-in-out">
    </div>
  </form>
</template>

<script>
import axios from "axios"
export default {
  name:"QRCodeBuilder",
  data() {
    return {
     conteudo: {
       "title": "",
       "content": "",
     }
    };
  },
  methods: {
    Qrcodebuilder() {
      axios.post("http://localhost:1337/dashboards", this.conteudo)
      this.conteudo = ""
    },
  },
};
</script>

<style scoped>

</style>
