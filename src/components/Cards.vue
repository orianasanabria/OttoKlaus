<template>
  <b-container>
    <b-row id="catalogo">
      <h1 class="display-5 my-4 fw-bold">Nuestros Juguetes</h1>
      <b-col v-for="(toy, i) in allToys" :key="i" class="my-3" cols="6" lg="4">
        <b-card
          bg-variant="light"
          class="text-center cards"
          :title="toy.nombre"
          :img-src="toy.imagen"
          img-alt="Image"
          img-top
          style="max-width: 20rem; min-height:26rem;"
        >
          <b-card-text style="font-size:.9rem;min-height:95px;">
            {{ toy.desc }}
          </b-card-text>
          <b-row align-h="center">
            <b-col cols="6" md="4">
              <b-badge class="bg-secondary py-2 px-3"
                >Stock: {{ toy.stock }}</b-badge
              >
            </b-col>
            <b-col cols="6" md="4" class="align-end">
              <b-badge class="bg-primary py-2 px-3">${{ toy.precio }}</b-badge>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cards",
  computed: {
    ...mapState(["allToys"]),
  },
};
</script>

<style lang="scss" scoped>
.cards {
  img {
    height: 13rem;
    object-fit: contain;
    background-color: #fff;
  }
}
</style>
