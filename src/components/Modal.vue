<template>
  <div class="flex flex-col 2xl:flex-row items-center gap-4 rounded-4xl">
    <div class="background_dark flex flex-col items-center rounded-4xl">
      <div v-if="!isMobile()">
        <img
          :src="card.imageInfo"
        />
      </div>
      <div v-else>
        <img
          :src="card.imageInfoMobile"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center 2xl:items-start gap-4 p-3">
      <div v-if="votedTeamId && votedTeamId === card.id" class="button_voted h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
        <i class="fa-solid fa-heart"></i>
        <span>Đã bình chọn</span>
      </div>
      <button v-if="!votedTeamId" @click="confirmVote" class="button_vote h-12 md:h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
        <i class="fa-regular fa-heart"></i>
        <span>Bình chọn</span>
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
    },
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
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
