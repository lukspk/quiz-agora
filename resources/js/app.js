require('./bootstrap');
import Vue from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

// new Vue({
//     components: {
//         PulseLoader
//     }
// })Vue({
//     components: {
//         PulseLoader
//     }
// })

// const app = new Vue({
//     el: '#app',
//     store,
// });

// Vue.component('teste-teste', require('./components/teste-comp.vue').default);
Vue.component('quiz-aleatorio', require('./components/QuizAleatorio.vue').default);

const app = new Vue({
    el: '#app',
});
