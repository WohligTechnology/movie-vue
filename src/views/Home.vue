<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
      <table class="table table-bordered">
        <thead>
          <th>Sr. No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Action Buttons</th>
        </thead>
        <tbody>
          <tr v-for="(genre,index) in genres">
            <td>{{index + 1}}</td>
            <td>{{genre._id}}</td>
            <td>{{genre.name}}</td>
            <td>
              <router-link
                class="btn btn btn-outline-primary btn-sm detail-btn"
                :to="{ name: 'genre-edit', params: { id:  genre._id}}"
              >Edit</router-link>
              <router-link
                class="btn btn btn-outline-danger btn-sm detail-btn"
                :to="{ name: 'genre-edit', params: { id:  genre._id}}"
              >Delete</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import User from "../components/User.vue";
import Api from "@/services/apiServices";
export default {
  name: "home",
  components: {
    User
  },
  data() {
    return {
      genres: [],
      users: [
        {
          name: "Chintan",
          email: "chintan@wohlig.com",
          dob: "07/09/1990",
          bio: "I love to play Chess"
        },
        {
          name: "Kiran Bangar",
          email: "kiran.bangar@wohlig.com",
          dob: "12/11/1995",
          bio: "I love to play Guitar"
        }
      ]
    };
  },
  created() {
    this.getGenre();
  },
  methods: {
    getGenre() {
      Api.getAllGenre().then(data => {
        this.genres = data;
      });
    }
  },
  filters: {}
};
</script>
