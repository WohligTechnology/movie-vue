<template>
  <div></div>
</template>

<script>
import Api from "@/services/apiServices";
export default {
  name: "home",
  data() {
    return {
      genre: {}
    };
  },
  created() {
    this.getGenre();
  },
  methods: {
    getGenre() {
      Api.getGenre(this.$route.params.id).then(data => {
        this.genres = data;
      });
    }
  }
};
</script>

<style scoped>
</style>