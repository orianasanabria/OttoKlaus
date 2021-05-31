import Vue from 'vue'
import Vuex from 'vuex'
import {
  db
} from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allToys: [],
    categories: [{
        label: "Código",
        key: "codigo",
      },
      {
        label: "Producto",
        key: "nombre",
      },
      {
        label: "Stock",
        key: "stock",
      },
      {
        label: "Precio",
        key: "precio",
      },
      {
        label: "Acciones",
        key: "actions",
      },
    ],
    editToy: {
      nombre: "",
      precio: "",
      stock: "",
      codigo: "",
      imagen: "",
      desc: "",
    },
    newToy: {
      nombre: "",
      precio: "",
      stock: "",
      codigo: "",
      imagen: "",
      desc: "",
    }
  },
  mutations: {
    saveToys(state, payload) {
      const toy = payload;
      if (!toy) return;
      state.allToys.push(toy);
    },
    deleteLocalToy(state, payload) {
      const toy = payload;
      if (!toy) return;
      const index = state.allToys.indexOf(toy);
      state.allToys.splice(index, 1)
    },
    editLocalToy(state, payload) {
      const toy = payload;
      state.editToy = toy;
    },
    addNewToy(state, payload) {
      const toy = payload;
      if (!toy) return;
      const toyExists = state.allToys.find(el => el.id === toy.id)
      if (!toyExists) state.allToys.push(toy)
      state.newToy = {}
    }
  },
  actions: {
    // Obtener los Juguetes de la BD
    async getToys({
      commit
    }) {
      try {
        const req = await db.collection("toys").get();
        req.docs.forEach((toy) => {
          const eachToy = toy.data();
          const id = toy.id;
          eachToy.id = id;
          commit("saveToys", eachToy)
        })
      } catch (error) {
        console.log(error);
      }
    },
    // Borrar los juguetes
    async deleteToys({
      commit
    }, payload) {
      const toy = payload;
      if (!toy) return;
      const toyId = toy.id;
      // Borrar de la BD
      try {
        const req = await db.collection("toys").doc(toyId).delete();
      } catch (error) {
        console.log(error);
      }
      // Borrar de Vuex
      commit("deleteLocalToy", toy)
    },
    // Actualizar los juguetes
    async updateToys({
      commit
    }, payload) {
      const toy = payload;
      if (!toy) return;
      const toyId = toy.id;
      // Borrar de la BD
      try {
        await db.collection("toys").doc(toyId).update({
          nombre: toy.nombre,
          stock: toy.stock,
          precio: toy.precio,
          imagen: toy.imagen,
          codigo: toy.codigo,
          desc: toy.desc,
        })
      } catch (error) {
        console.log(error);
      }
      // Borrar de Vuex
      commit();
    },

    async addToys({
      commit
    }, payload) {
      const toy = payload;
      if (!toy) return;

      try {
        await db.collection("toys").add(toy);
      } catch (error) {
        console.log(error);
      }

      commit("addNewToy", toy)
    }
  },
})