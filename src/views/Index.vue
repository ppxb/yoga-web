<template>
  <section class="slogan">
    <div class="text">
      <div>more than</div>
      <div class="small">and</div>
      <div>beyond</div>
    </div>
    <div class="pic"></div>
  </section>
  <section class="coach">
    123
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.slogan {
  min-height: 100vh;
  display: flex;

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;

    & > div {
      color: #694539;
      font-size: 8em;
      font-weight: 700;
      margin: 0 0 -20px 100px;
    }

    .small {
      font-size: 6em;
    }
  }

  .pic {
    flex: 1;
    background-image: url('https://images.pexels.com/photos/4323324/pexels-photo-4323324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-position: center center;
    background-size: cover;
  }
}

.coach {
  padding: 120px;
}
</style>
