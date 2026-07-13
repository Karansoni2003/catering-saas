<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="signup">
      Signup
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../boot/supabase'

const email = ref('')
const password = ref('')

const signup = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert(error.message)
  } else {
    alert('Account Created')
  }
}
</script>