<template>
  <div class="form_page">
    <div class="form_user_data">
      <h4>Персональные данные</h4>
      <NameInputComponent v-model:name="userData.name" />
      <AgeInputComponent v-model:age="userData.age" />
    </div>
    <div class="form_user_child">
      <h4>Дети (макс. 5)</h4>
      <button class="add_btn" @click="addChild" v-if="!userData.child || userData.child.length < 5">
        Добавить ребенка
      </button>
      <div class="form_user_child_list">
        <div class="form_user_child_item" v-for="(child, key) in userData.child" :key="key">
          <div class="form_user_child_data">
            <NameInputComponent v-model:name="child.name" />
          </div>
          <div class="form_user_child_data">
            <AgeInputComponent v-model:age="child.age" />
          </div>
          <button class="delete_btn" @click="deleteChild(key)">Удалить</button>
        </div>
      </div>
    </div>
    <button class="save_btn" @click="saveUserData">Сохранить</button>
    <p v-if="showmessage">Сохранено ...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NameInputComponent from '@/components/nameInputComponent.vue'
import AgeInputComponent from '@/components/ageInputComponent.vue'
import { useUserStore } from '@/store'

export default defineComponent({
  components: { NameInputComponent, AgeInputComponent },
  setup() {
    const showmessage = ref(false)
    const userStore = useUserStore()
    const userData = ref<UserData>(JSON.parse(JSON.stringify(userStore.userData)))

    const addChild = () => {
      if (!userData.value.child) {
        userData.value.child = []
      }
      if (userData.value.child.length < 5) {
        userData.value.child.push({} as { name: string; age: number })
      }
    }

    const deleteChild = (index: number) => {
      userData.value.child?.splice(index, 1)
    }

    const saveUserData = () => {
      userStore.updateUserData(userData.value)
      showmessage.value = true
      setTimeout(() => {
        showmessage.value = false
      }, 1000)
    }

    return {
      userData,
      showmessage,
      addChild,
      deleteChild,
      saveUserData
    }
  }
})
</script>

<style scoped>
.form_user_data {
  margin-bottom: 20px;
}

.form_user_child {
  position: relative;
  padding-top: 10px;
}

.form_user_child .add_btn {
  position: absolute;
  right: 0;
  top: 0;
  border: 2px solid var(--skyblue);
  background-color: transparent;
  border-radius: 100px;
  padding: 10px 20px 10px 48px;
  font-size: 14px;
  font-weight: 400;
  color: var(--skyblue);
}

.form_user_child .add_btn::before {
  content: '';
  display: block;
  background-image: url(@/assets/plus.png);
  width: 24px;
  height: 24px;
  background-size: cover;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.form_user_child_list {
  margin-bottom: 20px;
}

.form_user_child_item {
  display: flex;
  gap: 18px;
}

.form_user_child_data {
  flex-grow: 1;
}

.form_user_child_item .delete_btn {
  background-color: transparent;
  color: var(--skyblue);
  margin-bottom: 10px;
}

.save_btn {
  border-radius: 100px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding: 10px 20px;
  background-color: var(--skyblue);
  margin-bottom: 10px;
}
</style>
