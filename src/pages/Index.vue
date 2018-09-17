<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-title>
        Log in
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-field
          icon="vpn_key"
          label="API key"
          orientation="vertical"
        >
          <q-input v-model="api_key" />
        </q-field>
      </q-card-main>
      <q-card-main>
        <q-field
          icon="security"
          label="API secret"
          orientation="vertical"
        >
          <q-input v-model="api_secret" />
        </q-field>
      </q-card-main>
      <q-card-main classes="flex flex-center">
        <q-btn style="width: 100%" size="xl" color="secondary">
          <q-icon name="get_app" />Submit
        </q-btn>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  props: {
    api_key: {
      type: String,
      default: ''
    },
    api_secret: {
      type: String,
      default: ''
    }
  }
}
</script>
