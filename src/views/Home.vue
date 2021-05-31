<template>
  <div class="home">
    <Nav />
    <Header />
    <Cards />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Nav,
    Header,
    Cards,
    Footer,
  },
};
</script>

<style></style>
