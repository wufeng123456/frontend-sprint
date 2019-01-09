<template>
  <div class="animation-sample">
    <div class="animation-sample--scene">
      <div ref="obj" class="animation-sample--obj" :style="animation"></div>
    </div>
    <h2> 动画1 &nbsp;&nbsp; <input v-model="a1IsCheck" type="checkbox"></h2>
    <pre>
  @keyframes scale {
    from, to {
      transform: scale(1, 1)
    }
    50% {
      transform: scale(1.5, 1.5)
    }
  }
    </pre>
    <table>
      <thead>
        <td>css 属性</td>
        <td>css 属性值</td>
      </thead>
      <tbody>
        <tr>
          <td>animation-name: </td>
          <td> {{ animationName }} </td>
        </tr>
        <tr>
          <td>animation-duration:</td>
          <td><input v-model="animationDuration"/></td>
        </tr>
        <tr>
          <td>animation-delay:</td>
          <td><input v-model="animationDelay"/></td>
        </tr>
        <tr>
          <td>animation-timing-function:</td>
          <td><input v-model="animationTimingFunction"/></td>
        </tr>
        <tr>
          <td>animation-iteration-count:</td>
          <td><input v-model="animationIterationCount"/></td>
        </tr>
        <tr>
          <td>animation-direction:</td>
          <td>
            <select v-model="animationDirection">
              <option value="normal">normal</option>
              <option value="reverse">reverse</option>
              <option value="alternate">alternate</option>
              <option value="alternate-reverse">alternate-reverse</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>animation-fill-mode:</td>
          <td>
            <select v-model="animationFillMode">
              <option value="none">none</option>
              <option value="forwards">forwards</option>
              <option value="backwards">backwards</option>
              <option value="both">both</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <h2> 动画2 &nbsp;&nbsp; <input v-model="a2IsCheck" type="checkbox"></h2>
    <pre>
  @keyframes line {
    from {
      left: 30px
    }
    50% {
      animation-timing-function: linear
      left: 100px
    }
    to {
      left: 240px
    }
  }
    </pre>
    <table>
      <thead>
        <td>css 属性</td>
        <td>css 属性值</td>
      </thead>
      <tbody>
        <tr>
          <td>animation-name: </td>
          <td> {{ animationName2 }} </td>
        </tr>
        <tr>
          <td>animation-duration:</td>
          <td><input v-model="animationDuration2"/></td>
        </tr>
        <tr>
          <td>animation-delay:</td>
          <td><input v-model="animationDelay2"/></td>
        </tr>
        <tr>
          <td>animation-timing-function:</td>
          <td><input v-model="animationTimingFunction2"/></td>
        </tr>
        <tr>
          <td>animation-iteration-count:</td>
          <td><input v-model="animationIterationCount2"/></td>
        </tr>
        <tr>
          <td>animation-direction:</td>
          <td>
            <select v-model="animationDirection2">
              <option value="normal">normal</option>
              <option value="reverse">reverse</option>
              <option value="alternate">alternate</option>
              <option value="alternate-reverse">alternate-reverse</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>animation-fill-mode:</td>
          <td>
            <select v-model="animationFillMode2">
              <option value="none">none</option>
              <option value="forwards">forwards</option>
              <option value="backwards">backwards</option>
              <option value="both">both</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="animation-sample--row">
      <div class="btn--mini btn--mini__primary" @click="doStart"> {{ animationIsStart ? '暂停' : '开始' }} </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div class="btn--mini btn--mini__danger" @click="reset">重置</div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'AnimationSample',

    components: {
    },

    props: {
    },

    data() {
      return {
        animationIsStart: false,
        a1IsCheck: true,
        animationName: 'scale',
        animationDuration: '2s',
        animationDelay: '0s',
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite',  // 动画重复次数
        animationDirection: 'normal',  // 动画播放方向 normal | reverse | alternate | alternate-reverse
        animationFillMode: 'none',  // 定义动画播放完成后元素所在状态规则 none | forwards | backwards | both
        // animationPlayState: 'running',  // 动画播放状态 running | paused
        a2IsCheck: false,
        animationName2: 'line',
        animationDuration2: '2s',
        animationDelay2: '0s',
        animationTimingFunction2: 'ease',
        animationIterationCount2: '1',  // 动画重复次数
        animationDirection2: 'normal',  // 动画播放方向 normal | reverse | alternate | alternate-reverse
        animationFillMode2: 'forwards',  // 定义动画播放完成后元素所在状态规则 none | forwards | backwards | both
        // animationPlayState2: 'running'  // 动画播放状态 running | paused
      }
    },

    computed: {
      playState() {
        return this.animationIsStart ? 'running' : 'paused'
      },
      animation() {
        const t1 = `${this.animationDuration} ${this.animationTimingFunction} ${this.animationDelay} ${this.animationIterationCount} ${this.animationDirection} ${this.animationFillMode} ${this.playState} ${this.animationName}`
        const t2 = `${this.animationDuration2} ${this.animationTimingFunction2} ${this.animationDelay2} ${this.animationIterationCount2} ${this.animationDirection2} ${this.animationFillMode2} ${this.playState} ${this.animationName2}`
        let t = []
        if (this.a1IsCheck) {
          t.push(t1)
        }
        if (this.a2IsCheck) {
          t.push(t2)
        }
        return {
          animation: t.join(', ')
        }
      }
    },

    watch: {
    },

    // mounted() {
      // this.init()
    // },

    methods: {
      // init() {
      // }
      doStart() {
        this.animationIsStart = !this.animationIsStart
        this.$nextTick(() => {
          if (this.a1IsCheck) this.$refs.obj.style['animation-play-state'] = this.playState
          if (this.a2IsCheck) this.$refs.obj.style['animation-play-state'] = this.playState
        })
      },
      reset() {
        this.animationIsStart = false
        this.$nextTick(() => {
          if (this.a1IsCheck) this.$refs.obj.style.animation = 'none'
          if (this.a2IsCheck) this.$refs.obj.style.animation = 'none'
        })
      }
    }
  }
</script>

<style lang="stylus">
  .animation-sample
    padding-top 120px
    text-align left
    font-size 16px
    &--scene
      position fixed
      top 0
      left 0
      right 0
      height 200px
      background-color #aaaaaa
    &--obj
      position absolute
      top 80px
      left 30px
      width 40px
      height @width
      background-color red
    &--row
      padding 10px
    input
      font-size 16px

@keyframes scale {
  from, to {
    transform scale(1, 1)
  }
  50% {
    transform scale(1.5, 1.5)
  }
}

@keyframes line {
  from {
    left 30px
  }
  50% {
    animation-timing-function linear
    left 100px
  }
  to {
    left 240px
  }
}
      
</style>
