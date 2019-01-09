<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/animation">Animation</router-link> |
      <router-link to="/websocket">WebSocket</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

$maincolor = #45b035
$white = white

.btn
  height 40px
  border-radius 5px
  line-height @height
  text-align center
  font-size 16px
  &--readonly
    background-color #AAA
    cursor not-allowed
    &:active
      background-color #AAA
  &--mini
    display inline-block
    height 32px
    border-radius 4px
    line-height @height
    text-align center
    font-size 14px
    padding 0 15px
  &--grow
    display inline-block
    border-radius 4px
    text-align center
    padding 3px 7px
  &--mini
  &--grow
  ^[0]
    &__main
      color $maincolor
      background-color $white
      border 1px solid $maincolor
      &:active
        color hsla(0, 0%, 100%, .6)
        background-color #ECECEC
    &__normal
      color #666666
      background-color $white
      border 1px solid #999999
      &:active
        color hsla(0, 0%, 100%, .6)
        background-color #ECECEC
    &__primary
      color $white
      background-color $maincolor
      border 1px solid $maincolor
      &:active
        color hsla(0, 0%, 100%, .6)
        background-color #66bb05
    &__danger
      color $white
      background-color #F7605E
      border 1px solid #F7605E
      &:active
        color hsla(0, 0%, 100%, .6)
        background-color #FF6F5E
</style>
