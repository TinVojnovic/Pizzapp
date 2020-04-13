<template>
  <div class="grid-container">
    <div>
      <v-form>
        <v-text-field label="First name" v-model="formData.name" required></v-text-field>
        <v-text-field label="Last name" v-model="formData.surname" required></v-text-field>
        <v-text-field label="Email" v-model="formData.email" required></v-text-field>
        <v-text-field label="Phone" v-model="formData.phone" required></v-text-field>
        <v-textarea :counter="50" label="Side note" v-model="formData.sideNote"></v-textarea>
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
import axios from "axios";
export default {
  components: {
    ShopItem
  },
  data() {
    return {
      cart: [],
      order: {},
      formData: {
        name: "pero",
        surname: "peric",
        email: "peric@gmail.com",
        phone: "0912423532",
        sideNote: "neka napomena za narudjbu"
      }
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
      const cart = JSON.parse(localStorage.getItem("shoppingCart"));

      const order = {
        itemIds: [],
        sizes: [],
        name: "",
        surname: "",
        email: "",
        phone: "",
        sideNote: ""
      };

      _.map(cart, item => {
        for (let q = item.quantity; q > 0; q--) {
          order.itemIds.push(item.id);
          order.sizes.push(item.size);
        }
        order.name = this.formData.name;
        order.surname = this.formData.surname;
        order.email = this.formData.email;
        order.phone = this.formData.phone;
        order.sideNote = this.formData.sideNote;
      });

      return axios
        .post("http://127.0.0.1:8080/order/create", order)
        .then(result => {
          console.log(result);
          this.EmptyCart()
          this.$router.go()
        }).catch(err => {
          console.log(err)
        })
    }
  },
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