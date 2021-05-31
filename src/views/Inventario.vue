<template>
  <div class="inventario d-grid align-content-between" style="height:100vh;">
    <Nav />
    <b-container>
      <b-row>
        <h2 class="display-5 my-4 fw-bold">Inventario de Juguetes</h2>
        <Tabla :allToys="allToys" :categories="categories" />
      </b-row>
      <b-row>
        <b-col>
          <b-button
            size="lg"
            class="mt-2 mb-4 px-5"
            variant="primary"
            v-b-modal.modal-prevent-closing2
            >Agregar Producto</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Tabla from "@/components/Tabla.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";
export default {
  name: "Inventario",
  components: {
    Nav,
    Tabla,
    Footer,
  },
  computed: {
    ...mapState(["allToys", "categories"]),
  },
};
</script>

<style></style>
