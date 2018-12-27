<template>
  <div class="user-main">
    <h1>{{user.name}}</h1>
    <h3>{{user.bio}}</h3>
    <h4 class="email">{{user.email}}</h4>
    <h4>{{user.dob|showDate}}</h4>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "user",
  props: ["user"],
  filters: {
    showDate: date => {
      return moment(date, "DD/MM/YYYY").format("dddd, MMMM Do YYYY");
    }
  }
};
</script>

<style scoped lang="scss">
.user-main {
  border: 1px solid #ccc;
  .email {
    color: blue;
  }
}
</style>