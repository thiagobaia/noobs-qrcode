<template>
  <div>
  <TheHeader />
    <router-view />
  <div class="bg-gray-200 pt-32" v-if="dashboards">
    <div class="shadow-md m-auto mb-4 bg-white bob" v-for="(qrcodee, index) in dashboards" :key="index">
      <qriously class="m-4 row-span-3 " :value="qrcodee.content_qrcode" :size="150" :id="index" />
      <div class="flex-col mt-5">
        <span class="m-4">{{qrcodee.title_qrcode}}</span>
        <div class="buttonDownlods mt-4">
          <button @click="donwloadCanvas(index, qrcodee)">
            <i class="fa fa-download"></i>
          </button>
          <button>
            <i class="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
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
  name: "Dashboard",
  data() {
    return {
      dashboards: null
    };
  },
  methods: {
    donwloadCanvas(index, qrcodee) {
      const canvas = document.getElementById(index);
      const qrcode = canvas.getElementsByTagName("canvas");
      const link = document.createElement("a");
      link.download = `${qrcodee}.png`;
      link.href = qrcode[0].toDataURL();
      link.click();
    },
    fetchDashboards() {
      axios.get("https://rest-api-noobs.herokuapp.com/dashboard").then(response =>{
        this.dashboards = response.data
        console.log(this.dashboards)
      })
    },
  },
  created() {
    this.fetchDashboards();
  }
};
</script>

<style scoped>

.buttonDownlods button {
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin-left: 10px;
  box-shadow: 0 1px 2px rgba(1, 1, 1, 0.4);
}

.buttonDownlods button:focus {
  outline: 0 auto -webkit-focus-ring-color;
}

.buttonDownlods button:focus {
  outline-offset: 0;
}
.bob{
  display: flex;
  max-width: 60vw;


}

</style>
