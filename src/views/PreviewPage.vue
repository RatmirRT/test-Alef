<template>
  <div class="preview_page">
    <div class="preview_user_data">
      <h4>Персональные данные</h4>
      <p>{{ userData.name }}, {{ userData.age }} лет</p>
    </div>
    <div class="preview_user_child">
      <h4>Дети</h4>
      <p v-for="(child, key) in userData.child" :key="key">{{ child.name }}, {{ child.age }} лет</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const userData = ref<UserData>(JSON.parse(JSON.stringify(userStore.userData)))

    return {
      userData
    }
  }
})
</script>

<style scoped>
.preview_user_data {
  margin-bottom: 60px;
}

.preview_user_child p {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: var(--grayL);
  width: fit-content;
}

.preview_user_child p:last-child {
  margin-bottom: 0;
}
</style>
