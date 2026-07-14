<template>
  <q-layout view="lHh Lpr lFf">

    <div class="auth-container">

      <!-- Left Side -->
      <div class="left-panel">

        <div class="branding">

          <img
            src="/src/assets/caterbook-logo.png"
            alt="Logo"
            class="saas-logo"
          />

          <h2>CaterBook</h2>

          <p>
            Smart Catering Management Platform
          </p>

        </div>

      </div>

      <!-- Right Side -->
      <div class="right-panel">

        <router-view />

      </div>

    </div>

  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped>

.auth-container{
  display:flex;
  height:100vh;
}

.left-panel{
  flex:1;
  background-color:beige;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  /* padding:60px; */
}

.branding{
  max-width:420px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  /* padding:0; */
}


.branding h2{
  font-size:42px;
  font-weight:700;
  /* margin-bottom:15px; */
  color:orange;
}

.branding p{
  font-size:18px;
  line-height:1.8;
  color:navy;
}

.right-panel{
  width:500px;
  background:white;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:40px;
}

.saas-logo{
  height:200px;
  /* width:100px; */
}


@media(max-width:900px){

.left-panel{
    display:none;
}

.right-panel{
    width:100%;
}

}

</style>