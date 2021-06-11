<template>
  <div class="container">
    <h1>Valores</h1>
    <router-link to="/agregar" v-if="valores.length < 2">
      <button class="btn btn-success btn-md">Agregar</button>
    </router-link>
    <button class="btn btn-success btn-md" @click="actualizarDatos()">Actualizar</button>
    <ul class="list-group mt-5">
      <li v-for="(item, index) in valores" :key="index" class="list-group-item">
        Valor de la imagen - {{item.valor}}
        <router-link
          class="btn btn-warning btn-sm mr-2"
          :to="{name: 'Editar', params: {id: item.id}}"
        >Editar</router-link>
        <button @click="eliminarValor(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Valores",
  data(){
      return {
          childWindow: '',
          newTabUrl: 'http://localhost:8080/',
      }
  },
  async created() {
    await this.getValores();
  },
  methods: {
    ...mapActions(["getValores", "eliminarValor", 'actualizarDatos']),
    openNewTab(){
        this.childWindow = window.open(this.newTabUrl);
    },
  },
  computed: {
    ...mapState(["valores"])
  }
};
</script>
