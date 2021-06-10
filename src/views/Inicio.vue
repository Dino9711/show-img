<template>
  <div>
    <transition-group>
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <div class="fade-in-text text-center" v-for="(i, index) in currentIndex" :key="index">
      <h1 class="centered your-style" style="color: black; font-size: 100px">{{currentValores.valor}}</h1>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Inicio",
  data() {
    return {
      images: [
        "https://i.ibb.co/hftMxkJ/prueba.jpg",
        "https://i.ibb.co/CVMDB0B/Pozo-de-la-suerte.jpg"
      ],
      timer: null,
      timerText: null,
      currentIndex: 0
    };
  },

  created() {
    this.getValores();
  },

  mounted: function() {
    this.startSlide();
    this.startText();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 8000);
    },

    startText: function() {
      this.timerText = setInterval(10000);
    },

    ...mapActions(["getValores"]),

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

    ...mapState(["valores"]),

    currentValores: function() {
      return this.valores[Math.abs(this.currentIndex) % this.valores.length];
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 1080px;
  width: 1920px;
}

.centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-in-text {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 150px;
  color: black;
  animation: fadeIn linear 3s;
  -webkit-animation: fadeIn linear 3s;
  -moz-animation: fadeIn linear 3s;
  -o-animation: fadeIn linear 3s;
  -ms-animation: fadeIn linear 3s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

.your-style {
    font-family: 'Gloom';
    font-weight: normal;
    font-style: normal;
}
</style>