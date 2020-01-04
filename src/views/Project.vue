<template>
  <div>
    <banner>
      <template #banner-left>
        <project-breadcrumb :project="project"/>
      </template>

      <template #sub-banner>
        <span class="text-white">Project and environment dropdowns</span>
      </template>
    </banner>

    <div class="container mx-auto px-4">
      <div class="flex items-center">
        <div class="w-1/2">
          <nav>
            <a class="py-2 text-gray-900 text-xs uppercase tracking-widest border-b-2 border-gray-900 font-semibold" href="#">Overview</a>
            <a class="ml-6 py-2 text-gray-900 text-xs uppercase tracking-widest" href="#">Settings</a>
          </nav>
        </div>

        <div class="w-1/2 flex items-center justify-end">
          <button type="button" class="py-1 pl-2 pr-4 flex items-center text-sm uppercase tracking-wider border border-periwinkle">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 block fill-current text-gray-700"><path d="M6.90002 9.8999C6.90002 9.5999 7.00002 9.3999 7.20002 9.1999C7.60002 8.7999 8.20002 8.7999 8.60002 9.1999L12.1 12.6999L15.6 9.1999C16 8.7999 16.6 8.7999 17 9.1999C17.4 9.5999 17.4 10.1999 17 10.5999L12.8 14.7999C12.4 15.1999 11.8 15.1999 11.4 14.7999L7.20002 10.5999C7.00002 10.3999 6.90002 10.1999 6.90002 9.8999Z"></path></svg>
            <span class="ml-1">Git</span>
          </button>
          <button type="button" class="ml-3 py-1 pl-2 pr-4 flex items-center text-sm uppercase tracking-wider border border-periwinkle">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 block fill-current text-gray-700"><path d="M6.90002 9.8999C6.90002 9.5999 7.00002 9.3999 7.20002 9.1999C7.60002 8.7999 8.20002 8.7999 8.60002 9.1999L12.1 12.6999L15.6 9.1999C16 8.7999 16.6 8.7999 17 9.1999C17.4 9.5999 17.4 10.1999 17 10.5999L12.8 14.7999C12.4 15.1999 11.8 15.1999 11.4 14.7999L7.20002 10.5999C7.00002 10.3999 6.90002 10.1999 6.90002 9.8999Z"></path></svg>
            <span class="ml-1">CLI</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectBreadcrumb from '@/components/ProjectBreadcrumb'

export default {
  components: {
    ProjectBreadcrumb
  },

  computed: {
    project () {
      return this.$attrs.projects[this.$attrs.id - 1]
    }
  }
}
</script>
