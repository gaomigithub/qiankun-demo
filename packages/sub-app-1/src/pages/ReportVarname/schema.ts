export default {
  "componentName": "Page",
  "id": "node_oclvkr3rez1",
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
        "isInit": false,
        "type": "http",
        "id": "ReportVarnameList",
        "config": {
          "path": "/api/v1/report/varname/search",
          "method": "get",
          "tags": [
            "报告"
          ],
          "title": "报告变量名列表",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "report_id": {
                "description": "",
                "name": "report_id",
                "type": "integer",
                "required": false
              }
            },
            "body": {
              "items": {}
            }
          },
          "response": [
            {
              "code": "200",
              "title": "成功",
              "properties": {
                "message": {
                  "name": "message",
                  "type": "string",
                  "required": true
                },
                "request_id": {
                  "name": "request_id",
                  "type": "string",
                  "required": true
                },
                "data": {
                  "name": "data",
                  "type": "array",
                  "required": true,
                  "items": {
                    "default_value": {
                      "name": "default_value",
                      "type": "string",
                      "title": "默认值",
                      "required": false
                    },
                    "id": {
                      "name": "id",
                      "type": "integer",
                      "title": "id",
                      "required": false
                    },
                    "varname": {
                      "name": "varname",
                      "type": "string",
                      "title": "变量名",
                      "required": false
                    }
                  }
                },
                "status": {
                  "name": "status",
                  "type": "integer",
                  "required": true
                },
                "success": {
                  "name": "success",
                  "type": "boolean",
                  "required": true
                },
                "timestamp": {
                  "name": "timestamp",
                  "type": "integer",
                  "required": true
                }
              }
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "get",
          "uri": "/api/v1/report/varname/search"
        }
      }
    ]
  },
  "state": {
    "reportVarnameListList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "isShowEditReportVarnameListModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowEditReportVarnameListModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshReportVarnameList]"
    },
    "currentEditRecord": {
      "type": "JSExpression",
      "value": "{}"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {},
  "methods": {
    "getReportVarnameList": {
      "type": "JSFunction",
      "value": "async function getReportVarnameList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const result = await this.dataSourceMap['ReportVarnameList'].load({\n    // page: current,\n    // page_size: pageSize,\n    report_id: this.constants.report_id ?? '12'\n  });\n  return {\n    data: result.result\n  };\n}",
      "source": "async function getReportVarnameList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const result = await this.dataSourceMap['ReportVarnameList'].load({\n    // page: current,\n    // page_size: pageSize,\n    report_id: this.constants.report_id ?? '12'\n  });\n  return {\n    data: result.result\n  };\n}"
    },
    "refreshReportVarnameList": {
      "type": "JSFunction",
      "value": "function refreshReportVarnameList() {\n  this.$('table_ReportVarnameList_ref').reload();\n}",
      "source": "function refreshReportVarnameList() {\n  this.$('table_ReportVarnameList_ref').reload();\n}"
    },
    "handleEditReportVarnameListBtnClick": {
      "type": "JSFunction",
      "value": "function handleEditReportVarnameListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    });\n  }\n\n  // 更新可见状态\n  this.setState({\n    \"isShowEditReportVarnameListModal\": params.isShow\n  });\n}",
      "source": "function handleEditReportVarnameListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    });\n  }\n\n  // 更新可见状态\n  this.setState({\n    \"isShowEditReportVarnameListModal\": params.isShow\n  });\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "meta": {
    "doc": {
      "dataSource": {
        "ReportVarnameList": {
          "default_value": {
            "name": "default_value",
            "type": "string",
            "title": "默认值",
            "required": false
          },
          "id": {
            "name": "id",
            "type": "integer",
            "title": "id",
            "required": false
          },
          "varname": {
            "name": "varname",
            "type": "string",
            "title": "变量名",
            "required": false
          }
        }
      }
    }
  },
  "originCode": "class Page extends Component {\n  state = {\n    \"reportVarnameListList\": [],\n    \"isShowEditReportVarnameListModal\": false,\n    \"isShowEditReportVarnameListModalHooks\": [this.refreshReportVarnameList],\n    \"currentEditRecord\": {},\n  }\n  \n  \n  /**\n   * getReportVarnameList 函数用于从数据源映射中获取表格列表数据\n   * @param {object} params - 参数对象\n   * @returns {Promise} 包含表格数据的 Promise 对象\n   */\n  async getReportVarnameList(params) {\n    \n    const {\n      pageSize,\n      current\n    } = params;\n    \n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const result = await this.dataSourceMap['ReportVarnameList'].load(\n      {\n        // page: current,\n        // page_size: pageSize,\n        report_id: this.constants.report_id ?? '12',\n        \n      }\n    );\n\n    return {\n      data: result.result\n    };\n  }\n  \n  /**\n   * 刷新表格数据\n   */\n  refreshReportVarnameList() {\n    this.$('table_ReportVarnameList_ref').reload()\n  }\n  \n  /**\n   * handleEditReportVarnameListBtnClick 函数用于控制可见状态，并在需要时保存记录\n   * @param {Event} e - 事件对象\n   * @param {object} params - 参数对象\n   * @param {boolean} params.isShow - 是否显示\n   * @param {object} params.record - 要保存的记录对象\n   */\n  handleEditReportVarnameListBtnClick(e, params) {\n    \n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        \"currentEditRecord\": params.record\n      });\n    }\n    \n    // 更新可见状态\n    this.setState({\n      \"isShowEditReportVarnameListModal\": params.isShow\n    });\n  }\n  \n\n  \n}",
  "children": [
    {
      "componentName": "ProTable",
      "id": "node_oclvkr3rhk7",
      "props": {
        "cardBordered": true,
        "rowKey": "_id",
        "pagination": {
          "pageSize": 10,
          "showSizeChanger": false,
          "showQuickJumper": false,
          "simple": false,
          "size": "default"
        },
        "search": {
          "defaultCollapsed": false,
          "resetText": "",
          "searchText": "",
          "labelWidth": "auto"
        },
        "toolBarRender": {
          "type": "JSSlot",
          "params": [
            "currentPageData"
          ],
          "value": [
            {
              "componentName": "Button",
              "id": "node_oclvkr41os1",
              "props": {
                "type": "primary",
                "children": "重新生成报告",
                "htmlType": "button",
                "size": "middle",
                "shape": "default",
                "icon": "",
                "block": false,
                "danger": false,
                "ghost": false,
                "disabled": false
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ],
          "id": "node_oclvkr3rhk8"
        },
        "style": {
          "width": "100%"
        },
        "__component_name": "ProTable",
        "ref": "table_ReportVarnameList_ref",
        "manualRequest": false,
        "showHeader": true,
        "size": "default",
        "tableLayout": "",
        "scroll": {
          "scrollToFirstRowOnChange": true
        },
        "rowSelection": false,
        "columns": [
          {
            "title": "默认值",
            "dataIndex": "default_value",
            "key": "default_value",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "id",
            "dataIndex": "id",
            "key": "id",
            "valueType": "digit",
            "required": false,
            "align": "left",
            "hideInSearch": true
          },
          {
            "title": "变量名",
            "dataIndex": "varname",
            "key": "varname",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": false,
            "fixed": ""
          },
          {
            "title": "操作",
            "align": "right",
            "fixed": "right",
            "valueType": "option",
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
                  "id": "node_oclvkr3rhkl",
                  "props": {
                    "type": "link",
                    "children": "编辑",
                    "__component_name": "Button",
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
                          "relatedEventName": "handleEditReportVarnameListBtnClick",
                          "paramStr": "{\n  \"isShow\": true,\n  \"record\": this.record\n}\n"
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
                      "value": "function(){return this.handleEditReportVarnameListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([{\n  \"isShow\": true,\n  \"record\": this.record\n}\n])) }"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                }
              ],
              "id": "node_oclvkr3rhkk"
            },
            "width": 50
          }
        ],
        "request": {
          "type": "JSExpression",
          "value": "this.getReportVarnameList"
        },
        "dateFormatter": "string"
      },
      "hidden": false,
      "title": "报告变量名列表",
      "description": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    },
    {
      "componentName": "Modal",
      "id": "node_oclvkr3rhk1",
      "props": {
        "title": "编辑",
        "width": "70%",
        "okText": "确认",
        "cancelText": "取消",
        "visible": {
          "type": "JSExpression",
          "value": "this.state.isShowEditReportVarnameListModal",
          "mock": false
        },
        "destroyOnClose": true,
        "__component_name": "Modal",
        "centered": false,
        "closable": true,
        "confirmLoading": false,
        "forceRender": false,
        "keyboard": true,
        "mask": true,
        "maskClosable": true,
        "bodyStyle": {},
        "maskStyle": {},
        "__events": {
          "eventDataList": [
            {
              "type": "componentEvent",
              "name": "onCancel",
              "relatedEventName": "handleEditReportVarnameListBtnClick",
              "paramStr": "false"
            }
          ],
          "eventList": [
            {
              "name": "afterClose",
              "templete": "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
              "disabled": false
            },
            {
              "name": "onCancel",
              "template": "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
              "disabled": true
            },
            {
              "name": "onOk",
              "template": "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
              "disabled": false
            }
          ]
        },
        "onCancel": {
          "type": "JSFunction",
          "value": "function(){\n    return this.handleEditReportVarnameListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}"
        }
      },
      "hidden": true,
      "title": "编辑",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }
  ]
}