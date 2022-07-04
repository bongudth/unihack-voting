<template>
  <div id="auth" class="h-screen flex flex-col items-center justify-center gap-16">
    <img src="../assets/unihack_logo.png" class="h-24 object-contain" />
    <button @click="googleSignIn" class="auth_button w-auto flex items-center justify-center gap-4 border-1 rounded-4xl p-2">
      <img src="../assets/google-logo.png" class="h-10 object-contain" />
      <span class="font-bold">Sign in with Google</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  methods: {
    googleSignIn() {
      this.$store.dispatch('googleSignIn')
    }
  }
}
</script>

<style scoped>
#auth {
  background-image: url("../assets/unihack_background.png");
  background-size: cover;
  background-position: center;
}

.auth_button {
  background-color: transparent;
  color: #fdfdfd;
  border-color: #fdfdfd;
  transition: all 0.3s ease-in-out;
}

.auth_button:hover {
  background-color: #200343;
}
</style>
