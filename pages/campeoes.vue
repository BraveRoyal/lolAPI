<template>
  <div class="container">
    <client-only>
      <CFlex justify="flex-end" mt="13vh" mx="20%">
        <CBox mr="3" w="30vh">
          <CInput
            v-model="nome"
            border-width="0px"
            color="inherit"
            bg="rgba(255, 255, 255, 0.06)"
            placeholder="Insira o nome do campeao"
          />
        </CBox>
      </CFlex>
    </client-only>
    <CBox justify="center" align="center">
      <CBox
        mx="20%"
        mt="50px"
        mb="150px"
        flex-dir="column"
        justify-content="center"
      >
        <CSpinner
          v-if="loading"
          thickness="10px"
          color="gray.400"
          size="100px"
          mt="20%"
        />
        <client-only>
          <CSimpleGrid
            text-align="center"
            font-family="Comic Sans MS, Comic Sans, cursive"
            :min-child-width="['50px', '100px', '100px', '100px']"
            :max-child-width="['50px', '100px', '100px', '100px']"
            spacing="25px"
          >
            <CBox
              v-for="(camp, index) in filterbar"
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
                {{ camp[1].name }}
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
import {
  CBox,
  CReset,
  CSimpleGrid,
  CImage,
  CText,
  CSpinner,
  CFlex,
  CInput,
} from '@chakra-ui/vue'
export default {
  name: 'HomeLayout',
  components: {
    CBox,
    CReset,
    CSimpleGrid,
    CImage,
    CText,
    CSpinner,
    CFlex,
    CInput,
  },
  data() {
    return {
      styleMain: {
        height: '90vh',
      },
      nome: '',
    }
  },
  computed: {
    filterbar() {
      return this.camps.filter((itens) => {
        const semcriatividade = itens[1].name.toUpperCase()
        return semcriatividade.match(this.nome.toUpperCase())
      })
    },
    camps() {
      return this.$store.state.campeao.campeoes
    },
    test() {
      return 'a'
    },
    loading() {
      return this.$store.state.campeao.loadingcampeoes
    },
  },
  methods: {
    open(id) {
      this.$axios
        .$get(
          `https://ddragon.leagueoflegends.com/cdn/10.16.1/data/pt_BR/champion/` +
            this.$store.state.campeao.campeoes[id][0] +
            `.json`
        )
        .then((response) => {
          const a = Object.entries(response.data)
          this.$store.commit('addPage', id)
          this.$store.commit('addCampeao', a[0][1])
          this.$router.push('/campeao')
        })
    },
  },
}
</script>
