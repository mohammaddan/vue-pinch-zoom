// import Vue from 'vue'
import { createApp } from 'vue'
import MdPinchZoom from './mdPinchZoom.vue';

// new Vue({
//     el: '#entryPoint',
//     render: h => h(MdPinchZoom),
// })

createApp({
    components: { MdPinchZoom }
}).mount('#entryPoint')