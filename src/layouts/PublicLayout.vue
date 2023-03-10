<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar class="q-px-lg q-py-md">
        <q-toolbar-title>
          <q-btn
            flat
            class="static-btn q-pa-none logo-btn"
            :to="{ name: 'Home' }"
          >
            <img src="/images/logo.png" alt="Quasar CRUD Demo Application" />
          </q-btn>
        </q-toolbar-title>
        <q-btn flat color="black" label="Login" :to="{ name: 'Login' }" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
