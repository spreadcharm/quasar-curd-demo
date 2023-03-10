<template>
  <q-page>
    <q-btn flat class="static-btn q-pa-none logo-btn" :to="{ name: 'Home' }">
      <img src="/images/logo.png" alt="Roofus is a leading PropTech in US" />
    </q-btn>
    <h1 class="text-h4 q-mt-lg q-mb-none">Welcome back!</h1>
    <p>
      Don't have an account yet?
      <q-btn
        flat
        no-caps
        class="static-btn q-pa-none"
        :to="{ name: 'Register' }"
      >
        Register here
      </q-btn>
    </p>
    <LoginForm class="q-mt-sm" />
  </q-page>
</template>

<style lang="scss" scoped>
.logo-btn img {
  height: 80px;
}
</style>

<script lang="ts" setup>
import LoginForm from 'src/components/auth-components/LoginForm.vue';
</script>
