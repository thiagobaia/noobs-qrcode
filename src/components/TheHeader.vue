<template>
  <header class="fixed z-10 bg-blue-800">
    <nav class="nav">
      <span>
        <router-link to="/Dashboard" class="logo">
          <p>Dashboard</p>
        </router-link>
      </span>
      <span>
        <router-link to="/qrcodebuilder" class="logo">
          <p>QR Code Builder</p>
        </router-link>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
header {
  height: 70px;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  width: 100vw;

}
.nav {
  display: flex;
  max-width: 60vw;
  margin: 0 auto;
  margin-top: 20px;
}
p {
  color: white;
  font-weight: 400;
  font-size: 12px;
}
span{
  margin-right: 40px;
}
</style>
