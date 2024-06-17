export default {
  "componentName": "Page",
  "id": "node_oclueyl7j31",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "type": "fetch",
        "isInit": true,
        "options": {
          "params": {
            "q": "(order_column:changed_on_delta_humanized,order_direction:desc,page:0,page_size:25)"
          },
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzEyMzcwMDQ3LCJqdGkiOiJjZmY0MGYxOC0yNWZlLTRkOWEtYmM0ZC0xZmYxYmU5ZDVjODIiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxLCJuYmYiOjE3MTIzNzAwNDcsImNzcmYiOiI4MTI0NzA3OC04MGYxLTQxZGMtOTZmZC0xMWVmYWExYzQyNDciLCJleHAiOjE3MTIzNzA5NDd9.rxnUlRfP8Vkyt9EFU-ADmmcLRzZjYCpLtnzzwnK5Ujw"
          },
          "uri": "/api/v1/dashboard/"
        },
        "id": "getDashboard"
      }
    ]
  },
  "state": {
    "dashBoardList": {
      "type": "JSExpression",
      "value": "[]"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {},
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test aliLowcode func');\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"test-aliLowcode-func\"\n  }, this.state.test);\n}",
      "source": "function testFunc() {\n  console.log('test aliLowcode func');\n  return <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>;\n}"
    },
    "getDashBoardList": {
      "type": "JSFunction",
      "value": "async function getDashBoardList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const q = `(order_column:changed_on_delta_humanized,order_direction:desc,page:${current - 1},page_size:${pageSize})`;\n  const msg = await this.dataSourceMap['getDashboard'].load({\n    q: q\n  });\n  // .then(res => {\n  //   this.setState({\n  //     dashBoardList: res.result\n  //   });\n  // });;\n  \n  return {\n    data: msg.result,\n    total: msg.count\n  };\n}",
      "source": "async function getDashBoardList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const q = `(order_column:changed_on_delta_humanized,order_direction:desc,page:${current - 1},page_size:${pageSize})`;\n  const msg = await this.dataSourceMap['getDashboard'].load({\n    q: q\n  });\n  // .then(res => {\n  //   this.setState({\n  //     dashBoardList: res.result\n  //   });\n  // });;\n  \n  return {\n    data: msg.result,\n    total: msg.count\n  };\n}"
    },
    "handleEditClick": {
      "type": "JSFunction",
      "value": "function handleEditClick() {\n  if (this.utils.handleEditClick) {\n    this.utils.handleEditClick();\n  }\n}",
      "source": "function handleEditClick() {\n  if (this.utils.handleEditClick) {\n    this.utils.handleEditClick();\n  }\n}"
    },
    "handleSelectClick": {
      "type": "JSFunction",
      "value": "function handleSelectClick(e, record) {\n  if (this.utils.handleSelectClick) {\n    this.utils.handleSelectClick(record);\n  }\n}",
      "source": "function handleSelectClick(e, record) {\n  if (this.utils.handleSelectClick) {\n    this.utils.handleSelectClick(record);\n  }\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "originCode": "class Page extends Component {\n  state = {\n    dashBoardList:[]\n  }\n  \n  \n  // 你可以在这里编写函数，并且与组件的事件进行绑定，支持JSX语法\n  testFunc() {\n    console.log('test aliLowcode func');\n    return (\n      <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>\n    );\n  }\n\n  async getDashBoardList(params) {\n    const { pageSize, current} = params;\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const q = `(order_column:changed_on_delta_humanized,order_direction:desc,page:${current - 1},page_size:${pageSize})`\n    const msg = await this.dataSourceMap['getDashboard'].load({\n      q: q\n    })\n    // .then(res => {\n    //   this.setState({\n    //     dashBoardList: res.result\n    //   });\n    // });;\n  \n    return  {\n      data: msg.result,\n      total: msg.count,\n    }\n  }\n\n  handleEditClick() {\n    if (this.utils.handleEditClick) {\n      this.utils.handleEditClick()\n    }\n  }\n\n  handleSelectClick(e,record) {\n    if (this.utils.handleSelectClick) {\n      this.utils.handleSelectClick(record)\n    }\n  }\n  \n}",
  "children": [
    {
      "componentName": "ProTable",
      "id": "node_oclueyl7j32",
      "props": {
        "cardBordered": true,
        "columns": [
          {
            "title": "id",
            "dataIndex": "id"
          },
          {
            "title": "图表",
            "dataIndex": "dashboard_title",
            "valueType": "text",
            "align": "left",
            "fixed": ""
          },
          {
            "title": "操作",
            "dataIndex": "options",
            "valueType": "option",
            "align": "left",
            "fixed": "right",
            "render": {
              "type": "JSSlot",
              "params": [
                "text",
                "record",
                "index"
              ],
              "value": [
                {
                  "componentName": "Button",
                  "id": "node_oclukz16ml2",
                  "props": {
                    "type": "link",
                    "children": "选择",
                    "htmlType": "button",
                    "size": "small",
                    "shape": "default",
                    "block": false,
                    "danger": false,
                    "ghost": false,
                    "disabled": false,
                    "icon": "",
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onClick",
                          "relatedEventName": "handleSelectClick",
                          "paramStr": "this.record"
                        }
                      ],
                      "eventList": [
                        {
                          "name": "onClick",
                          "template": "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                          "disabled": true
                        }
                      ]
                    },
                    "onClick": {
                      "type": "JSFunction",
                      "value": "function(){return this.handleSelectClick.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                }
              ],
              "id": "node_oclukz16ml1"
            },
            "width": 60
          }
        ],
        "rowKey": "id",
        "pagination": {
          "defaultPageSize": 10,
          "showSizeChanger": false,
          "showQuickJumper": false,
          "simple": false,
          "size": "default"
        },
        "search": {
          "searchText": "",
          "resetText": "",
          "defaultCollapsed": true
        },
        "toolBarRender": "",
        "intl": "zhCNIntl",
        "ref": "pro_table_bhomdxv00d6",
        "manualRequest": false,
        "showHeader": true,
        "size": "default",
        "tableLayout": "",
        "scroll": {
          "scrollToFirstRowOnChange": true
        },
        "rowSelection": false,
        "dateFormatter": "string",
        "request": {
          "type": "JSExpression",
          "value": "this.getDashBoardList"
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

const backup = {
  "componentName": "Page",
  "id": "node_oclueyl7j31",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "type": "fetch",
        "isInit": true,
        "options": {
          "params": {
            "q": "(order_column:changed_on_delta_humanized,order_direction:desc,page:0,page_size:25)"
          },
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNzEyMzcwMDQ3LCJqdGkiOiJjZmY0MGYxOC0yNWZlLTRkOWEtYmM0ZC0xZmYxYmU5ZDVjODIiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxLCJuYmYiOjE3MTIzNzAwNDcsImNzcmYiOiI4MTI0NzA3OC04MGYxLTQxZGMtOTZmZC0xMWVmYWExYzQyNDciLCJleHAiOjE3MTIzNzA5NDd9.rxnUlRfP8Vkyt9EFU-ADmmcLRzZjYCpLtnzzwnK5Ujw"
          },
          "uri": "/api/v1/dashboard/"
        },
        "id": "getDashboard"
      }
    ]
  },
  "state": {
    "dashBoardList": {
      "type": "JSExpression",
      "value": "[]"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {},
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test aliLowcode func');\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"test-aliLowcode-func\"\n  }, this.state.test);\n}",
      "source": "function testFunc() {\n  console.log('test aliLowcode func');\n  return <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>;\n}"
    },
    "getDashBoardList": {
      "type": "JSFunction",
      "value": "async function getDashBoardList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const q = `(order_column:changed_on_delta_humanized,order_direction:desc,page:${current - 1},page_size:${pageSize})`;\n  const msg = await this.dataSourceMap['getDashboard'].load({\n    q: q\n  });\n  // .then(res => {\n  //   this.setState({\n  //     dashBoardList: res.result\n  //   });\n  // });;\n  \n  return {\n    data: msg.result,\n    total: msg.count\n  };\n}",
      "source": "async function getDashBoardList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const q = `(order_column:changed_on_delta_humanized,order_direction:desc,page:${current - 1},page_size:${pageSize})`;\n  const msg = await this.dataSourceMap['getDashboard'].load({\n    q: q\n  });\n  // .then(res => {\n  //   this.setState({\n  //     dashBoardList: res.result\n  //   });\n  // });;\n  \n  return {\n    data: msg.result,\n    total: msg.count\n  };\n}"
    },
    "handleEditClick": {
      "type": "JSFunction",
      "value": "function handleEditClick() {\n  if (this.utils.handleEditClick) {\n    this.utils.handleEditClick();\n  }\n}",
      "source": "function handleEditClick() {\n  if (this.utils.handleEditClick) {\n    this.utils.handleEditClick();\n  }\n}"
    },
    "handleSelectClick": {
      "type": "JSFunction",
      "value": "function handleSelectClick(e, record) {\n  if (this.utils.handleSelectClick) {\n    this.utils.handleSelectClick(record);\n  }\n}",
      "source": "function handleSelectClick(e, record) {\n  if (this.utils.handleSelectClick) {\n    this.utils.handleSelectClick(record);\n  }\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "originCode": "class Page extends Component {\n  state = {\n    dashBoardList:[]\n  }\n  \n  \n  // 你可以在这里编写函数，并且与组件的事件进行绑定，支持JSX语法\n  testFunc() {\n    console.log('test aliLowcode func');\n    return (\n      <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>\n    );\n  }\n\n  async getDashBoardList(params) {\n    const { pageSize, current} = params;\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const q = `(order_column:changed_on_delta_humanized,order_direction:desc,page:${current - 1},page_size:${pageSize})`\n    const msg = await this.dataSourceMap['getDashboard'].load({\n      q: q\n    })\n    // .then(res => {\n    //   this.setState({\n    //     dashBoardList: res.result\n    //   });\n    // });;\n  \n    return  {\n      data: msg.result,\n      total: msg.count,\n    }\n  }\n\n  handleEditClick() {\n    if (this.utils.handleEditClick) {\n      this.utils.handleEditClick()\n    }\n  }\n\n  handleSelectClick(e,record) {\n    if (this.utils.handleSelectClick) {\n      this.utils.handleSelectClick(record)\n    }\n  }\n  \n}",
  "children": [
    {
      "componentName": "ProTable",
      "id": "node_oclueyl7j32",
      "props": {
        "cardBordered": true,
        "columns": [
          {
            "title": "id",
            "dataIndex": "id"
          },
          {
            "title": "图表",
            "dataIndex": "dashboard_title",
            "valueType": "text",
            "align": "left",
            "fixed": ""
          },
          {
            "title": "操作",
            "dataIndex": "options",
            "valueType": "option",
            "align": "left",
            "fixed": "right",
            "render": {
              "type": "JSSlot",
              "params": [
                "text",
                "record",
                "index"
              ],
              "value": [
                {
                  "componentName": "Button",
                  "id": "node_oclukz16ml2",
                  "props": {
                    "type": "link",
                    "children": "选择",
                    "htmlType": "button",
                    "size": "small",
                    "shape": "default",
                    "block": false,
                    "danger": false,
                    "ghost": false,
                    "disabled": false,
                    "icon": "",
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onClick",
                          "relatedEventName": "handleSelectClick",
                          "paramStr": "this.record"
                        }
                      ],
                      "eventList": [
                        {
                          "name": "onClick",
                          "template": "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                          "disabled": true
                        }
                      ]
                    },
                    "onClick": {
                      "type": "JSFunction",
                      "value": "function(){return this.handleSelectClick.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                }
              ],
              "id": "node_oclukz16ml1"
            },
            "width": 60
          }
        ],
        "rowKey": "id",
        "pagination": {
          "defaultPageSize": 10,
          "showSizeChanger": false,
          "showQuickJumper": false,
          "simple": false,
          "size": "default"
        },
        "search": {
          "searchText": "",
          "resetText": "",
          "defaultCollapsed": true
        },
        "toolBarRender": "",
        "intl": "zhCNIntl",
        "ref": "pro_table_bhomdxv00d6",
        "manualRequest": false,
        "showHeader": true,
        "size": "default",
        "tableLayout": "",
        "scroll": {
          "scrollToFirstRowOnChange": true
        },
        "rowSelection": false,
        "dateFormatter": "string",
        "request": {
          "type": "JSExpression",
          "value": "this.getDashBoardList"
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