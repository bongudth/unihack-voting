<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Vote</router-link> |
      <router-link to="/auth-login">Auth</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
html,
body {
  margin: 0;
}

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
