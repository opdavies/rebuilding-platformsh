<template>
  <div>
    <banner>
      <template #sub-banner>
        <project-search/>
      </template>
    </banner>

    <main class="container mx-auto p-6">
      <div class="flex justify-between items-baseline">
        <page-title>All Projects</page-title>

        <project-view-switcher @changed="projectViewSwitched" :mode="displayMode"></project-view-switcher>
      </div>

      <div class="mt-6">
        <div v-if="displayMode == 'grid'" class="flex flex-wrap -mt-8 mb-4 -mx-4">
          <div class="w-full px-4 mt-8 sm:w-1/2 lg:w-1/3" v-for="project in projects" :key="project.id">
            <project-card :project="project"/>
          </div>
        </div>
      </div>

      <div v-if="displayMode == 'list'" class="pt-6 pb-6 mt-4 bg-white shadow-md">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-300">
              <th class="w-1/2 pb-3 px-6 font-semibold text-left text-sm">Project name</th>
              <th class="pb-3 px-6 font-semibold text-left text-sm">Owner</th>
              <th class="w-1/4 pb-3 px-6 font-semibold text-left text-sm">Region</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td class="px-6 py-4">
                <router-link :to="{ name: 'project', params: { id: project.id }}" class="font-semibold text-sm hover:underline">{{ project.name }}</router-link>
              </td>
              <td class="px-6 py-4">
                <a href="#0" class="font-semibold text-sm hover:underline">{{ project.owner }}</a>
              </td>
              <td class="px-6 py-4">
                <a href="#0" class="font-semibold text-sm hover:underline">{{ project.region }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import ProjectSearch from '@/components/ProjectSearch'
import ProjectViewSwitcher from '@/components/ProjectViewSwitcher'

export default {
  name: 'projects',

  props: {
    projects: {
      type: Object,
      required: true
    }
  },

  components: {
    ProjectCard,
    ProjectSearch,
    ProjectViewSwitcher
  },

  data () {
    return {
      displayMode: 'grid'
    }
  },

  methods: {
    projectViewSwitched (mode) {
      this.displayMode = mode
    }
  }
}
</script>
