<template>
  <div>
    <v-col v-for="item in cart" :key="item.id" cols="12">
      <v-card dark max-width="500" max-height="150">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline">{{item.name}}</v-card-title>

            <v-card-subtitle style="width: 350px">
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="['normal', 'large', 'jumbo']"
                  label="Choose a size"
                  :value="item.size"
                  @input="size => ChangeSize(item, size)"
                ></v-select>
                <input
                  class="quantity"
                  type="number"
                  min="1"
                  :value="item.quantity"
                  @change="quantity => ChangeQuantity(item, quantity)"
                />
              </v-col>
            </v-card-subtitle>
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
import _ from "lodash";
export default {
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  methods: {
    ChangeSize(item, size) {
      let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      console.log(shoppingCart);
      const itemId = shoppingCart.findIndex(x => x.id === item.id);
      shoppingCart[itemId].size = size;
      shoppingCart = JSON.stringify(shoppingCart);
      localStorage.setItem("shoppingCart", shoppingCart);
    },
    ChangeQuantity(item, quantity) {
      const value = parseInt(quantity.target.value);

      let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      console.log(shoppingCart);

      const itemId = shoppingCart.findIndex(x => x.id === item.id);
      shoppingCart[itemId].quantity = value;

      shoppingCart = JSON.stringify(shoppingCart);
      localStorage.setItem("shoppingCart", shoppingCart);
    }
  }
};
</script>

<style scoped>
.quantity {
  margin-top: 21px;
  margin-bottom: 21px;
  padding-left: 10px;
  width: 50px;
}
</style>