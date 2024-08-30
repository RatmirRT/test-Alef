<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <nav class="menu">
        <RouterLink to="/">Форма</RouterLink>
        <RouterLink to="preview">Превью</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent'
})
</script>

<style scoped>
header {
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
  padding: 28px 0 24px 0;
}

.container {
  position: relative;
  max-width: 1182px;
  margin: 0 auto;
}

.logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.menu {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 24px;
  padding: 0 93px;
}

.menu a {
  color: var(--gray);
}

.menu .router-link-active {
  color: var(--black);
}
</style>
