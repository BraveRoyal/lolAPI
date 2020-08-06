<template>
  <div class="container">
    <CBox
      v-if="this.$store.state.campeao.pageCampeao !== ''"
      mx="20%"
      align="center"
    >
      <CImage
        :src="
          'https://ddragon.leagueoflegends.com/cdn/10.15.1/img/champion/' +
          camp[1].image.full
        "
        mt="12vh"
      ></CImage>
      <CHeading
        text-align="center"
        font-family="Comic Sans MS, Comic Sans, cursive"
      >
        {{ camp[0] }}
        {{ camp[1].title }}
      </CHeading>
      <CText font-family="Comic Sans MS, Comic Sans, cursive">
        {{ camp[1].blurb }}
      </CText>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CImage,
  CText,
} from '@chakra-ui/vue'
export default {
  name: 'App',
  components: {
    CBox,
    CHeading,
    CImage,
    CText,
  },
  data () {
    return {}
  },
  computed:{
    camp(){
      return this.$store.state.campeao.campeoes[this.$store.state.campeao.pageCampeao]
    }
  },
  beforeMount() {
    if(this.$store.state.campeao.pageCampeao === ''){
      this.$router.push('/campeoes')
    }
  },
}
</script>
