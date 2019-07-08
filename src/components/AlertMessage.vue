<template>
  <section class="bg-gun-powder p-3 text-center text-white text-sm font-semibold">
    <slot></slot>
  </section>
</template>

<style type="postcss" scoped>
a
  @apply underline

  &:hover,
  &:focus
    @apply no-underline
</style>
