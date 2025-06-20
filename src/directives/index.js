//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app){
    // 定义全局指令
    app.directive('pic-lazy',{
      mounted(el,binding){
        //el:指令绑定的元素
        //binding：指令对象
        // console.log(el,binding)
        // 监听元素是否进入视口
        const {stop} = useIntersectionObserver(
          el,
          // 回调函数，isIntersecting 表示是否进入视口
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // console.log('元素进入视口啦！')
              // 这里可以写进入视口后的逻辑，比如加载图片、统计曝光等
              stop() // 如果只想监听一次，进入视口后可以停止监听
              el.src = binding.value
              // console.log(isIntersecting)
            }
          },
          // 可选配置：设置进入视口的“占比”阈值（0 ~ 1），默认 0.1（即 10% 进入视口就算）
          { threshold: 0.01 }
        )
          }
    })

  }
}
