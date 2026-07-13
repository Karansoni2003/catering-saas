<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header elevated>
      <q-toolbar>

        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CaterBook
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="250"
      class="sidebar"
    >
      <q-list>

        <q-item clickable to="/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>
            Dashboard
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="directions_bus" />
          </q-item-section>

          <q-item-section>
            Tours
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="confirmation_number" />
          </q-item-section>

          <q-item-section>
            Bookings
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
</script>


<style>
.sidebar{
  padding: 20px;
}
</style>