<template>
  <div>
    <HelloWorld></HelloWorld>
    <div id="newElement"></div>
    <el-button type="primary" @click="message()">确定</el-button>
    <el-button>取消</el-button>
  </div>
</template>
<script setup name="HomePage">
import { createElement, render, renderDom } from "../utils/Element"
import { getCurrentInstance } from "vue"

const virtualDom = createElement("ul", { class: "list" }, [
  createElement("li", { class: "item" }, ["周小伦"]),
  createElement("li", { class: "item" }, ["周中伦"]),
  createElement("li", { class: "item" }, ["周大伦"])
])

const domNode = render(virtualDom)

const { proxy } = getCurrentInstance()

const message = () => {
  renderDom(domNode, document.getElementById("newElement"))
  proxy.$message.success("创建成功")
}

console.log("！！！！！！！！！", virtualDom)
</script>

<style lang="scss" scoped></style>
