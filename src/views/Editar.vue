<template>
    <div>
        <router-link to="/valores">
            <button>Regresar</button>
        </router-link>
        <h1>Editar</h1>
        <form @submit.prevent="editarValor(valor)">
            <input type="text" v-model="valor.valor">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getValor(this.id)
    },
    methods:{
        ...mapActions(['getValor', 'editarValor'])
    },
    computed: {
        ...mapState(['valor'])
    }
}
</script>
