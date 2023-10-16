<template>
  <v-navigation-drawer sticky style="height: 100%;">
    <v-list density="compact" nav>
      <v-list-item v-for="(m, i) in menu" :key="i" link :to="m.route" :prepend-icon="m.icon"
        :active="currentObserved == m.key">{{ m.text }}</v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-row class="mt-2 mx-0" style="justify-content: space-around;">
      <v-col cols="6" style="display: flex; justify-content: center;">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-web"></v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in locales" :key="index" :value="item.key" v-text="item.text"
              @click="changeLocale(item)">
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="6" style="display: flex; justify-content: center;">
        <v-switch hide-details inset inline @click="changeTheme" class="dark-mode-switch"></v-switch>
      </v-col>
    </v-row>
  </v-navigation-drawer>

  <v-main style="max-height: 100vh; transition: none;">
    <RouterView />
  </v-main>
</template>
  
<script setup lang="ts">
import i18n from "@/i18n";
import { useAppStore } from "@/store/app";
import { computed } from "vue";
// import { SlfNavigation, SlfNavItem, SlfTopAppBar, SlfIconButton, SlfMenu } from "@solinftec/design-system";
import { RouterView, useRoute, useRouter } from "vue-router";
import { useTheme } from "vuetify/lib/framework.mjs";

type MenuLayout = {
  icon: string;
  text: string;
  key: string;
  route: string;
};


/* ✔️ Composables ✔️ */
const app = useAppStore()
const { getRoutes } = useRouter();
const theme = useTheme();

/**computed */
const currentObserved = computed(() => {
  return app.elementObserved;
})

const currentLocale = computed(() => {
  return "🇬🇧"
})



const menu = computed((): MenuLayout[] => {
  return [
    {
      icon: "mdi-folder",
      text: "About",
      key: "about",
      route: "/#about",
    },
    {
      icon: "mdi-account-multiple",
      text: "Projects",
      key: "projects",
      route: "/#projects",
    },
    {
      icon: "mdi-star",
      text: "Contact",
      key: "contact",
      route: "/#contact",
    },
  ];
});

const locales = computed((): MenuLayout[] => {
  return [
    {
      icon: "mdi-folder",
      text: "🇬🇧 English",
      key: "en",
      route: "/#about",
    },
    {
      icon: "mdi-account-multiple",
      text: "🇵🇹 Português",
      key: "pt",
      route: "/#projects",
    }
  ];
})

function changeTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  app.darkMode = !app.darkMode;
}

function changeLocale(locale: MenuLayout) {
  if (i18n.global.locale.value != locale.key) {
    i18n.global.locale.value = locale.key as "en" | "pt";
  }

}
</script>
<style scoped lang="scss">
.v-navigation-drawer {
  :deep(.v-navigation-drawer__content) {
    display: grid;
    align-content: center;

  }
}

.dark-mode-switch {
  :deep(.v-input__control) {
    justify-content: center;
  }
}
</style>