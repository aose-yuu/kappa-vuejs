new Vue({
  el: '#app',
  data: {
    path: './images/wings.jpg'
  },
  methods: {
    onerror: function () {
      this.path = 'https://exse.eyewated.com/pict/789e796972f53455-1024x683.jpg';
    }
  }
})
