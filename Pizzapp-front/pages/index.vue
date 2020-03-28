<template>
  <v-simple-table>
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
        <tr v-for="item in menu" :key="item.name">
          <td><img src="../assets/pizza.jpg"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.price }}kn</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
        }
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
img{
    height: 100px;
    widows: 100px;
    padding: 5px;
}

#imgColumn{
    width: 250px;
}
</style>