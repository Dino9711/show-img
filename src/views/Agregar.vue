<template>
    <div>
        <h1>Agregar Valor</h1>
        <form @submit.prevent="agregarValor(valor)">
            <input type="text" v-model="valor">
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data(){
        return {
            valor: ''
        }
    },
    methods:{
        ...mapActions(['agregarValor'])
    }
}
</script>