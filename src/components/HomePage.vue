<template>
  <div>
    <div>
      <HeaderSection />
    </div>
    <div>
      <BodySection />
    </div>
    <div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import BodySection from './BodySection.vue';
import HeaderSection from './HeaderSection.vue';
import FooterSection from './FooterSection.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderSection,
    BodySection,
    FooterSection,
  },
};
</script>

<style></style>