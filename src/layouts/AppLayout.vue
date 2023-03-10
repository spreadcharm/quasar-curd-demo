<template>
  <q-layout view="hHh Lpr lff" container style="min-height: 100vh">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat round @click="drawer = !drawer" icon="menu" />
        <q-toolbar-title>Quasar CRUD</q-toolbar-title>
        <q-btn flat color="white" label="Logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="1024"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              :to="{ name: menuItem.link }"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { useRouter } from 'vue-router';
import { AUTH_TOKEN } from 'src/constants';
import { ref } from 'vue';

const router = useRouter();
const drawer = ref(false);

const menuList = [
  {
    link: 'AppDashboard',
    icon: 'dashboard',
    label: 'Dashboard',
    separator: true,
  },
  {
    link: 'AppUsers',
    icon: 'people',
    label: 'Users',
    separator: true,
  },
];

function logout() {
  LocalStorage.remove(AUTH_TOKEN);
  router.push({ name: 'Home' });
}
</script>
