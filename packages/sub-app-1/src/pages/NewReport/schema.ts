export default {
  "componentName": "Page",
  "id": "node_oclvgn9dwo1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "docId": "doclvgna3tm",
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "isInit": false,
        "type": "http",
        "id": "ReportLsit",
        "config": {
          "path": "/api/v1/report/search",
          "method": "get",
          "tags": [
            "报告"
          ],
          "title": "报告列表",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "page": {
                "description": "",
                "name": "page",
                "type": "integer",
                "required": false
              },
              "page_size": {
                "description": "",
                "name": "page_size",
                "type": "integer",
                "required": false
              },
              "report_name": {
                "description": "",
                "name": "report_name",
                "type": "string",
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
                  "required": false
                },
                "request_id": {
                  "name": "request_id",
                  "type": "string",
                  "required": false
                },
                "data": {
                  "name": "data",
                  "type": "object",
                  "required": false,
                  "items": {
                    "items": {
                      "name": "items",
                      "type": "array",
                      "required": false,
                      "items": {
                        "create_by": {
                          "name": "create_by",
                          "type": "string",
                          "title": "作者",
                          "required": false
                        },
                        "created_on": {
                          "name": "created_on",
                          "type": "string",
                          "title": "创建时间",
                          "required": false
                        },
                        "docx_id": {
                          "name": "docx_id",
                          "type": "integer",
                          "title": "文档id",
                          "required": false
                        },
                        "id": {
                          "name": "id",
                          "type": "integer",
                          "title": "id",
                          "required": false
                        },
                        "is_delete": {
                          "name": "is_delete",
                          "type": "integer",
                          "title": "已删除",
                          "required": false
                        },
                        "name": {
                          "name": "name",
                          "type": "string",
                          "title": "名称",
                          "required": false
                        },
                        "origin_mode": {
                          "name": "origin_mode",
                          "type": "string",
                          "title": "原模式",
                          "required": false
                        },
                        "origin_value": {
                          "name": "origin_value",
                          "type": "string",
                          "title": "原值",
                          "required": false
                        },
                        "updated_on": {
                          "name": "updated_on",
                          "type": "string",
                          "title": "更新于",
                          "required": false
                        }
                      }
                    },
                    "pages": {
                      "name": "pages",
                      "type": "integer",
                      "required": false
                    },
                    "total": {
                      "name": "total",
                      "type": "integer",
                      "required": false
                    }
                  }
                },
                "status": {
                  "name": "status",
                  "type": "integer",
                  "required": false
                },
                "success": {
                  "name": "success",
                  "type": "boolean",
                  "required": false
                },
                "timestamp": {
                  "name": "timestamp",
                  "type": "integer",
                  "required": false
                }
              }
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "get",
          "uri": "/api/v1/report/search",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "DeleteReport",
        "config": {
          "path": "/api/v1/report/delete",
          "method": "delete",
          "tags": [
            "报告"
          ],
          "title": "删除报告",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "ids": {
                    "name": "ids",
                    "type": "array",
                    "required": false,
                    "items": {}
                  }
                }
              }
            }
          },
          "response": [
            {
              "code": "200",
              "title": "成功",
              "properties": {}
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "delete",
          "uri": "/api/v1/report/delete",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "CreateReport",
        "config": {
          "path": "/api/v1/report/create",
          "method": "post",
          "tags": [
            "报告"
          ],
          "title": "根据模板创建报告",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "origin_mode": {
                    "name": "origin_mode",
                    "type": "string",
                    "title": "原模板名称",
                    "required": false
                  },
                  "origin_value": {
                    "name": "origin_value",
                    "type": "integer",
                    "title": "原值",
                    "required": false
                  }
                }
              }
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
                "result": {
                  "name": "result",
                  "type": "object",
                  "required": true,
                  "items": {
                    "report_id": {
                      "name": "report_id",
                      "type": "integer",
                      "required": true
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
          "method": "post",
          "uri": "/api/v1/report/create",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "CopyReport",
        "config": {
          "path": "/api/v1/report/copy",
          "method": "post",
          "tags": [
            "报告"
          ],
          "title": "复制",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "report_id": {
                    "name": "report_id",
                    "type": "integer",
                    "title": "报告ID",
                    "required": false
                  }
                }
              }
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
                  "type": "object",
                  "required": true,
                  "items": {
                    "report_id": {
                      "name": "report_id",
                      "type": "integer",
                      "required": true
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
          "method": "post",
          "uri": "/api/v1/report/copy",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "EditReport",
        "config": {
          "path": "/api/v1/report/edit",
          "method": "put",
          "tags": [
            "报告"
          ],
          "title": "编辑报告名称",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "report_id": {
                    "name": "report_id",
                    "type": "integer",
                    "title": "报告id",
                    "required": false
                  },
                  "report_name": {
                    "name": "report_name",
                    "type": "string",
                    "title": "报告名",
                    "required": false
                  }
                }
              }
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
                "result": {
                  "name": "result",
                  "type": "object",
                  "required": true,
                  "items": {}
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
          "method": "PUT",
          "uri": "/api/v1/report/edit",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "TemplateList",
        "config": {
          "path": "/api/v1/report/template/search",
          "method": "get",
          "tags": [
            "模板管理"
          ],
          "title": "获取模板列表",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "page": {
                "description": "",
                "name": "page",
                "type": "integer",
                "required": false
              },
              "page_size": {
                "description": "",
                "name": "page_size",
                "type": "integer",
                "required": false
              },
              "template_name": {
                "description": "",
                "name": "template_name",
                "type": "string",
                "required": false
              },
              "order_by": {
                "description": "",
                "name": "order_by",
                "type": "string",
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
                  "required": false
                },
                "request_id": {
                  "name": "request_id",
                  "type": "string",
                  "required": false
                },
                "data": {
                  "name": "data",
                  "type": "array",
                  "required": false,
                  "items": {
                    "create_by": {
                      "name": "create_by",
                      "type": "string",
                      "title": "创建人",
                      "required": false
                    },
                    "created_on": {
                      "name": "created_on",
                      "type": "string",
                      "title": "创建时间",
                      "required": false
                    },
                    "docx_id": {
                      "name": "docx_id",
                      "type": "integer",
                      "title": "文档id",
                      "required": false
                    },
                    "id": {
                      "name": "id",
                      "type": "integer",
                      "title": "id",
                      "required": true
                    },
                    "is_delete": {
                      "name": "is_delete",
                      "type": "integer",
                      "title": "是否删除",
                      "required": false
                    },
                    "template_name": {
                      "name": "template_name",
                      "type": "string",
                      "title": "模板名称",
                      "required": true
                    },
                    "updated_on": {
                      "name": "updated_on",
                      "type": "string",
                      "title": "更新时间",
                      "required": false
                    }
                  }
                },
                "status": {
                  "name": "status",
                  "type": "integer",
                  "required": false
                },
                "success": {
                  "name": "success",
                  "type": "boolean",
                  "required": false
                },
                "timestamp": {
                  "name": "timestamp",
                  "type": "integer",
                  "required": false
                }
              }
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "get",
          "uri": "/api/v1/report/template/search",
          "params": {},
          "headers": {}
        }
      },
      {
        "type": "http",
        "isInit": true,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/basedata/company_names"
        },
        "id": "CustomerList"
      }
    ]
  },
  "state": {
    "reportLsitList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "currentEditRecord": {
      "type": "JSExpression",
      "value": "{}"
    },
    "isShowCreateReportLsitModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowCreateReportLsitModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshReportLsit]"
    },
    "copyReportReq": {
      "type": "JSExpression",
      "value": "{}"
    },
    "templateListList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "templateOptions": {
      "type": "JSExpression",
      "value": "[]"
    },
    "isShowEditTemplateListModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowEditTemplateListModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshTemplateList]"
    },
    "isShowDetailTemplateListDrawer": {
      "type": "JSExpression",
      "value": "false"
    },
    "showDetailHooks": {
      "type": "JSExpression",
      "value": "[]"
    },
    "customerNameOptions": {
      "type": "JSExpression",
      "value": "[]"
    },
    "isShowCreateTemplateListModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowCreateTemplateListModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshTemplateList]"
    },
    "form5Yy4OnChangeHooks": {
      "type": "JSExpression",
      "value": "[this.handleBasicCInitialValueReaction]"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  this.dataSourceMap['CustomerList'].load().then(res => {\n    if (res && res.result.company_names) {\n      this.setState({\n        customerNameOptions: res.result.company_names.map(item => {\n          return {\n            label: item,\n            key: item,\n            value: item\n          };\n        })\n      });\n    }\n  });\n}",
      "source": "function componentDidMount() {\n  this.dataSourceMap['CustomerList'].load().then(res => {\n    if (res && res.result.company_names) {\n      this.setState({\n        customerNameOptions: res.result.company_names.map(item => {\n          return {\n            label: item,\n            key: item,\n            value: item\n          };\n        })\n      });\n    }\n  });\n}"
    }
  },
  "methods": {
    "getReportLsit": {
      "type": "JSFunction",
      "value": "async function getReportLsit(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['ReportLsit'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}",
      "source": "async function getReportLsit(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['ReportLsit'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}"
    },
    "refreshReportLsit": {
      "type": "JSFunction",
      "value": "function refreshReportLsit() {\n  this.$('table_ReportLsit_ref').reload();\n}",
      "source": "function refreshReportLsit() {\n  this.$('table_ReportLsit_ref').reload();\n}"
    },
    "handleEditReportLsitBtnClick": {
      "type": "JSFunction",
      "value": "function handleEditReportLsitBtnClick(e, params) {\n  console.log(\"params:\", params);\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": {\n        report_name: params.record.name,\n        report_id: params.record.id\n      }\n    });\n  }\n\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?report_id=${params.record.id}&origin_mode=ReportInstance`);\n  }\n}",
      "source": "function handleEditReportLsitBtnClick(e, params) {\n  console.log(\"params:\", params);\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": {\n        report_name: params.record.name,\n        report_id: params.record.id\n      }\n    });\n  }\n\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?report_id=${params.record.id}&origin_mode=ReportInstance`);\n  }\n}"
    },
    "handleCreateReportLsitBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateReportLsitBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateReportLsitModal\": isShow\n  });\n  this.getAllTemplateList();\n}",
      "source": "function handleCreateReportLsitBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateReportLsitModal\": isShow\n  });\n  this.getAllTemplateList();\n}"
    },
    "copyReportreportIdOnChange": {
      "type": "JSFunction",
      "value": "function copyReportreportIdOnChange(e, report_id) {\n  this.setState({\n    copyReportReq: {\n      \"report_id\": report_id\n    }\n  }, () => {\n    this.handleCopyReportReq();\n  });\n}",
      "source": "function copyReportreportIdOnChange(e, report_id) {\n  this.setState({\n    copyReportReq: {\n      \"report_id\": report_id\n    }\n  }, () => {\n    this.handleCopyReportReq();\n  });\n}"
    },
    "handleCopyReportReq": {
      "type": "JSFunction",
      "value": "function handleCopyReportReq() {\n  this.dataSourceMap['CopyReport'].load(this.state.copyReportReq).then(res => {\n    console.log(res);\n    if (res.result) {\n      this.refreshReportLsit();\n      // this.state.handleCopyReportReqHooks.forEach(func => {\n      //   func(res.data);\n      // });\n    }\n  });\n}",
      "source": "function handleCopyReportReq() {\n  this.dataSourceMap['CopyReport'].load(this.state.copyReportReq).then(res => {\n    console.log(res);\n    if (res.result) {\n      this.refreshReportLsit();\n      // this.state.handleCopyReportReqHooks.forEach(func => {\n      //   func(res.data);\n      // });\n    }\n  });\n}"
    },
    "handleDeleteReport": {
      "type": "JSFunction",
      "value": "function handleDeleteReport(e, params) {\n  const ids = [params.id];\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['DeleteReport'].load({\n    ids\n  }).then(res => {\n    this.refreshReportLsit();\n  });\n}",
      "source": "function handleDeleteReport(e, params) {\n  const ids = [params.id];\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['DeleteReport'].load({\n    ids\n  }).then(res => {\n    this.refreshReportLsit();\n  });\n}"
    },
    "getAllTemplateList": {
      "type": "JSFunction",
      "value": "function getAllTemplateList(params) {\n  this.dataSourceMap['TemplateList'].load(params).then(res => {\n    this.setState({\n      templateListList: res.result.data\n    }, () => {\n      this.setState({\n        templateOptions: this.getTemplateOption()\n      });\n    });\n  });\n}",
      "source": "function getAllTemplateList(params) {\n  this.dataSourceMap['TemplateList'].load(params).then(res => {\n    this.setState({\n      templateListList: res.result.data\n    }, () => {\n      this.setState({\n        templateOptions: this.getTemplateOption()\n      });\n    });\n  });\n}"
    },
    "getTemplateOption": {
      "type": "JSFunction",
      "value": "function getTemplateOption() {\n  return this.state.templateListList.map(tpl => {\n    return {\n      label: tpl.template_name,\n      value: tpl.id,\n      key: tpl.id\n    };\n  });\n}",
      "source": "function getTemplateOption() {\n  return this.state.templateListList.map(tpl => {\n    return {\n      label: tpl.template_name,\n      value: tpl.id,\n      key: tpl.id\n    };\n  });\n}"
    },
    "getTemplateList": {
      "type": "JSFunction",
      "value": "async function getTemplateList(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['TemplateList'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}",
      "source": "async function getTemplateList(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['TemplateList'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}"
    },
    "refreshTemplateList": {
      "type": "JSFunction",
      "value": "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}",
      "source": "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}"
    },
    "handleEditTemplateListBtnClick": {
      "type": "JSFunction",
      "value": "function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    });\n  }\n\n  // 更新可见状态\n  this.setState({\n    \"isShowEditTemplateListModal\": params.isShow\n  });\n}",
      "source": "function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    });\n  }\n\n  // 更新可见状态\n  this.setState({\n    \"isShowEditTemplateListModal\": params.isShow\n  });\n}"
    },
    "handleCreateTemplateBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$('form_5yy4').getFieldsValue();\n  this.dataSourceMap['CreateReport'].load({\n    ...values,\n    origin_mode: \"template\",\n    year: values.year.format('YYYY')\n  }).then(res => {\n    this.utils.handleCreateReport(res.result.report_id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  });\n}",
      "source": "function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$('form_5yy4').getFieldsValue();\n  this.dataSourceMap['CreateReport'].load({\n    ...values,\n    origin_mode: \"template\",\n    year: values.year.format('YYYY')\n  }).then(res => {\n    this.utils.handleCreateReport(res.result.report_id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  });\n}"
    },
    "handleDetailTemplateListBtnClick": {
      "type": "JSFunction",
      "value": "function handleDetailTemplateListBtnClick(e, params) {\n  // 更新可见状态\n  this.setState({\n    \"isShowDetailTemplateListDrawer\": params.isShow\n  }, () => {\n    if (params.record && this.state.showDetailHooks && this.state.showDetailHooks.length > 0) {\n      this.state.showDetailHooks.forEach(func => {\n        func(params.record);\n      });\n    }\n  });\n}",
      "source": "function handleDetailTemplateListBtnClick(e, params) {\n  // 更新可见状态\n  this.setState({\n    \"isShowDetailTemplateListDrawer\": params.isShow\n  }, () => {\n    if (params.record && this.state.showDetailHooks && this.state.showDetailHooks.length > 0) {\n      this.state.showDetailHooks.forEach(func => {\n        func(params.record);\n      });\n    }\n  });\n}"
    },
    "handleCreateTemplateListBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateTemplateListBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateTemplateListModal\": isShow\n  });\n}",
      "source": "function handleCreateTemplateListBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateTemplateListModal\": isShow\n  });\n}"
    },
    "handleSelectTmp": {
      "type": "JSFunction",
      "value": "function handleSelectTmp(event, extParams) {\n  // 点击按钮时的回调\n  if (extParams && this.utils.handleCreateReport) {\n    this.utils.handleCreateReport(extParams.id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  }\n}",
      "source": "function handleSelectTmp(event, extParams) {\n  // 点击按钮时的回调\n  if (extParams && this.utils.handleCreateReport) {\n    this.utils.handleCreateReport(extParams.id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  }\n}"
    },
    "handleForm5Yy4CInitialValue": {
      "type": "JSFunction",
      "value": "function handleForm5Yy4CInitialValue(cname, year) {\n  return (cname ?? \"\") + (year ?? \"\") + \"信用评级报告\";\n}",
      "source": "function handleForm5Yy4CInitialValue(cname, year) {\n  return (cname ?? \"\") + (year ?? \"\") + \"信用评级报告\";\n}"
    },
    "form5Yy4OnChange": {
      "type": "JSFunction",
      "value": "function form5Yy4OnChange(val, values) {\n  this.state.form5Yy4OnChangeHooks.forEach(func => {\n    func(values);\n  });\n}",
      "source": "function form5Yy4OnChange(val, values) {\n  this.state.form5Yy4OnChangeHooks.forEach(func => {\n    func(values);\n  });\n}"
    },
    "handleBasicCInitialValueReaction": {
      "type": "JSFunction",
      "value": "function handleBasicCInitialValueReaction(value) {\n  if (!value.report_name && value.company_name && value.year) {\n    this.$('form_5yy4').setFieldsValue({\n      ...value,\n      report_name: this.handleForm5Yy4CInitialValue(value.company_name, value.year.format('YYYY'))\n    });\n  }\n}",
      "source": "function handleBasicCInitialValueReaction(value) {\n  if (!value.report_name && value.company_name && value.year) {\n    this.$('form_5yy4').setFieldsValue({\n      ...value,\n      report_name: this.handleForm5Yy4CInitialValue(value.company_name, value.year.format('YYYY'))\n    });\n  }\n}"
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
        "ReportLsit": {
          "create_by": {
            "name": "create_by",
            "type": "string",
            "title": "作者",
            "required": false
          },
          "created_on": {
            "name": "created_on",
            "type": "string",
            "title": "创建时间",
            "required": false
          },
          "docx_id": {
            "name": "docx_id",
            "type": "integer",
            "title": "文档id",
            "required": false
          },
          "id": {
            "name": "id",
            "type": "integer",
            "title": "id",
            "required": false
          },
          "is_delete": {
            "name": "is_delete",
            "type": "integer",
            "title": "已删除",
            "required": false
          },
          "name": {
            "name": "name",
            "type": "string",
            "title": "名称",
            "required": false
          },
          "origin_mode": {
            "name": "origin_mode",
            "type": "string",
            "title": "原模式",
            "required": false
          },
          "origin_value": {
            "name": "origin_value",
            "type": "string",
            "title": "原值",
            "required": false
          },
          "updated_on": {
            "name": "updated_on",
            "type": "string",
            "title": "更新于",
            "required": false
          }
        },
        "EditReport": {
          "report_id": {
            "name": "report_id",
            "type": "integer",
            "title": "报告id",
            "required": false
          },
          "report_name": {
            "name": "report_name",
            "type": "string",
            "title": "报告名",
            "required": false
          }
        },
        "TemplateList": {
          "create_by": {
            "name": "create_by",
            "type": "string",
            "title": "创建人",
            "required": false
          },
          "created_on": {
            "name": "created_on",
            "type": "string",
            "title": "创建时间",
            "required": false
          },
          "docx_id": {
            "name": "docx_id",
            "type": "integer",
            "title": "文档id",
            "required": false
          },
          "id": {
            "name": "id",
            "type": "integer",
            "title": "id",
            "required": true
          },
          "is_delete": {
            "name": "is_delete",
            "type": "integer",
            "title": "是否删除",
            "required": false
          },
          "template_name": {
            "name": "template_name",
            "type": "string",
            "title": "模板名称",
            "required": true
          },
          "updated_on": {
            "name": "updated_on",
            "type": "string",
            "title": "更新时间",
            "required": false
          }
        }
      }
    },
    "reaction": {
      "form_5yy4": {
        "c": {
          "name": "c",
          "formRef": "form_5yy4",
          "depsList": [
            {
              "key": "332004",
              "index": 0,
              "name": "a",
              "variableName": "cname"
            },
            {
              "key": "332539",
              "index": 1,
              "name": "b",
              "variableName": "year"
            }
          ],
          "reaction": {
            "value": "",
            "initialValue": "cname ?? \"\" + year ?? “” + \"信用评级报告\""
          }
        }
      }
    }
  },
  "originCode": "class Page extends Component {\n  state = {\n    \"reportLsitList\": [],\n    \"currentEditRecord\": {},\n    \"isShowCreateReportLsitModal\": false,\n    \"isShowCreateReportLsitModalHooks\": [this.refreshReportLsit],\n    \"copyReportReq\": {},\n    // \"handleCopyReportReqHooks\": [this.refreshReportLsit],\n    \"templateListList\": [],\n    \"templateOptions\": [],\n    \"isShowEditTemplateListModal\": false,\n    \"isShowEditTemplateListModalHooks\": [this.refreshTemplateList],\n    \"isShowDetailTemplateListDrawer\": false,\n    \"showDetailHooks\": [],\n    \"customerNameOptions\": [],\n    \"isShowCreateTemplateListModal\": false,\n    \"isShowCreateTemplateListModalHooks\": [this.refreshTemplateList],\n    \"form5Yy4OnChangeHooks\": [this.handleBasicCInitialValueReaction],\n  }\n  \n  componentDidMount() {\n    this.dataSourceMap['CustomerList'].load().then(res=>{\n      if (res && res.result.company_names){\n        this.setState({\n          customerNameOptions: res.result.company_names.map(item => {\n            return {\n              label: item ,\n              key : item ,\n              value: item ,\n            }\n          })\n        })\n        \n      }\n    });\n  }\n\n  async getReportLsit(params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const {\n      pageSize,\n      current\n    } = params;\n    const result = await this.dataSourceMap['ReportLsit'].load({\n      ...params,\n      page: current,\n      page_size: pageSize\n    });\n    return {\n      data: result.result.data,\n      total: result.result.total\n    };\n  }\n  refreshReportLsit() {\n    this.$('table_ReportLsit_ref').reload();\n  }\n  handleEditReportLsitBtnClick(e, params) {\n    console.log(\"params:\", params);\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        \"currentEditRecord\": {\n          report_name: params.record.name,\n          report_id: params.record.id\n        }\n      });\n    }\n    \n    // 更新可见状态\n    if (this.utils.routeTo) {\n      this.utils.routeTo(`/report/office?report_id=${params.record.id}&origin_mode=ReportInstance`);\n    }\n  }\n  handleCreateReportLsitBtnClick(e, isShow) {\n    // 更新可见状态\n    this.setState({\n      \"isShowCreateReportLsitModal\": isShow\n    });\n    this.getAllTemplateList();\n  }\n  copyReportreportIdOnChange(e, report_id) {\n    this.setState({\n      copyReportReq: {\n        \"report_id\": report_id\n      }\n    }, () => {\n      this.handleCopyReportReq();\n    });\n  }\n  handleCopyReportReq() {\n    this.dataSourceMap['CopyReport'].load(this.state.copyReportReq).then(res => {\n      console.log(res);\n      if (res.result) {\n        this.refreshReportLsit();\n        // this.state.handleCopyReportReqHooks.forEach(func => {\n        //   func(res.data);\n        // });\n      }\n    });\n  }\n  handleDeleteReport(e, params) {\n    const ids = [params.id];\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    return this.dataSourceMap['DeleteReport'].load({\n      ids\n    }).then(res => {\n      this.refreshReportLsit();\n    });\n  }\n  getAllTemplateList(params) {\n    this.dataSourceMap['TemplateList'].load(params).then(res => {\n      this.setState({\n        templateListList: res.result.data\n      }, () => {\n        this.setState({\n          templateOptions: this.getTemplateOption()\n        });\n      });\n    });\n  }\n  getTemplateOption() {\n    return this.state.templateListList.map(tpl => {\n      return {\n        label: tpl.template_name,\n        value: tpl.id,\n        key: tpl.id\n      };\n    });\n  }\n  async getTemplateList(params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const {\n      pageSize,\n      current\n    } = params;\n    const result = await this.dataSourceMap['TemplateList'].load({\n      ...params,\n      page: current,\n      page_size: pageSize\n    });\n    return {\n      data: result.result.data,\n      total: result.result.total\n    };\n  }\n  refreshTemplateList() {\n    this.$('table_TemplateList_ref').reload();\n  }\n  handleEditTemplateListBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        \"currentEditRecord\": params.record\n      });\n    }\n    \n    // 更新可见状态\n    this.setState({\n      \"isShowEditTemplateListModal\": params.isShow\n    });\n  }\n  handleCreateTemplateBtnClick() {\n    // 获取表单字段值\n    const values = this.$('form_5yy4').getFieldsValue();\n    this.dataSourceMap['CreateReport'].load({\n      ...values,\n      origin_mode: \"template\",\n      year: values.year.format('YYYY')\n    }).then(res => {\n      \n      this.utils.handleCreateReport(res.result.report_id);\n      this.setState({\n        isShowCreateReportLsitModal: false\n      });\n    });\n  }\n  handleDetailTemplateListBtnClick(e, params) {\n    // 更新可见状态\n    this.setState({\n      \"isShowDetailTemplateListDrawer\": params.isShow\n    }, () => {\n      if (params.record && this.state.showDetailHooks && this.state.showDetailHooks.length > 0) {\n        this.state.showDetailHooks.forEach(func => {\n          func(params.record);\n        });\n      }\n    });\n  }\n  handleCreateTemplateListBtnClick(e, isShow) {\n    // 更新可见状态\n    this.setState({\n      \"isShowCreateTemplateListModal\": isShow\n    });\n  }\n  handleSelectTmp(event, extParams) {\n    // 点击按钮时的回调\n    if (extParams && this.utils.handleCreateReport) {\n      this.utils.handleCreateReport(extParams.id);\n      this.setState({\n        isShowCreateReportLsitModal: false\n      });\n    }\n  }\n  handleForm5Yy4CInitialValue(cname, year) {\n    return (cname ?? \"\") + (year  ?? \"\") + \"信用评级报告\";\n\n  }\n  form5Yy4OnChange(val, values) {\n    this.state.form5Yy4OnChangeHooks.forEach(func => {\n      func(values);\n    });\n  }\n  handleBasicCInitialValueReaction(value) {\n   \n    if (!value.report_name && value.company_name && value.year) {\n      this.$('form_5yy4').setFieldsValue({\n        ...value,\n        report_name: this.handleForm5Yy4CInitialValue(value.company_name, value.year.format('YYYY'))\n      })\n    }\n  }\n\n}",
  "children": [
    {
      "componentName": "Modal",
      "id": "node_oclvm268iu1",
      "props": {
        "title": "创建报告",
        "okText": "确认",
        "cancelText": "取消",
        "visible": {
          "type": "JSExpression",
          "value": "this.state.isShowCreateReportLsitModal",
          "mock": true
        },
        "destroyOnClose": true,
        "centered": false,
        "closable": true,
        "confirmLoading": false,
        "forceRender": false,
        "keyboard": true,
        "mask": true,
        "maskClosable": true,
        "width": "70%",
        "footer": {
          "type": "JSSlot",
          "value": [
            {
              "componentName": "Button",
              "id": "node_oclvm26rwl2",
              "props": {
                "type": "primary",
                "children": "创建报告",
                "htmlType": "button",
                "size": "middle",
                "shape": "default",
                "icon": "",
                "block": false,
                "danger": false,
                "ghost": false,
                "disabled": false,
                "__events": {
                  "eventDataList": [
                    {
                      "type": "componentEvent",
                      "name": "onClick",
                      "relatedEventName": "handleCreateTemplateBtnClick"
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
                  "value": "function(){return this.handleCreateTemplateBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ],
          "id": "node_oclvm26rwl1"
        },
        "bodyStyle": {},
        "maskStyle": {},
        "_unsafe_MixedSetter_footer_select": "SlotSetter",
        "__events": {
          "eventDataList": [
            {
              "type": "componentEvent",
              "name": "onCancel",
              "relatedEventName": "handleCreateReportLsitBtnClick",
              "paramStr": "false"
            },
            {
              "type": "componentEvent",
              "name": "onOk",
              "relatedEventName": "handleCreateTemplateBtnClick"
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
              "disabled": true
            }
          ]
        },
        "onCancel": {
          "type": "JSFunction",
          "value": "function(){return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false])) }"
        },
        "onOk": {
          "type": "JSFunction",
          "value": "function(){return this.handleCreateTemplateBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        }
      },
      "hidden": true,
      "title": "创建报告",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Form",
          "id": "node_oclvm268iuy",
          "props": {
            "labelCol": {
              "span": 6
            },
            "wrapperCol": {
              "span": 14
            },
            "onValuesChange": {
              "type": "JSFunction",
              "value": "function(){return this.form5Yy4OnChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
            "ref": "form_5yy4",
            "colon": true,
            "hideRequiredMark": false,
            "preserve": true,
            "scrollToFirstError": true,
            "validateMessages": {
              "required": "'${name}' 不能为空"
            },
            "__events": {
              "eventDataList": [
                {
                  "type": "componentEvent",
                  "name": "onValuesChange",
                  "relatedEventName": "form5Yy4OnChange"
                }
              ]
            },
            "values": {
              "type": "JSExpression",
              "value": "this.state.form5Yy4Reaction"
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
              "id": "node_oclvm268iuz",
              "props": {
                "label": "公司名称",
                "labelAlign": "right",
                "colon": true,
                "required": true,
                "noStyle": false,
                "valuePropName": "value",
                "name": "company_name",
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
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Select",
                  "id": "node_oclvm291yk1",
                  "props": {
                    "style": {
                      "width": "100%"
                    },
                    "options": {
                      "type": "JSExpression",
                      "value": "this.state.customerNameOptions"
                    },
                    "allowClear": false,
                    "autoFocus": false,
                    "defaultActiveFirstOption": true,
                    "disabled": false,
                    "labelInValue": false,
                    "showSearch": true,
                    "loading": false,
                    "bordered": true,
                    "optionFilterProp": "value",
                    "tokenSeparators": [],
                    "maxTagCount": 0,
                    "maxTagTextLength": 0,
                    "_unsafe_MixedSetter_options_select": "ExpressionSetter"
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
              "id": "node_oclvm268iu11",
              "props": {
                "label": "选择年份",
                "labelAlign": "right",
                "colon": true,
                "required": true,
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
                "name": "year"
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "DatePicker",
                  "id": "node_oclvm268iu12",
                  "props": {
                    "picker": "year",
                    "format": "YYYY",
                    "allowClear": true,
                    "bordered": true,
                    "showToday": true,
                    "autoFocus": false,
                    "disabled": false,
                    "inputReadOnly": false,
                    "showTime": false,
                    "placeholder": "选择年份",
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
              "id": "node_oclvm268iu13",
              "props": {
                "label": "报告名称",
                "labelAlign": "right",
                "colon": true,
                "required": true,
                "noStyle": false,
                "valuePropName": "value",
                "requiredobj": {
                  "required": true,
                  "message": ""
                },
                "typeobj": {
                  "type": "string",
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
                "name": "report_name",
                "defaultValue": "e333",
                "initialValue": ""
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Input",
                  "id": "node_oclvm268iu14",
                  "props": {
                    "placeholder": "请输入",
                    "bordered": true,
                    "disabled": false
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
              "id": "node_oclvm268iu15",
              "props": {
                "label": "报告模板",
                "name": "origin_value",
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
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Select",
                  "id": "node_oclvm268iu16",
                  "props": {
                    "style": {
                      "width": "100%"
                    },
                    "options": {
                      "type": "JSExpression",
                      "value": "this.state.templateOptions"
                    },
                    "allowClear": false,
                    "autoFocus": false,
                    "defaultActiveFirstOption": true,
                    "disabled": false,
                    "labelInValue": false,
                    "showSearch": false,
                    "size": "middle",
                    "loading": false,
                    "bordered": true,
                    "filterOption": true,
                    "optionFilterProp": "value",
                    "tokenSeparators": [],
                    "maxTagCount": 0,
                    "maxTagTextLength": 0,
                    "_unsafe_MixedSetter_options_select": "ExpressionSetter"
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
    },
    {
      "componentName": "Modal",
      "id": "node_oclvgn9dyy6",
      "props": {
        "title": "选择模板",
        "width": "70%",
        "okText": "确认",
        "cancelText": "取消",
        "visible": false,
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
              "relatedEventName": "handleCreateReportLsitBtnClick",
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
          "value": "function(){\n    return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}"
        },
        "footer": " ",
        "_unsafe_MixedSetter_footer_select": "StringSetter"
      },
      "docId": "doclvgna3tm",
      "hidden": true,
      "title": "创建",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "ProTable",
          "id": "node_oclvjd4dmz1",
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
                  "id": "node_oclvjd4dmza",
                  "props": {
                    "type": "primary",
                    "children": "新增",
                    "htmlType": "button",
                    "size": "middle",
                    "shape": "default",
                    "icon": {
                      "type": "JSSlot",
                      "value": [
                        {
                          "componentName": "Icon",
                          "id": "node_oclvjd4dmzd",
                          "props": {
                            "type": "PlusOutlined",
                            "size": 16,
                            "rotate": 0,
                            "spin": false,
                            "__component_name": "Icon"
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": ""
                        }
                      ],
                      "id": "node_oclvjd4dmzb"
                    },
                    "block": false,
                    "danger": false,
                    "ghost": false,
                    "disabled": false,
                    "__component_name": "Button",
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onClick",
                          "relatedEventName": "handleCreateTemplateListBtnClick",
                          "paramStr": "true"
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
                      "value": "function(){return this.handleCreateTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                }
              ],
              "id": "node_oclvjd4dmz2"
            },
            "style": {
              "width": "100%"
            },
            "__component_name": "ProTable",
            "ref": "table_TemplateList_ref",
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
                "title": "创建人",
                "dataIndex": "create_by",
                "key": "create_by",
                "valueType": "text",
                "required": false,
                "align": "left",
                "hideInSearch": true
              },
              {
                "title": "创建时间",
                "dataIndex": "created_on",
                "key": "created_on",
                "valueType": "text",
                "required": false,
                "align": "left",
                "hideInSearch": true,
                "fixed": "",
                "hideInTable": true
              },
              {
                "title": "文档id",
                "dataIndex": "docx_id",
                "key": "docx_id",
                "valueType": "digit",
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
                "required": true,
                "align": "left",
                "hideInSearch": true,
                "fixed": ""
              },
              {
                "title": "是否删除",
                "dataIndex": "is_delete",
                "key": "is_delete",
                "valueType": "digit",
                "required": false,
                "align": "left",
                "hideInSearch": true,
                "fixed": "",
                "hideInTable": true
              },
              {
                "title": "模板名称",
                "dataIndex": "template_name",
                "key": "template_name",
                "valueType": "text",
                "required": true,
                "align": "left",
                "hideInSearch": false
              },
              {
                "title": "更新时间",
                "dataIndex": "updated_on",
                "key": "updated_on",
                "valueType": "text",
                "required": false,
                "align": "left",
                "hideInSearch": true
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
                      "id": "node_oclvjd4dmzh",
                      "props": {
                        "type": "link",
                        "children": "选择",
                        "htmlType": "button",
                        "size": "middle",
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
                              "relatedEventName": "handleSelectTmp",
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
                          "value": "function(){return this.handleSelectTmp.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ],
                  "id": "node_oclvjd4dmze"
                },
                "hideInSearch": true,
                "hideInTable": false
              }
            ],
            "request": {
              "type": "JSExpression",
              "value": "this.getTemplateList"
            },
            "dateFormatter": "string"
          },
          "hidden": false,
          "title": "获取模板列表",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": ""
        }
      ]
    },
    {
      "componentName": "ProTable",
      "id": "node_oclvgn9dyy7",
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
              "id": "node_oclvm27asj1",
              "props": {
                "type": "primary",
                "children": "新增报告",
                "htmlType": "button",
                "size": "middle",
                "shape": "default",
                "icon": "",
                "block": false,
                "danger": false,
                "ghost": false,
                "disabled": false,
                "__events": {
                  "eventDataList": [
                    {
                      "type": "componentEvent",
                      "name": "onClick",
                      "relatedEventName": "handleCreateReportLsitBtnClick",
                      "paramStr": "true"
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
                  "value": "function(){return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            },
          ],
          "id": "node_oclvgn9dyy8"
        },
        "style": {
          "width": "100%"
        },
        "__component_name": "ProTable",
        "ref": "table_ReportLsit_ref",
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
            "title": "名称",
            "dataIndex": "name",
            "key": "name",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": false,
            "fixed": ""
          },
          {
            "title": "作者",
            "dataIndex": "create_by",
            "key": "create_by",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true
          },
          {
            "title": "创建时间",
            "dataIndex": "created_on",
            "key": "created_on",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "文档id",
            "dataIndex": "docx_id",
            "key": "docx_id",
            "valueType": "digit",
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
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "已删除",
            "dataIndex": "is_delete",
            "key": "is_delete",
            "valueType": "digit",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "原模式",
            "dataIndex": "origin_mode",
            "key": "origin_mode",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "原值",
            "dataIndex": "origin_value",
            "key": "origin_value",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "更新于",
            "dataIndex": "updated_on",
            "key": "updated_on",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true
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
                  "id": "node_oclvgn9dyyl",
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
                          "relatedEventName": "handleEditReportLsitBtnClick",
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
                      "value": "function(){return this.handleEditReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([{\n  \"isShow\": true,\n  \"record\": this.record\n}\n])) }"
                    }
                  },
                  "docId": "doclvgna3tm",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                },
                {
                  "componentName": "Button",
                  "id": "node_oclvgna1ut1",
                  "props": {
                    "type": "link",
                    "children": "复制",
                    "htmlType": "button",
                    "size": "middle",
                    "shape": "default",
                    "icon": "",
                    "block": false,
                    "danger": false,
                    "ghost": false,
                    "disabled": false,
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onClick",
                          "relatedEventName": "copyReportreportIdOnChange",
                          "paramStr": "this.record.id"
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
                      "value": "function(){return this.copyReportreportIdOnChange.apply(this,Array.prototype.slice.call(arguments).concat([this.record.id])) }"
                    }
                  },
                  "docId": "doclvgna3tm",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                },
                {
                  "componentName": "Popconfirm",
                  "id": "node_oclvgna1ut7",
                  "props": {
                    "title": "确定删除?",
                    "okType": "primary",
                    "okText": "确定",
                    "cancelText": "取消",
                    "style": {
                      "color": "#d0021b"
                    },
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onConfirm",
                          "relatedEventName": "handleDeleteReport",
                          "paramStr": "this.record"
                        }
                      ],
                      "eventList": [
                        {
                          "name": "onConfirm",
                          "template": "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
                          "disabled": true
                        }
                      ]
                    },
                    "onConfirm": {
                      "type": "JSFunction",
                      "value": "function(){return this.handleDeleteReport.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                    }
                  },
                  "docId": "doclvgna3tm",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node_oclvgna1ut8",
                      "props": {
                        "children": "删除",
                        "htmlType": "button",
                        "type": "link",
                        "size": "middle",
                        "shape": "default",
                        "icon": "",
                        "block": false,
                        "danger": false,
                        "ghost": false,
                        "disabled": false,
                        "style": {
                          "color": "#d0021b"
                        }
                      },
                      "docId": "doclvgna3tm",
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ]
                }
              ],
              "id": "node_oclvgn9dyyk"
            }
          }
        ],
        "request": {
          "type": "JSExpression",
          "value": "this.getReportLsit"
        },
        "dateFormatter": "string"
      },
      "docId": "doclvgna3tm",
      "hidden": false,
      "title": "报告列表",
      "description": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }
  ]
}

const backup = {
  "componentName": "Page",
  "id": "node_oclvgn9dwo1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "docId": "doclvgna3tm",
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "isInit": false,
        "type": "http",
        "id": "ReportLsit",
        "config": {
          "path": "/api/v1/report/search",
          "method": "get",
          "tags": [
            "报告"
          ],
          "title": "报告列表",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "page": {
                "description": "",
                "name": "page",
                "type": "integer",
                "required": false
              },
              "page_size": {
                "description": "",
                "name": "page_size",
                "type": "integer",
                "required": false
              },
              "report_name": {
                "description": "",
                "name": "report_name",
                "type": "string",
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
                  "required": false
                },
                "request_id": {
                  "name": "request_id",
                  "type": "string",
                  "required": false
                },
                "data": {
                  "name": "data",
                  "type": "object",
                  "required": false,
                  "items": {
                    "items": {
                      "name": "items",
                      "type": "array",
                      "required": false,
                      "items": {
                        "create_by": {
                          "name": "create_by",
                          "type": "string",
                          "title": "作者",
                          "required": false
                        },
                        "created_on": {
                          "name": "created_on",
                          "type": "string",
                          "title": "创建时间",
                          "required": false
                        },
                        "docx_id": {
                          "name": "docx_id",
                          "type": "integer",
                          "title": "文档id",
                          "required": false
                        },
                        "id": {
                          "name": "id",
                          "type": "integer",
                          "title": "id",
                          "required": false
                        },
                        "is_delete": {
                          "name": "is_delete",
                          "type": "integer",
                          "title": "已删除",
                          "required": false
                        },
                        "name": {
                          "name": "name",
                          "type": "string",
                          "title": "名称",
                          "required": false
                        },
                        "origin_mode": {
                          "name": "origin_mode",
                          "type": "string",
                          "title": "原模式",
                          "required": false
                        },
                        "origin_value": {
                          "name": "origin_value",
                          "type": "string",
                          "title": "原值",
                          "required": false
                        },
                        "updated_on": {
                          "name": "updated_on",
                          "type": "string",
                          "title": "更新于",
                          "required": false
                        }
                      }
                    },
                    "pages": {
                      "name": "pages",
                      "type": "integer",
                      "required": false
                    },
                    "total": {
                      "name": "total",
                      "type": "integer",
                      "required": false
                    }
                  }
                },
                "status": {
                  "name": "status",
                  "type": "integer",
                  "required": false
                },
                "success": {
                  "name": "success",
                  "type": "boolean",
                  "required": false
                },
                "timestamp": {
                  "name": "timestamp",
                  "type": "integer",
                  "required": false
                }
              }
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "get",
          "uri": " /api/v1/report/search"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "DeleteReport",
        "config": {
          "path": "/api/v1/report/delete",
          "method": "delete",
          "tags": [
            "报告"
          ],
          "title": "删除报告",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "ids": {
                    "name": "ids",
                    "type": "array",
                    "required": false,
                    "items": {}
                  }
                }
              }
            }
          },
          "response": [
            {
              "code": "200",
              "title": "成功",
              "properties": {}
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "delete",
          "uri": " /api/v1/report/delete"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "CreateReport",
        "config": {
          "path": "/api/v1/report/create",
          "method": "post",
          "tags": [
            "报告"
          ],
          "title": "根据模板创建报告",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "origin_mode": {
                    "name": "origin_mode",
                    "type": "string",
                    "title": "原模板名称",
                    "required": false
                  },
                  "origin_value": {
                    "name": "origin_value",
                    "type": "integer",
                    "title": "原值",
                    "required": false
                  }
                }
              }
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
                "result": {
                  "name": "result",
                  "type": "object",
                  "required": true,
                  "items": {
                    "report_id": {
                      "name": "report_id",
                      "type": "integer",
                      "required": true
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
          "method": "post",
          "uri": " /api/v1/report/create"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "CopyReport",
        "config": {
          "path": "/api/v1/report/copy",
          "method": "post",
          "tags": [
            "报告"
          ],
          "title": "复制",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "report_id": {
                    "name": "report_id",
                    "type": "integer",
                    "title": "报告ID",
                    "required": false
                  }
                }
              }
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
                  "type": "object",
                  "required": true,
                  "items": {
                    "report_id": {
                      "name": "report_id",
                      "type": "integer",
                      "required": true
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
          "method": "post",
          "uri": " /api/v1/report/copy"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "EditReport",
        "config": {
          "path": "/api/v1/report/edit",
          "method": "put",
          "tags": [
            "报告"
          ],
          "title": "编辑报告名称",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "report_id": {
                    "name": "report_id",
                    "type": "integer",
                    "title": "报告id",
                    "required": false
                  },
                  "report_name": {
                    "name": "report_name",
                    "type": "string",
                    "title": "报告名",
                    "required": false
                  }
                }
              }
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
                "result": {
                  "name": "result",
                  "type": "object",
                  "required": true,
                  "items": {}
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
          "method": "PUT",
          "uri": " /api/v1/report/edit",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "TemplateList",
        "config": {
          "path": "/api/v1/report/template/search",
          "method": "get",
          "tags": [
            "模板管理"
          ],
          "title": "获取模板列表",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "page": {
                "description": "",
                "name": "page",
                "type": "integer",
                "required": false
              },
              "page_size": {
                "description": "",
                "name": "page_size",
                "type": "integer",
                "required": false
              },
              "template_name": {
                "description": "",
                "name": "template_name",
                "type": "string",
                "required": false
              },
              "order_by": {
                "description": "",
                "name": "order_by",
                "type": "string",
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
                  "required": false
                },
                "request_id": {
                  "name": "request_id",
                  "type": "string",
                  "required": false
                },
                "data": {
                  "name": "data",
                  "type": "array",
                  "required": false,
                  "items": {
                    "create_by": {
                      "name": "create_by",
                      "type": "string",
                      "title": "创建人",
                      "required": false
                    },
                    "created_on": {
                      "name": "created_on",
                      "type": "string",
                      "title": "创建时间",
                      "required": false
                    },
                    "docx_id": {
                      "name": "docx_id",
                      "type": "integer",
                      "title": "文档id",
                      "required": false
                    },
                    "id": {
                      "name": "id",
                      "type": "integer",
                      "title": "id",
                      "required": true
                    },
                    "is_delete": {
                      "name": "is_delete",
                      "type": "integer",
                      "title": "是否删除",
                      "required": false
                    },
                    "template_name": {
                      "name": "template_name",
                      "type": "string",
                      "title": "模板名称",
                      "required": true
                    },
                    "updated_on": {
                      "name": "updated_on",
                      "type": "string",
                      "title": "更新时间",
                      "required": false
                    }
                  }
                },
                "status": {
                  "name": "status",
                  "type": "integer",
                  "required": false
                },
                "success": {
                  "name": "success",
                  "type": "boolean",
                  "required": false
                },
                "timestamp": {
                  "name": "timestamp",
                  "type": "integer",
                  "required": false
                }
              }
            }
          ]
        },
        "options": {
          "isCors": true,
          "timeout": 5000,
          "method": "get",
          "uri": " /api/v1/report/template/search"
        }
      },
      {
        "type": "http",
        "isInit": true,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": " /api/v1/basedata/company_names"
        },
        "id": "CustomerList"
      }
    ]
  },
  "state": {
    "reportLsitList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "currentEditRecord": {
      "type": "JSExpression",
      "value": "{}"
    },
    "isShowCreateReportLsitModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowCreateReportLsitModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshReportLsit]"
    },
    "copyReportReq": {
      "type": "JSExpression",
      "value": "{}"
    },
    "handleCopyReportReqHooks": {
      "type": "JSExpression",
      "value": "[this.refreshReportLsit]"
    },
    "templateListList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "templateOptions": {
      "type": "JSExpression",
      "value": "[]"
    },
    "isShowEditTemplateListModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowEditTemplateListModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshTemplateList]"
    },
    "isShowDetailTemplateListDrawer": {
      "type": "JSExpression",
      "value": "false"
    },
    "showDetailHooks": {
      "type": "JSExpression",
      "value": "[]"
    },
    "customerNameOptions": {
      "type": "JSExpression",
      "value": "[]"
    },
    "isShowCreateTemplateListModal": {
      "type": "JSExpression",
      "value": "false"
    },
    "isShowCreateTemplateListModalHooks": {
      "type": "JSExpression",
      "value": "[this.refreshTemplateList]"
    },
    "form5Yy4OnChangeHooks": {
      "type": "JSExpression",
      "value": "[this.handleBasicCInitialValueReaction]"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  this.dataSourceMap['CustomerList'].load().then(res => {\n    if (res && res.result.company_names) {\n      this.setState({\n        customerNameOptions: res.result.company_names.map(item => {\n          return {\n            label: item,\n            key: item,\n            value: item\n          };\n        })\n      });\n    }\n  });\n}",
      "source": "function componentDidMount() {\n  this.dataSourceMap['CustomerList'].load().then(res => {\n    if (res && res.result.company_names) {\n      this.setState({\n        customerNameOptions: res.result.company_names.map(item => {\n          return {\n            label: item,\n            key: item,\n            value: item\n          };\n        })\n      });\n    }\n  });\n}"
    }
  },
  "methods": {
    "getReportLsit": {
      "type": "JSFunction",
      "value": "async function getReportLsit(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['ReportLsit'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}",
      "source": "async function getReportLsit(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['ReportLsit'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}"
    },
    "refreshReportLsit": {
      "type": "JSFunction",
      "value": "function refreshReportLsit() {\n  this.$('table_ReportLsit_ref').reload();\n}",
      "source": "function refreshReportLsit() {\n  this.$('table_ReportLsit_ref').reload();\n}"
    },
    "handleEditReportLsitBtnClick": {
      "type": "JSFunction",
      "value": "function handleEditReportLsitBtnClick(e, params) {\n  console.log(\"params:\", params);\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": {\n        report_name: params.record.name,\n        report_id: params.record.id\n      }\n    });\n  }\n\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?report_id=${params.record.id}&origin_mode=ReportInstance`);\n  }\n}",
      "source": "function handleEditReportLsitBtnClick(e, params) {\n  console.log(\"params:\", params);\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": {\n        report_name: params.record.name,\n        report_id: params.record.id\n      }\n    });\n  }\n\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?report_id=${params.record.id}&origin_mode=ReportInstance`);\n  }\n}"
    },
    "handleCreateReportLsitBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateReportLsitBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateReportLsitModal\": isShow\n  });\n  this.getAllTemplateList();\n}",
      "source": "function handleCreateReportLsitBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateReportLsitModal\": isShow\n  });\n  this.getAllTemplateList();\n}"
    },
    "copyReportreportIdOnChange": {
      "type": "JSFunction",
      "value": "function copyReportreportIdOnChange(e, report_id) {\n  this.setState({\n    copyReportReq: {\n      \"report_id\": report_id\n    }\n  }, () => {\n    this.handleCopyReportReq();\n  });\n}",
      "source": "function copyReportreportIdOnChange(e, report_id) {\n  this.setState({\n    copyReportReq: {\n      \"report_id\": report_id\n    }\n  }, () => {\n    this.handleCopyReportReq();\n  });\n}"
    },
    "handleCopyReportReq": {
      "type": "JSFunction",
      "value": "function handleCopyReportReq() {\n  this.dataSourceMap['CopyReport'].load(this.state.copyReportReq).then(res => {\n    if ((res.code === 200 || res.code === 201) && res.data) {\n      this.state.handleCopyReportReqHooks.forEach(func => {\n        func(res.data);\n      });\n    }\n  });\n}",
      "source": "function handleCopyReportReq() {\n  this.dataSourceMap['CopyReport'].load(this.state.copyReportReq).then(res => {\n    if ((res.code === 200 || res.code === 201) && res.data) {\n      this.state.handleCopyReportReqHooks.forEach(func => {\n        func(res.data);\n      });\n    }\n  });\n}"
    },
    "handleDeleteReport": {
      "type": "JSFunction",
      "value": "function handleDeleteReport(e, params) {\n  const ids = [params.id];\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['DeleteReport'].load({\n    ids\n  }).then(res => {\n    this.refreshReportLsit();\n  });\n}",
      "source": "function handleDeleteReport(e, params) {\n  const ids = [params.id];\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['DeleteReport'].load({\n    ids\n  }).then(res => {\n    this.refreshReportLsit();\n  });\n}"
    },
    "getAllTemplateList": {
      "type": "JSFunction",
      "value": "function getAllTemplateList(params) {\n  this.dataSourceMap['TemplateList'].load(params).then(res => {\n    this.setState({\n      templateListList: res.result.data\n    }, () => {\n      this.setState({\n        templateOptions: this.getTemplateOption()\n      });\n    });\n  });\n}",
      "source": "function getAllTemplateList(params) {\n  this.dataSourceMap['TemplateList'].load(params).then(res => {\n    this.setState({\n      templateListList: res.result.data\n    }, () => {\n      this.setState({\n        templateOptions: this.getTemplateOption()\n      });\n    });\n  });\n}"
    },
    "getTemplateOption": {
      "type": "JSFunction",
      "value": "function getTemplateOption() {\n  return this.state.templateListList.map(tpl => {\n    return {\n      label: tpl.template_name,\n      value: tpl.id,\n      key: tpl.id\n    };\n  });\n}",
      "source": "function getTemplateOption() {\n  return this.state.templateListList.map(tpl => {\n    return {\n      label: tpl.template_name,\n      value: tpl.id,\n      key: tpl.id\n    };\n  });\n}"
    },
    "getTemplateList": {
      "type": "JSFunction",
      "value": "async function getTemplateList(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['TemplateList'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}",
      "source": "async function getTemplateList(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const {\n    pageSize,\n    current\n  } = params;\n  const result = await this.dataSourceMap['TemplateList'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}"
    },
    "refreshTemplateList": {
      "type": "JSFunction",
      "value": "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}",
      "source": "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}"
    },
    "handleEditTemplateListBtnClick": {
      "type": "JSFunction",
      "value": "function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    });\n  }\n\n  // 更新可见状态\n  this.setState({\n    \"isShowEditTemplateListModal\": params.isShow\n  });\n}",
      "source": "function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    });\n  }\n\n  // 更新可见状态\n  this.setState({\n    \"isShowEditTemplateListModal\": params.isShow\n  });\n}"
    },
    "handleCreateTemplateBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$('form_5yy4').getFieldsValue();\n  this.dataSourceMap['CreateReport'].load({\n    ...values,\n    origin_mode: \"template\",\n    year: values.year.format('YYYY')\n  }).then(res => {\n    this.utils.handleCreateReport(res.result.report_id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  });\n}",
      "source": "function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$('form_5yy4').getFieldsValue();\n  this.dataSourceMap['CreateReport'].load({\n    ...values,\n    origin_mode: \"template\",\n    year: values.year.format('YYYY')\n  }).then(res => {\n    this.utils.handleCreateReport(res.result.report_id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  });\n}"
    },
    "handleDetailTemplateListBtnClick": {
      "type": "JSFunction",
      "value": "function handleDetailTemplateListBtnClick(e, params) {\n  // 更新可见状态\n  this.setState({\n    \"isShowDetailTemplateListDrawer\": params.isShow\n  }, () => {\n    if (params.record && this.state.showDetailHooks && this.state.showDetailHooks.length > 0) {\n      this.state.showDetailHooks.forEach(func => {\n        func(params.record);\n      });\n    }\n  });\n}",
      "source": "function handleDetailTemplateListBtnClick(e, params) {\n  // 更新可见状态\n  this.setState({\n    \"isShowDetailTemplateListDrawer\": params.isShow\n  }, () => {\n    if (params.record && this.state.showDetailHooks && this.state.showDetailHooks.length > 0) {\n      this.state.showDetailHooks.forEach(func => {\n        func(params.record);\n      });\n    }\n  });\n}"
    },
    "handleCreateTemplateListBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateTemplateListBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateTemplateListModal\": isShow\n  });\n}",
      "source": "function handleCreateTemplateListBtnClick(e, isShow) {\n  // 更新可见状态\n  this.setState({\n    \"isShowCreateTemplateListModal\": isShow\n  });\n}"
    },
    "handleSelectTmp": {
      "type": "JSFunction",
      "value": "function handleSelectTmp(event, extParams) {\n  // 点击按钮时的回调\n  if (extParams && this.utils.handleCreateReport) {\n    this.utils.handleCreateReport(extParams.id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  }\n}",
      "source": "function handleSelectTmp(event, extParams) {\n  // 点击按钮时的回调\n  if (extParams && this.utils.handleCreateReport) {\n    this.utils.handleCreateReport(extParams.id);\n    this.setState({\n      isShowCreateReportLsitModal: false\n    });\n  }\n}"
    },
    "handleForm5Yy4CInitialValue": {
      "type": "JSFunction",
      "value": "function handleForm5Yy4CInitialValue(cname, year) {\n  return (cname ?? \"\") + (year ?? \"\") + \"信用评级报告\";\n}",
      "source": "function handleForm5Yy4CInitialValue(cname, year) {\n  return (cname ?? \"\") + (year ?? \"\") + \"信用评级报告\";\n}"
    },
    "form5Yy4OnChange": {
      "type": "JSFunction",
      "value": "function form5Yy4OnChange(val, values) {\n  this.state.form5Yy4OnChangeHooks.forEach(func => {\n    func(values);\n  });\n}",
      "source": "function form5Yy4OnChange(val, values) {\n  this.state.form5Yy4OnChangeHooks.forEach(func => {\n    func(values);\n  });\n}"
    },
    "handleBasicCInitialValueReaction": {
      "type": "JSFunction",
      "value": "function handleBasicCInitialValueReaction(value) {\n  if (!value.report_name && value.company_name && value.year) {\n    this.$('form_5yy4').setFieldsValue({\n      ...value,\n      report_name: this.handleForm5Yy4CInitialValue(value.company_name, value.year.format('YYYY'))\n    });\n  }\n}",
      "source": "function handleBasicCInitialValueReaction(value) {\n  if (!value.report_name && value.company_name && value.year) {\n    this.$('form_5yy4').setFieldsValue({\n      ...value,\n      report_name: this.handleForm5Yy4CInitialValue(value.company_name, value.year.format('YYYY'))\n    });\n  }\n}"
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
        "ReportLsit": {
          "create_by": {
            "name": "create_by",
            "type": "string",
            "title": "作者",
            "required": false
          },
          "created_on": {
            "name": "created_on",
            "type": "string",
            "title": "创建时间",
            "required": false
          },
          "docx_id": {
            "name": "docx_id",
            "type": "integer",
            "title": "文档id",
            "required": false
          },
          "id": {
            "name": "id",
            "type": "integer",
            "title": "id",
            "required": false
          },
          "is_delete": {
            "name": "is_delete",
            "type": "integer",
            "title": "已删除",
            "required": false
          },
          "name": {
            "name": "name",
            "type": "string",
            "title": "名称",
            "required": false
          },
          "origin_mode": {
            "name": "origin_mode",
            "type": "string",
            "title": "原模式",
            "required": false
          },
          "origin_value": {
            "name": "origin_value",
            "type": "string",
            "title": "原值",
            "required": false
          },
          "updated_on": {
            "name": "updated_on",
            "type": "string",
            "title": "更新于",
            "required": false
          }
        },
        "EditReport": {
          "report_id": {
            "name": "report_id",
            "type": "integer",
            "title": "报告id",
            "required": false
          },
          "report_name": {
            "name": "report_name",
            "type": "string",
            "title": "报告名",
            "required": false
          }
        },
        "TemplateList": {
          "create_by": {
            "name": "create_by",
            "type": "string",
            "title": "创建人",
            "required": false
          },
          "created_on": {
            "name": "created_on",
            "type": "string",
            "title": "创建时间",
            "required": false
          },
          "docx_id": {
            "name": "docx_id",
            "type": "integer",
            "title": "文档id",
            "required": false
          },
          "id": {
            "name": "id",
            "type": "integer",
            "title": "id",
            "required": true
          },
          "is_delete": {
            "name": "is_delete",
            "type": "integer",
            "title": "是否删除",
            "required": false
          },
          "template_name": {
            "name": "template_name",
            "type": "string",
            "title": "模板名称",
            "required": true
          },
          "updated_on": {
            "name": "updated_on",
            "type": "string",
            "title": "更新时间",
            "required": false
          }
        }
      }
    },
    "reaction": {
      "form_5yy4": {
        "c": {
          "name": "c",
          "formRef": "form_5yy4",
          "depsList": [
            {
              "key": "332004",
              "index": 0,
              "name": "a",
              "variableName": "cname"
            },
            {
              "key": "332539",
              "index": 1,
              "name": "b",
              "variableName": "year"
            }
          ],
          "reaction": {
            "value": "",
            "initialValue": "cname ?? \"\" + year ?? “” + \"信用评级报告\""
          }
        }
      }
    }
  },
  "originCode": "class Page extends Component {\n  state = {\n    \"reportLsitList\": [],\n    \"currentEditRecord\": {},\n    \"isShowCreateReportLsitModal\": false,\n    \"isShowCreateReportLsitModalHooks\": [this.refreshReportLsit],\n    \"copyReportReq\": {},\n    \"handleCopyReportReqHooks\": [this.refreshReportLsit],\n    \"templateListList\": [],\n    \"templateOptions\": [],\n    \"isShowEditTemplateListModal\": false,\n    \"isShowEditTemplateListModalHooks\": [this.refreshTemplateList],\n    \"isShowDetailTemplateListDrawer\": false,\n    \"showDetailHooks\": [],\n    \"customerNameOptions\": [],\n    \"isShowCreateTemplateListModal\": false,\n    \"isShowCreateTemplateListModalHooks\": [this.refreshTemplateList],\n    \"form5Yy4OnChangeHooks\": [this.handleBasicCInitialValueReaction],\n  }\n  \n  componentDidMount() {\n    this.dataSourceMap['CustomerList'].load().then(res=>{\n      if (res && res.result.company_names){\n        this.setState({\n          customerNameOptions: res.result.company_names.map(item => {\n            return {\n              label: item ,\n              key : item ,\n              value: item ,\n            }\n          })\n        })\n        \n      }\n    });\n  }\n\n  async getReportLsit(params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const {\n      pageSize,\n      current\n    } = params;\n    const result = await this.dataSourceMap['ReportLsit'].load({\n      ...params,\n      page: current,\n      page_size: pageSize\n    });\n    return {\n      data: result.result.data,\n      total: result.result.total\n    };\n  }\n  refreshReportLsit() {\n    this.$('table_ReportLsit_ref').reload();\n  }\n  handleEditReportLsitBtnClick(e, params) {\n    console.log(\"params:\", params);\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        \"currentEditRecord\": {\n          report_name: params.record.name,\n          report_id: params.record.id\n        }\n      });\n    }\n    \n    // 更新可见状态\n    if (this.utils.routeTo) {\n      this.utils.routeTo(`/report/office?report_id=${params.record.id}&origin_mode=ReportInstance`);\n    }\n  }\n  handleCreateReportLsitBtnClick(e, isShow) {\n    // 更新可见状态\n    this.setState({\n      \"isShowCreateReportLsitModal\": isShow\n    });\n    this.getAllTemplateList();\n  }\n  copyReportreportIdOnChange(e, report_id) {\n    this.setState({\n      copyReportReq: {\n        \"report_id\": report_id\n      }\n    }, () => {\n      this.handleCopyReportReq();\n    });\n  }\n  handleCopyReportReq() {\n    this.dataSourceMap['CopyReport'].load(this.state.copyReportReq).then(res => {\n      if ((res.code === 200 || res.code === 201) && res.data) {\n        this.state.handleCopyReportReqHooks.forEach(func => {\n          func(res.data);\n        });\n      }\n    });\n  }\n  handleDeleteReport(e, params) {\n    const ids = [params.id];\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    return this.dataSourceMap['DeleteReport'].load({\n      ids\n    }).then(res => {\n      this.refreshReportLsit();\n    });\n  }\n  getAllTemplateList(params) {\n    this.dataSourceMap['TemplateList'].load(params).then(res => {\n      this.setState({\n        templateListList: res.result.data\n      }, () => {\n        this.setState({\n          templateOptions: this.getTemplateOption()\n        });\n      });\n    });\n  }\n  getTemplateOption() {\n    return this.state.templateListList.map(tpl => {\n      return {\n        label: tpl.template_name,\n        value: tpl.id,\n        key: tpl.id\n      };\n    });\n  }\n  async getTemplateList(params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const {\n      pageSize,\n      current\n    } = params;\n    const result = await this.dataSourceMap['TemplateList'].load({\n      ...params,\n      page: current,\n      page_size: pageSize\n    });\n    return {\n      data: result.result.data,\n      total: result.result.total\n    };\n  }\n  refreshTemplateList() {\n    this.$('table_TemplateList_ref').reload();\n  }\n  handleEditTemplateListBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        \"currentEditRecord\": params.record\n      });\n    }\n    \n    // 更新可见状态\n    this.setState({\n      \"isShowEditTemplateListModal\": params.isShow\n    });\n  }\n  handleCreateTemplateBtnClick() {\n    // 获取表单字段值\n    const values = this.$('form_5yy4').getFieldsValue();\n    this.dataSourceMap['CreateReport'].load({\n      ...values,\n      origin_mode: \"template\",\n      year: values.year.format('YYYY')\n    }).then(res => {\n      \n      this.utils.handleCreateReport(res.result.report_id);\n      this.setState({\n        isShowCreateReportLsitModal: false\n      });\n    });\n  }\n  handleDetailTemplateListBtnClick(e, params) {\n    // 更新可见状态\n    this.setState({\n      \"isShowDetailTemplateListDrawer\": params.isShow\n    }, () => {\n      if (params.record && this.state.showDetailHooks && this.state.showDetailHooks.length > 0) {\n        this.state.showDetailHooks.forEach(func => {\n          func(params.record);\n        });\n      }\n    });\n  }\n  handleCreateTemplateListBtnClick(e, isShow) {\n    // 更新可见状态\n    this.setState({\n      \"isShowCreateTemplateListModal\": isShow\n    });\n  }\n  handleSelectTmp(event, extParams) {\n    // 点击按钮时的回调\n    if (extParams && this.utils.handleCreateReport) {\n      this.utils.handleCreateReport(extParams.id);\n      this.setState({\n        isShowCreateReportLsitModal: false\n      });\n    }\n  }\n  handleForm5Yy4CInitialValue(cname, year) {\n    return (cname ?? \"\") + (year  ?? \"\") + \"信用评级报告\";\n\n  }\n  form5Yy4OnChange(val, values) {\n    this.state.form5Yy4OnChangeHooks.forEach(func => {\n      func(values);\n    });\n  }\n  handleBasicCInitialValueReaction(value) {\n   \n    if (!value.report_name && value.company_name && value.year) {\n      this.$('form_5yy4').setFieldsValue({\n        ...value,\n        report_name: this.handleForm5Yy4CInitialValue(value.company_name, value.year.format('YYYY'))\n      })\n    }\n  }\n\n}",
  "children": [
    {
      "componentName": "Modal",
      "id": "node_oclvm268iu1",
      "props": {
        "title": "创建报告",
        "okText": "确认",
        "cancelText": "取消",
        "visible": {
          "type": "JSExpression",
          "value": "this.state.isShowCreateReportLsitModal",
          "mock": true
        },
        "destroyOnClose": true,
        "centered": false,
        "closable": true,
        "confirmLoading": false,
        "forceRender": false,
        "keyboard": true,
        "mask": true,
        "maskClosable": true,
        "width": "70%",
        "footer": {
          "type": "JSSlot",
          "value": [
            {
              "componentName": "Button",
              "id": "node_oclvm26rwl2",
              "props": {
                "type": "primary",
                "children": "创建报告",
                "htmlType": "button",
                "size": "middle",
                "shape": "default",
                "icon": "",
                "block": false,
                "danger": false,
                "ghost": false,
                "disabled": false,
                "__events": {
                  "eventDataList": [
                    {
                      "type": "componentEvent",
                      "name": "onClick",
                      "relatedEventName": "handleCreateTemplateBtnClick"
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
                  "value": "function(){return this.handleCreateTemplateBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ],
          "id": "node_oclvm26rwl1"
        },
        "bodyStyle": {},
        "maskStyle": {},
        "_unsafe_MixedSetter_footer_select": "SlotSetter",
        "__events": {
          "eventDataList": [
            {
              "type": "componentEvent",
              "name": "onCancel",
              "relatedEventName": "handleCreateReportLsitBtnClick",
              "paramStr": "false"
            },
            {
              "type": "componentEvent",
              "name": "onOk",
              "relatedEventName": "handleCreateTemplateBtnClick"
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
              "disabled": true
            }
          ]
        },
        "onCancel": {
          "type": "JSFunction",
          "value": "function(){return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false])) }"
        },
        "onOk": {
          "type": "JSFunction",
          "value": "function(){return this.handleCreateTemplateBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
        }
      },
      "hidden": true,
      "title": "创建报告",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Form",
          "id": "node_oclvm268iuy",
          "props": {
            "labelCol": {
              "span": 6
            },
            "wrapperCol": {
              "span": 14
            },
            "onValuesChange": {
              "type": "JSFunction",
              "value": "function(){return this.form5Yy4OnChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
            "ref": "form_5yy4",
            "colon": true,
            "hideRequiredMark": false,
            "preserve": true,
            "scrollToFirstError": true,
            "validateMessages": {
              "required": "'${name}' 不能为空"
            },
            "__events": {
              "eventDataList": [
                {
                  "type": "componentEvent",
                  "name": "onValuesChange",
                  "relatedEventName": "form5Yy4OnChange"
                }
              ]
            },
            "values": {
              "type": "JSExpression",
              "value": "this.state.form5Yy4Reaction"
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
              "id": "node_oclvm268iuz",
              "props": {
                "label": "公司名称",
                "labelAlign": "right",
                "colon": true,
                "required": true,
                "noStyle": false,
                "valuePropName": "value",
                "name": "company_name",
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
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Select",
                  "id": "node_oclvm291yk1",
                  "props": {
                    "style": {
                      "width": "100%"
                    },
                    "options": {
                      "type": "JSExpression",
                      "value": "this.state.customerNameOptions"
                    },
                    "allowClear": false,
                    "autoFocus": false,
                    "defaultActiveFirstOption": true,
                    "disabled": false,
                    "labelInValue": false,
                    "showSearch": true,
                    "loading": false,
                    "bordered": true,
                    "optionFilterProp": "value",
                    "tokenSeparators": [],
                    "maxTagCount": 0,
                    "maxTagTextLength": 0,
                    "_unsafe_MixedSetter_options_select": "ExpressionSetter"
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
              "id": "node_oclvm268iu11",
              "props": {
                "label": "选择年份",
                "labelAlign": "right",
                "colon": true,
                "required": true,
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
                "name": "year"
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "DatePicker",
                  "id": "node_oclvm268iu12",
                  "props": {
                    "picker": "year",
                    "format": "YYYY",
                    "allowClear": true,
                    "bordered": true,
                    "showToday": true,
                    "autoFocus": false,
                    "disabled": false,
                    "inputReadOnly": false,
                    "showTime": false,
                    "placeholder": "选择年份",
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
              "id": "node_oclvm268iu13",
              "props": {
                "label": "报告名称",
                "labelAlign": "right",
                "colon": true,
                "required": true,
                "noStyle": false,
                "valuePropName": "value",
                "requiredobj": {
                  "required": true,
                  "message": ""
                },
                "typeobj": {
                  "type": "string",
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
                "name": "report_name",
                "defaultValue": "e333",
                "initialValue": ""
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Input",
                  "id": "node_oclvm268iu14",
                  "props": {
                    "placeholder": "请输入",
                    "bordered": true,
                    "disabled": false
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
              "id": "node_oclvm268iu15",
              "props": {
                "label": "报告模板",
                "name": "origin_value",
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
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Select",
                  "id": "node_oclvm268iu16",
                  "props": {
                    "style": {
                      "width": "100%"
                    },
                    "options": {
                      "type": "JSExpression",
                      "value": "this.state.templateOptions"
                    },
                    "allowClear": false,
                    "autoFocus": false,
                    "defaultActiveFirstOption": true,
                    "disabled": false,
                    "labelInValue": false,
                    "showSearch": false,
                    "size": "middle",
                    "loading": false,
                    "bordered": true,
                    "filterOption": true,
                    "optionFilterProp": "value",
                    "tokenSeparators": [],
                    "maxTagCount": 0,
                    "maxTagTextLength": 0,
                    "_unsafe_MixedSetter_options_select": "ExpressionSetter"
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
    },
    {
      "componentName": "Modal",
      "id": "node_oclvgn9dyy6",
      "props": {
        "title": "选择模板",
        "width": "70%",
        "okText": "确认",
        "cancelText": "取消",
        "visible": false,
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
              "relatedEventName": "handleCreateReportLsitBtnClick",
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
          "value": "function(){\n    return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}"
        },
        "footer": " ",
        "_unsafe_MixedSetter_footer_select": "StringSetter"
      },
      "docId": "doclvgna3tm",
      "hidden": true,
      "title": "创建",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "ProTable",
          "id": "node_oclvjd4dmz1",
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
                  "id": "node_oclvjd4dmza",
                  "props": {
                    "type": "primary",
                    "children": "新增",
                    "htmlType": "button",
                    "size": "middle",
                    "shape": "default",
                    "icon": {
                      "type": "JSSlot",
                      "value": [
                        {
                          "componentName": "Icon",
                          "id": "node_oclvjd4dmzd",
                          "props": {
                            "type": "PlusOutlined",
                            "size": 16,
                            "rotate": 0,
                            "spin": false,
                            "__component_name": "Icon"
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": ""
                        }
                      ],
                      "id": "node_oclvjd4dmzb"
                    },
                    "block": false,
                    "danger": false,
                    "ghost": false,
                    "disabled": false,
                    "__component_name": "Button",
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onClick",
                          "relatedEventName": "handleCreateTemplateListBtnClick",
                          "paramStr": "true"
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
                      "value": "function(){return this.handleCreateTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                }
              ],
              "id": "node_oclvjd4dmz2"
            },
            "style": {
              "width": "100%"
            },
            "__component_name": "ProTable",
            "ref": "table_TemplateList_ref",
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
                "title": "创建人",
                "dataIndex": "create_by",
                "key": "create_by",
                "valueType": "text",
                "required": false,
                "align": "left",
                "hideInSearch": true
              },
              {
                "title": "创建时间",
                "dataIndex": "created_on",
                "key": "created_on",
                "valueType": "text",
                "required": false,
                "align": "left",
                "hideInSearch": true,
                "fixed": "",
                "hideInTable": true
              },
              {
                "title": "文档id",
                "dataIndex": "docx_id",
                "key": "docx_id",
                "valueType": "digit",
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
                "required": true,
                "align": "left",
                "hideInSearch": true,
                "fixed": ""
              },
              {
                "title": "是否删除",
                "dataIndex": "is_delete",
                "key": "is_delete",
                "valueType": "digit",
                "required": false,
                "align": "left",
                "hideInSearch": true,
                "fixed": "",
                "hideInTable": true
              },
              {
                "title": "模板名称",
                "dataIndex": "template_name",
                "key": "template_name",
                "valueType": "text",
                "required": true,
                "align": "left",
                "hideInSearch": false
              },
              {
                "title": "更新时间",
                "dataIndex": "updated_on",
                "key": "updated_on",
                "valueType": "text",
                "required": false,
                "align": "left",
                "hideInSearch": true
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
                      "id": "node_oclvjd4dmzh",
                      "props": {
                        "type": "link",
                        "children": "选择",
                        "htmlType": "button",
                        "size": "middle",
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
                              "relatedEventName": "handleSelectTmp",
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
                          "value": "function(){return this.handleSelectTmp.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ],
                  "id": "node_oclvjd4dmze"
                },
                "hideInSearch": true,
                "hideInTable": false
              }
            ],
            "request": {
              "type": "JSExpression",
              "value": "this.getTemplateList"
            },
            "dateFormatter": "string"
          },
          "hidden": false,
          "title": "获取模板列表",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": ""
        }
      ]
    },
    {
      "componentName": "ProTable",
      "id": "node_oclvgn9dyy7",
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
              "id": "node_oclvm27asj1",
              "props": {
                "type": "primary",
                "children": "新增报告",
                "htmlType": "button",
                "size": "middle",
                "shape": "default",
                "icon": "",
                "block": false,
                "danger": false,
                "ghost": false,
                "disabled": false,
                "__events": {
                  "eventDataList": [
                    {
                      "type": "componentEvent",
                      "name": "onClick",
                      "relatedEventName": "handleCreateReportLsitBtnClick",
                      "paramStr": "true"
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
                  "value": "function(){return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            },
            {
              "componentName": "Button",
              "id": "node_oclvgn9dyyg",
              "props": {
                "type": "primary",
                "children": "新增",
                "htmlType": "button",
                "size": "middle",
                "shape": "default",
                "icon": {
                  "type": "JSSlot",
                  "value": [
                    {
                      "componentName": "Icon",
                      "id": "node_oclvgn9dyyj",
                      "props": {
                        "type": "PlusOutlined",
                        "size": 16,
                        "rotate": 0,
                        "spin": false,
                        "__component_name": "Icon"
                      },
                      "docId": "doclvgna3tm",
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ],
                  "id": "node_oclvgn9dyyh"
                },
                "block": false,
                "danger": false,
                "ghost": false,
                "disabled": false,
                "__component_name": "Button",
                "__events": {
                  "eventDataList": [
                    {
                      "type": "componentEvent",
                      "name": "onClick",
                      "relatedEventName": "handleCreateReportLsitBtnClick",
                      "paramStr": "true"
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
                  "value": "function(){return this.handleCreateReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }"
                }
              },
              "docId": "doclvgna3tm",
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ],
          "id": "node_oclvgn9dyy8"
        },
        "style": {
          "width": "100%"
        },
        "__component_name": "ProTable",
        "ref": "table_ReportLsit_ref",
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
            "title": "名称",
            "dataIndex": "name",
            "key": "name",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": false,
            "fixed": ""
          },
          {
            "title": "作者",
            "dataIndex": "create_by",
            "key": "create_by",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true
          },
          {
            "title": "创建时间",
            "dataIndex": "created_on",
            "key": "created_on",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "文档id",
            "dataIndex": "docx_id",
            "key": "docx_id",
            "valueType": "digit",
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
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "已删除",
            "dataIndex": "is_delete",
            "key": "is_delete",
            "valueType": "digit",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "原模式",
            "dataIndex": "origin_mode",
            "key": "origin_mode",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "原值",
            "dataIndex": "origin_value",
            "key": "origin_value",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "hideInTable": true
          },
          {
            "title": "更新于",
            "dataIndex": "updated_on",
            "key": "updated_on",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true
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
                  "id": "node_oclvgn9dyyl",
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
                          "relatedEventName": "handleEditReportLsitBtnClick",
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
                      "value": "function(){return this.handleEditReportLsitBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([{\n  \"isShow\": true,\n  \"record\": this.record\n}\n])) }"
                    }
                  },
                  "docId": "doclvgna3tm",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                },
                {
                  "componentName": "Button",
                  "id": "node_oclvgna1ut1",
                  "props": {
                    "type": "link",
                    "children": "复制",
                    "htmlType": "button",
                    "size": "middle",
                    "shape": "default",
                    "icon": "",
                    "block": false,
                    "danger": false,
                    "ghost": false,
                    "disabled": false,
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onClick",
                          "relatedEventName": "copyReportreportIdOnChange",
                          "paramStr": "this.record.id"
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
                      "value": "function(){return this.copyReportreportIdOnChange.apply(this,Array.prototype.slice.call(arguments).concat([this.record.id])) }"
                    }
                  },
                  "docId": "doclvgna3tm",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                },
                {
                  "componentName": "Popconfirm",
                  "id": "node_oclvgna1ut7",
                  "props": {
                    "title": "确定删除?",
                    "okType": "primary",
                    "okText": "确定",
                    "cancelText": "取消",
                    "style": {
                      "color": "#d0021b"
                    },
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onConfirm",
                          "relatedEventName": "handleDeleteReport",
                          "paramStr": "this.record"
                        }
                      ],
                      "eventList": [
                        {
                          "name": "onConfirm",
                          "template": "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
                          "disabled": true
                        }
                      ]
                    },
                    "onConfirm": {
                      "type": "JSFunction",
                      "value": "function(){return this.handleDeleteReport.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                    }
                  },
                  "docId": "doclvgna3tm",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node_oclvgna1ut8",
                      "props": {
                        "children": "删除",
                        "htmlType": "button",
                        "type": "link",
                        "size": "middle",
                        "shape": "default",
                        "icon": "",
                        "block": false,
                        "danger": false,
                        "ghost": false,
                        "disabled": false,
                        "style": {
                          "color": "#d0021b"
                        }
                      },
                      "docId": "doclvgna3tm",
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ]
                }
              ],
              "id": "node_oclvgn9dyyk"
            }
          }
        ],
        "request": {
          "type": "JSExpression",
          "value": "this.getReportLsit"
        },
        "dateFormatter": "string"
      },
      "docId": "doclvgna3tm",
      "hidden": false,
      "title": "报告列表",
      "description": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }
  ]
}