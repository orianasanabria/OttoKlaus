<template>
  <div>
    <b-modal id="modal-prevent-closing2" title="Crear Producto">
      <form ref="form">
        <b-form-group label="Código" invalid-feedback="Debe ingresar un código">
          <b-form-input v-model="newToy.codigo" required></b-form-input>
        </b-form-group>
        <b-form-group label="Nombre" invalid-feedback="Debe ingresar un nombre">
          <b-form-input v-model="newToy.nombre" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Imagen"
          invalid-feedback="Debe ingresar una imagen"
        >
          <b-form-input v-model="newToy.imagen" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Descripción"
          invalid-feedback="Debe ingresar una descripción"
        >
          <b-form-input v-model="newToy.desc" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Stock"
          invalid-feedback="Debe ingresar un número de stock"
        >
          <b-form-input v-model="newToy.stock" required></b-form-input>
        </b-form-group>
        <b-form-group label="Precio" invalid-feedback="Debe ingresar un precio">
          <b-form-input v-model="newToy.precio" required></b-form-input>
        </b-form-group>
      </form>

      <template #modal-footer="{ ok }">
        <b-button size="md" variant="outline-secondary" @click="ok()">
          Cerrar
        </b-button>
        <b-button
          size="md"
          @click="addToy(newToy)"
          class="my-1"
          variant="primary"
          >Guardar</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["newToy"]),
  },
  methods: {
    addToy(toy) {
      this.addToys(toy);
    },
    ...mapActions(["addToys"]),
  },
};
</script>
