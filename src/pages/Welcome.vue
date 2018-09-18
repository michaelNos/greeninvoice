<template>
  <q-page class="flex flex-center row">
    <q-card class="col-4">
      <q-card-title>
        Log out
      </q-card-title>
      <q-card-separator />
      <q-card-main classes="flex flex-center">
        <q-btn
          style="width: 100%"
          size="xl"
          color="secondary"
          @click="logout">
          Logout <q-icon name="exit_to_app" />
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
    api_id: {
      type: String,
      default: '1d705c3b-826c-4749-a091-93316fa59754',
      pattern: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/,
      message: 'Please input phone',
      trigger: 'blur'
    },
    api_secret: {
      type: String,
      default: 'dennr3wuD8LRS6EyyAUx5g'
    }
  },
  data () {
    return {
      accountToken: 'https://sandbox.d.greeninvoice.co.il/api/v1/account/token'
    }
  },
  created () {
    // this.getApiToken()
  },
  methods: {
    validateApiId () {
      return true
    },
    validateApiSecret () {
      return true
    },
    logout () {
      try {
        this.$store.dispatch('auth/AUTH_LOGOUT').then(() => {
          this.$router.push('/')
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
