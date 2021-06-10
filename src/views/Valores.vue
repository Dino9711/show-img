<template>
    <div class="container">
        <h1>Valores</h1>
        <ul class="list-group mt-5">
            <router-link to="/agregar" v-if="valores.length < 2">
                <button class="btn btn-success btn-block">Agregar</button>
            </router-link>
            <li v-for="(item, index) in valores" :key="index" class="list-group-item">
                Valor de la imagen 1 - {{item.valor}}

                <router-link class="btn btn-warning btn-sm mr-2" :to="{name: 'Editar', params: {id: item.id}}">
                    Editar
                </router-link>
                <button @click="eliminarValor(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Valores',
    created(){
        this.getValores()
    },
    methods: {
        ...mapActions(['getValores', 'eliminarValor'])
    },
    computed: {
        ...mapState(['valores'])
    }
}
</script>
