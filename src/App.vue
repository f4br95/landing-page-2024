<script setup>

import Homepage from './views/Homepage.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'

import { onMounted } from 'vue';
onMounted(() => {
  document.title = "Landing Page"
  console.log('mounted')
});


  
</script>



<template>
    
    <header class="header">
          <div>

              <img class="logo" src="./assets/logo.png" alt="Logo">
          
          </div>


          <nav class="header-nav">
            <RouterLink to="/" class="routerlink">HOME</RouterLink>
            <RouterLink to="/portfolio" class="routerlink">PORTFOLIO</RouterLink>
            <RouterLink to="/contact" class="routerlink">CONTATO</RouterLink>
          </nav>
          
    </header>
  <RouterView />
</template>


