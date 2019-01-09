<template>
  <div class="shopping-cart">
    <div>
      <div v-for="(item, index) in goodsList" :key="index" class="shopping-cart--goods">
        <div> 
          <div class="shopping-cart--goods-name">{{ item.name }}</div>
          <div class="shopping-cart--goods-desc">{{ item.desc }}</div>
        </div>
        <div class="shopping-cart--goods-ope">
          <div class="shopping-cart--goods-btn" @click="deleteFromCart(item)"> - </div>
          <span> {{ item.num }} </span>
          <div class="shopping-cart--goods-btn" @click="add2cart(item, $event)"> + </div>
        </div>
      </div>
    </div>
    <div ref="cart" class="shopping-cart--cart" :class="{ 'shopping-cart--cart-move-to': toggleAdd2cart }">
      <div class="shopping-cart--cart-num">
        {{ shopCartList.length }}
      </div>
      <img src="../../assets/cart.png" alt="">
    </div>

    <transition name="parabola" @before-enter="beforeEnter" @after-enter="afterEnter">
      <div v-if="showAddIcon" class="shopping-cart--goods-btn shopping-cart--goods-btn__parabola"> + </div>
    </transition>
  </div>
</template>

<script>
  export default {

    name: 'ShoppingCart',

    components: {
    },

    props: {
    },

    data() {
      return {
        goodsList: [],
        toggleAdd2cart: false,
        showAddIcon: false,
        add2cartElLeft: 0,
        add2cartElBottom: 0,
        windowHeight: null
      }
    },

    computed: {
      shopCartList() {
        return this.goodsList.filter(e => e.num > 0)
      }
    },

    watch: {
    },

    mounted() {
      this.init()
      this.windowHeight = window.innerHeight
    },

    methods: {
      init() {
        for (let i = 0; i < 16; i++) {
          const id = i + 1
          this.goodsList.push({
            id,
            name: '商品' + id,
            desc: '描述描述描述描述' + id,
            num: 0
          })
        }
      },
      deleteFromCart(item) {
        if (item.num <= 0) return
        item.num --
      },
      add2cart(item, $event) {
        this.add2cartElLeft = $event.target.getBoundingClientRect().left
        this.add2cartElBottom = this.windowHeight - $event.target.getBoundingClientRect().bottom
        item.num ++
        this.showAddIcon = true
      },
      beforeEnter(el) {
        el.style.left = `${this.add2cartElLeft}px`
        el.style.bottom = `${this.add2cartElBottom}px`
      },
      afterEnter() {
        this.showAddIcon = false
        this.listenInCart()
      },
      // 监听购物车加号是否进入购物车
      listenInCart() {
        // 触发购物车弹动动画
        if (!this.toggleAdd2cart) {
          this.toggleAdd2cart = true
          this.$refs.cart.addEventListener('animationend', () => {
              this.toggleAdd2cart = false;
          })
          this.$refs.cart.addEventListener('webkitAnimationEnd', () => {
              this.toggleAdd2cart = false;
          })
        }
      }
    }
  }
</script>

<style lang="stylus">
  $cart-icon-bottom = 20px
  $cart-icon-left = 20px

  .shopping-cart
    text-align left
    &--goods
      display flex
      justify-content space-between
      align-items center
      padding 15px
      &-name
        font-size 16px
        color #333
      &-desc
        font-size 14px
        color #999
      &-ope
        display flex
        align-items center
        font-size 16px
        span
          margin 0 10px
      &-btn
        text-align center
        width 30px
        height @width
        line-height @width
        background-color #CFCFCF
        color #666
        border-radius @width * .5
        font-size 24px
        &:active
          color rgba(0, 0, 0, .5)
        &__parabola
          position fixed
    &--cart
      position fixed
      bottom $cart-icon-bottom
      left $cart-icon-left
      width 40px
      height @width
      background-color rgba(0, 0, 0, .6)
      padding 10px
      box-sizing border-box
      border-radius @width * .5
      img
        width 100%
        height 100%
      &-num
        position absolute
        top 5px
        right 5px
        font-size 10px
        height 12px
        color white
        background-color #ff4200
        line-height @height
        padding 0 3px
        border-radius @height * .5
      &-move-to
        animation .5s ease-in-out bounce

  .parabola-enter-active
    transition .5s bottom cubic-bezier(.35, -0.55, .88, .33), .5s left linear

  .parabola-enter-to
    bottom $cart-icon-bottom + 20px !important
    left $cart-icon-left + 10px !important

  @keyframes bounce {
    from, to {
      transform scale(1)
    }
    25% {
      transform scale(.7)
    }
    50% {
      transform scale(1.2)
    }
    75% {
      transform scale(.9)
    }
  }

</style>
