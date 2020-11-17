<template>
  <div class="loading">
    <div class="title">
      <div class="title-inner" data-text="IN YOGA">IN YOGA</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading'
})
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3b403c;
  user-select: none;
  z-index: 9999;
  position: absolute;

  .title {
    width: fit-content;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    .title-inner {
      font-size: 2em;
      color: #fff;
      font-weight: 700;
      &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        width: 100%;
        background: rgba(231, 37, 102, 0);
        clip: rect(0, 0, 0, 0);
      }
      &::after {
        left: 2px;
        text-shadow: -5px 0 rgba(155, 129, 220, 0.5);
        animation: glitch-anim-1 3s infinite linear alternate-reverse;
      }
      &::before {
        left: -2px;
        text-shadow: 5px 0 rgba(72, 215, 213, 0.5);
        animation: glitch-anim-2 3s infinite linear alternate-reverse;
      }
      @keyframes glitch-anim-1 {
        0% {
          clip: rect(65px, 600px, 39px, 0);
        }
        6.66667% {
          clip: rect(19px, 600px, 21px, 0);
        }
        13.33333% {
          clip: rect(80px, 600px, 51px, 0);
        }
        20% {
          clip: rect(6px, 600px, 16px, 0);
        }
        26.66667% {
          clip: rect(31px, 600px, 95px, 0);
        }
        33.33333% {
          clip: rect(94px, 600px, 84px, 0);
        }
        40% {
          clip: rect(84px, 600px, 74px, 0);
        }
        46.66667% {
          clip: rect(97px, 600px, 55px, 0);
        }
        53.33333% {
          clip: rect(7px, 600px, 18px, 0);
        }
        60% {
          clip: rect(24px, 600px, 17px, 0);
        }
        66.66667% {
          clip: rect(28px, 600px, 97px, 0);
        }
        73.33333% {
          clip: rect(61px, 600px, 2px, 0);
        }
        80% {
          clip: rect(0, 0, 0, 0);
        }
        100% {
          clip: rect(0, 0, 0, 0);
        }
      }
      @keyframes glitch-anim-2 {
        0% {
          clip: rect(86px, 600px, 98px, 0);
        }
        6.66667% {
          clip: rect(62px, 600px, 92px, 0);
        }
        13.33333% {
          clip: rect(91px, 600px, 20px, 0);
        }
        20% {
          clip: rect(47px, 600px, 44px, 0);
        }
        26.66667% {
          clip: rect(1px, 600px, 77px, 0);
        }
        33.33333% {
          clip: rect(99px, 600px, 22px, 0);
        }
        40% {
          clip: rect(44px, 600px, 12px, 0);
        }
        46.66667% {
          clip: rect(71px, 600px, 65px, 0);
        }
        53.33333% {
          clip: rect(52px, 600px, 28px, 0);
        }
        60% {
          clip: rect(10px, 600px, 15px, 0);
        }
        66.66667% {
          clip: rect(75px, 600px, 69px, 0);
        }
        73.33333% {
          clip: rect(57px, 600px, 62px, 0);
        }
        80% {
          clip: rect(0, 0, 0, 0);
        }
        100% {
          clip: rect(0, 0, 0, 0);
        }
      }
    }
  }
}
</style>
