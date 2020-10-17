<template>
  <div>
    <hero class="hero-home">
      <div class="container">
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-md-10">
            <div class="hero-content">
              <h1
                class="hero-title"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit quis dignissimos maiores.</h1>
              <p
                class="hero-subtitle"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam corrupti eos facere illo ex repellat quisquam accusantium amet iste, repudiandae maiores veniam ad veritatis, cum delectus labore sapiente ut!</p>
              <div class="hero-buttons text-center mt-5">
                <router-link
                  v-if="!isLoggedIn"
                  class="button primary-button"
                  to="/login"
                >Prijavite se</router-link>
                <router-link
                  v-if="!isLoggedIn"
                  class="button secondary-button"
                  to="/register"
                >Napravite svoj nalog</router-link>
              </div>
            </div>
          </div>
          <div class="offset-md-1"></div>
        </div>
      </div>
    </hero>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hero from "@/components/Hero.vue";
export default {
  name: "Home",
  components: {
    hero: Hero
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>