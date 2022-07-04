<template>
  <div id="vote" class="flex flex-col items-center">
    <div id="header" class="md:sticky md:top-0 w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8">
      <img src="../assets/unihack_logo.png" class="h-16 object-contain" />
      <div class="flex items-center gap-8">
        <div class="gradient_border rounded-2xl p-0.5">
          <img :src="user.photoURL" class="h-15 w-15 rounded-2xl object-cover" />
        </div>
        <div class="gradient_border rounded-2xl p-0.5">
          <button class="button_sign_out h-15 w-max flex items-center gap-4 rounded-2xl object-cover px-8">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span class="hidden md:block">Sign out</span>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center flex-wrap gap-8 md:gap-16 p-8 md:p-16 pb-24 md:pb-48">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue'

export default {
  name: 'Vote',
  components: {
    Card
  },
  computed: {
    user() {
      console.log(this)
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
  }
}
</script>

<style scoped>
#vote {
  background-color: #16134A;
  background-image: linear-gradient(to bottom, #16134A, #2C1855);
  color: #F5F5F5;
}

.gradient_border {
  background-image: linear-gradient(to right bottom, #C30AC7, #3F4FFD);
}

.button_sign_out {
  background-color: #16134A;
  transition: all 0.3s ease-in-out;
}

.button_sign_out:hover {
  background-color: #1C1654;
}
</style>
