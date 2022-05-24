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
            shadow="2px 2px 4px #1A202C"
            font-size="xl"
            bg="gray.700"
            color="whiteAlpha.900"
            pos="fixed"
            top="0"
            left="0"
          >
            <CFlex align="center">
              <img
                style="height: 8vh;"
                userSelect="none"
                src="../assets/Logo.jpg"
              />
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
              <nuxt-link to="/campeoes">
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
                <input
                  v-model="searchData"
                  border-width="0px"
                  color="inherit"
                  class="search-input"
                  bg="rgba(255, 255, 255, 0.06)"
                  placeholder="Insira o nick"
                  @keypress.enter="searching"
                />
              </CBox>
              <CButton
                bg="rgba(255, 255, 255, 0.06)"
                color="#81E6D9"
                border="1px solid #81E6D9"
                :_hover="{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }"
                :_focus="{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }"
                font-family="Comic Sans MS, Comic Sans, cursive"
                @click="searching()"
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
            shadow="-2px -2px 4px #1A202C"
            font-family="Comic Sans MS, Comic Sans, cursive"
            userSelect="none"
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
  CText,
} from "@chakra-ui/vue";
export default {
  name: "App",
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    CFlex,
    CButton,
    CText,
  },
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    searching() {
      console.log(this.searchData);
      this.$store.commit("addSearchn", this.searchData);
      this.$router.push({
        path: "/profile",
      });
    },
  },
  mounted() {
    this.$axios
      .$get(
        `http://ddragon.leagueoflegends.com/cdn/12.8.1/data/pt_BR/champion.json`
      )
      .then((response) => {
        this.$store.commit("add", response.data);
      });
  },
};
</script>
<style>
.search-input {
  color: inherit;
  background-color: rgba(255, 255, 255, 0.06);
  width: 100%;
  height: 2.5rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  position: relative;
  border-width: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  outline: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border-color: inherit;
  line-height: 2.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
