import { createStore } from 'vuex'
import {db} from '../firebase'
import router from '../router'
import { tsConstructorType } from '@babel/types';

export default createStore({
  state: {
    valores: [],
    valor: {nombre: '', id: ''}
  },
  mutations: {
    setValores(state, payload){
      state.valores = payload
    },
    setValor(state, payload){
      state.valor = payload
    },
    setEliminarValor(state, payload){
      state.valores = state.valores.filter(item => item.id !== payload)
    }
  },
  actions: {
    async getValores({commit}) {
      const valores = []
      await db.collection('valores').get()
      .then(res => {
        res.forEach(doc => {
          //console.log(doc.id);
          //console.log(doc.data());
          let valor = doc.data()
          valor.id = doc.id
          valores.push(valor)
        })
        commit('setValores', valores)
      })
    },
    getValor({commit}, idValor){
      db.collection('valores').doc(idValor).get()
      .then(doc => {
        let valor = doc.data()
        valor.id = doc.id
        commit('setValor', valor)
      })
    },
    editarValor({commit}, valor){
      db.collection('valores').doc(valor.id).update({
        valor: valor.valor
      })
      .then(() => {
        router.push('/valores')
      })
    },
    agregarValor({commit}, valor){
      db.collection('valores').add({
        valor: valor
      })
      .then(() =>{
        router.push('/valores')
      })
    },
    eliminarValor({commit, dispatch}, idValor){
      db.collection('valores').doc(idValor).delete()
      .then(() => {
        console.log('tarea eliminada')
        commit('setEliminarValor', idValor)
      })
    },
    actualizarDatos(){
      location.reload();
    }
  },
  modules: {
  }
})
