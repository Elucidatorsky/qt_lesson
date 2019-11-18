<template>
    <!-- <div class="pic"> -->
    <div class="header-outer">
        <div class="header-center">
            <div class="header-left-ul">
                <ul>
                    <li class="header-left home"><i></i><p>主站</p></li>
                    <li class="header-left game"><p>游戏中心</p>
                        <div class="header-left-game-in">
                            <div class="header-game-in-left">
                                <div class="game-in-gamepic_top">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                    <p>重装战姬</p>
                                </div>
                                <div class="game-in-gamepic_bottom">
                                    <div class="game-in-gamepic one">
                                        <img src="../img/3.jpg" alt="">
                                        <p>命运-冠位指定</p>
                                    </div>
                                    <div class="game-in-gamepic two">
                                        <img src="../img/header_game_in1.png" alt="">
                                        <p>命运-冠位指定</p>
                                    </div>
                                    <div class="game-in-gamepic three">
                                        <img src="../img/header_game_in1.png" alt="">
                                        <p>命运-冠位指定</p>
                                    </div>
                                </div>
                            </div>
                            <div class="header-game-in-right">
                                
                            </div>
                        </div>
                    </li>
                    <li class="header-left live"><p>直播</p>
                        <div class="header-left-live-in">
                            <div class="header-live-in-left">
                                <div class="live-in-hotlive-title"><p>热门直播</p></div>
                                <div class="live-in-person-wrap">
                                    <div class="live-in-person-wrap-top">
                                        <div class="live-in-person one">
                                            <img src="url(../img/3.jpg)" alt="">
                                            <div class="person-hover"><p>live</p></div>
                                            <p>XXX</p>
                                        </div>
                                        <div class="live-in-person two">
                                            <img src="url(../img/3.jpg)" alt="">
                                            <div class="person-hover"><p>live</p></div>
                                            <p>XXX</p>
                                        </div>
                                        <div class="live-in-person three">
                                            <img src="url(../img/3.jpg)" alt="">
                                            <div class="person-hover"><p>live</p></div>
                                            <p>XXX</p>
                                        </div>
                                    </div>
                                    <div class="live-in-person-wrap-bottom">
                                        <div class="live-in-person four">
                                            <img src="url(../img/3.jpg)" alt="">
                                            <div class="person-hover"><p>live</p></div>
                                            <p>XXX</p>
                                        </div>
                                        <div class="live-in-person five">
                                            <img src="url(../img/3.jpg)" alt="">
                                            <div class="person-hover"><p>live</p></div>
                                            <p>XXX</p>
                                        </div>
                                        <div class="live-in-person six">
                                            <img src="url(../img/3.jpg)" alt="">
                                            <div class="person-hover"><p>live</p></div>
                                            <p>XXX</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="header-live-in-right">
                                <div class="header-live-in-houtactive-title"><p>热门活动</p></div>
                                <div class="header-live-in-img">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="header-left store"><p>会员购</p></li>
                    <li class="header-left comic"><p>漫画</p>
                        <div class="header-left-comic-in">
                            <div class="header-comic-in-left">
                                <div class="comic-in one">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                    <p>XXX</p>
                                </div>
                                <div class="comic-in two">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                    <p>XXX</p>
                                </div>
                                <div class="comic-in three">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                    <p>XXX</p>
                                </div>
                                <div class="comic-in four">
                                    <img src="../img/header_game_in0.jpg" alt="">
                                    <p>XXX</p>
                                </div>
                            </div>
                            <div class="header-comic-in-right">
                                <div class="comic-in-title"></div>
                                <div class="comic-in-content">
                                    <div class="comic-in-content-title"></div>
                                    <div class="comic-in-content-title"></div>
                                    <div class="comic-in-content-title"></div>
                                    <div class="comic-in-content-title"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="header-left contest"><p>赛事</p></li>
                    <li class="header-left download"><i></i><p>下载App</p>
                        <div class="header-left-downloadin"></div>
                    </li>
                </ul>
            </div>
            <div class="header-right-ul">
                <ul>
                    <li class="header-right login">
                        <div class="login-false">
                            <div class="login-false-logincan-title"><p>登录后你可以</p></div>
                            <div class="login-false-gif"></div>
                            <button class="login-false-loginbtn">登录</button>
                            <div class="login-false-foot">
                                <p>首次使用？</p>
                                <a href="">
                                    <p>点我去注册</p>
                                </a>
                            </div>
                        </div>
                        <div class="login-true">
                            <Headerislogin></Headerislogin>
                        </div>
                    </li>
                    <li class="header-right member"><p>大会员</p>
                        <Headermember></Headermember>
                    </li>
                    <li class="header-right message"><p>消息</p>
                        <ul class="header-right-message-in-ul">
                            <li class="header-right-message-in-li">
                                <a href="">
                                    <p>回复我的</p>
                                </a>
                            </li>
                            <li class="header-right-message-in-li">
                                <a href="">
                                    <p>@我的</p>
                                </a>
                            </li>
                            <li class="header-right-message-in-li">
                                <a href="">
                                    <p>收到的赞</p>
                                </a>
                            </li>
                            <li class="header-right-message-in-li">
                                <a href="">
                                    <p>系统通知</p>
                                </a>
                            </li>
                            <li class="header-right-message-in-li">
                                <a href="">
                                    <p>我的消息</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="header-right dynamic"><p>动态</p> <!--  -->
                        <Headerdynamic></Headerdynamic>
                    </li>
                    <li class="header-right later"><p>稍后再看</p>
                        <Headerlatercollect></Headerlatercollect>
                    </li>
                    <li class="header-right collect"><p>收藏</p>
                        <Headerlatercollect></Headerlatercollect>
                    </li>
                    <li class="header-right history"><p>历史</p> <!--  -->
                        <Headerhistory></Headerhistory>
                    </li>
                    <li class="header-right create"><p>创作中心</p></li> <!--  -->
                </ul>
                <div class="tougao"><p>投稿</p>
                    <div class="tougao-in">
                        <div class="tougao-content">
                            <img src="" alt="">
                            <p>专栏投</p>
                        </div>
                        <div class="tougao-content">
                            <img src="" alt="">
                            <p>音频投</p>
                        </div>
                        <div class="tougao-content">
                            <img src="" alt="">
                            <p>视频投</p>
                        </div>
                        <div class="tougao-content">
                            <img src="" alt="">
                            <p>投稿管</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
    </div>
