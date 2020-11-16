<template>
  <div class="about">
    <full-page>
      <div className="page">
        <div className="slogan">
          <div>IN YOGA</div>
          <div>NO MORE THAN</div>
          <div>AND</div>
          <div>BEYOND</div>
        </div>
      </div>
      <div className="page">
        <div className="intorduce">
          <div></div>
          <div className="title">
            <div>COACHES</div>
            <div>WITH</div>
            <div>EXPERIENCED</div>
            <div className="chn">经验丰富的教练团队</div>
          </div>
          <div className="coach">
            <div className="active">JIAYI HE</div>
            <div>XUEMEI XIE</div>
          </div>
        </div>
        <div className="detail">
          <img
            src="https://img2.woyaogexing.com/2020/11/11/6d9b384c4c8b409483877c21006b2a91!400x400.jpeg"
            alt=""
            className="pic"
          />
          <div className="desc">
            <div className="name active">JIAYI HE</div>
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
          <div className="sub-title">三周年纪念活动</div>
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
        <div className="title">
          <div>contact</div>
          <div>US</div>
          <div className="chn">联系我们</div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FullPage from '@/components/FullPage.vue'

export default defineComponent({
  components: {
    FullPage
  }
})
</script>
