  <template>
  <div class="el-row">
      <slot></slot>
  </div>
</template>

<script>
export default {
    data() {},
    render(h) {
        // return 'render 函数'
        let obj = h(
            'div',
            {},
            'render 函数の'
        )
        console.log(obj);
        return obj
    }
}
</script>

<style scoped>
.el-row{
    width: 100px;
}
</style>