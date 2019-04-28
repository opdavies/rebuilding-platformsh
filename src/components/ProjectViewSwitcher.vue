<template>
  <div>
    <button type="button" @click="$emit('changed', 'grid')">Grid</button>
    <button type="button" @click="$emit('changed', 'list')" class="ml-2">List</button>
  </div>
</template>
