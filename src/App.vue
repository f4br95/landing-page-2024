<script setup>



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


