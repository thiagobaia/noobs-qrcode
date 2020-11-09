<template>
  <div class="overflow-y-auto bg-gray-200 pt-32" v-if="dashboards">
    <div class="shadow-md m-auto overflow-hidden mb-4 max-w-4xl grid grid-cols-5 grid-rows-3 grid-flow-col bg-white" v-for="(qrcodee, index) in dashboards" :key="index">
      <qriously class="m-4 row-span-3" :value="qrcodee.content" :size="150" :id="index" />
      <span class="m-4 col-span-1 col-span-2">{{qrcodee.title}}</span>

      <div class="buttonDownlods row-span-2 col-span-2">
        <button @click="donwloadCanvas(index, qrcodee)">
          <i class="fa fa-download"></i>
        </button>
        <button>
          <i class="fa fa-pencil"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
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
      axios.get("http://localhost:1337/dashboards").then(response =>{
        this.dashboards = response.data
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

</style>
