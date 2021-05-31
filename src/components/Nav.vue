<template>
  <nav class="navbar navbar-light w-100">
    <b-container>
      <router-link to="/" class="navbar-brand text-primary">
        <span class="material-icons d-inline-block align-text-top">
          extension
        </span>
        Otto<span class="fw-bold">Klaus</span>
      </router-link>
      <div>
        <button @click="logout()" class="btn btn-outline-secondary">
          Cerrar Sesión
        </button>
        <button class="btn btn-primary ms-3">
          <router-link
            class="text-light"
            style="text-decoration:none"
            to="/inventario"
            >Inventario</router-link
          >
        </button>
      </div>
    </b-container>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut();
        localStorage.clear();
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
