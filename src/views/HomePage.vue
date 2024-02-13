<template>
<body class="holder">
    <div class="left-c">
      <div class="texto">Olá! Meu nome é Fabrício, sou um desenvolvedor web 
        junior apaixonado por VueJS. Estou pronto para contribuir com meus 
        conhecimentos e habilidades para o seu projeto.</div>
      <RouterLink to="/portfolio" class="botao-saiba-mais">
        SAIBA MAIS</RouterLink>
    </div>
   <img class="definitive" src=../assets/definetiveImage.svg>



</body>  
</template>  
    
<script setup>

import { onMounted } from 'vue';
onMounted(() => {
  console.log("mounted")
  document.title = "Landing Page"
});

</script>

<style>

.holder{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-itens: center;
  height: 1000px;
}

.left-c{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-itens: flex-end;
  heigth: 200px;
  width: 650px;
  text-align: justify; 
}
.definitive{
  heigth: 467.47px;
  width: 606px;
}

.texto{
  font-family: Montserrat;
}


.botao-saiba-mais{
  background-color: #2AA8DB;
  display:flex;
  justify-content: center;
  margin-top: 40px;
  padding: 10px;
  border-radius: 32px;
  width: 144px;
  heigth: 5px;
  color: white;
}

 
</style>
