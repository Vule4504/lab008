<template>
  <div class="container">
    <h2 class="text-center mb-5 text-primary fw-bold">Lợi ích khi sử dụng Nuxt.js</h2>
    
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0 hover-card">
          <div class="card-body text-center">
            <div class="fs-1 mb-3">🚀</div>
            <h5 class="card-title fw-bold">Hiệu suất tối ưu</h5>
            <p class="card-text text-muted">Hỗ trợ cả SSR (Server Side) và CSR (Client Side) giúp ứng dụng chạy nhanh hơn.</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0 hover-card">
          <div class="card-body text-center">
            <div class="fs-1 mb-3">📂</div>
            <h5 class="card-title fw-bold">Routing Tự động</h5>
            <p class="card-text text-muted">Không cần file config router. Chỉ cần tạo file trong thư mục <code>pages</code>.</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0 hover-card">
          <div class="card-body text-center">
            <div class="fs-1 mb-3">🔍</div>
            <h5 class="card-title fw-bold">SEO Tốt hơn</h5>
            <p class="card-text text-muted">Nhờ cơ chế SSR, các công cụ tìm kiếm dễ dàng đọc nội dung trang web của bạn.</p>
          </div>
        </div>
      </div>
       <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0 hover-card">
          <div class="card-body text-center">
            <div class="fs-1 mb-3">📦</div>
            <h5 class="card-title fw-bold">Quản lý trạng thái</h5>
            <p class="card-text text-muted">Tích hợp dễ dàng với các thư viện quản lý trạng thái như Vuex hoặc Pinia.</p>
          </div>
        </div>
      </div>

       <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0 hover-card">
          <div class="card-body text-center">
            <div class="fs-1 mb-3">⚙️</div>
            <h5 class="card-title fw-bold">Cấu hình đơn giản</h5>
            <p class="card-text text-muted">Mọi cấu hình được quản lý tập trung, có nhiều modules hỗ trợ sẵn.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 text-center">
      <router-link to="/" class="btn btn-outline-primary me-2">Về trang chủ</router-link>
      <router-link to="/about" class="btn btn-primary">Xem so sánh</router-link>
    </div>
  </div>
</template>

<style scoped>
/* Hiệu ứng khi di chuột vào thẻ card */
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
</style>