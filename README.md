# feilun

飞轮是一个 **react demo** 合集，也是个个人错题本。

## 前世今生

取名自我上家公司没有带出来的一个内部技术项目，它也叫feilun，但并不是由我主导。

leader的意见是想做一个react最佳实践。目标用户是没有接触过react的同学，给他们做一个示范，让他们照猫画虎，快速进入到react开发中。

但我想做的feilun更像一个炫技的地方，或者说是个错题本。

来到新公司半年了，feilun仍然让我时时怀念，所以有了这个项目。

## 内容

- safeImage: 当图片资源不可访问时，可以自动切换到给定的资源列表上
- 【安全的setState】useSafeState: 当ajax回调中使用了setState，但是此时组件已经卸载了，就会报warning：Can't perform a React state update on an unmounted component. 使用useSafeState就不会有这样的问题。
- 【数据流】无公共父组件怎么交流数据，flooks

## 推荐阅读

- [hooks acc](https://blog.csdn.net/qq_33807889/article/details/113939442?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522163169310216780271542688%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=163169310216780271542688&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-1-113939442.pc_v2_rank_blog_default&utm_term=hooks&spm=1018.2226.3001.4450) => 方便大家寻找一些hooks，更深层次地理解hooks不是util，hooks是逻辑的优秀封装工具。
- [利用react hooks分离代码职责](https://sairys.medium.com/react-separating-responsibilities-using-hooks-b9c90dbb3ab9) => 做到ui与逻辑分离
