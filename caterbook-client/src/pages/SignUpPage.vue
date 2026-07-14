<template>
  <div class="signup-container">

    <div class="signup-card">

      <h2>Create Account</h2>

      <p class="subtitle">
        Create your CaterBook account
      </p>

      <input
        v-model="email"
        placeholder="Email Address"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <button @click="signup">
        Create Account
      </button>

      <p class="login-text">
        Already have an account?
      </p>
    </div>

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
    alert('Account Created Successfully')
  }
}
</script>

<style scoped>

.signup-container{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.signup-card{

    width:420px;
    background:white;
    border-radius:18px;
    padding:40px;

    box-shadow:0 10px 35px rgba(0,0,0,.08);
}

h2{

    margin:0;
    font-size:32px;
    font-weight:700;
}

.subtitle{

    color:#777;
    margin:10px 0 35px;
}

input{

    width:100%;
    padding:15px;

    margin-bottom:18px;

    border-radius:10px;

    border:1px solid #ddd;

    font-size:15px;

    outline:none;

    transition:.25s;
    box-sizing:border-box;
}

input:focus{

    border-color:#1976d2;
}

button{

    width:100%;

    padding:15px;

    border:none;

    border-radius:10px;

    background:#1976d2;

    color:white;

    font-size:16px;

    cursor:pointer;

    transition:.25s;
}

button:hover{

    background:#1565c0;
}

.login-text{

    margin-top:25px;

    text-align:center;

    color:#777;
}

</style>