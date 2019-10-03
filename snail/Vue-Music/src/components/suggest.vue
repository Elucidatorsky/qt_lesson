<template>
  <v-scroll ref="suggest" class="suggest" 
  :data="result" 
  :pullup="pullup" 
  :beforeScroll="beforeScroll" 
  @scrollToEnd="searchMore" 
  @beforeScroll="listScroll">
    <ul class="suggest-list">
        <li class="suggest-item" v-for="(item,index) in result" :key="index" @click="selectItem(item)">
            <div class="icon">
                <i class="icon">$#x641;</i>
            </div>
            <div class="name">
                <!-- v-html == innerHTML -->
                <i class="text" v-html="getDisplayName(item)"></i>
            </div>
        </li>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
        <span>阿勒，木有搜到任何东西哦</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from '@/api/index'
const limit = 20 // 返回多少条数据
export default {
    props: {
        query: {
            type:String,
            default: ''
        }
    },
    data() {
        return {
            result: [],
            hasMore: true,
            pullup: true,
            beforeScroll: true,
            page: 1
        }
    },
    components: {
        'v-scroll': scroll
    },
    methods: {
        refresh () {
            this.$refs.suggest.refresh()
        },
        fetchResult(page) {
            const params = {
                limit,
                offset: page - 1,
                keywords: this.query
            }
            api.MusicSearch(params).then(res => {
                if(res.code === 200){
                    this.result = [...this.result, ...result.songs]
                }
            })
        }
    }
}
</script>

<style>

</style>