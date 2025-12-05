<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <div class="p-5 mb-4 bg-white rounded-3 shadow-sm border">
          <h1 class="display-5 fw-bold text-primary mb-3">Giới thiệu về Nuxt.js</h1>
          <p class="col-md-12 fs-5 text-muted">
            Nuxt.js là một framework mạnh mẽ cho Vue.js, giúp phát triển ứng dụng 
            <strong class="text-dark">SSR</strong> (Server-Side Rendering) và 
            <strong class="text-dark">SPA</strong> (Single Page Application) một cách dễ dàng.
          </p>
          
          <hr class="my-4">
          
          <p>Khám phá thêm các tính năng nổi bật:</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <router-link to="/about" class="btn btn-primary btn-lg px-4 gap-3">
              So sánh với Vue.js
            </router-link>
            <router-link to="/benefits" class="btn btn-outline-secondary btn-lg px-4">
              Xem lợi ích
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>