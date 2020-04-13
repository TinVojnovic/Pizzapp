<template>
  <center>
    <v-simple-table style="width:1300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th id="imgColumn" class="text-left"></th>
            <th class="text-left">Name</th>
            <th class="text-left">Size</th>
            <th class="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Menu" :key="item.name" @click="AddToCart(item)">
            <td>
              <img src="../assets/pizza.jpg" />
            </td>
            <td>{{ item.name }}</td>
            <td>
              Small
              <br />Normal
              <br />Jumbo
              <br />
            </td>
            <td>
              {{ item.prices[0]}} kn
              <br />
              {{ item.prices[1]}} kn
              <br />
              {{ item.prices[2]}} kn
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </center>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      menu: [],
      shoppingCart: []
    };
  },
  computed: {
    Menu() {
      return this.$store.getters.loadedMenu;
    }
  },
  methods: {
    LoadCart() {
      if (!localStorage.getItem("shoppingCart")) return;
      this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    },
    AddToCart(item) {
      if (_.find(this.shoppingCart, { id: item.id })) {
        const id = this.shoppingCart.findIndex(x => x.id === item.id);
        this.shoppingCart[id]["quantity"]++;
        console.log(this.shoppingCart[id].quantity);
      } else {
        this.shoppingCart.push(item);
        const id = this.shoppingCart.findIndex(x => x.id === item.id);
        this.shoppingCart[id]["quantity"] = 1;
        console.log(item.name + " has been put into the shopping cart!");
      }

      const parsed = JSON.stringify(this.shoppingCart);
      localStorage.setItem("shoppingCart", parsed);
    }
  },
  mounted() {
    this.LoadCart();
  }
};
</script>

<style scoped>
img {
  height: 100px;
  widows: 100px;
  padding: 5px;
}

#imgColumn {
  width: 250px;
}
</style>