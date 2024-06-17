/* eslint-disable */
(function (window, undefined) {
  window.Asc.plugin.init = function (initData) {
    // 将上下文赋给me,用于后续操作。
    const me = this
    //使用vue方式减少DOM操作
    const { createApp, ref, onMounted } = Vue
    createApp({
      setup() {
        const pluginInfo = {} //当前插件的相关信息
        const urlCbParams = {} //回调url中携带的参数，在后续开发中会用到
        const variateOption = ref([]); // 当前模板绑定的变量列表数据
        //获取当前绑定的模板变量
        const loadVariate = () => {
          const { origin_value } = urlCbParams;
          fetch(`/api/v1/report/template/varname/list?template_id=${origin_value}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then((response) => response.json())
            .then((data) => {
              variateOption.value = data.result;
            });
        }
        //回显文本
        const onEchoText = () => {
          variateOption.value.forEach(mv => {
            const { default_value: replaceString, varname } = mv
            Asc.plugin.executeMethod("SearchAndReplace", [{
              searchString: `{{${varname}}}`,
              replaceString,
              matchCase: true
            }]);
          })
        }

        onMounted(() => {
          const info = window.Asc.plugin.info;
          if (info) {
            Object.assign(pluginInfo, info)
            Object.assign(urlCbParams, getURLParameters(info.documentCallbackUrl))
          } else {
            window.Asc.plugin.executeCommand('close', '')
            alert('获取插件相关信息失败')
            return;
          }
          loadVariate()
          //插件按钮事件
          window.Asc.plugin.button = function (id) {
            // 被中断或关闭窗口
            if (id === -1) {
              this.executeCommand('close', '')
            }
          }
        })

        return {
          onEchoText
        }
      }
    }).mount('#app')

    // 工具函数。获取url字符串中携带的参数，以key,value对象形式返回。
    function getURLParameters(url) {
      let params = {};
      let queryString = url.split('?')[1];
      if (queryString) {
        let searchParams = new URLSearchParams(queryString);
        for (let param of searchParams.entries()) {
          params[param[0]] = param[1];
        }
      }
      return params;
    }
  }
})(window, undefined)
