import Vue from 'vue'
// import App from './App.vue'

import Child from './Child.vue'

Vue.directive('color',{
    bind(el,binding){
        el.style[binding.arg] = binding.value
    },
});

Vue.directive('aa',{
  bind(el,binding){
      let type = binding.arg;
      let fn = binding.value;
      el.addEventListener(type,fn)
  },
})

Vue.directive('bb',{
    bind(el,binding){
      if (binding.modifiers['delay']) {
        let delay = binding.modifiers.delay = 3000
        setTimeout(function(){
          el.style[binding.arg] = binding.value
        },delay)
      }
    }
})

new Vue({
  el: '#app',
  render: h => h(Child)
})
