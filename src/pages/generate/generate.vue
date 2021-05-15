<template>
  <div>
    <TheHeader />
    <router-view />
    <form>
      <div>dwdw</div>
    </form>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },
  name:"generate",
};
</script>
