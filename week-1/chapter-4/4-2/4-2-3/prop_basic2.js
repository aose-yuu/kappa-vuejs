let MyHello = {
  props: {
    yourName: {
      type: String,
      // required: true
    },
    yourName2: [String, Number],
    yourName3: {
      type: String,
      default: 'aiueo'
    }
  },
  template: `<div>
  <p>こんにちは、{{ yourName }}さん！</p>
  <p>こんにちは、{{ yourName2 }}さん！</p>
  <p>こんにちは、{{ yourName3 }}さん！</p>
  </div>`
};

new Vue({
  el: '#app',
  components: {
    'my-hello': MyHello
  }
})
