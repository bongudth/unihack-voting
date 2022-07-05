<template>
  <div>
    <div class="card md:w-200 flex flex-col md:flex-row items-center md:items-start gap-4 rounded-4xl p-4">
      <div class="background_dark rounded-4xl p-3">
        <img
          @click="dialogVisible=true"
          :src="card.image"
          class="h-40 min-w-60 md:h-60 md:min-w-80 rounded-4xl object-cover cursor-pointer"
        />
      </div>
      <div class="flex flex-col justify-center items-center md:items-start gap-4 p-3">
        <div @click="dialogVisible=true" class="text-3xl lg:text-4xl text-stroke-sm cursor-pointer">{{ card.name }}</div>
        <div @click="dialogVisible=true" class="desc cursor-pointer">
          {{ desc }}
        </div>
        <div class="background_dark rounded-2xl p-0.5">
          <button @click="voteTeam" class="button_vote h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
            <i class="fa-regular fa-heart"></i>
            <span>Up vote</span>
          </button>
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
    >
      <Modal :card="card" />
    </el-dialog>
  </div>
</template>

<script>

import Modal from './Modal.vue'

export default {
  name: 'Card',
  components: {
    Modal
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    desc() {
      if (this.card.desc.length > 200) {
        return this.card.desc.substring(0, 200) + '...'
      } else {
        return this.card.desc
      }
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
.card {
  background-color: #1C1654;
  box-shadow: #16134A 0px 7px 29px 0px;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.background_dark {
  background-color: #16134A;
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.background_dark > img {
  box-shadow: #1C1654 0px 7px 29px 0px;
}

.desc {
  color: #E0DCEA;
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
