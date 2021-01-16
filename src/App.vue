<template>
  <div id="app" class="min-h-screen antialiased font-sans bg-gray-200">
    <alert-message>
      <p>
        <!-- eslint-disable-next-line -->
        A clone of <a href="https://platform.sh">Platform.sh</a>’s hosting dashboard.<br class="hidden sm:inline" />
        <!-- eslint-disable-next-line -->
        Built with <a href="https://vuejs.org">Vue.js</a> and <a href="https://tailwindcss.com">Tailwind CSS</a> by <a href="https://www.oliverdavies.uk">Oliver Davies</a>.
      </p>
    </alert-message>

    <router-view />
  </div>
</template>

<style src="../assets/css/tailwind.pcss" lang="postcss" />
