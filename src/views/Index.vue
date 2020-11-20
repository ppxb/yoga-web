<template>
  <transition name="fade">
    <loading v-if="loading" />
  </transition>
  <div v-if="!loading">
    <home-header />
    <full-page>
      <div class="page">
        <div class="slogan">
          <div class="founder">HEJIAYI × XIEXUEMEI</div>
          <div class="title">Love & Yoga</div>
          <div class="sub-title">More than and beyond</div>
        </div>
        <div class="pic-wrapper">
          <div class="pic"></div>
          <div class="desc">Hatha Yoga</div>
        </div>
      </div>
      <div className="page">
        <div className="title">
          <div>
            COACH
          </div>
          <div>
            ×
          </div>
          <div>
            HEJIAYI
          </div>
        </div>
        <div className="detail">
          <div className="text-img">
            <div class="text">
              <div>印瑜伽创始人</div>
              <div>资深瑜伽教练</div>
              <div>普拉提功能康复训练师暨高级私教认证</div>
              <div>亚太瑜伽联盟瑜伽教练认证</div>
              <div>KRIYOGA 200 小时TTC认证教练</div>
              <div>维密天使瘦身训练营认证教练</div>
            </div>
          </div>
          <div class="img" />
        </div>
      </div>
      <div className="page">
        <div className="title">
          <div>
            COACH
          </div>
          <div>
            ×
          </div>
          <div>
            XIEXUEMEI
          </div>
        </div>
        <div className="text-img">
          <div class="img"></div>
          <div class="text">
            <div>印瑜伽创始人</div>
            <div>资深瑜伽教练</div>
            <div>BILL ARCE 高温瑜伽教练认证</div>
            <div>哈他瑜伽亚太国际瑜伽协会认证教练</div>
            <div>阴瑜伽理疗专业教练暨球瑜伽专业教练</div>
            <div>孕产及产后瑜伽认证教练</div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="title">
          EVENTS
        </div>
        <div className="news">
          <div class="news-item">
            <div class="title">3rd Anniversary Celebration</div>
            <div class="date">19 / 11 / 2020</div>
            <div class="chn">三周年庆典活动</div>
          </div>
        </div>
      </div>
      <div className="page">
        <div></div>
        <div class="text">
          <div class="main">感受现在，尽在印瑜伽</div>
          <div class="title">Wechat</div>
          <div class="desc">InYoga_Studio</div>
        </div>
        <div class="copyright">
          <div>Copyright © 2020 In Yoga. All rights Reserved.</div>
          <div>
            <a href="http://beian.miit.gov.cn/" target="_blank"
              >蜀ICP备20002760号-2</a
            >
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import HomeHeader from '@/components/HomeHeader.vue'
import Loading from '@/components/Loading.vue'
import FullPage from '@/components/FullPage.vue'

export default defineComponent({
  components: {
    FullPage,
    Loading,
    HomeHeader
  },
  setup() {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })

    return { loading, HomeHeader }
  }
})
</script>

<style lang="scss" scoped>
.fade-leave-to {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.25s ease;
}
</style>
