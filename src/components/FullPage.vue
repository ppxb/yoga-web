<template>
  <div class="page-container" ref="container">
    <slot></slot>
    <div v-if="showNav" class="page-nav">
      {{ pageIndex + 1 }}
      <div class="nav-divider"></div>
      {{ pageNum }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import useThrottle from '../hooks/useThrottle'

export default defineComponent({
  name: 'FullPage',
  props: {
    showNav: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 1000
    }
  },
  setup(props) {
    const container = ref() as Ref<HTMLElement>
    const viewHeight = ref(0)
    const position = ref(0)
    const pageNum = ref(0)
    const pageIndex = ref(0)

    const handleMouseWheel = useThrottle((e: WheelEvent) => {
      const { deltaY } = e

      if (deltaY < 0) {
        pageDown()
      } else {
        pageUp()
      }
    }, props.delay)

    const turnPage = (height: number) => {
      container.value.style.top = `${height}px`
      pageIndex.value = -(position.value / viewHeight.value)
    }

    const turnTo = (index: number) => {
      pageIndex.value = index - 1
      container.value.style.top = `${-pageIndex.value * viewHeight.value}px`
    }

    const pageUp = () => {
      if (
        -container.value.offsetTop <=
        viewHeight.value * (pageNum.value - 2)
      ) {
        position.value = container.value.offsetTop - viewHeight.value
        turnPage(position.value)
      }
    }

    const pageDown = () => {
      if (-container.value.offsetTop >= viewHeight.value) {
        position.value = container.value.offsetTop + viewHeight.value
        turnPage(position.value)
      }
    }

    watch(
      () => position.value,
      (newV, oldV) => {
        if (newV !== oldV) {
          const header = document.querySelector('.home-header')
          header?.classList.remove('toggle-in')
          header?.classList.add('toggle-out')
          setTimeout(() => {
            header?.classList.remove('toggle-out')
            header?.classList.add('toggle-in')
          }, 800)
        }
      }
    )

    onMounted(() => {
      viewHeight.value = document.documentElement.clientHeight
      pageNum.value = document.querySelectorAll('.page').length
      container.value.style.height = `${viewHeight.value}px`

      document.addEventListener('wheel', handleMouseWheel)
    })

    onUnmounted(() => {
      document.removeEventListener('wheel', handleMouseWheel)
    })

    return { container, pageNum, pageIndex, turnTo }
  }
})
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
}

.page-container {
  position: relative;
  top: 0;
  transition: all 1000ms ease;
  touch-action: none;

  .page {
    width: 100%;
    height: 100%;
  }

  .page-nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    user-select: none;
    font-weight: 500;
    color: #333;

    .nav-divider {
      height: 80px;
      width: 2px;
      margin: 20px 0;
      background: rgba(#333, 0.7);
    }
  }
}
</style>
