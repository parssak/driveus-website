<template>
  <Header :title="item.name" />

  <Split :title="item.name" :slogan="item.slogan" withoutBorder description="">
    <template v-slot:extra-content>
      <p class="font-medium mt-5">{{ item.label }}</p>
      <p>{{ item.description }}</p>
    </template>
    <img :src="item.imgSrc" class="w-full h-full object-contain max-w-xl mx-auto" />
  </Split>
</template>

<script>
import Split from "../../components/layouts/Split.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "../../components/base/Header.vue";
import { cars } from "@/data";

export default {
  components: { Header, Container, Split },
  data() {
    return {
      cars,
      item: cars.find((item) => item.id === this.$route.params.id),
    };
  },
  watch: {
    $route() {
      this.item = cars.find((item) => item.id === this.$route.params.id);
    },
  },
};
</script>
