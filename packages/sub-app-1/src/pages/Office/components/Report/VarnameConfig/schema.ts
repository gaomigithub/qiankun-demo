export default {
  "componentName": "Page",
  "id": "node_oclvm486bm1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": []
  },
  "state": {},
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {},
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test aliLowcode func');\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"test-aliLowcode-func\"\n  }, this.state.test);\n}",
      "source": "function testFunc() {\n  console.log('test aliLowcode func');\n  return <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>;\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "originCode": "class Page extends Component {\n  state = {}\n  \n  \n  \n  // 你可以在这里编写函数，并且与组件的事件进行绑定，支持JSX语法\n  testFunc() {\n    console.log('test aliLowcode func');\n    return (\n      <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>\n    );\n  }\n  \n}",
  "children": [
    {
      "componentName": "Form",
      "id": "node_oclvm486dw1",
      "props": {
        "labelCol": {
          "span": 6
        },
        "wrapperCol": {
          "span": 14
        },
        "onValuesChange": {
          "type": "JSExpression",
          "value": "function() {\n      const self = this;\n      try {\n        return (function onValuesChange(changedValues, allValues) {\n  console.log('onValuesChange', changedValues, allValues);\n}).apply(self, arguments);\n      } catch(e) {\n        logger.warn('call function which parsed by lowcode failed: ', e);\n        return e.message;\n      }\n    }"
        },
        "onFinish": {
          "type": "JSExpression",
          "value": "function() {\n      const self = this;\n      try {\n        return (function onFinish(values) {\n  console.log('onFinish', values);\n}).apply(self, arguments);\n      } catch(e) {\n        logger.warn('call function which parsed by lowcode failed: ', e);\n        return e.message;\n      }\n    }"
        },
        "onFinishFailed": {
          "type": "JSExpression",
          "value": "function() {\n      const self = this;\n      try {\n        return (function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log('onFinishFailed', values, errorFields, outOfDate);\n}).apply(self, arguments);\n      } catch(e) {\n        logger.warn('call function which parsed by lowcode failed: ', e);\n        return e.message;\n      }\n    }"
        },
        "name": "basic",
        "ref": "form_7f6m",
        "colon": true,
        "hideRequiredMark": false,
        "preserve": true,
        "scrollToFirstError": true,
        "validateMessages": {
          "required": "'${name}' 不能为空"
        }
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw2",
          "props": {
            "label": "公司名",
            "labelAlign": "right",
            "colon": true,
            "required": true,
            "noStyle": false,
            "valuePropName": "value",
            "name": "a",
            "requiredobj": {
              "required": true,
              "message": "必填"
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            }
          },
          "hidden": false,
          "title": "公司名称",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input",
              "id": "node_oclvm486dw3",
              "props": {
                "placeholder": "",
                "bordered": true,
                "disabled": true,
                "size": "middle"
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dwu",
          "props": {
            "label": "年份",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "message": ""
            },
            "lenobj": {
              "max": 0,
              "min": 0,
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            }
          },
          "docId": "doclvm486dw",
          "hidden": false,
          "title": "年份",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input",
              "id": "node_oclvm486dwv",
              "props": {
                "placeholder": "",
                "bordered": true,
                "disabled": true,
                "size": "middle"
              },
              "docId": "doclvm486dw",
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw4",
          "props": {
            "label": "总资产",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "b"
          },
          "hidden": false,
          "title": "总资产",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "InputNumber",
              "id": "node_oclvm486dww",
              "props": {
                "placeholder": "",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw6",
          "props": {
            "label": "总营收",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "c"
          },
          "hidden": false,
          "title": "总营收",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "InputNumber",
              "id": "node_oclvm486dwz",
              "props": {
                "placeholder": "",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw8",
          "props": {
            "label": "编号",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "d"
          },
          "hidden": false,
          "title": "编号",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "InputNumber",
              "id": "node_oclvm486dw14",
              "props": {
                "placeholder": "",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dwa",
          "props": {
            "label": "时间",
            "name": "e",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            }
          },
          "hidden": false,
          "title": "时间",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "DatePicker",
              "id": "node_oclvm486dw19",
              "props": {
                "format": "YYYY-MM-DD",
                "allowClear": true,
                "bordered": true,
                "showToday": true,
                "autoFocus": false,
                "disabled": false,
                "inputReadOnly": false,
                "showTime": false,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dwc",
          "props": {
            "label": "描述",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "f"
          },
          "hidden": false,
          "title": "描述",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input.TextArea",
              "id": "node_oclvm486dw9",
              "props": {
                "autoSize": {
                  "minRows": 3,
                  "maxRows": 3
                },
                "placeholder": "",
                "bordered": true,
                "disabled": false,
                "showCount": false,
                "size": "middle"
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
  ]
}


const backup = {
  "componentName": "Page",
  "id": "node_oclvm486bm1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": []
  },
  "state": {},
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {},
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test aliLowcode func');\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"test-aliLowcode-func\"\n  }, this.state.test);\n}",
      "source": "function testFunc() {\n  console.log('test aliLowcode func');\n  return <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>;\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "originCode": "class Page extends Component {\n  state = {}\n  \n  \n  \n  // 你可以在这里编写函数，并且与组件的事件进行绑定，支持JSX语法\n  testFunc() {\n    console.log('test aliLowcode func');\n    return (\n      <div className=\"test-aliLowcode-func\">\n        {this.state.test}\n      </div>\n    );\n  }\n  \n}",
  "children": [
    {
      "componentName": "Form",
      "id": "node_oclvm486dw1",
      "props": {
        "labelCol": {
          "span": 6
        },
        "wrapperCol": {
          "span": 14
        },
        "onValuesChange": {
          "type": "JSExpression",
          "value": "function() {\n      const self = this;\n      try {\n        return (function onValuesChange(changedValues, allValues) {\n  console.log('onValuesChange', changedValues, allValues);\n}).apply(self, arguments);\n      } catch(e) {\n        logger.warn('call function which parsed by lowcode failed: ', e);\n        return e.message;\n      }\n    }"
        },
        "onFinish": {
          "type": "JSExpression",
          "value": "function() {\n      const self = this;\n      try {\n        return (function onFinish(values) {\n  console.log('onFinish', values);\n}).apply(self, arguments);\n      } catch(e) {\n        logger.warn('call function which parsed by lowcode failed: ', e);\n        return e.message;\n      }\n    }"
        },
        "onFinishFailed": {
          "type": "JSExpression",
          "value": "function() {\n      const self = this;\n      try {\n        return (function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log('onFinishFailed', values, errorFields, outOfDate);\n}).apply(self, arguments);\n      } catch(e) {\n        logger.warn('call function which parsed by lowcode failed: ', e);\n        return e.message;\n      }\n    }"
        },
        "name": "basic",
        "ref": "form_7f6m",
        "colon": true,
        "hideRequiredMark": false,
        "preserve": true,
        "scrollToFirstError": true,
        "validateMessages": {
          "required": "'${name}' 不能为空"
        }
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw2",
          "props": {
            "label": "公司名",
            "labelAlign": "right",
            "colon": true,
            "required": true,
            "noStyle": false,
            "valuePropName": "value",
            "name": "a",
            "requiredobj": {
              "required": true,
              "message": "必填"
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            }
          },
          "hidden": false,
          "title": "公司名称",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input",
              "id": "node_oclvm486dw3",
              "props": {
                "placeholder": "",
                "bordered": true,
                "disabled": true,
                "size": "middle"
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dwu",
          "props": {
            "label": "年份",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "message": ""
            },
            "lenobj": {
              "max": 0,
              "min": 0,
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            }
          },
          "docId": "doclvm486dw",
          "hidden": false,
          "title": "年份",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input",
              "id": "node_oclvm486dwv",
              "props": {
                "placeholder": "",
                "bordered": true,
                "disabled": true,
                "size": "middle"
              },
              "docId": "doclvm486dw",
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw4",
          "props": {
            "label": "总资产",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "b"
          },
          "hidden": false,
          "title": "总资产",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "InputNumber",
              "id": "node_oclvm486dww",
              "props": {
                "placeholder": "",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw6",
          "props": {
            "label": "总营收",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "c"
          },
          "hidden": false,
          "title": "总营收",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "InputNumber",
              "id": "node_oclvm486dwz",
              "props": {
                "placeholder": "",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dw8",
          "props": {
            "label": "编号",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "d"
          },
          "hidden": false,
          "title": "编号",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "InputNumber",
              "id": "node_oclvm486dw14",
              "props": {
                "placeholder": "",
                "autoFocus": false,
                "disabled": false,
                "controls": true,
                "bordered": true,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dwa",
          "props": {
            "label": "时间",
            "name": "e",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            }
          },
          "hidden": false,
          "title": "时间",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "DatePicker",
              "id": "node_oclvm486dw19",
              "props": {
                "format": "YYYY-MM-DD",
                "allowClear": true,
                "bordered": true,
                "showToday": true,
                "autoFocus": false,
                "disabled": false,
                "inputReadOnly": false,
                "showTime": false,
                "style": {
                  "width": "100%"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclvm486dwc",
          "props": {
            "label": "描述",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "requiredobj": {
              "required": "",
              "message": ""
            },
            "typeobj": {
              "type": "",
              "message": ""
            },
            "lenobj": {
              "max": "",
              "min": "",
              "message": ""
            },
            "patternobj": {
              "pattern": "",
              "message": ""
            },
            "name": "f"
          },
          "hidden": false,
          "title": "描述",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input.TextArea",
              "id": "node_oclvm486dw9",
              "props": {
                "autoSize": {
                  "minRows": 3,
                  "maxRows": 3
                },
                "placeholder": "",
                "bordered": true,
                "disabled": false,
                "showCount": false,
                "size": "middle"
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
  ]
}