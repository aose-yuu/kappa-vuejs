new Vue({
  el: '#app',
  methods: {
    onParentClick: function () {
      console.log('#parent run');
    },
    onMyClick: function () {
      console.log('#my run');
    },
    onChildClick: function () {
      console.log('#child run');
    },
  }
});
