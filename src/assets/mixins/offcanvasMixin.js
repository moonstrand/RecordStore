import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  methods: {
    canvasToggle() {
      this.offcanvas.toggle();
    },
    canvasHide() {
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
  },
};
