<template>
  <div>
    {{ list.name }}
    <Card v-for="card in List.cards" :key="card.id" :card="card" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ListI } from "@/types";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class List extends Vue {
  @Prop({ type: Object, required: true })
  list!: ListI;
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid #000000;
  > .card {
    margin: 1px;
  }
}
</style>
