<template>
  <div>
    {{ card.text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CardI } from "@/types";

@Component
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  card!: CardI;
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #000000;
}
</style>
