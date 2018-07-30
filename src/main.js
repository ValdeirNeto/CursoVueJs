import Vue from 'vue'
import {Time} from './time';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
  el: '#app',
  data:{
    times: [
       new Time("America MG", require('./assets/america_mg_60x60.png')),
       new Time("Atletico PR", require('./assets/atletico-pr_60x60.png')),
       new Time("Atletico MG", require('./assets/atletico_mg_60x60.png')),
       new Time("Botafogo", require('./assets/botafogo_60x60.png')),
       new Time("Chapecoense", require('./assets/chapecoense_60x60.png')),
       new Time("Corinthians", require('./assets/corinthians_60x60.png')),
       new Time("Coritiba", require('./assets/coritiba_60x60.png')),
       new Time("Figueirense", require('./assets/figueirense_60x60.png')),
       new Time("Flamengo", require('./assets/flamengo_60x60.png')),

    ]
  },
});
