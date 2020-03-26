<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-6">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="Email" name="login" type="text" v-model="credentials.email" />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  v-model="credentials.password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="Login()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    Login() {
      console.log(this.credentials);
      this.$store.dispatch("login", this.credentials);
      this.$router.push("/");
    }
  }
};
</script>