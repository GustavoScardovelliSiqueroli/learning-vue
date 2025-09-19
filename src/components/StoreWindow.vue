<template>
  <div class="window-container">
    <div class="window-list">
      <div class="window-item" v-for="item in props.items" :key="item.name">
        <div class="item-left">
          <h3>{{ item.title }}</h3>
          <span>{{ item.message }}</span>
        </div>
        <div class="item-right">
          <div class="item-right-info">
            <span>amount: {{ item.amount }}</span>
            <span>
              $
              <img
                :src="getCurrencyImagePath(item.currency)"
                :alt="item.currency"
              />:
              {{ item.value }}
            </span>
          </div>
          <button>BUY</button>
        </div>
        <!-- {{ item }} -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type CurrencyType = 'black-coin' | 'coin'

interface Item {
  name: string
  title: string
  message?: string
  value: number
  amount: number
  currency: CurrencyType
}

function getCurrencyImagePath(
  currency: CurrencyType,
): '/emojis/1F311.svg' | '/emojis/1FA99.svg' {
  if (currency == 'black-coin') {
    return '/emojis/1F311.svg'
  }
  if (currency == 'coin') {
    return '/emojis/1FA99.svg'
  }
  return '/emojis/1FA99.svg'
}

const props = defineProps<{
  items: Item[]
}>()

console.log(props)
</script>

<style scoped>
.window-container {
  background-color: #60686c;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 600px;
  border-radius: 4px;
}
.window-header {
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  flex: 0 0 auto;
}

.window-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
  flex: 1 1 auto;
  overflow-y: auto;
  margin-right: 2px;
}
.window-item {
  flex: 0 0 calc((100% - (6 - 1) * 20px) / 6);
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 5px;
}
.window-item img {
  width: 25px;
  height: 25px;
}
.item-left {
  width: 80%;
}
.item-right {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-right span {
  display: flex;
  align-items: center;
}
.item-right-info {
  display: flex;
  flex-direction: column;
}
.window-list::-webkit-scrollbar {
  width: 10px;
}
.window-list::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>
