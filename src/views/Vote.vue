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
      <Card v-for="card in cards" :key="card.id" :card="card" @vote-team="voteTeam" />
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
  data() {
    return {
      cards: [
        {
          id: 1,
          name: 'What is Lorem Ipsum?',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          image: 'https://picsum.photos/id/456/320/240'
        },
        {
          id: 2,
          name: 'Why do we use it?',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          image: 'https://picsum.photos/id/322/320/240'
        },
        {
          id: 3,
          name: 'Where does it come from?',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          image: 'https://picsum.photos/id/641/320/240'
        },
        {
          id: 4,
          name: 'Where can I get some?',
          desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
          image: 'https://picsum.photos/id/432/320/240'
        },
        {
          id: 5,
          name: 'Why do we use it?',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          image: 'https://picsum.photos/id/289/320/240'
        },
        {
          id: 6,
          name: 'Where does it come from?',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          image: 'https://picsum.photos/id/664/320/240'
        }
      ]
    }
  },
  computed: {
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
    voteTeam(id) {
      this.$store.dispatch('vote', id)
    }
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

.button_sign_out > i,
.button_sign_out > span {
  transition: all 0.3s ease-in-out;
}

.button_sign_out:hover > i {
  transform: rotate(15deg);
}

.button_sign_out:hover > span {
  transform: rotate(-5deg);
}
</style>
