<template>
  <div>
    <TheHeader />
    <router-view />
    <form>
      <div class="m-auto max-w-xl pt-32 cursor-default">
        <label>
          <input v-model="conteudo.title_qrcode" class="my-4 w-full p-2 shadow-xl rounded focus:outline-none" placeholder="Title"
                 type="text">
        </label>
        <label>
          <textarea type="text" v-model="conteudo.content_qrcode" class="form-input block w-full h-48 shadow-xl pb-10 rounded p-2 mb-4 focus:outline-none" placeholder="Content"/>
        </label>
        <input type="button" value="Submit" @click.prevent="Qrcodebuilder" class=" bg-white py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium
         text-gray-700 hover:text-gray-500 focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50
         active:text-gray-800 transition duration-150 ease-in-out">
      </div>
      <TheFooter />
    </form>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import axios from "axios"
export default {
  components: {
    TheHeader,
    TheFooter
  },
  name:"QRCodeBuilder",
  data() {
    return {
      conteudo: {
        "title_qrcode": "",
        "content_qrcode": "",
      }
    };
  },
  methods: {
    Qrcodebuilder() {
      axios.post("https://rest-api-noobs.herokuapp.com/dashboard", this.conteudo)
      this.conteudo = ""
    },
  },
};
</script>

<style scoped>

</style>
