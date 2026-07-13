<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto;">
    <h4>Login</h4>

    <q-input
      v-model="email"
      label="Email"
      type="email"
      outlined
      class="q-mb-md"
    />

    <q-input
      v-model="password"
      label="Password"
      type="password"
      outlined
      class="q-mb-md"
    />

    <q-btn
      label="Login"
      color="primary"
      @click="login"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../boot/supabase'

const router = useRouter()

const email = ref('')
const password = ref('')

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert(error.message)
    return
  }

  alert('Login Successful!')

  // Redirect to dashboard
  router.push('/dashboard')
}
</script>