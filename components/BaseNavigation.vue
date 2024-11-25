<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <a href="/" class="flex gap-1 items-center">
        <NuxtImg src="/icon-green.png" format="webp" densities="1x" width="56px"/>
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </a>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>