<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div>
          <HomeSection />
        </div>
        <div>
          <ProgramSection />
        </div>
        <div>
          <CourseSection />
        </div>
        <div>
          <AlumniSection />
        </div>
        <div>
          <StaffSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSection from './HomeSection.vue'
import ProgramSection from './ProgramSection.vue'
import CourseSection from './CourseSection.vue'
import StaffSection from './StaffSection.vue'
import AlumniSection from './AlumniSection.vue'

export default {
  name: 'BodySection',
  components: {
    AlumniSection,
    HomeSection,
    ProgramSection,
    CourseSection,
    StaffSection
  }
};
</script>

<style></style>