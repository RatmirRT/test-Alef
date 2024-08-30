<template>
  <div class="data_input">
    <h6>Имя</h6>
    <input type="text" :value="name" @input="changeName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NameInput',
  props: {
    name: {
      type: String
    }
  },
  setup(_, { emit }) {
    const changeName = ($event: Event) => {
      const inputElement = $event.target as HTMLInputElement
      const value = inputElement.value
      const correctValue = nameInputFilter(value)
      inputElement.value = correctValue
      emit('update:name', correctValue)
    }

    const nameInputFilter = (input: string) => {
      const pattern = /^[A-Za-zА-Яа-яЁё\s]+$/
      const test = pattern.test(input)
      if (test || input === '') {
        return input
      } else {
        let correctValue = input.slice(0, -1)
        if (!pattern.test(correctValue)) {
          correctValue = nameInputFilter(correctValue)
        }
        return correctValue
      }
    }

    return {
      changeName
    }
  }
})
</script>

<style scoped>
.data_input {
  position: relative;
  margin-bottom: 10px;
}

.data_input h6 {
  position: absolute;
  left: 16px;
  top: 8px;
  color: var(--gray);
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
}

.data_input input {
  border: 1px solid var(--grayL);
  padding: 26px 16px 6px 16px;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
}
</style>
