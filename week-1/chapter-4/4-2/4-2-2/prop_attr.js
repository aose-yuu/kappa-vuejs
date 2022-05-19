let MyHello = {
  inherAttrs: false,
  template: `<div title="result" class="main">こんにちは、Vue.js!</div>`
}

new Vue({
  el: '#app',
  components: {
    'my-hello': MyHello
  }
});
