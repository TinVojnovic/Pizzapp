<template>
  <div>
    <v-col v-for="item in Menu" :key="item.name" cols="12">
      <v-card dark max-width="300" max-height="200">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline">{{item.name}}</v-card-title>

            <v-card-subtitle>Normal</v-card-subtitle>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <img src="../assets/pizza.jpg" />
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  computed: {
    Menu() {
      console.log(this.$store.getters.shoppingCart);
      return this.$store.getters.shoppingCart;
    }
  }
};
</script>