<template>
  <div class="container">
    <CBox font-family="body" as="main">
      <CReset />
      <CBox as="main" :px="[4, 10, '12rem']">
        <Nuxt />
      </CBox>
    </CBox>
    <CBox></CBox>
  </div>
</template>
<script>
import { CBox, CReset } from '@chakra-ui/vue'
export default {
  name: 'HomeLayout',
  components: {
    CBox,
    CReset,
  },
  data() {
    return {}
  },
}
</script>
