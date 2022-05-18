new Vue({
  el: '#app',
  data: {
    path: 'https://er-animal.jp/pepy/wp-content/uploads/2018/12/shutterstock_1091340230.jpg'
  },
  methods: {
    onmouseenter: function () {
      this.path = 'https://img.huffingtonpost.com/asset/5f3caa10230000b70652270d.jpeg?cache=SuZrhScF6p&ops=1778_1000';
    },
    onmouseleave: function () {
      this.path = 'https://er-animal.jp/pepy/wp-content/uploads/2018/12/shutterstock_1091340230.jpg';
    }
  }
})
