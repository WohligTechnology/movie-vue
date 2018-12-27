<template>
  <div>
    {{genre}}
    <form action="#">
      <input
        type="text"
        name="name"
        class="form-control"
        placeholder="Enter Name"
        v-model="genre.name"
      >
      <button v-on:click="editGenre()" type="button" class="btn btn-primary">Save</button>
    </form>
  </div>
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
        this.genre = data;
      });
    },
    editGenre() {
      console.log("Edit Called");
      Api.editGenre(this.$route.params.id, this.genre.name).then(data => {
        this.$router.push("/  ");
      });
    }
  }
};
</script>

<style scoped>
</style>