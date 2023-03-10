<template>
  <q-layout view="lHh Lpr lFf">
    <div class="auth-container q-px-md q-py-xl">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.auth-container {
  width: 500px;
  margin: auto;
  max-width: 100%;
}
</style>

<script lang="ts" setup></script>
