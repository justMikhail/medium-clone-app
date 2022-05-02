<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>
            Sign Up
          </h1>
          <p class='text-xs-center'>
            <router-link :to='{name: "home"}'>
              Need an account?
            </router-link>
          </p>
          VALIDATION ERRORS
          <!-- /.tex-xs-center -->

          <form @submit.prevent='submitHandler'>
            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Username'
              />
            </fieldset>

            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Email'
              />
            </fieldset>

            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='password'
                placeholder='Password'
              />
            </fieldset>

            <button
              class='btn btl-lg btn-primary pull-xs-right'
              :disabled='isSubmitting'
            >
              Sign Up
            </button>

          </form>
        </div>
        <!-- /.col-md-6 offset0md-3 col-xs-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-page -->
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',

  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    }
  },

  methods: {
    submitHandler() {
      console.log('==== submit ====');
      this.$store
        .dispatch('register', {
          email: 'email-sfsdfsdfsdfg4654654456fghfsdfsdfsjuyddddfdsf@gegwsdfsdfe.com',
          username: 'username-sdfsynssdfd456il897o45645645fsdffghfgye123sdfs',
          password: '987654321'
        })
        .then(user => console.log('Successfully register user', user));
    }
  }
};
</script>
