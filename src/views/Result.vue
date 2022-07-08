<template>
  <div id="result" class="h-screen flex flex-col items-center justify-center gap-16">
    <div class="text-4xl">Ranking</div>
    <el-table :data="tableData" border>
      <el-table-column prop="rank" label="Rank"> </el-table-column>
      <el-table-column prop="name" label="Team" width="300px"></el-table-column>
      <el-table-column prop="count" label="Count"></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Result',
  async created() {
    if (this.$store.state.result) {
      this.result = this.$store.state.result
    } else {
      await this.$store.dispatch('getResult')
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards
    },
    result() {
      return this.$store.state.result
    },
    tableData() {
      if (this.result) {
        return this.result.map((item, index) => {
          return {
            rank: index + 1,
            name: this.cards.find(card => card.id.toString() === item.teamId).name,
            count: item.count
          }
        })
      } else {
        return []
      }
    }
  }
}

</script>

<style scoped>
#result {
  background-color: var(--background-dark);
  background-image: var(--background-gradient-dark);
  color: var(--text-light);
}
</style>
