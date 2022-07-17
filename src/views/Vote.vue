<template>
  <div id="vote" class="flex flex-col items-center">
    <div id="header" class="md:sticky md:top-0 w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8">
      <img src="../assets/unihack_logo.png" class="h-16 object-contain" />
      <div class="flex items-center gap-8">
        <div class="gradient_border rounded-2xl p-0.5">
          <img :src="user.photoURL" class="h-15 w-15 rounded-2xl object-cover" />
        </div>
        <div @click="googleSignOut" class="gradient_border rounded-2xl p-0.5">
          <button class="button_sign_out h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span class="hidden md:block">Đăng xuất</span>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center flex-wrap gap-8 md:gap-16 p-4 sm:p-8 md:p-16 pb-24 md:pb-48">
      <Card v-for="card in cards" :key="card.id" :card="card" @open-modal="setCard" @vote="vote" />
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <Modal :card="selectedCard" @vote="vote" />
    </el-dialog>
  </div>
</template>

<script>

import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'Vote',
  components: {
    Card,
    Modal
  },
  data() {
    return {
      dialogVisible: false,
      selectedCard: null
    }
  },
  created() {
    const selectedCardId = this.$route.params.teamId
    if (selectedCardId) {
      this.selectedCard = this.cards.find(card => card.id.toString() === String(selectedCardId))
      this.dialogVisible = true
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards
    },
    user() {
      return this.$store.state.authStore.user
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header')
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (scrollTop > 0) {
        header.style.backgroundColor = '#2C1855'
        header.style.transition = 'background-color 0.1s ease-in-out'
      } else {
        header.style.backgroundColor = 'transparent'
        header.style.transition = 'background-color 0.1s ease-in-out'
      }
    })
  },
  methods: {
    setCard(card) {
      this.selectedCard = card
      this.dialogVisible = true
    },
    googleSignOut() {
      this.$store.dispatch('googleSignOut')
    },
    vote(id) {
      this.$store.dispatch('vote', id)
    }
  }
}
</script>

<style scoped>
#vote {
  background-color: var(--background-dark);
  background-image: var(--background-gradient-dark);
  color: var(--text-light);
}

.gradient_border {
  background-image: var(--background-gradient-light);
}

.button_sign_out {
  background-color: var(--background-dark);
  transition: var(--transition);
}

.button_sign_out > i,
.button_sign_out > span {
  transition: var(--transition);
}

.button_sign_out:hover > i {
  transform: rotate(15deg);
}

.button_sign_out:hover > span {
  transform: rotate(-5deg);
}
</style>
