<template>
  <div class="card" :class="{ 'sold-out': !course.available }">
    <h3>{{ course.title }}</h3>
    <p>
      <strong>{{ course.chef }}</strong>
    </p>
    <p class="price">${{ course.price }}</p>
    <div v-if="!course.available" class="badge">Sold Out</div>
    <button
      v-else
      class="btn"
      :class="{ 'btn-saved': isInWishlist }"
      @click="toggleWishlist"
    >
      ♥ {{ isInWishlist ? "Saved" : "Save" }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});

const store = useStore();

const isInWishlist = computed(() =>
  store.getters.isInWishlist(props.course.id),
);

const toggleWishlist = () => {
  store.dispatch("toggleWishlist", props.course.id);
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background: white;
}

.card h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
}

.card p {
  margin: 4px 0;
  color: #666;
  font-size: 0.9rem;
}

.price {
  font-weight: bold;
  color: #2c3e50;
  margin: 8px 0;
}

.badge {
  background: #ff6b6b;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
  display: inline-block;
  margin-top: 8px;
}

.sold-out {
  opacity: 0.6;
  background: #f5f5f5;
}

.btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: white;
  border: 2px solid #2c3e50;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
}

.btn:hover {
  background: #f0f0f0;
}

.btn-saved {
  background: #2c3e50;
  color: white;
}
</style>
