// import {getURLParameters} from utils;
// const getURLParameters = require('utils');
// 工具函数。获取url字符串中携带的参数，以key,value对象形式返回。
function getURLParameters(url) {
  let params = {};
  let queryString = url.split("?")[1];
  if (queryString) {
    let searchParams = new URLSearchParams(queryString);
    for (let param of searchParams.entries()) {
      params[param[0]] = param[1];
    }
  }
  return params;
}

const apibase = "";

const app = {
  data() {
    return {
      varInputName: "",
      varOptions: [],
      selectOptData: null,
      pluginInfo: {},
      selectOptName: 'company',
      urlCbParams: "",
      selectText: '',
    };
  },
  methods: {
    onBoundNewVar() {
      console.log("绑定新变量");

      if(this.varInputName === '') {
        alert("请先输入变量名称");
        return;
      }
      this.addVarContentControl(this.varInputName);
      //   this.addVarContentControl(this.varInputName);
      // this.insertDocVar(this.varInputName);

      // this.onSaveVariate({
      //   'varname': this.varInputName,
      //   'varname_value': this.selectOptData.default_value,
      //   'varrule_id': null,
      //   'label': this.selectText,
      //   'column_type': 'string',
      // })
    },
    // 绑定已有变量
    onBoundVarOpt() {
      if(this.selectOptData === null) {
        alert("请先选择一个变量");
        return;
      }
      this.insertDocVar(this.selectOptData.varname);
      console.log(this.selectOptData);
      this.onSaveVariate({
        'varname': this.selectOptData.varname,
        'varname_value': this.selectOptData.default_value,
        'varrule_id': this.selectOptData.id,
        'label': null,
        'column_type': null,
      })
    },
    // 参数列表change
    selectedVarChange(option) {
      console.log(option);
      this.selectOptData = null;
      for (let idx in this.varOptions) {
        const opt = this.varOptions[idx];
        if (opt.varname === option.target.value) {
          this.selectOptData = opt;
          break;
        }
      }
    },
    // 加载变量
    loadVariate() {
      fetch(apibase + "/api/v1/varname/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.varOptions = data.result;
          console.log(this.varOptions);
          this.selectOptData = this.varOptions[0];
          this.selectOptName = this.selectOptData.varname;
        });
    },

    //保存当前模板的变量
    onSaveVariate(varData) {
      const {varname, varname_value, varrule_id, label, column_type} = varData;
      const { origin_mode, origin_value, doc_id } = this.urlCbParams;
      const parame = {
        origin_mode,
        origin_value,
        doc_id,
        varrule_id: varrule_id,
        varname: varname,
        varname_value: varname_value,
        label: label,
        column_type: column_type,
      };
      fetch(apibase + "/api/v1/office/boundvar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parame),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    // 添加内容控制 TODO
    addVarContentControl(var_name) {
      window.Asc.plugin.executeMethod("AddContentControl", [
        2,
        {
          Id: 1,
          Tag: var_name,
          PlaceHolderText: "绑定变量",
          Color: {
            R: 0,
            G: 255,
            B: 0,
          },
          Lock: 3,
        },
      ]);
    },
    // 插入变量到文档
    insertDocVar(varname) {
      this.getSelectText();
      window.Asc.plugin.executeMethod("PasteText", [`{{` + varname + `}}`]);
    },
    getSelectText() {
      if(! window.Asc.plugin.info.editorType === 'word') {
        return;
      }
      var me = this;
      window.Asc.plugin.executeMethod("GetSelectedText", [{ 
          "Numbering": false, 
          "Math": false, 
          "TableCellSeparator": '\n', 
          "ParaSeparator": '\n', 
          "TabSymbol": String.fromCharCode(9) 
        }], function (data) {
          console.log(data);
          if (data) {
            me.selectText = data;
          } else {
            me.selectText = '';
          }
      });
    }
  },
  mounted() {
    this.loadVariate();

    const info = window.Asc.plugin.info;
    if (info) {
      this.pluginInfo = info;
      this.urlCbParams = getURLParameters(info.documentCallbackUrl);
      console.log(this.urlCbParams);
    } else {
      window.Asc.plugin.executeCommand("close", "");
      console.log("获取插件相关信息失败");
      return;
    }
    // 在插件 iframe 之外释放鼠标按钮时调用的函数
    window.Asc.plugin.onExternalMouseUp = function () {
      //   var event = document.createEvent('MouseEvents')
      //   event.initMouseEvent('mouseup', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null)
      //   document.dispatchEvent(event)
      //   saveVariate()
    };

    //插件按钮事件
    window.Asc.plugin.button = function (id) {
      console.log("button click");
      // 被中断或关闭窗口
      if (id === -1) {
        this.executeCommand("close", "");
      }
    };

    //方法回调事件
    window.Asc.plugin.onMethodReturn = function (returnValue) {
      console.log(window.Asc.plugin.info.methodName);
      // if (window.Asc.plugin.info.methodName == "InsertAndReplaceContentControls") {
      //   window.Asc.plugin.executeMethod("GetAllContentControls");
      // } else if ("GetAllContentControls") {
      //   window.Asc.plugin.executeCommand("close", console.log(JSON.stringify(returnValue)));
      // }
    };
  },
};
