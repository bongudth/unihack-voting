<template>
  <div class="card w-200 flex gap-4 rounded-4xl p-4">
    <div class="image_border h-66 w-86 rounded-4xl p-3">
      <img
        src="../assets/team.jpg"
        class="h-60 min-w-80 rounded-4xl object-cover"
      />
    </div>
    <div class="flex flex-col justify-center gap-4 p-3">
      <div class="text-4xl uppercase text-stroke-sm">Brain Shield</div>
      <div>
        Công cụ giúp đơn giản hóa việc đăng ký quyền sở hữu tác giả, đảm bảo
        tính minh bạch trong việc đăng ký quyền sở hữu tác giả (Thời điểm đăng
        ký), tiết kiệm thời gian, chi phí thủ tục cho người đăng ký.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card'
}

</script>

<style scoped>
.card {
  background-image: linear-gradient(to bottom, #2C1855, #1C1654);
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.image_border {
  background-color: #16134A;
  box-shadow: #1C1654 0px 7px 29px 0px;
}
</style>
