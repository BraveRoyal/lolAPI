<template>
  <div class="container">
    <CBox d="flex" h="90vh" flex-dir="column" justify-content="center">
      <CHeading
        text-align="center"
        font-family="Comic Sans MS, Comic Sans, cursive"
        userSelect="none"
      >
        Bem-Vindo ao Site
      </CHeading>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading
} from '@chakra-ui/vue'
export default {
  name: 'App',
  components: {
    CBox,
    CHeading
  },
  data () {
    return {}
  },
  computed: {
  },
}
</script>
