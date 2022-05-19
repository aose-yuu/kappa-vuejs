let MyBook = {
  data: function () {
    return {
      book: {
        isbn: '123-1-1234-1234-1',
        title: '作って楽しむプログラミング HTML5超入門',
        price: 2000,
        publish: '日経BP'
      }
    };
  },
  template: `<div>
    <slot v-bind:book="book">{{ book.title }} ({{ book.publish }})</slot>
  </div>`
};

new Vue({
  el: '#app',
  components: {
    'my-book': MyBook
  }
});
