<template>
  <div class="tabla">
    <b-table
      v-if="allToys && categories"
      striped
      hover
      :items="allToys"
      :fields="categories"
    >
      <template #cell(actions)="row">
        <b-button
          @click="deleteToy(row.item)"
          size="sm"
          class="my-1 me-3"
          variant="outline-danger"
        >
          Eliminar
        </b-button>
        <b-button
          @click="editingToy(row.item)"
          size="sm"
          class="my-1"
          variant="secondary"
          v-b-modal.modal-prevent-closing
          >Editar</b-button
        >
      </template>
    </b-table>

    <Editar />
    <Crear />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import Editar from "@/components/Editar.vue";
import Crear from "@/components/Crear.vue";
export default {
  components: {
    Editar,
    Crear,
  },
  props: {
    allToys: {
      type: Array,
    },
    categories: {
      type: Array,
    },
  },
  methods: {
    deleteToy(toy) {
      this.deleteToys(toy);
    },
    editingToy(toy) {
      this.editLocalToy(toy);
    },
    ...mapActions(["deleteToys"]),
    ...mapMutations(["editLocalToy"]),
  },
};
</script>
