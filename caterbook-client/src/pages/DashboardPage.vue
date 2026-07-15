<template>
    <h1>Dashboard</h1>

    <q-btn
  label="Logout"
  color="negative"
  @click="logout"
/>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '../boot/supabase.js'

const router = useRouter()

const logout = async () => {
  await supabase.auth.signOut()
  router.replace('/auth/login')
}
</script>
<style></style>
