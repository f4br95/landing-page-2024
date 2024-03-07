<template>
  <div class="projetos">
    <h1>PROJETOS</h1>
   <div class="projetos-div" >
      <div class="projetos-img__container"  style="width: 500px;height: 100px;  "><img v-for="i in 3" :key="i" class="projetos-img" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Circle-icons-locked.svg">
      </div>

    </div>

        <p class="holder-texto"> Projetos serão lançados em breve!</p>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const expandir = ref('false')
</script>

<style lang="css" >
h1{
  display: inline;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 22px;
  color: #2F2E41;

}
.projetos{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
   min-height: 70vh;
  align-items: center;
}
.projetos-div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.projetos-img__container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.projetos-img{
display: inline;
  width: 100px;
}

</style>
