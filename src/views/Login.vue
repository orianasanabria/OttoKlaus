<template>
  <b-container fluid class="bg-light">
    <b-row style="height:100vh">
      <b-col cols="12" class="d-flex align-items-center justify-content-center">
        <b-form class="form-signin" style="width:400px">
          <div class="logo-container mb-1 d-flex justify-content-center">
            <a href="#" class="logo navbar-brand text-primary">
              <span class="logo material-icons d-inline-block align-text-top">
                extension
              </span>
              Otto<span class="logo fw-bold">Klaus</span>
            </a>
          </div>
          <b-form-text
            >Ingrese sus credenciales de administrador para
            continuar.</b-form-text
          >
          <b-input
            type="email"
            class="form-control mt-4 my-3"
            placeholder="Correo electrónico"
            v-model="form.email"
          />
          <input
            type="password"
            class="form-control mb-4"
            placeholder="Contraseña"
            v-model="form.pass"
          />
          <button
            @click.prevent="login()"
            class="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Iniciar Sesión
          </button>
          <b-alert variant="danger" class="mt-4" v-if="error" show>{{
            error
          }}</b-alert>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        pass: "",
      },
      error: "",
    };
  },
  methods: {
    async login() {
      const email = this.form.email;
      const pass = this.form.pass;
      try {
        if (!this.form && !email && !pass) return;

        const req = await firebase
          .auth()
          .signInWithEmailAndPassword(email, pass);

        if (req && req !== null) {
          localStorage.setItem("login", "logueado");
          this.$router.push("/");
        }
      } catch (error) {
        this.error = error;
      }
    },
    clear() {
      if (!this.form) return;
      this.form.email = "";
      this.form.pass = "";
    },
  },
};
</script>

<style>
.logo {
  font-size: 2.5rem;
}
</style>
