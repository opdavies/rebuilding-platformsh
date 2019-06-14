<template>
  <div>
    <banner>
      <template v-slot:banner-left>
        <project-breadcrumb :title="title"/>
      </template>
    </banner>
    Project
  </div>
</template>

<script>
import ProjectBreadcrumb from '@/components/ProjectBreadcrumb'

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },

  components: {
    ProjectBreadcrumb
  }
}
</script>
