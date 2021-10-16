new Vue({
  el: "#app",

  data() {
    return {
      logoTitle: "Cubreasientos MX",
      imageLogo: "./assets/logo-orange.png",
      imageLogo_alt: "Logotipo de Cubreasientos MX",

      bannerText: "Crea tu diseño",
      bannerMessage:
        "Con tips de combinaciones y cualquier cambio antes de la fabricacion.",

      selectedColors: 0,

      step1Completed: false,

      iconSteps: "./assets/finish-flag-32.png",

      colorsBody: ["212121", "9D9D9D", "D9CAB3"],
      colorsWrap: ["212121", "9D9D9D", "D9CAB3", "FFF305"],
    };
  },

  methods: {
    restartDesign() {
      this.selectedColors = 0;
      this.step1Completed = false;
    },

    set1Color() {
      this.selectedColors = 1;
      this.step1Completed = true;
    },

    set2Color() {
      this.selectedColors = 2;
      this.step1Completed = true;
    },
  },
});
