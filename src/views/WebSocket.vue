<template>
  <div class="websocket">
    <div>
      <a href="https://github.com/weineel/go-sprint/blob/master/websocket/server.go"> 服务端示例代码(golang)，注意查看同级的</a> <a href="https://github.com/weineel/go-sprint/blob/master/websocket/README.md">README.md</a> 
    </div>
    <table>
      <tr>
        <td valign="top" width="50%">
          <p>
            Click "Open" to create a connection to the server,
            "Send" to send a message to the server and "Close" to close the connection.
            You can change the message and send multiple times.
          </p>
          <div>
            <form>
              <button id="open">Open</button>
              <button id="close">Close</button>
              <div>
                <input id="input" type="text" value="Hello world!">
                <button id="send">Send</button>
              </div>
            </form>
          </div>
        </td>
        <td valign="top" width="50%">
          <div id="output"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {

    name: 'WebSocket',

    components: {},

    props: {},

    data() {
      return {}
    },

    computed: {},

    watch: {},

    mounted() {
      this.init()
    },

    methods: {
      init() {
        window.addEventListener("load", () => {
          var output = document.getElementById("output")
          var input = document.getElementById("input")
          var ws
          var print = function (message) {
            var d = document.createElement("div")
            d.innerHTML = message
            output.appendChild(d)
          }
          document.getElementById("open").onclick = () => {
            if (ws) {
              return false
            }
            // 127.0.0.1:8080 其实也是一个 http 服务器。
            ws = new WebSocket("ws://127.0.0.1:8080/echo")
            ws.onopen = () => {
              print("OPEN")
            }
            ws.onclose = () => {
              print("CLOSE")
              ws = null
            }
            ws.onmessage = evt => {
              print("RESPONSE: " + evt.data)
            }
            ws.onerror = evt => {
              print("ERROR: " + evt.data)
            }
            return false
          }
          document.getElementById("send").onclick = () => {
            if (!ws) {
              return false
            }
            print("SEND: " + input.value)
            ws.send(input.value)
            return false
          }
          document.getElementById("close").onclick = () => {
            if (!ws) {
              return false
            }
            ws.close()
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  // @import "../../assets/css/variable"
  // .websocket
  // background-color $white
</style>