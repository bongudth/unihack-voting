<template>
  <div class="card md:w-200 flex flex-col md:flex-row items-center md:items-start gap-2 sm:gap-4 border-1 md:border-0 rounded-4xl p-2 sm:p-4">
    <div class="background_dark rounded-4xl p-3">
      <img
        @click="openModal"
        :src="card.image"
        class="h-50 min-w-50 md:h-70 md:min-w-70 rounded-4xl object-cover cursor-pointer"
      />
    </div>
    <div class="md:h-70 flex flex-col justify-between items-between md:items-start gap-4 p-3">
      <div class="flex flex-col gap-4">
        <div @click="openModal" class="text-3xl lg:text-4xl text-stroke-sm cursor-pointer">{{ card.name }}</div>
        <div @click="openModal" class="desc cursor-pointer">
          {{ desc }}
        </div>
      </div>
      <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div v-if="votedTeamId && votedTeamId === card.id" class="button_voted h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
          <i class="fa-solid fa-heart"></i>
          <span>Đã bình chọn</span>
        </div>
        <div v-if="!votedTeamId" class="background_dark border-1 md:border-0 rounded-2xl p-0.5">
          <button @click="confirmVote" class="button_vote h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
            <i class="fa-regular fa-heart"></i>
            <span>Bình chọn</span>
          </button>
        </div>
        <span class="italic text-sm">Tổng số lượt bình chọn: <span class="font-bold">{{teamCount}}</span></span>
      </div>
    </div>
  </div>
</template>

<script>

import { launchConfetti } from '../utils/confetti'

export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  async created() {
    if (this.$store.state.votedTeamId) {
      this.votedTeamId = this.$store.state.votedTeamId
    } else {
      await this.$store.dispatch('getVote')
    }
    if (this.$store.state.result) {
      this.result = this.$store.state.result
    } else {
      await this.$store.dispatch('getResult')
    }
  },
  computed: {
    votedTeamId() {
      return this.$store.state.votedTeamId
    },
    desc() {
      if (this.card.desc.length > 200) {
        return this.card.desc.substring(0, 200) + '...'
      } else {
        return this.card.desc
      }
    },
    result() {
      return this.$store.state.result
    },
    teamCount() {
      if (this.result) {
        return this.result?.map(item => {
          return {
            teamId: item.teamId,
            count: item.count
          }
        })?.find(item => item.teamId === String(this.card.id))?.count || 0
      } else {
        return 0
      }
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal', this.card)
    },
    confirmVote() {
      this.$confirm('Are you sure to vote for ' + this.card.name + ' <br /><strong>You cannot undo after voting.</strong>', 'Confirm vote', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: 'Vote',
        cancelButtonText: 'Cancel'
      }).then(() => {
        this.$emit('vote', this.card.id)
        this.$store.dispatch('getResult')
        launchConfetti()
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
.card {
  background-color: var(--background-purple-dark);
  box-shadow: var(--box-shadow-dark);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--box-shadow-darker);
}

.background_dark {
  background-color: var(--background-dark);
  box-shadow: var(--box-shadow-dark);
}

.background_dark > img {
  box-shadow: var(--box-shadow-dark);
}

.desc {
  color: var(--text-mid);
}

.button_voted {
  background-image: var(--background-gradient-light);
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
