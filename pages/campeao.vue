<template>
  <div class="container">
    <CBox
      v-if="this.$store.state.campeao.pageCampeao !== '' && open === false"
      mx="20%"
      align="center"
    >
      <CImage
        :src="
          'https://ddragon.leagueoflegends.com/cdn/10.15.1/img/champion/' +
          camp.image.full
        "
        mt="12vh"
      ></CImage>
      <CHeading
        text-align="center"
        font-family="Comic Sans MS, Comic Sans, cursive"
      >
        {{ camp.name }}
        {{ camp.title }}
      </CHeading>
      <CText font-family="Comic Sans MS, Comic Sans, cursive">
        {{ camp.blurb }}
      </CText>
      <CBox mt="50px" mb="100px">
        <CSimpleGrid
          text-align="center"
          font-family="Comic Sans MS, Comic Sans, cursive"
          :min-child-width="['50px', '100px', '100px', '100px']"
          spacing="25px"
        >
          <CBox
            v-for="(skin, index) in camp.skins"
            :key="index"
            style="user-select: none;"
            border="1px solid #1A202C"
            shadow="5px 5px 4px #1A202C"
            cursor="pointer"
            @click="openf(skin.num)"
          >
            <CImage
              :src="
                'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/' +
                camp.id +
                '_' +
                skin.num +
                '.jpg'
              "
            >
            </CImage>
            <CText
              font-family="Comic Sans MS, Comic Sans, cursive"
              font-size="17px"
              font-weight="bold"
            >
              {{ skinNome(camp.name, skin.name) }}
            </CText>
          </CBox>
        </CSimpleGrid>
      </CBox>
    </CBox>
    <CBox
      v-if="this.$store.state.campeao.pageCampeao !== '' && open === true"
      mt="10vh"
      @click="close()"
    >
      <CImage
        :src="
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
          camp.id +
          '_' +
          skinId +
          '.jpg'
        "
      >
      </CImage>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CImage,
  CText,
  CSimpleGrid,
} from '@chakra-ui/vue'
export default {
  name: 'App',
  components: {
    CBox,
    CHeading,
    CImage,
    CText,
    CSimpleGrid,
  },
  data () {
    return {
      open:false,
      skinId: 0,
    }
  },
  computed:{
    camp(){
      return this.$store.state.campeao.campeao
    }
  },
  beforeMount() {
    if(this.$store.state.campeao.pageCampeao === ''){
      this.$router.push('/campeoes')
    }
  },
  methods:{
    openf(id){
      this.open = true
      this.skinId = id
    },
    close(){
      this.open = false
    },
    skinNome(nome,nomeS){
      if(nomeS === 'default'){
        return nome
      }
      return nomeS
    }
  },
}
</script>
