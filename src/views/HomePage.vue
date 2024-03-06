<template>
<body class="holder">
    <div class="holder-left">
      <div class="holder-texto">
        <p>{{descricao}}</p>

      </div>
      <RouterLink to="/portfolio" class="holder-botao-saiba-mais">
        SAIBA MAIS</RouterLink>
    </div>
   <img class="holder-img" src=../assets/definetiveImage.svg>

</body>  
</template>  
<script setup>

import { onMounted, ref } from 'vue';
onMounted(() => {
  document.title = "Landing Page"
});

const descricao = ref("Olá! Meu nome é Fabrício, sou um desenvolvedor junior apaixonado por VueJS. Estou pronto para contribuir com meus conhecimentos e habilidades para o seu projeto.");
</script>

<style>
 
</style>
