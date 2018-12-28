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
      <li> <a href="https://easings.net/zh-cn"> 缓动函数(时间函数)(timing-function) </a>； <a href="http://cubic-bezier.com/"> 三阶贝塞尔缓动函数(时间函数)工具 </a></li>
      <li>
        <ul>
          <li> animation-delay：设置延时，即从元素加载完成之后到动画序列开始执行的这段时间 </li>
          <li> animation-direction：设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行 </li>
          <li> animation-duration：设置动画一个周期的时长 </li>
          <li> animation-iteration-count：设置动画重复次数， 可以指定 infinite 无限次重复动画 </li>
          <li> animation-name：指定由 @keyframes 描述的关键帧名称 </li>
          <li> animation-play-state：允许暂停和恢复动画 </li>
          <li> animation-timing-function：设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化 </li>
          <li> animation-fill-mode：指定动画执行前后如何为目标元素应用样式 </li>
        </ul>
      </li>
      <li> 缓动函数(时间函数)和动画关键帧之间的关系研究 </li>
      <div> 1. 统一指定时间函数，将被应用在每个关键帧之间，作为每个开始关键帧的默认时间函数。</div>
      <div>
        <button @click="sample1_a1 = !sample1_a1">toggle sample1_a1</button>
        <div class="animation--sample1" :class="{
            'animation--sample1__a1': sample1_a1
          }">
        </div>
      </div>
      <div> 2. 在开始关键帧指定时间函数，优先级较高。统一指定了时间函数的话，没有在关键帧指定时间函数的帧使用统一指定的，否则使用全局默认的 ease。</div>
      <div>
        <button @click="sample2_a1 = !sample2_a1">toggle sample2_a1</button>
        <div class="animation--sample1" :class="{
            'animation--sample2__a1': sample2_a1
          }">
        </div>
        <button @click="sample2_a2 = !sample2_a2">toggle sample2_a2</button>
        <div class="animation--sample1" :class="{
            'animation--sample2__a2': sample2_a2
          }">
        </div>
      </div>
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

    <h2> 参考 </h2>
    <ul>
      <li> <a href="https://github.com/weineel/blog/issues/9"> 贝塞尔曲线研究 </a> </li>
      <li> <a href="https://daneden.github.io/animate.css/"> 第三方动画库 animate.css </a> </li>
      <li> <a href="http://cubic-bezier.com/"> cubic-bezier 生成工具 </a> </li>
      <li> <a href="http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html"> CSS动画简介 </a> </li>
      <li> <a href="https://easings.net/zh-cn"> 常用缓动函数 </a> </li>
      <li> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values"> 官方文档 </a> </li>
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
        cancelDemo: true,
        sample1_a1: false,
        sample2_a1: false,
        sample2_a2: false
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
    &--sample1
      position relative
      width 50px
      height @width
      background-color red
      &__a1
        animation-duration 4s, 4s
        animation-name sample1_a1, sample1_a2
        // 给动画每个帧统一指定时间函数
        animation-timing-function cubic-bezier(0,1.83,.9,-0.65), cubic-bezier(0,0,0,0)
    &--sample2
      &__a1
        // animation sample2_a1 4s
        // 给每个帧都指定相同的时间函数。但是在关键帧中指定的优先级更高。
        animation sample2_a1 4s cubic-bezier(0,1.83,.9,-0.65)
      &__a2
        animation sample2_a2 6s
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

  @keyframes sample1_a1 {
    from {
      bottom 0px
    }
    50% {
      bottom 100px
    }
    to {
      bottom 300px
    }
  }
  @keyframes sample1_a2 {
    from {
      left 0px
    }
    to {
      left 400px
    }
  }
  @keyframes sample2_a1 {
    from {
      animation-timing-function cubic-bezier(0,1.21,0,.92)
      left 0px
    }
    50% {
      left 100px
    }
    to {
      left 300px
    }
  }
  @keyframes sample2_a2 {
    from {
      animation-timing-function cubic-bezier(0,1.21,0,.92)
      left 0px
    }
    30% {
      // 不起作用
      // animation-duration 10s
      left 100px
    }
    60% {
      animation-timing-function cubic-bezier(0,1.83,.9,-0.65)
      left 200px
    }
    to {
      left 300px
    }
  }
</style>
