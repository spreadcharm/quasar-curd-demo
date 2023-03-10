<template>
  <q-form class="q-gutter-md">
    <q-input
      v-model="name"
      type="text"
      outlined
      placeholder="Name"
      hint="Please input your name"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'This field is required']"
    />
    <q-input
      v-model="email"
      type="email"
      outlined
      placeholder="Email"
      hint="Please input your email"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'This field is required']"
    />
    <q-input
      v-model="password"
      autocomplete="off"
      outlined
      :type="isPwd ? 'password' : 'text'"
      placeholder="Password"
      hint="Please input your password"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'This field is required']"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <div>
      <q-btn
        label="Register"
        type="submit"
        size="lg"
        color="primary"
        class="full-width"
        disable
      />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const isPwd = ref(true);
</script>
