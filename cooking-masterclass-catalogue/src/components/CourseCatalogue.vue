<template>
  <div class="container">
    <h1>Cooking Masterclass Catalogue</h1>
    <p>Browse our expert-led cooking courses</p>

    <div class="grid">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import CourseCard from "./CourseCard.vue";

const store = useStore();
const courses = store.state.courses;
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.container h1 {
  margin: 0 0 8px 0;
  font-size: 2rem;
  color: #2c3e50;
}

.container p {
  margin: 0 0 20px 0;
  color: #666;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  .container h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 12px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .container h1 {
    font-size: 1.3rem;
  }
}
</style>
