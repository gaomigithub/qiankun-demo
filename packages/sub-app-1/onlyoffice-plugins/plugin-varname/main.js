/* eslint-disable */
(function (window, undefined) {
  window.Asc.plugin.init = function (initData) {
    // 将上下文赋给me,用于后续操作。
    const me = this
    //使用vue方式减少DOM操作
    const { createApp, ref, onMounted, reactive, watch } = Vue
    createApp({
      setup() {
        const pluginInfo = {} //当前插件的相关信息
        const selectText = ref('') // 选中的编辑器文本
        const urlCbParams = {} //回调url中携带的参数，在后续开发中会用到
        const variate = ref('') // 选中的变量id
        const variateOption = ref([]); // 选择变量下拉框的变量列表数据
        const customVarname = ref(''); // 自定义输入的变量名
        let select2;
        //点击生成变量按钮的回调方法。
        const saveVariate = () => {
          switch (window.Asc.plugin.info.editorType) {
            case 'word':
            case 'slide': {
              window.Asc.plugin.executeMethod("GetSelectedText", [{ "Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9) }], function (data) {
                if (data) {
                  selectText.value = data;
                } else {
                  selectText.value = '';
                }
              });
              break;
            }
            case 'cell': {
              window.Asc.plugin.executeMethod("GetSelectedText", [{ "Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9) }], function (data) {
                // console.log('cell--------' + data)
              });
              break;
            }
          }
        }

        //获取模板的变量
        const loadVariate = () => {
          fetch("/api/v1/varname/list", {
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

        const templateVarnameList = ref([]);

        //获取模板绑定的变量
        const loadVarnameList = () => {
          const { origin_value } = urlCbParams
          fetch(`/api/v1/report/template/varname/list?template_id=${origin_value}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((response) => response.json())
            .then((data) => { templateVarnameList.value = data.result; });
        }

        //点击变量列表
        const onClickVarnameItem = ({ varname }) => {
          window.Asc.plugin.executeMethod("SearchNext", [
            {
              "searchString": "{{" + varname + "}}",
              "matchCase": true
            },
            true
          ]);
        }

        //保存当前模板的变量
        const onSaveVariate = () => {
          const val = Number(select2.val())
          if (!selectText.value) {
            return;
          }
          if (!val && val !== 0) {
            return;
          }
          const { origin_mode, origin_value, doc_id } = urlCbParams;
          const parame = {
            origin_mode,
            origin_value,
            doc_id,
            varrule_id: val
          }

          fetch("/api/v1/office/boundvar", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(parame)
          })
            .then((response) => response.json())
            .then((data) => {
              const val = Number(select2.val())
              const { varname } = variateOption.value.find(fv => fv.id === val)
              alternateText(varname)
            });
        }

        /* 替换文本方法 */
        const alternateText = (value) => {
          // 向callCommand创建的空间传递外部数据
          Asc.scope.st = { targetVariate: value };
          // 移除选择的内容
          window.Asc.plugin.executeMethod("RemoveSelectedContent");
          me.callCommand(() => {
            try {
              // 获取从外部传入的数据
              const { targetVariate } = Asc.scope.st;
              // 获取文档对象
              const oDocument = Api.GetDocument();
              // 创建新的段落
              const oParagraph = Api.CreateParagraph();
              // 向新的段落中添加文本
              oParagraph.AddText(`{{${targetVariate}}}`);
              // 将新的段落通过内联方式插入文档
              oDocument.InsertContent([oParagraph], true, { KeepTextOnly: true })
            } catch (error) {
              console.error(error)
            }
          }, false, true, function () {
            console.log('操作成功')
          })
        }

        const newVarnameObj = reactive({
          label: '',
          varname: '',
          varname_value: ''
        })

        /* 绑定新变量 */
        const bindNewVarname = () => {
          const dateStr = new Date().getTime().toString(16);
          newVarnameObj.varname = 'F' + dateStr.substring(dateStr.length - 4);
          newVarnameObj.varname_value = selectText.value;
          dailog.value = true;
        }


        const addNewVarname = () => {
          if (!selectText.value || !newVarnameObj.label) {
            return
          }
          const { origin_mode, origin_value, doc_id } = urlCbParams;
          const { label, varname, varname_value } = newVarnameObj
          const parame = {
            origin_mode,
            origin_value,
            doc_id,
            label,
            varname,
            varname_value
          }

          fetch("/api/v1/office/boundvar", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(parame)
          })
            .then((response) => response.json())
            .then((data) => {
              alternateText(newVarnameObj.varname)
              dailog.value = false;
              Object.assign(newVarnameObj, {
                label: '',
                varname: '',
                varname_value: ''
              })
              loadVarnameList()
            });
        }

        onMounted(() => {
          $(document).ready(() => {
            select2 = $('.select-status').select2({
              width: '100%',
              placeholder: '请选择',
              language: 'zh-CN',
            })
          });
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
          loadVarnameList()
          // 在插件 iframe 之外释放鼠标按钮时调用的函数
          window.Asc.plugin.onExternalMouseUp = function () {
            var event = document.createEvent('MouseEvents')
            event.initMouseEvent('mouseup', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null)
            document.dispatchEvent(event)
            saveVariate()
          }

          //插件按钮事件
          window.Asc.plugin.button = function (id) {
            // 被中断或关闭窗口
            if (id === -1) {
              this.executeCommand('close', '')
            }
          }

          //方法回调事件
          window.Asc.plugin.onMethodReturn = function (returnValue) {
            if (window.Asc.plugin.info.methodName == "InsertAndReplaceContentControls") {
              window.Asc.plugin.executeMethod("GetAllContentControls");
            } else if ("GetAllContentControls") {
              // window.Asc.plugin.executeCommand("close", console.log(JSON.stringify(returnValue)));
            }
          };
        })

        const dailog = ref(false)
        //关闭弹窗
        const closeDailog = () => {
          dailog.value = false
        }

        watch(() => selectText.value, (data) => {
          if (dailog.value) {
            newVarnameObj.varname_value = data;
          }
        })

        return {
          dailog,
          selectText,
          variate,
          templateVarnameList,
          variateOption,
          customVarname,
          newVarnameObj,
          addNewVarname,
          saveVariate,
          loadVariate,
          onSaveVariate,
          onClickVarnameItem,
          bindNewVarname,
          closeDailog
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