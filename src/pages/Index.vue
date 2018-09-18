<template>
  <q-page class="flex flex-center row">
    <q-card class="col-4">
      <q-card-title>
        Log in
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-field
          icon="vpn_key"
          label="API id"
          orientation="vertical"
          :error="api_id.error"
          :error-label="api_id.message"
        >
          <q-input v-model="api_id.value" :error="api_id.error"/>
        </q-field>
      </q-card-main>
      <q-card-main>
        <q-field
          icon="security"
          label="API secret"
          orientation="vertical"
          :error="api_secret.error"
          :error-label="api_secret.message"
        >
          <q-input v-model="api_secret.value" :error="api_secret.error"/>
        </q-field>
      </q-card-main>
      <q-card-main classes="flex flex-center">
        <q-btn
          style="width: 100%"
          size="xl"
          color="secondary"
          @click="login">
          <q-icon name="send" />Submit
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
  props: {},
  data () {
    return {
      accountToken: 'https://sandbox.d.greeninvoice.co.il/api/v1/account/token',
      api_id: {
        value: '1d705c3b-826c-4749-a091-93316fa59754',
        pattern: /[A-Za-z0-9-]/g,
        message: '',
        error: false
      },
      api_secret: {
        value: 'dennr3wuD8LRS6EyyAUx5g',
        pattern: /[A-Za-z0-9]/g,
        message: '',
        error: false
      }
    }
  },
  methods: {
    apiIdValidated () {
      let valueLength = this.api_id.value.length
      let matchedLength = this.api_id.value.match(this.api_id.pattern).length
      if (valueLength === matchedLength) {
        this.api_id.error = false
        this.api_id.message = ''
        return true
      }
      this.api_id.error = true
      this.api_id.message = 'Insert valid API Key Id'
      return false
    },
    apiSecretValidated () {
      let valueLength = this.api_secret.value.length
      let matchedLength = this.api_secret.value.match(this.api_secret.pattern).length
      if (valueLength === matchedLength) {
        this.api_secret.error = false
        this.api_secret.message = ''
        return true
      }
      this.api_secret.error = true
      this.api_secret.message = 'Insert valid API Key Secret'
      return false
    },
    login () {
      try {
        if (this.apiIdValidated() && this.apiSecretValidated()) {
          let keys = {
            id: this.api_id.value,
            secret: this.api_secret.value
          }
          this.$store.dispatch('auth/AUTH_REQUEST', keys).then(() => {
            this.$router.push('/welcome')
          })
        } else {
          console.log('errors login')
        }
      } catch (err) {
        console.log('error')
        console.log(err)
      }
    }
  }
}
</script>
