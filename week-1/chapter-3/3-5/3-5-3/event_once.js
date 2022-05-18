new Vue({
  el: '#app',
  data: {
    result: '-'
  },
  methods: {
    onclick: function () {
      this.result = Math.floor(Math.random() * 100) + 1;
    }
  }
});
