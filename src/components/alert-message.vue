<template>
  <section
    class="bg-gun-powder p-3 text-center text-white text-sm font-semibold"
  >
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AlertMessage extends Vue {}
</script>
