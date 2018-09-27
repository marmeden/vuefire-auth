<template>
   <div class="login">
      <h3>Sign in</h3>
      <input type="text" placeholder="Email" v-model="email"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button v-on:click="signIn">Connection</button>
      <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
   </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInwIthEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('HelloWorld')
        },
        (err) => {
          alert('oops ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
