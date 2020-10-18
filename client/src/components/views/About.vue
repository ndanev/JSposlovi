<template>
  <div>
    <hero class="hero-about">
      <div class="container">
        <div class="row">
          <div class="offset-md-1"></div>
          <div class="col-md-10">
            <div class="hero-content">
              <h1 class="hero-title">Lorem ipsum dolor sit amet, consectetur</h1>
              <p
                class="hero-subtitle"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam corrupti eos facere illo ex repellat quisquam!</p>
            </div>
          </div>
          <div class="offset-md-1"></div>
        </div>
      </div>
    </hero>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  name: "About",
  components: {
    Hero
  }
};
</script>