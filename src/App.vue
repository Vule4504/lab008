<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

// Hàm chuyển đổi giao diện
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const theme = isDarkMode.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme)
}

// Kiểm tra cài đặt mặc định khi load trang
onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', 'light')
})
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg border-bottom" 
         :class="isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'">
      <div class="container">
        <router-link class="navbar-brand fw-bold text-primary" to="/">
          <i class="bi bi-code-square"></i> Vue Vite
        </router-link>
        
        <div class="d-flex align-items-center">
          <ul class="navbar-nav flex-row me-3">
            <li class="nav-item me-3">
              <router-link class="nav-link" active-class="fw-bold text-primary" to="/">Trang chủ</router-link>
            </li>
            <li class="nav-item me-3">
              <router-link class="nav-link" active-class="fw-bold text-primary" to="/about">So sánh</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="fw-bold text-primary" to="/benefits">Lợi ích</router-link>
            </li>
          </ul>

          <button @click="toggleTheme" class="btn btn-outline-secondary btn-sm rounded-circle">
            <i class="bi" :class="isDarkMode ? 'bi-moon-stars-fill' : 'bi-sun-fill'"></i>
          </button>
        </div>
      </div>
    </nav>

    <main class="flex-grow-1 py-4">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="text-center py-3 mt-auto border-top" 
            :class="isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'">
      <div class="container">
        <small class="text-muted">&copy; 2025 Front-End Frameworks. Built with Vue & Vite.</small>
      </div>
    </footer>
  </div>
</template>

<style>
/* Animation chuyển trang */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>