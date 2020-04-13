<template>
  <div class="grid-container">
    <div>
      <v-form>
        <v-text-field label="First name" required></v-text-field>
        <v-text-field label="Last name" required></v-text-field>
        <v-text-field label="Email" required></v-text-field>
        <v-textarea :counter="50" label="Side note"></v-textarea>
      </v-form>

      <button @click="SendOrder()">Order</button>
      <button @click="EmptyCart()">Empty Cart</button>
    </div>

    <ShopItem class="grid-item" :cart="cart" />
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem";
import _ from "lodash";
export default {
  components: {
    ShopItem
  },
  data() {
    return {
      cart: [],
      order: {}
    };
  },
  methods: {
    ShoppingCart() {
      try {
        console.log(JSON.parse(localStorage.getItem("shoppingCart")));
        this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (!this.cart) this.cart = [];
      } catch (e) {
        console.log(e);
      }
    },
    EmptyCart() {
      this.cart = [];
      localStorage.clear();
    },
    SendOrder() {
      const itemData = {
        itemIds: [],
        sizes: []
      };

      _.map(this.cart, item => {
        itemData.itemIds.push(item.id);
        itemData.sizes.push(item.size);
      });
      
      console.log(itemData);
    }
  },
  computed: {},
  mounted() {
    this.ShoppingCart();
  }
};
</script>

<style scoped>
form {
  width: 500px;
}

.grid-container {
  display: grid;
  grid-template-columns: 30% 70%;
  padding-left: 10px;
}

.grid-item {
  padding-left: 30px;
}

button {
  border: rgb(47, 47, 47) 2px solid;
  background-color: rgb(95, 95, 95);
  padding: 4px;
}

button:hover {
  border: rgb(95, 95, 95) 2px solid;
  background-color: rgb(47, 47, 47);
}
</style>