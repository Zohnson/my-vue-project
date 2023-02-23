<template>
  <div>
    <p>{{ helloTips }}</p>
    <HelloWorld></HelloWorld>
    <el-button type="primary" @click="message()">确定</el-button>
    <el-button>取消</el-button>
  </div>
</template>
<script setup name="HomePage">
import { getCurrentInstance } from "vue"

const helloTips = ref("Hello, Vue31231")
const { proxy } = getCurrentInstance()
const message = () => {
  console.log(proxy.$message)
  proxy.$message.success("确认成功")
}
</script>
<style lang="scss" scoped></style>
