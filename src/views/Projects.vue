<template>
  <div>
    <header class="bg-gray-900 text-white pt-4 pb-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center -mx-4">
          <div class="w-1/2 px-4">
            <router-link :to="{ name: 'projects' }">
              <svg alt="icon" class="w-6 h-6" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><polygon id="path-1" points="0 0 27.6677333 0 27.6677333 11.0021333 0 11.0021333"></polygon><polygon id="path-3" points="0 0.0373333333 27.6677333 0.0373333333 27.6677333 3.7744 0 3.7744"></polygon><polygon id="path-5" points="0 0.365866667 27.6677333 0.365866667 27.6677333 6.01066667 0 6.01066667"></polygon></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-61.000000, -43.000000)"><g transform="translate(61.000000, 43.000000)"><g><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><g></g><polygon fill="#ffffff" mask="url(#mask-2)" points="-1.86666667 12.8688 29.5344 12.8688 29.5344 -1.86666667 -1.86666667 -1.86666667"></polygon></g><g transform="translate(0.000000, 23.893333)"><mask id="mask-4" fill="white"><use xlink:href="#path-3"></use></mask><polygon fill="#ffffff" mask="url(#mask-4)" points="-1.86666667 5.64106667 29.5344 5.64106667 29.5344 -1.82933333 -1.86666667 -1.82933333"></polygon></g><g transform="translate(0.000000, 14.186667)"><mask id="mask-6" fill="white"><use xlink:href="#path-5"></use></mask><polygon fill="#ffffff" mask="url(#mask-6)" points="-1.86666667 7.87733333 29.5344 7.87733333 29.5344 -1.5008 -1.86666667 -1.5008"></polygon></g></g></g></g></svg>
            </router-link>
          </div>

          <div class="w-1/2 px-4">
            <div class="flex justify-end">
              <button type="button" class="font-semibold hover:bg-gray-700 py-1 px-2 rounded inline-flex">
                Oliver Davies
                <svg class="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.90002 9.8999C6.90002 9.5999 7.00002 9.3999 7.20002 9.1999C7.60002 8.7999 8.20002 8.7999 8.60002 9.1999L12.1 12.6999L15.6 9.1999C16 8.7999 16.6 8.7999 17 9.1999C17.4 9.5999 17.4 10.1999 17 10.5999L12.8 14.7999C12.4 15.1999 11.8 15.1999 11.4 14.7999L7.20002 10.5999C7.00002 10.3999 6.90002 10.1999 6.90002 9.8999Z" fill="#ffffff"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-6xl mx-auto px-4 bg-charade py-3 px-5 -mt-8 mb-4 shadow-lg">
      <project-search></project-search>
    </div>

    <div class="max-w-6xl mx-auto p-6 xl:px-0">
      <div class="flex justify-between items-baseline">
        <page-title class="mb-6">All Projects</page-title>

        <project-view-switcher @changed="projectViewSwitched"></project-view-switcher>
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
                <a href="#0" class="font-semibold text-sm hover:underline">Drupal Bristol</a>
              </td>
              <td class="px-6 py-4">
                <a href="#0" class="font-semibold text-sm hover:underline">accounts-partners</a>
              </td>
              <td class="px-6 py-4">
                <a href="#0" class="font-semibold text-sm hover:underline">EU (West 1)</a>
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
