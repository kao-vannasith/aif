<template>
    <v-container>
    <v-layout>
    <v-app-bar color="primary" scroll-behavior="elevate">
        <v-app-bar-title>my kao</v-app-bar-title>
        <v-spacer></v-spacer>

        <v-card-actions>
      <v-btn @click="$router.push({ name: 'Login' })" variant="outlined">
        Logout
      </v-btn>
    </v-card-actions>

    </v-app-bar>
</v-layout>
</v-container>
  </template>
<script>

export default {
  name: 'SideBar',
 
}
</script>