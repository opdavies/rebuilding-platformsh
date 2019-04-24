<template>
  <div>
    <alert-message>
      <p>
        A clone of <a href="https://platform.sh">Platform.sh</a>’s new hosting dashboard.<br class="md:hidden">
        Built with <a href="https://vuejs.org">Vue.js</a>
        and <a href="https://tailwindcss.com">Tailwind CSS</a>
        by <a href="https://www.oliverdavies.uk">Oliver Davies</a>.
      </p>
    </alert-message>

    <router-view/>
  </div>
</template>

<style src="./css/app.css"></style>
