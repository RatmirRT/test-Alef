import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const userData = ref({} as UserData)

  const savedUserData = localStorage.getItem('userData')

  if (savedUserData) {
    userData.value = JSON.parse(savedUserData)
  }

  watch(
    userData,
    (value: UserData) => {
      localStorage.setItem('userData', JSON.stringify(value))
    },
    { deep: true }
  )

  const updateUserData = (newData: UserData) => {
    userData.value = newData
  }

  return {
    userData,
    updateUserData
  }
})
