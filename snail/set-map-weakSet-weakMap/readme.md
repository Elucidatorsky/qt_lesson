# Set 和 Weakset 区别
1. Weakset 只能存放对象
2. Weakset 不支持遍历，没有size
3. Weakset 存放的对象不会计入到对象的引用计数，由此不会影响到GC(js的垃圾)回收
4. Weakset 存放的的队形如果在外界消失了，那么Weakset里面也不会存在

# Map 和 Weakmap 区别
1. Weakmap 只能接受对像作为键名 （null除外）
2. Weakmap 键名指向对象不会记入到对象的引用数当中