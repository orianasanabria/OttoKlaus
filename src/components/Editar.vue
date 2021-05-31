<template>
  <div>
    <b-modal id="modal-prevent-closing" title="Editar Producto">
      <form ref="form">
        <b-form-group label="Código" invalid-feedback="Debe ingresar un código">
          <b-form-input v-model="editToy.codigo" required></b-form-input>
        </b-form-group>
        <b-form-group label="Nombre" invalid-feedback="Debe ingresar un nombre">
          <b-form-input v-model="editToy.nombre" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Imagen"
          invalid-feedback="Debe ingresar una imagen"
        >
          <b-form-input v-model="editToy.imagen" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Descripción"
          invalid-feedback="Debe ingresar una descripción"
        >
          <b-form-input v-model="editToy.desc" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Stock"
          invalid-feedback="Debe ingresar un número de stock"
        >
          <b-form-input v-model="editToy.stock" required></b-form-input>
        </b-form-group>
        <b-form-group label="Precio" invalid-feedback="Debe ingresar un precio">
          <b-form-input v-model="editToy.precio" required></b-form-input>
        </b-form-group>
      </form>

      <template #modal-footer="{ ok }">
        <b-button size="md" variant="outline-secondary" @click="ok()">
          Cerrar
        </b-button>
        <b-button
          size="md"
          @click="updateToy(editToy)"
          class="my-1"
          variant="primary"
          >Guardar</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["editToy"]),
  },
  methods: {
    ...mapActions(["updateToys"]),
    updateToy(toy) {
      this.updateToys(toy);
    },
  },
};
</script>
