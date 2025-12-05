<template>
  <div class="container">
    <h2 class="text-center mb-4 text-primary fw-bold">So sánh Nuxt.js và Vue.js</h2>
    
    <div class="card shadow-sm border-0">
      <div class="card-body p-0">
        <table class="table table-hover table-striped mb-0">
          <thead class="bg-primary text-white">
            <tr>
              <th scope="col" class="py-3 ps-4">Tiêu chí</th>
              <th scope="col" class="py-3">Nuxt.js</th>
              <th scope="col" class="py-3">Vue.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fw-bold ps-4">Rendering</td>
              <td><span class="badge bg-success">SSR</span> (Server-Side Rendering)</td>
              <td><span class="badge bg-secondary">CSR</span> (Client-Side Rendering)</td>
            </tr>
            <tr>
              <td class="fw-bold ps-4">Routing</td>
              <td>Tự động thông qua thư mục <code>pages</code></td>
              <td>Cần cấu hình thủ công (Vue Router)</td>
            </tr>
            <tr>
              <td class="fw-bold ps-4">Quản lý trạng thái</td>
              <td>Tích hợp sẵn, cấu hình đơn giản</td>
              <td>Cần cài đặt và cấu hình thêm (Pinia/Vuex)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-4 text-center">
      <router-link to="/" class="btn btn-link text-decoration-none">
        &larr; Quay lại trang chủ
      </router-link>
    </div>
  </div>
</template>