</template>

<script>
import Headerislogin from './Headerislogin'
import Headermember from './Headermember'
import Headerdynamic from './Headerdynamic'
import Headerlatercollect from './Headerlatercollect'
import Headerhistory from './Headerhistory'
export default {
    name: 'Header',
    data() {
        return{

        }
    },
    components: {
        Headerislogin,
        Headermember,
        Headerdynamic,
        Headerlatercollect,
        Headerhistory
    }
}
</script>

<style lang="stylus" scoped>

* 
    margin 0 auto
    padding 0

    // .pic
    //     position absolute;
    //     top 0
    //     left 0
    //     width 100%
    //     height 170px
    //     box-sizing border-box
    //     background url(../img/header.png)
    //     background-size cover
    //     background-position center
    .header-outer::before
        content: ""
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0
        filter: blur(20px)
        // margin: -30px
        background: url(../img/header.png)
        background-size: cover
        background-position center
        z-index -1
    .header-outer
        width 100%
        height 40px
        position relative
        // top 0
        // left 0
        // overflow hidden

        .header-center
            width 1080px
            height 40px
            text-align center

            .header-left-ul
                width 520px
                height 40px
                float left

                ul
                    li
                        height 40px
                        width auto
                        margin 0 5px
                        line-height 40px
                        white-space nowrap
                        float left
                        position relative
                        list-style none
                        cursor pointer
                    .home
                        
                    .game
                        
                        .header-left-game-in
                            width 470px
                            height 255px
                            position absolute
                            background-color yellow
                            display block
                            .header-game-in-left
                                width 270px
                                height 255px
                                position relative
                                float left
                                .game-in-gamepic_top
                                    width 240px
                                    height 128px
                                    margin 15px
                                    border-radius 10%
                                    position relative
                                    float left
                                    img
                                        width 100%
                                        height 100%
                                        border-radius 10%
                                    p
                                        width auto
                                        height 20px
                                        position absolute
                                        text-align left 
                                        line-height 20px
                                        text-indent 10px
                                        border-radius 10%
                                        width 100%
                                        bottom 0
                                        left 0
                                        background rgba(255,255,255,0.5)
                                .game-in-gamepic_bottom
                                    width 260px
                                    height 107px
                                    position relative
                                    float left
                                    .game-in-gamepic
                                        width 60px
                                        height 100px
                                        margin 0 0 7px 15px
                                        border-radius 10%
                                        position relative
                                        float left
                                        img
                                            width 60px
                                            height 60px
                                            float left
                                            border-radius 10%
                                        p
                                            width auto
                                            height 20px
                                            text-align left
                                            float left
                                            line-height 20px
                                            overflow hidden
                                            width 100%
                                            background-color skyblue
                                    .two
                                        margin 0 18px 0 27px
                            .header-game-in-right
                                width 200px
                                height 255px
                                float left
                                background-color blue
                    .live

                        .header-left-live-in
                            width 540px
                            height 250px
                            position absolute
                            background-color gray
                            display block
                            .header-live-in-left
                                width 255px
                                height 210px
                                position relative
                                background-color skyblue
                                margin 20px
                                float left
                                .live-in-hotlive-title
                                    width 255px
                                    height 25px
                                    position relative
                                    line-height 10px
                                    text-align left
                                    float left
                                .live-in-person-wrap
                                    position relative
                                    .live-in-person-wrap-top
                                        margin-bottom 5px 
                                    .live-in-person-wrap-bottom,.live-in-person-wrap-top
                                        width 255px
                                        height 90px
                                        position relative
                                        background-color blue
                                        float left
                                        .live-in-person
                                            width 64px
                                            height 90px
                                            position relative
                                            margin 0 10px
                                            float left
                                            background-color red
                                            img
                                                width 64px
                                                height 64px
                                                float left
                                                border-radius 50%
                                            .person-hover
                                                width 64px
                                                height 64px
                                                position absolute
                                                border-radius 50%
                                                background rgba(255, 255, 255, 0.3)
                                                p::before
                                                    content "●"
                                                    color red
                                                    font-size 20px
                                                p
                                                    line-height 64px
                                            p
                                                width 64px
                                                height 26px
                                                float left
                                                line-height 26px
                            .header-live-in-right
                                width 190px
                                height 210px
                                position relative
                                background-color skyblue
                                margin 20px
                                float left
                                .header-live-in-houtactive-title
                                    width 190px
                                    height 25px
                                    position relative
                                    line-height 10px
                                    text-align left
                                    float left
                                .header-live-in-img
                                    width 190px
                                    height 185px
                                    position relative
                                    float left
                                    background-color green
                                    img
                                        width 190px
                                        height 88px
                                        margin-top 5px
                                        float left
                    .store
                        
                    .comic
                        
                        .header-left-comic-in
                            width 500px
                            height 260px
                            position absolute
                            display block
                            background-color yellow
                            z-index 10
                            .header-comic-in-left
                                width 320px
                                height 240px
                                margin 10px
                                background-color gray
                                position relative
                                float left
                                .comic-in
                                    width 140px
                                    height 100px
                                    margin 10px
                                    position relative
                                    float left
                                    img 
                                        width 140px
                                        height 84px
                                        float left
                                    p
                                        width 140px
                                        height 16px
                                        line-height 30px
                                        float left
                            .header-comic-in-right
                                width 160px
                                height 260px
                                position relative
                                float left
                                .comic-in-title
                                    width 200px
                                    height 30px
                                    position relative
                                    margin 0 10px
                                    float left
                                .comic-in-content
                                    width 200px
                                    height 200px
                                    position relative
                                    .comic-in-content-title
                                        width 200px
                                        height 30px
                                        margin 0 10px
                    .contest

                    .download

                        .header-left-download-in
                            width 200px
                            height 200px
                            display block
                            position absolute
            .header-right-ul
                width 560px
                height 40px
                float left
                ul
                    li
                        height 40px
                        width auto
                        line-height 40px
                        margin 0 5px
                        white-space nowrap
                        float left
                        position relative
                        list-style none
                        cursor pointer

                    .login

                        .login-false
                            width 320px
                            height 300px
                            position absolute
                            display block
                            .login-false-logincan-title
                                width 320px
                                height 30px
                                background-color blue
                                float left
                            .login-false-gif
                                width 320px
                                height 200px
                                background-image url(../img/3.jpg)
                                background-size cover
                                float left
                            .login-false-loginbtn
                                width 320px
                                height 40px
                                float left
                            .login-false-foot
                                width 320px
                                height 30px
                                float left
                        .login-true
                            display none
                    .member

                    .message
                        
                        ul
                            width 100px
                            height 200px
                            display block
                            position absolute
                            li
                                width 100px
                                height 40px
                                line-height 40px
                                list-style none
                                cursor pointer
                                float left

            .tougao
                height 40px
                width auto
                float left
                position relative
                .tougao-in
                    height 80px
                    width 200px
                    display block
                    position absolute
                    .tougao-content
                        height 80px
                        width 50px
                        float left
</style>