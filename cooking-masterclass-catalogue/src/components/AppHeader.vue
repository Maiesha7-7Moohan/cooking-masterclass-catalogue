<template>
  <header>
    <div class="header">
      <h1>Cooking Masterclass</h1>
      <div class="wishlist">♥ Wishlist ({{ wishlistCount }})</div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const wishlistCount = computed(() => store.getters.wishlistCount);
</script>

<style scoped>
header {
  background: #2c3e50;
  color: white;
  padding: 16px;
  border-bottom: 3px solid #3498db;
}

.header {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.wishlist {
  font-weight: bold;
  font-size: 1rem;
}

@media (max-width: 640px) {
  header h1 {
    font-size: 1.2rem;
  }

  .wishlist {
    font-size: 0.9rem;
  }
}
</style>
