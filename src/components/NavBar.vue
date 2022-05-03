<template>
  <nav class='navbar navbar-light'>
    <div class='container'>
      <router-link :to='{name: "home"}' class='navbar-brand'>
        Medium Clone
      </router-link>

      <ul class='nav navbar-nav pull-xs-right'>
        <li class='nav-item'>
          <router-link
            :to='{name: "home"}'
            class='nav-link'
            active-class='active'
            exact
          >
            Home
          </router-link>
        </li>

        <template v-if='isLoggedIn'>
          <li class='nav-item'>
            <router-link
              :to='{name: "home"}'
              class='nav-link'
              active-class='active'
            >
              <i class='ion-compose'></i> &nbsp; New Article
            </router-link>
          </li>


          <li class='nav-item'>
            <router-link
              :to='{name: "home"}'
              class='nav-link'
              active-class='active'
            >
              <i class='ion-gear-a'></i> &nbsp; New Article
            </router-link>
          </li>

          <li class='nav-item'>
            <router-link
              :to='{name: "home", params: {slug: currentUser.userName}}'
              class='nav-link'
            >
              <img class='user-pic' :src='currentUser.image'/>
              &nbsp;
              {{currentUser.userName}}
            </router-link>
          </li>
        </template>

        <template v-if='isAnonymous'>
          <li class='nav-item'>
            <router-link :to='{name: "login"}' class='nav-link' active-class='active'>
              Sign In
            </router-link>
          </li>

          <li class='nav-item'>
            <router-link :to='{name: "register"}' class='nav-link' active-class='active'>
              Sign Up
            </router-link>
          </li>
        </template>

      </ul>
    </div>
    <!-- /.container -->
  </nav>
</template>

<script>
import {gettersTypes} from '@/store/modules/auth';
import {mapGetters} from 'vuex';

export default {
  name: 'AppNavBar',

  computed: {
    ...mapGetters({
      currentUser: gettersTypes.currentUser,
      isLoggedIn: gettersTypes.isLoggedIn,
      isAnonymous: gettersTypes.isAnonymous,
    }),
  }
};
</script>
