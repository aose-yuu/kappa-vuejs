new Vue({
  el: '#app',
  data: {
    pos: {
      left: 0,
      top: 0
    },
    show: false
  },
  methods: {
    onleftclick: function () {
      this.show = false;
    },
    onrightclick: function (e) {
      this.pos = {
        left: `${e.pageX}px`,
        top: `${e.pageY}px`
      };
      this.show = true;
    }
  }
});
