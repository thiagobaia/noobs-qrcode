<template>
  <div id="app">
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";


export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body{
background: #EDF2F7;
}
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}
</style>
