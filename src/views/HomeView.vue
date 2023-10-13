<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyServices from '@/components/MyServices.vue'
import ProfessionalExperience from '@/components/ProfessionalExperience.vue'
import PersonalProjects from '@/components/PersonalProjects.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <div class="lg:mx-16" ref="scrollContainer">
    <AboutMe />
    <MyServices />
    <ProfessionalExperience />
    <PersonalProjects />
  </div>
  <AppFooter />
</template>

<style scoped>
.smooth-scroll {
  scroll-behavior: smooth;
}
</style>
