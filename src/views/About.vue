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
        <div className="intorduce">
          <div className="title">
            <div>caoch</div>
            <div>with</div>
            <div>experienced</div>
          </div>
        </div>
        <div className="detail">
          <div className="desc">
            <div className="name active">HE JIAYI</div>
            <div>Founder of in Yoga</div>
            <div>Ashtanga Certified Coach</div>
            <div>Hatha Yoga Certified Coach</div>
            <div>American Yoga League Certified Instructor</div>
            <div>KRIYOGA 400 hours certified coach</div>
          </div>
          <div className="pic"></div>
        </div>
      </div>
      <div className="page">
        <div className="intorduce">
          <div className="title">
            <div>caoch</div>
            <div>with</div>
            <div>experienced</div>
          </div>
        </div>
        <div className="detail">
          <div className="pic"></div>
          <div className="desc">
            <div className="name active">XIE XUEMEI</div>
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
          <div>3RD</div>
          <div>anniversary</div>
          <div>event</div>
          <div className="date">12 / 11 / 2020</div>
          <div className="chn">三周年纪念活动</div>
        </div>
        <div className="info">
          <div>HI FIVE,HELLO FUTURE!</div>
          <div>印瑜伽从2018年创建起，已经度过了3个生日。</div>
          <div>
            为了阻止冒险家的脚步，血红祭祀在魔法万岁公会的帮助下，利用黑暗魔法赋予曾经被冒险者们击败的首领们新的力量，让他们前往龙牙高原阻击冒险者。不过那些首领刚一到龙牙高原就被红夜等人控制了起来。红夜开辟出了一个叫绯红界的空间，将那些首领软禁了起来，并以分身亲自坐镇看守。这样一来，那些被血红祭祀赋予新力量的首领们不但没有成为阻击冒险者的主力，反而成了冒险者们提高实力的工具。
          </div>
          <div>一路风雨，感恩有你。印瑜伽，(゜-゜)つロ 干杯~</div>
        </div>
      </div>
      <div className="page">
        <div className="intorduce">
          <div></div>
          <div className="title">
            <div>about</div>
            <div>us</div>
            <div className="chn">关于我们</div>
          </div>
          <div className="copy-right">
            <div>Copyright © 2020 In yoga. All rights Reserved.</div>
            <div>蜀ICP备20002760号-2</div>
          </div>
        </div>
        <div className="detail">
          <div class="desc">
            <div class="title">introduce</div>
            <div>
              印瑜伽成立于2018年，共有会员200余人，开展课程30余种
            </div>
            <div>
              瑜伽项目包括哈他瑜伽、阿斯汤加、阴瑜伽、球瑜伽等
            </div>
            <div>
              其他项目包括产后修复、维密塑形、康复理疗、高温瑜伽、速瘦减肥等
            </div>
            <div>印瑜伽拥有经验丰富的教练团队，致力于会员的瑜伽练习体验</div>
            <div>以最专业的态度和最完美的姿态对待每一位会员</div>
            <div>in life in yoga</div>
            <div>享受生活，享受瑜伽</div>
            <div class="title">wechat</div>
            <div>
              inyoga_studio
            </div>
            <div class="title">address</div>
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
      }, 1500)
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
