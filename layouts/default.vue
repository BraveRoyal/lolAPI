<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox bg="gray.700" color="whiteAlpha.900">
          <CFlex
            as="nav"
            h="10vh"
            p="4"
            align="center"
            justify="space-between"
            shadow="md"
            font-size="xl"
          >
            <CImage h="8vh" :src="require('@/assets/Logo.jpg')" />
            <CFlex m="auto">
              <CMenu>
                <CMenuButton
                  as="Button"
                  bg="rgba(255, 255, 255, 0.08)"
                  :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                  :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                  color="whiteAlpha.900"
                >
                  Actions
                </CMenuButton>
                <CMenuList
                  bg="rgba(255, 255, 255, 0.08)"
                  color="whiteAlpha.900"
                >
                  <CMenuItem
                    :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                    :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                    >Download</CMenuItem
                  >
                  <CMenuItem
                    :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                    :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                    >Create a Copy</CMenuItem
                  >
                  <CMenuItem
                    :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                    :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                    >Mark as Draft</CMenuItem
                  >
                  <CMenuItem
                    :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                    :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                    >Delete</CMenuItem
                  >
                  <CMenuItem
                    :_hover="{ bg: 'rgba(255, 255, 255, 0.10)' }"
                    :_focus="{ bg: 'rgba(255, 255, 255, 0.16)' }"
                  >
                    Attend a Workshop
                  </CMenuItem>
                </CMenuList>
              </CMenu>
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
          <Nuxt />
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
  CImage,
  CInput,
  CMenu,
  CMenuButton,
  CMenuList,
  CMenuItem,
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
    CImage,
    CInput,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
  },
}
</script>
