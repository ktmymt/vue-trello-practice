<template>
  <div id="app">
    <List v-for="list in lists" :key="list.id" :list="list" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ListI } from "@/types";
import List from "@/components/List.vue";
import { createInitialLists } from "@/InitialData.ts";

@Component({
  components: {
    List
  }
})
export default class App extends Vue {
  lists: ListI[] = createInitialLists();
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  > .list {
    margin: 1px;
  }
}
</style>
