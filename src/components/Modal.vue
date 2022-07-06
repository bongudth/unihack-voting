<template>
  <div class="flex flex-col 2xl:flex-row items-center gap-4 rounded-4xl md:p-8">
    <div class="background_dark flex flex-col items-center rounded-4xl p-2 md:p-4 gap-4 md:gap-8">
      <img
        :src="card.image"
        class="min-w-40 sm:min-w-60 md:min-w-80 lg:min-w-100 rounded-4xl object-cover"
      />
      <div class="team_name sm:text-xl md:text-2xl lg:text-3xl text-stroke-sm">{{ card.name }}</div>
    </div>
    <div class="flex flex-col justify-center items-center 2xl:items-start gap-4 p-3">
      <div class="desc">
        {{ card.desc }}
      </div>
      <div v-if="votedTeamId && votedTeamId === card.id" class="button_voted h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
        <i class="fa-solid fa-heart"></i>
        <span>Voted</span>
      </div>
      <button v-if="!votedTeamId" @click="confirmVote" class="button_vote h-12 md:h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
        <i class="fa-regular fa-heart"></i>
        <span>Up vote</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    votedTeamId() {
      return this.$store.state.votedTeamId
    }
  },
  methods: {
    confirmVote() {
      this.$confirm('Are you sure to vote for ' + this.card.name + ' <br /><strong>You cannot undo after voting.</strong>', 'Confirm vote', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: 'Vote',
        cancelButtonText: 'Cancel'
      }).then(() => {
        this.$emit('vote', this.card.id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Vote canceled'
        })
      })
    }
  }
}

</script>

<style scoped>
.background_dark {
  background-color: var(--background-dark);
  box-shadow: var(--box-shadow-dark);
}

.background_dark > img {
  box-shadow: var(--box-shadow-dark);
}

.team_name {
  color: var(--text-light);
}

.desc {
  color: var(--text-mid);
  font-size: var(--text-size);
}

.button_vote,
.button_voted {
  background-image: var(--background-gradient-light);
  color: var(--text-light);
  box-shadow: var(--box-shadow-dark);
  font-size: var(--text-size);
}

.button_vote > i,
.button_vote > span {
  transition: var(--transition);
}

.button_vote:hover > i {
  transform: rotate(15deg);
}

.button_vote:hover > span {
  transform: rotate(-5deg);
}
</style>
