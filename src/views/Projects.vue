<template>
  <div>
    <banner>
      <template v-slot:sub-banner>
        <project-search/>
      </template>
    </banner>

    <div class="max-w-6xl mx-auto p-6 xl:px-0">
      <div class="flex justify-between items-baseline">
        <page-title class="mb-6">All Projects</page-title>

        <project-view-switcher @changed="projectViewSwitched" :active-mode="displayMode"></project-view-switcher>
      </div>

      <div v-if="displayMode == 'grid'" class="flex flex-wrap mt-4 -mx-4 -mb-8">
        <project-card v-for="n in 9" :key="n"></project-card>
      </div>

      <div v-if="displayMode == 'list'" class="bg-white shadow-md pt-6 pb-6 mt-4">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-300">
              <th class="font-semibold text-left text-sm pb-3 px-6 w-1/2">Project name</th>
              <th class="font-semibold text-left text-sm pb-3 px-6">Owner</th>
              <th class="font-semibold text-left text-sm pb-3 px-6 w-1/4">Region</th>
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
    </div>
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
