<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox bg="gray.700" color="whiteAlpha.900">
          <CBox
            pos="fixed"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="gray.700"
            color="whiteAlpha.900"
          ></CBox>
          <CBox pos="absolute" w="100%" h="100%">
            <Nuxt />
          </CBox>
          <CFlex
            as="nav"
            h="10vh"
            w="100%"
            p="4"
            align="center"
            justify="space-between"
            shadow="sm"
            font-size="xl"
            bg="gray.700"
            color="whiteAlpha.900"
            pos="fixed"
            top="0"
            left="0"
          >
            <CFlex align="center">
              <img style="height: 8vh;" src="../assets/Logo.jpg" />
              <nuxt-link to="/">
                <CButton
                  bg="rgba(255, 255, 255, 0.08)"
                  :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                  :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                  color="whiteAlpha.900"
                  mx="2"
                >
                  <CText font-family="Comic Sans MS, Comic Sans, cursive">
                    Home
                  </CText>
                </CButton>
              </nuxt-link>
              <nuxt-link to="/jean">
                <CButton
                  bg="rgba(255, 255, 255, 0.08)"
                  :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                  :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                  color="whiteAlpha.900"
                  mx="2"
                >
                  <CText font-family="Comic Sans MS, Comic Sans, cursive">
                    Campeões
                  </CText>
                </CButton>
              </nuxt-link>
            </CFlex>
            <CFlex justify="flex-end">
              <CBox mr="3" w="40vh">
                <CInput color="black" placeholder="Insira o nick" />
              </CBox>
              <CButton
                variant-color="vue"
                font-family="Comic Sans MS, Comic Sans, cursive"
                >Pesquisar</CButton
              >
            </CFlex>
          </CFlex>
          <CReset />

          <CBox
            pos="fixed"
            bottom="0"
            left="0"
            w="100%"
            h="50px"
            align="center"
            bg="gray.700"
            color="whiteAlpha.900"
          >
            Footer
          </CBox>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
  CFlex,
  CButton,
  CInput,
  CText,
} from '@chakra-ui/vue'
export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CFlex,
    CButton,
    CInput,
    CText,
  },
  mounted() {
    this.$axios
      .$get(
        `https://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json`
      )
      .then((response) => {
        this.$store.commit('add', response.data)
      })
  },
}
</script>
