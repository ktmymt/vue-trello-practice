<template>
  <div id="app" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IList } from "@/types";
import { createInitialLists } from "@/InitialData.ts";

@Component
export default class App extends Vue {
  lists: IList[] = createInitialLists();
}
</script>
