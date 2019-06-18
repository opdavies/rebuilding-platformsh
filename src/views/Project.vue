<template>
  <div>
    <banner>
      <template #banner-left>
        <project-breadcrumb :project="project"/>
      </template>
    </banner>

    <page-title v-text="project.name"/>
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
