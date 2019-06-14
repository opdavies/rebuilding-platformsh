<template>
  <div class="min-h-screen antialiased font-sans bg-gray-200">
    <alert-message>
      <p>
        A clone of <a href="https://platform.sh">Platform.sh</a>’s new hosting dashboard.<br class="md:hidden">
        Built with <a href="https://vuejs.org">Vue.js</a>
        and <a href="https://tailwindcss.com">Tailwind CSS</a>
        by <a href="https://www.oliverdavies.uk">Oliver Davies</a>.
      </p>
    </alert-message>

    <router-view :app-name="name"></router-view>
  </div>
</template>

<style src="./assets/css/tailwind.css"></style>

<script>
export default {
  data () {
    return {
      name: 'Rebuilding Platform.sh'
    }
  }
}
</script>
