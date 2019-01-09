<template>
  <div class="transition-sample">
    <div class="transition-sample--scene">
      <div ref="obj" class="transition-sample--obj" :style="transition"></div>
    </div>
    <h2> 过渡1 &nbsp;&nbsp; <input v-model="t1IsCheck" type="checkbox"></h2>
    <!-- transition-property: all;
    transition-duration: 0s;
    transition-timing-function: ease;
    transition-delay: 0s; -->
    <table>
      <thead>
        <td>css 属性</td>
        <td>css 属性值</td>
      </thead>
      <tbody>
        <tr>
          <td>过渡属性(transition-property): </td>
          <td> {{ transitionProperty }} </td>
        </tr>
        <tr>
          <td>过渡间隔(transition-duration):</td>
          <td><input v-model="transitionDuration"/></td>
        </tr>
        <tr>
          <td>过渡延迟(transition-delay):</td>
          <td><input v-model="transitionDelay"/></td>
        </tr>
        <tr>
          <td>时间函数(transition-timing-function):</td>
          <td><input v-model="transitionTimingFunction"/></td>
        </tr>
        <tr>
          <td>开始状态:</td>
          <td> {{ start }} </td>
        </tr>
        <tr>
          <td>结束状态:</td>
          <td><input v-model="end"/></td>
        </tr>
      </tbody>
    </table>
    <h2> 过渡2 &nbsp;&nbsp; <input v-model="t2IsCheck" type="checkbox"></h2>
    <table>
      <thead>
        <td>css 属性</td>
        <td>css 属性值</td>
      </thead>
      <tbody>
        <tr>
          <td>过渡属性(transition-property): </td>
          <td> {{ transitionProperty2 }} </td>
        </tr>
        <tr>
          <td>过渡间隔(transition-duration):</td>
          <td><input v-model="transitionDuration2"/></td>
        </tr>
        <tr>
          <td>过渡延迟(transition-delay):</td>
          <td><input v-model="transitionDelay2"/></td>
        </tr>
        <tr>
          <td>时间函数(transition-timing-function):</td>
          <td><input v-model="transitionTimingFunction2"/></td>
        </tr>
        <tr>
          <td>开始状态:</td>
          <td> {{ start2 }} </td>
        </tr>
        <tr>
          <td>结束状态:</td>
          <td><input v-model="end2"/></td>
        </tr>
      </tbody>
    </table>
    <div class="transition-sample--row">
      <div class="btn--mini btn--mini__primary" @click="doStart">开始过渡</div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div class="btn--mini btn--mini__danger" @click="reset">反向过渡</div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'TransitionSample',

    components: {
    },

    props: {
    },

    data() {
      return {
        t1IsCheck: true,
        transitionProperty: 'left',
        transitionDuration: '2s',
        transitionDelay: '0s',
        transitionTimingFunction: 'linear',
        start: '10px',
        end: '200px',
        t2IsCheck: false,
        transitionProperty2: 'top',
        transitionDuration2: '2s',
        transitionDelay2: '0s',
        transitionTimingFunction2: 'cubic-bezier(0, -0.5, 0.5, 0)',
        start2: '30px',
        end2: '120px',
      }
    },

    computed: {
      transition() {
        const t1 = `${this.transitionProperty} ${this.transitionDuration} ${this.transitionDelay} ${this.transitionTimingFunction}`
        const t2 = `${this.transitionProperty2} ${this.transitionDuration2} ${this.transitionDelay2} ${this.transitionTimingFunction2}`
        let t = []
        if (this.t1IsCheck) {
          t.push(t1)
        }
        if (this.t2IsCheck) {
          t.push(t2)
        }
        return {
          transition: t.join(', ')
        }
        // return {
        //   'transition-property': this.transitionProperty,
        //   'transition-duration': this.transitionDuration,
        //   'transition-timing-function': this.transitionTimingFunction,
        //   'transition-delay': this.transitionDelay
        // }
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
        if (this.t1IsCheck) this.$refs.obj.style.left = this.end
        if (this.t2IsCheck) this.$refs.obj.style.top = this.end2
      },
      reset() {
        if (this.t1IsCheck) this.$refs.obj.style.left = this.start
        if (this.t2IsCheck) this.$refs.obj.style.top = this.start2
      }
    }
  }
</script>

<style lang="stylus">
  .transition-sample
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
      top 30px
      left 10px
      width 40px
      height @width
      background-color red
    &--row
      padding 10px
    input
      font-size 16px
      
</style>
