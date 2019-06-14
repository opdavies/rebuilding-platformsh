<template>
  <div>
    <banner>
      <template v-slot:banner-left>
        <project-breadcrumb :app-name="appName"/>
      </template>
    </banner>
    Project
  </div>
</template>

<script>
import ProjectBreadcrumb from '@/components/ProjectBreadcrumb'

export default {
  props: {
    appName: {
      type: String,
      required: true
    }
  },

  components: {
    ProjectBreadcrumb
  }
}
</script>
