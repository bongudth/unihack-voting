div<template>
  <div id="result" class="h-screen flex flex-col items-center justify-center gap-8">
    <div class="flex items-center justify-around w-full px-24">
      <img
        :src="winner.image"
        class="h-150 w-150 rounded-2xl object-cover"
      />
      <div class="text-center">
        <h1 class="text-6xl font-bold">Giải yêu thích nhất</h1>
        <div class="flex justify-center">
          <img
            :src="image"
            class="h-40 w-40 mt-12"
          />
        </div>
        <div class="text-8xl font-bold mt-12">{{ winner.name }}</div>
        <div class="text-4xl mt-12">Số lượt bình chọn: <span class="font-bold">{{ winner.count }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Winner',
  data: function() {
    return {
      image: 'https://static.thenounproject.com/png/426812-200.png'
    }
  },
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
    winner() {
      if (this.result) {
        const winnerTeam = this.cards.find(card => card.id.toString() === this.result?.[0].teamId)
        return {
          image: winnerTeam.image,
          name: winnerTeam.name,
          count: this.result?.[0].count
        }
      } else {
        return {}
      }
    }
  }
}

</script>

<style scoped>
#result {
  background-color: var(--background-dark);
  background-image: url("../assets/modal_background.png");
  color: var(--text-light);
}
</style>
