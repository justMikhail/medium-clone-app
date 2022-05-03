<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>
            Sign In
          </h1>
          <p class='text-xs-center'>
            <router-link :to='{name: "register"}'>
              Need an account?
            </router-link>
          </p>

          <AppValidationErrors
            v-if='validationErrors'
            :validation-errors='validationErrors'
          />
          <!-- /.tex-xs-center -->

          <form @submit.prevent='submitHandler'>

            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='text'
                placeholder='Email'
                v-model='userEmail'
              />
            </fieldset>

            <fieldset class='form-group'>
              <input
                class='form-control form-control-lg'
                type='password'
                placeholder='Password'
                v-model='userPassword'
              />
            </fieldset>

            <button
              class='btn btl-lg btn-primary pull-xs-right'
              :disabled='isSubmitting'
            >
              Sign In
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
import {mapState} from 'vuex';
import AppValidationErrors from '@/components/ValidationErrors';
import {actionTypes} from '@/store/modules/auth';

export default {
  name: 'LoginPage',

  components: {
    AppValidationErrors
  },

  data() {
    return {
      userEmail: '',
      userPassword: ''
    };
  },

  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },

  methods: {
    submitHandler() {
      this.$store
        .dispatch(actionTypes.login, {
          email: this.userEmail,
          password: this.userPassword
        })
        .then(() => {
          this.$router.push({name: 'home'});
        });
    }
  }
};
</script>
