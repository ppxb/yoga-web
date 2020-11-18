<template>
  <header class="home-header">
    <div class="logo">In Yoga</div>
    <div class="login">LOGIN</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
.home-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 80px;
  box-sizing: border-box;
  z-index: 999;
  padding: 0 100px;
  transition: all 0.25s linear;

  .logo {
    font-size: 2.5em;
    font-weight: 500;
    color: #333;
  }

  .login {
    font-size: 1.875em;
    color: #333;
    transition: color 0.25s ease;

    &:hover {
      cursor: pointer;
      color: #111;
    }
  }
}

.toggle-out {
  opacity: 0;
  transform: translateY(-10px);
}

.toggle-in {
  opacity: 1;
}
</style>
