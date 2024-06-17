export default {
  "componentName": "Page",
  "id": "node_oclw12gmip1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100vh",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "backgroundImage": "url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)",
      "backgroundSize": "contain"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "type": "http",
        "isInit": false,
        "options": {
          "params": {},
          "method": "POST",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/security/login"
        },
        "id": "Login"
      }
    ]
  },
  "state": {},
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {},
  "methods": {
    "handleLoginBtnClick": {
      "type": "JSFunction",
      "value": "function handleLoginBtnClick(values) {\n  if (values) {\n    const params = {\n      password: values.password,\n      username: values.username,\n      refresh: true,\n      provider: \"db\"\n    };\n    this.dataSourceMap['Login'].load(params).then(res => {\n      if (this.utils.handleLoginSuccess) {\n        this.utils.handleLoginSuccess({\n          ...res,\n          isAutoLogin: autoLogin\n        });\n      }\n    }).catch(error => {\n      if (this.utils.handleLoginError) {\n        this.utils.handleLoginError(error.message);\n      }\n    });\n  }\n}",
      "source": "function handleLoginBtnClick(values) {\n  if (values) {\n    const params = {\n      password: values.password,\n      username: values.username,\n      refresh: true,\n      provider: \"db\"\n    };\n    this.dataSourceMap['Login'].load(params).then(res => {\n      if (this.utils.handleLoginSuccess) {\n        this.utils.handleLoginSuccess({\n          ...res,\n          isAutoLogin: autoLogin\n        });\n      }\n    }).catch(error => {\n      if (this.utils.handleLoginError) {\n        this.utils.handleLoginError(error.message);\n      }\n    });\n  }\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "originCode": "class Page extends Component {\n  state = {}\n  \n  handleLoginBtnClick(values) {\n    if(values) {\n      const params = {\n        password: values.password,\n        username: values.username,\n        refresh: true,\n        provider: \"db\"\n      }\n\n      this.dataSourceMap['Login'].load(params).then(res => {\n        if (this.utils.handleLoginSuccess){\n          this.utils.handleLoginSuccess({\n            ...res,\n            isAutoLogin: autoLogin\n          })\n        }\n      }).catch (error => {\n        if (this.utils.handleLoginError){\n          this.utils.handleLoginError(error.message);\n        }\n      })\n    }\n  }\n\n  \n}",
  "children": [
    {
      "componentName": "Div",
      "id": "node_oclw12gmip4",
      "props": {
        "style": {
          "display": "flex",
          "paddingTop": "20px",
          "paddingRight": "20px",
          "paddingBottom": "20px",
          "paddingLeft": "20px",
          "borderRadius": "8px",
          "boxShadow": "0px 0px 2px 2px #f1f1f1"
        }
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "ProLoginForm",
          "id": "node_oclw12gmip5",
          "props": {
            "defaultLoginType": "account",
            "logo": "/logo.svg",
            "title": "九云数智",
            "subTitle": "报告生成系统",
            "showTabs": false,
            "accountPlaceholder": "用户名",
            "accountMessage": "请输入用户名",
            "passwordPlaceholder": "密码",
            "passwordMessage": "请输入密码",
            "phonePlaceholder": "",
            "phoneMessage": "",
            "captchaPlaceholder": "",
            "captchaMessage": "",
            "showAutoLogin": true,
            "onFinish": {
              "type": "JSFunction",
              "value": "function(){ return this.handleLoginBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
            }
          },
          "hidden": false,
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": ""
        }
      ]
    }
  ]
}