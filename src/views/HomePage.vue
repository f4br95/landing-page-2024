<template>
<body class="holder">
    <div class="divs">
      <div class="texto">Olá! Meu nome é Fabrício, sou um desenvolvedor web 
        junior apaixonado por VueJS. Estou pronto para contribuir com meus 
        conhecimentos e habilidades para o seu projeto.</div>
        <RouterLink to="/portfolio" class="botao-saiba-mais">
        SAIBA MAIS</RouterLink>
      <div>1</div>
    </div>
   <img class="definitive" src=../assets/definetiveImage.svg>



</body>  
</template>  
    
<script setup>

</script>

<style>

.holder{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-itens: center;
  height: 1000px;}

divs{
  display:flex;
  background-color: red;
  flex-direction: column;
  justify-content: flex-end;
}
.definitive{
  heigth: 467.47px;
  width: 606px;
}

.texto{
  width: 677px;
  heigth: 190px;
  font-family: Montserrat;
}


.botao-saiba-mais{
  background-color: #2AA8DB;
  padding: 20px;
  border-radius: 32px;
  width: 144px;
  height: 5px;
}

.definitive{
  heigth: 467.47px;
  width: 606px;
}
 
</style>
