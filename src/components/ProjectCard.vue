<template>
  <article>
    <router-link :to="{ name: 'project', params: { id: project.id }}" class="group block hover:no-underline">
      <span class="block bg-gray-100 shadow-lg rounded overflow-hidden">
        <span class="block p-6">
          <h2 class="font-bold text-gray-800 group-hover:underline" v-text="project.name"/>
          <p class="text-gray-600" v-text="project.owner"/>
          <img v-bind="{
            alt: `Screenshot of ${project.name}`,
            src: projectImage
          }" class="w-full mt-4 rounded shadow-2xl">
        </span>

        <span class="block py-5 px-8 -mt-10 relative bg-white">
          <p v-text="project.region"/>
        </span>
      </span>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  computed: {
    projectImage () {
      return require(`@/assets/img/screenshots/${this.project.image}`)
    }
  }
}
</script>
