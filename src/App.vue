<template>
  <div class="min-h-screen antialiased font-sans bg-gray-200">
    <alert-message>
      <p>
        A clone of <a href="https://platform.sh">Platform.sh</a>’s new hosting dashboard.<br class="hidden sm:inline">
        Built with <a href="https://vuejs.org">Vue.js</a>
        and <a href="https://tailwindcss.com">Tailwind CSS</a>
        by <a href="https://www.oliverdavies.uk">Oliver Davies</a>.
      </p>
    </alert-message>

    <router-view :projects="projects" ></router-view>
  </div>
</template>

<style src="./assets/css/tailwind.css"></style>

<script>
export default {
  data () {
    return {
      title: 'Rebuilding Platform.sh',

      projects: [
        {
          id: 1,
          name: 'Drupal Bristol',
          owner: 'accounts-partners',
          region: 'Europe (West 1)',
          image: 'default.jpg'
        },
        {
          id: 2,
          name: 'oliverdavies.uk',
          owner: 'Oliver Davies',
          region: 'Europe (West 1)',
          image: 'oliver-davies.png'
        },
        {
          id: 3,
          name: 'PHP South Wales',
          owner: 'PHP South Wales organisers',
          region: 'Europe (West 1)',
          image: 'php-south-wales.png'
        }
      ]
    }
  }
}
</script>
