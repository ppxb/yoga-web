<template>
  <div class="page-container" ref="container">
    <slot></slot>
    <div v-if="showNav" class="page-nav">
      <div
        v-for="i in pageNum"
        :key="i"
        :class="['page-nav-item', pageIndex === i - 1 ? 'active' : '']"
        @click="navClick && turnTo(i)"
      >
        0{{ i }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from 'vue'
import useThrottle from '../hooks/useThrottle'

export default defineComponent({
  name: 'FullPage',
  props: {
    showNav: {
      type: Boolean,
      default: true
    },
    navClick: {
      type: Boolean,
      default: false
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
    align-items: flex-end;
    top: 50%;
    right: 60px;
    transform: translateY(-50%);
    user-select: none;

    & .page-nav-item {
      font-size: 1.125em;
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.25s ease;
      padding: 8px 0;
      letter-spacing: 0.1em;
    }

    & .active {
      font-size: 2.125em;
      color: #fff;
      font-weight: 700;
    }
  }
}
</style>
