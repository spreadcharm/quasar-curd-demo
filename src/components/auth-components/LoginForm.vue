<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
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
        label="Login"
        type="submit"
        size="lg"
        color="primary"
        class="full-width"
      />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';
import { AUTH_TOKEN } from 'src/constants';

const $q = useQuasar();
const router = useRouter();

const email = ref('test@email.com');
const password = ref('testpassword');
const isPwd = ref(true);

function onSubmit() {
  LocalStorage.set(AUTH_TOKEN, import.meta.env.VITE_API_AUTH_TOKEN);
  $q.notify({
    message: 'Successfully loged in',
    type: 'positive',
  });
  router.push({ name: 'AppDashboard' });
}
</script>
