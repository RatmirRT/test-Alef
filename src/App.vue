<template>
  <headerComponent />
  <main>
    <RouterView />
  </main>
  <footer>
    <p>all rights reserved</p>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import headerComponent from '@/components/headerComponent.vue'
</script>

<style>
:root {
  --black: rgb(17, 17, 17);
  --skyblue: rgb(1, 167, 253);
  --gray: rgba(17, 17, 17, 0.48);
  --grayL: rgb(241, 241, 241);
  --grayM: rgb(250, 250, 250);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}

h4 {
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  color: var(--black);
}

button {
  cursor: pointer;
}

main {
  min-height: calc(100vh - 217px);
  max-width: 616px;
  margin: 30px auto;
}

footer {
  padding: 30px 0;
  background-color: var(--grayM);
}

footer p {
  text-align: center;
  font-size: 13px;
  font-weight: 400;
}
</style>
