<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Nuxt Lab</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Trang Chính</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">So Sánh</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/benefits">Lợi Ích</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
// NuxtLink là component được cung cấp bởi Nuxt.js, tương đương với <router-link>
// nhưng tối ưu hơn cho Nuxt.
</script>
