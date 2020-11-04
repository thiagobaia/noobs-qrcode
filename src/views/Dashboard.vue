<template>
  <div class="overflow-y-auto flex-wrap bg-gray-200 pt-32" v-if="produtos">
    <div class="qrCode m-auto overflow-hidden mb-4 max-w-4xl flex bg-white" v-for="(produto, index) in produtos" :key="index">
      <qriously class="m-4" :value="produto" :size="150" :id="index" />
      <div class="buttonDownlod">
        <button @click="donwloadCanvas(index, produto)">
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
export default {
  name: "Dashboard",
  data() {
    return {
      produtos: {
        notebook: "Select option",
        kjj: "kihihi"
      }
    };
  },
  methods: {
    donwloadCanvas(index, produto) {
      const canvas = document.getElementById(index);
      const qrcode = canvas.getElementsByTagName("canvas");
      const link = document.createElement("a");
      link.download = `${produto}.png`;
      link.href = qrcode[0].toDataURL();
      link.click();
    }
  }
};
</script>

<style scoped>

.qrCode {
  box-shadow: 0 0 2px 0 darkgray;
}
.buttonDownlod {
  margin-left: 20px;
  height: 40px;
  position: relative;
  top: 110px;
}
.buttonDownlod button {
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin-left: 10px;
  box-shadow: 0 1px 2px rgba(1, 1, 1, 0.4);
}

.buttonDownlod button:focus {
  outline: 0 auto -webkit-focus-ring-color;
}

.buttonDownlod button:focus {
  outline-offset: 0;
}
</style>
