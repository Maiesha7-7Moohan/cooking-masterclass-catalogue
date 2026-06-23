<script setup>
import AppHeader from "./components/AppHeader.vue";
import CourseCatalogue from "./components/CourseCatalogue.vue";
</script>

<template>
  <div id="app">
    <AppHeader />
    <CourseCatalogue />
    <footer class="app-footer">
      <p>&copy; 2024 Cooking Masterclass. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-footer {
  background-color: #b3602d;
  color: white;
  text-align: center;
  padding: 24px;
  margin-top: 40px;
}

.app-footer p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
