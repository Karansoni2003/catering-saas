<template>
    <div>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
  
      <button @click="login">
        Login
      </button>
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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
  
    if (error) {
      alert(error.message)
      return
    }
  
    alert('Login Successful')
  
    console.log(data)
  
    router.push('/app/dashboard')
  }
  </script>