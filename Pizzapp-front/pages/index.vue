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
          <tr v-for="item in menu" :key="item.name" @click="Shop(item)">
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
import axios from "axios";

export default {
  data() {
    return {
      menu: []
    };
  },
  asyncData() {
    return axios
      .get("http://localhost:8080/menu/fetchAll")
      .then(res => {
        console.log(res.data);
        return {
          menu: res.data
        };
      })
      .catch(err => console.log(err));
  },
  methods:{
    Shop(item){
      console.log(item.name + " has been put into the shopping cart!")
    }
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