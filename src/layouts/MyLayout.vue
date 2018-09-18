<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-toolbar-title>
          <q-icon :name="$store.state.auth.status === 'login' ? 'lock_open' : 'lock'" />
          Logged {{ $store.state.auth.status === 'login' ? ' in' : ' out' }}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'Welcome'
}
</script>

<style>
</style>
