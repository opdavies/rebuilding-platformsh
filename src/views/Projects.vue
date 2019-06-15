<template>
  <div>
    <banner>
      <template v-slot:sub-banner>
        <project-search/>
      </template>
    </banner>

    <main class="max-w-6xl mx-auto p-6 xl:px-0">
      <div class="flex justify-between items-baseline">
        <page-title>All Projects</page-title>

        <project-view-switcher @changed="projectViewSwitched" :mode="displayMode"></project-view-switcher>
      </div>

      <div class="mt-6">
        <div v-if="displayMode == 'grid'" class="flex flex-wrap -mt-8 mb-4 -mx-4">
          <div class="w-full px-4 mt-8 sm:w-1/2 lg:w-1/3" v-for="n in 9" :key="n">
            <project-card></project-card>
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
            <tr>
              <td class="px-6 py-4">
                <router-link :to="{ name: 'project', params: { id: 1 }}" class="font-semibold text-sm hover:underline">Drupal Bristol</router-link>
              </td>
              <td class="px-6 py-4">
                <a href="#0" class="font-semibold text-sm hover:underline">accounts-partners</a>
              </td>
              <td class="px-6 py-4">
                <a href="#0" class="font-semibold text-sm hover:underline">Europe (West 1)</a>
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
