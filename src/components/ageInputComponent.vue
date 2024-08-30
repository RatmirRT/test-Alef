<template>
  <div class="data_input">
    <h6>Возраст</h6>
    <input type="text" inputmode="numeric" :value="age" @input="changeAge" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AgeInput',
  props: {
    age: {
      type: Number
    }
  },
  setup(_, { emit }) {
    const changeAge = ($event: Event) => {
      const inputElement = $event.target as HTMLInputElement
      const value = inputElement.value
      const correctValue = ageInputFilter(value)
      inputElement.value = correctValue
      emit('update:age', Number(correctValue))
    }

    const ageInputFilter = (input: string) => {
      const pattern = /^(100|[1-9][0-9]?)$/
      const test = pattern.test(input)
      if (test || input === '') {
        return input
      } else {
        let correctValue = input.slice(0, -1)
        if (!pattern.test(correctValue)) {
          correctValue = ageInputFilter(correctValue)
        }
        return correctValue
      }
    }

    return {
      changeAge
    }
  }
})
</script>

<style scoped>
.data_input {
  position: relative;
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
  margin-bottom: 10px;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
}
</style>
