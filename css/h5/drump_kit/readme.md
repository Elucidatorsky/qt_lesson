- vh viewheight 等比例的高度
    100 满高度

- flex 弹性布局，重要的布局方式，
    可以在弹性空间放置，特别适合手机等移动世界
- justify-content
    justify-content: flex-start | flex-end | center | space-between | space-around
    https://www.runoob.com/try/playit.php?f=playcss_justify-content&preval=flex-start
    參数说明例如以下：
    flex-start
    弹性项目向行头紧挨着填充。

    这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线。而兴许弹性项依次平齐摆放。
    flex-end
    弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而兴许弹性项依次平齐摆放。
    center
    弹性项目居中紧挨着填充。（假设剩余的自由空间是负的，则弹性项目将在两个方向上同一时候溢出）。
    space-between
    弹性项目平均分布在该行上。假设剩余空间为负或者仅仅有一个弹性项。则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐。而最后1个弹性项的外边距和行的main-end边线对齐。然后剩余的弹性项分布在该行上。相邻项目的间隔相等。
    space-around
    弹性项目平均分布在该行上，两边留有一半的间隔空间。

    假设剩余空间为负或者仅仅有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比方是20px）。同一时候首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。

        子元素，都是div，块级元素，天生换行，flex会改变这个

- align-items
    https://www.runoob.com/try/playit.php?f=playcss_align-items&preval=stretch
    stretch	
默认值。元素被拉伸以适应容器。

如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
center	
元素位于容器的中心。
弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
flex-start	
元素位于容器的开头。
弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
flex-end	
元素位于容器的结尾。
弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
baseline	
元素位于容器的基线上。
如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
initial	设置该属性为它的默认值。请参阅 initial。
inherit	从父元素继承该属性。请参阅 inherit。

- 盒子模型
    了解元素在页面上的表现
    盒子模型 = 内容(w/h) + 内间距(padding) + 边框(border) + 外间距(margin) + position

- rem 根据html的字体大小来等比例 10px