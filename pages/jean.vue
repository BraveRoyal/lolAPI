<template>
  <div class="container">
    <CBox justify="center" align="center" mb="50px" mt="10vh">
      <CBox w="50vh" justify="center">
        <CSimpleGrid
          text-align="center"
          font-family="Comic Sans MS, Comic Sans, cursive"
          min-child-width="120px"
          spacing="40px"
        >
          <CBox v-for="(camp, index) in camps" :key="index">{{ camp[0] }}</CBox>
        </CSimpleGrid>
        <CReset />
      </CBox>
    </CBox>
  </div>
</template>
<script>
import { CBox, CReset, CSimpleGrid } from '@chakra-ui/vue'
export default {
  name: 'HomeLayout',
  components: {
    CBox,
    CReset,
    CSimpleGrid,
  },
  data() {
    return {
      styleMain: {
        height: '90vh',
      },
    }
  },
  computed: {
    camps() {
      return this.$store.state.campeoes
    },
    test() {
      return 'a'
    },
  },
}
</script>
