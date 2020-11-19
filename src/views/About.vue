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
              <div>Founder of in Yoga</div>
              <div>Ashtanga Certified Coach</div>
              <div>Hatha Yoga Certified Coach</div>
              <div>American Yoga League Certified Instructor</div>
              <div>KRIYOGA 400 hours certified coach</div>
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
            <div>Founder of in Yoga</div>
            <div>Ashtanga Certified Coach</div>
            <div>Hatha Yoga Certified Coach</div>
            <div>American Yoga League Certified Instructor</div>
            <div>KRIYOGA 400 hours certified coach</div>
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
        <div className="intorduce">
          <div></div>
          <div className="title">
            <div>ABOUT</div>
            <div>US</div>
          </div>
          <div className="copy-right">
            <div>Copyright © 2020 In Yoga. All rights Reserved.</div>
            <div>蜀ICP备20002760号-2</div>
          </div>
        </div>
        <div className="detail">
          <div class="desc">
            <div class="title">Introduce</div>
            <div>
              印瑜伽成立于2018年，共有会员200余人，开展课程30余种
            </div>
            <div>
              瑜伽项目包括哈他瑜伽、阿斯汤加、阴瑜伽、球瑜伽
            </div>
            <div>
              其他项目包括产后修复、维密塑形、康复理疗、高温瑜伽、速瘦减肥等
            </div>
            <div>印瑜伽拥有经验丰富的教练团队，致力于会员的瑜伽练习体验</div>
            <div>以最专业的态度和最完美的姿态对待每一位会员</div>
            <div>享受生活，享受瑜伽</div>
            <div class="title">Wechat</div>
            <div class="wechat">
              InYoga_Studio
            </div>
            <div class="title">Address</div>
            <div>
              四川省成都市蒲江县鹤山镇鹤山南路 20 附 7 号
            </div>
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
