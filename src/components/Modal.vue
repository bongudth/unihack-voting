<template>
  <div>
    <div class="modal flex flex-col 2xl:flex-row items-center gap-4 rounded-4xl p-16">
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
        <button @click="voteTeam" class="button_vote h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
          <i class="fa-regular fa-heart"></i>
          <span>Up vote</span>
        </button>
      </div>
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
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    voteTeam() {
      this.$emit('vote-team', this.card.id)
    }
  }
}

</script>

<style scoped>
.modal {
  background-image: url("../assets/unihack_background.png");
  background-size: cover;
  background-position: center;
  box-shadow: #16134A 0px 7px 29px 0px;
  transition: all 0.3s ease-in-out;
}

.modal:hover {
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.background_dark {
  background-color: #16134A;
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.background_dark > img {
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.team_name {
  color: #F5F5F5;
}

.desc {
  color: #E0DCEA;
}

.button_vote {
  background-image: linear-gradient(to right bottom, #C30AC7, #3F4FFD);
  color: #F5F5F5;
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.button_vote > i,
.button_vote > span {
  transition: all 0.3s ease-in-out;
}

.button_vote:hover > i {
  transform: rotate(15deg);
}

.button_vote:hover > span {
  transform: rotate(-5deg);
}
</style>
