<template>
  <div class="container">
    <CBox justify="center" align="center" mb="50px" mt="10vh">
      <CBox mx="20%" my="150px" justify="center">
        <client-only placeholder="Loading...">
          <CSimpleGrid
            text-align="center"
            font-family="Comic Sans MS, Comic Sans, cursive"
            min-child-width="100px"
            spacing="25px"
          >
            <CBox
              v-for="(camp, index) in camps"
              :key="index"
              style="user-select: none;"
              border="1px solid #1A202C"
              shadow="2px 2px 4px #1A202C"
              cursor="pointer"
              @click="open(index)"
            >
              <CImage
                :src="
                  'https://ddragon.leagueoflegends.com/cdn/10.15.1/img/champion/' +
                  camp[1].image.full
                "
              ></CImage>
              <CText
                font-family="Comic Sans MS, Comic Sans, cursive"
                font-size="17px"
                font-weight="bold"
              >
                {{ camp[0] }}
              </CText>
            </CBox>
          </CSimpleGrid>
          <CReset />
        </client-only>
      </CBox>
    </CBox>
  </div>
</template>
<script>
import { CBox, CReset, CSimpleGrid, CImage, CText } from '@chakra-ui/vue'
export default {
  name: 'HomeLayout',
  components: {
    CBox,
    CReset,
    CSimpleGrid,
    CImage,
    CText,
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
  methods: {
    open(id) {
      this.$store.commit('addPage', id)
      this.$router.push('/campeao')
    },
  },
}
</script>
