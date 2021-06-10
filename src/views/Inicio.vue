<template>
  <div>
    <transition-group>
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
      <div v-for="(i, index) in currentIndex" :key="index">
          <h1 class="centered" style="color: black;">USD - {{currentValores.valor}}</h1>
      </div>
    </transition-group>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "Inicio",
  data() {
    return {
      images: [
        "https://i.pinimg.com/originals/dc/2d/14/dc2d14bf8591b7ebe65203b02d0a4d45.jpg",
        "https://images.hdqwalls.com/wallpapers/minimal-landscape-4k-ro.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  created(){
    this.getValores()
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    ...mapActions(['getValores']),

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    ...mapState(['valores']),
    currentValores: function() {
      return this.valores[Math.abs(this.currentIndex) % this.valores.length];
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:1080px;
  width:1920px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>