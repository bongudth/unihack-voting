<template>
  <div>
    <div @click="dialogVisible=true" class="card md:w-200 flex flex-col md:flex-row items-center md:items-start gap-4 rounded-4xl p-4">
      <div class="image_border h-46 w-66 md:h-66 md:w-86 rounded-4xl p-3">
        <img
          src="../assets/team.jpg"
          class="h-40 min-w-60 md:h-60 md:min-w-80 rounded-4xl object-cover"
        />
      </div>
      <div class="flex flex-col justify-center items-center md:items-start gap-4 p-3">
        <div class="text-3xl lg:text-4xl uppercase text-stroke-sm">{{ name }}</div>
        <div class="desc">
          {{ desc }}
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
    >
      <div>{{ desc }}</div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'Card',
  data() {
    return {
      name: 'Brain Shield',
      desc: 'Công cụ giúp đơn giản hóa việc đăng ký quyền sở hữu tác giả, đảm bảo tính minh bạch trong việc đăng ký quyền sở hữu tác giả (Thời điểm đăng ký), tiết kiệm thời gian, chi phí thủ tục cho người đăng ký.',
      dialogVisible: false
    }
  }
}

</script>

<style scoped>
.card {
  cursor: pointer;
  background-color: #1C1654;
  box-shadow: #16134A 0px 7px 29px 0px;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.image_border {
  background-color: #16134A;
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.desc {
  color: #E0DCEA;
}
</style>
