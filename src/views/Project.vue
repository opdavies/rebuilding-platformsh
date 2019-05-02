<template>
  <div>
    <banner>
      <template v-slot:banner-left>
        <project-breadcrumb/>
      </template>
    </banner>
    Project
  </div>
</template>

<script>
import ProjectBreadcrumb from '@/components/ProjectBreadcrumb'

export default {
  components: {
    ProjectBreadcrumb
  }
}
</script>
