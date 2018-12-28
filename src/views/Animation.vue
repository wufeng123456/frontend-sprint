<template>
  <div class="animation">
    <h2>native css</h2>
    <h4> &nbsp;&nbsp;&nbsp;&nbsp; CSS 过渡 </h4>
    <ul>
      <li> 突变：到目标样式的直接变化。在浏览器的devtools中调试样式就是一种突变，直接用代码修改样式也是一种突变。 </li>
      <li> 过渡：按某种规则逐渐变成目标样式。 </li>
      <li> 规则：给这些突变加上了变化规则(transition css属性，加了这个css属性的 dom 节点，再进行样式变化时就变成了有规则的变化。)。 </li>
      <li> 局限：1. transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。 2. transition是一次性的，不能重复发生，除非一再触发。 </li>
    </ul>
    <h4> &nbsp;&nbsp;&nbsp;&nbsp; CSS 动画 </h4>
    <ul>
      <li> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Configuring_the_animation"> Configuring_the_animation </a></li>
      <li> <a href="https://easings.net/zh-cn"> 缓动函数(timing-function) </a> </li>
      <li> 缓动函数和动画关键帧之间的关系研究 </li>
      <div> a </div>
    </ul>
    <h2>vue</h2>
    <ul>
      <li><a href="https://cn.vuejs.org/v2/guide/transitioning-state.html">状态过渡</a> : <a href="https://github.com/tweenjs/tween.js">tween.js</a>、<a href="https://greensock.com/docs">greensock</a> 等数值渐变库(将一个变量逐渐变成另一个变量) 结合vue的响应式属性实现过渡效果。</li>
      <li><a href="https://cn.vuejs.org/v2/guide/transitions.html">进入/离开 & 列表过渡 (transition)</a> : 插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。</li>
    </ul>
    <h4> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://cn.vuejs.org/v2/guide/transitions.html">进入/离开 & 列表过渡 (transition)</a></h4>
    <ul>
      <li> transition 和 transition-group 组件。可以使用动画或过渡。</li>
      <li> enter 和 enter-active 同时添加到dom上，enter-to 在下一帧添加到 dom 上并且移除enter, enter-active 和 enter-to 同时移除。</li>
      <li> leave 和 leave-active 同时添加到dom上，leave-to 在下一帧添加到 dom 上并且移除leave, leave-active 和 leave-to 同时移除。</li>
      <li> 意味着最终都将会被移除。</li>
      <li> 每个class的应用范围：enter、leave 过渡的开始状态，enter-active、leave-active 过渡时间间隔和方式（transition、transform、animation等过渡css），enter-to、leave-to 过渡的结束状态。</li>
      <li> 上一条原因：1. 更好的语义。 2. 在插入元素（如 .appendChild()）或改变属性 display: none 后立即使用过渡, 元素将视为没有开始状态，始终处于结束状态。简单的解决办法，改变属性前用 window.setTimeout() 延迟几毫秒。 </li>
      <li> 取消回调：enter 过渡没有完成就进行 leave 过渡会调用 enterCancelled 回调。同样，leave 过渡没有完成就进行 enter 过渡会调用 leaveCancelled 回调。监听 leaveCancelled 需要使用 v-show 进行切换。</li>
      <div>
        <button @click="cancelDemo = !cancelDemo"> toggle </button>
        <transition appear name="animation--cancel-d" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
          <div v-show="cancelDemo"> cancelDemo </div>
        </transition>
      </div>
      <li> appear：<a href="https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%9D%E5%A7%8B%E6%B8%B2%E6%9F%93%E7%9A%84%E8%BF%87%E6%B8%A1">初始渲染的过渡。</a> 需要节点一开始就挂载。 </li>
    </ul>
  </div>
</template>

<script>
  const debug = require('debug')('Animation:')

  export default {

    name: 'animation',

    components: {
    },

    props: {
    },

    data() {
      return {
        cancelDemo: true
      }
    },

    computed: {
    },

    watch: {
    },

    mounted() {
      this.init()
    },

    methods: {
      init() {
        debug('%o', this)
      },
      leaveCancelled() {
        debug('leaveCancelled')
      },
      enterCancelled() {
        debug('enterCancelled')
      }
    }
  }
</script>

<style lang="stylus">
  // @import "../../assets/css/variable"
  .animation
    // background-color $white
    ul, h2, h4, p
      text-align left
    &--cancel-d
      &-enter
      &-leave-to
        margin-left 50px
      &-enter-to
      &-leave
        margin-left 0
      &-enter-active
      &-leave-active
        transition 1s margin-left linear
</style>
