<template>
    <div>
        <ShopItem />
        <v-form>
            <v-text-field
            label="First name"
            required
          ></v-text-field>
          <v-text-field
            label="Last name"
            required
          ></v-text-field>
          <v-text-field
            label="Email"
            required
          ></v-text-field>
          <v-textarea
            :counter="50"
            label="Side note"
          ></v-textarea>
        </v-form>
    </div>
</template>

<script>
import ShopItem from "@/components/ShopItem"
export default {
    components:{
        ShopItem
    }
}
</script>

<style scoped>
form{
    width: 500px;
}
</style>