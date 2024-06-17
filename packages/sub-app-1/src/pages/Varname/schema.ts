export default {
  "componentName": "Page",
  "id": "node_oclvjcke8q1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "docId": "doclvjcl1i6",
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "isInit": false,
        "type": "http",
        "id": "VarnameRuleList",
        "config": {
          "path": "/api/v1/varname/list",
          "method": "get",
          "tags": [
            "变量名管理"
          ],
          "title": "变量名规则列表",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "page": {
                "description": "",
                "name": "page",
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
                    },
                    "varname_type": {
                      "name": "varname_type",
                      "type": "string",
                      "title": "类型",
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
          "uri": "/api/v1/varname/list",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "VarnameRulePageList",
        "config": {
          "path": "/api/v1/varname/search",
          "method": "get",
          "tags": [
            "变量名管理"
          ],
          "title": "分页变量名规则列表",
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
              "varname": {
                "description": "",
                "name": "varname",
                "type": "string",
                "required": false
              },
              "order_by": {
                "description": "降序时字段加‘-’\n字段：\nvarname_type\nvarname\ncreate_by\ncreated_on\nupdated_on",
                "name": "order_by",
                "type": "array",
                "required": false
              },
              "varname_type": {
                "description": "选项：\nData\nLLM\nAPI\nFillIn",
                "name": "varname_type",
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
                    "id": {
                      "name": "id",
                      "type": "integer",
                      "title": "id",
                      "required": false
                    },
                    "is_delete": {
                      "name": "is_delete",
                      "type": "integer",
                      "title": "是否删除",
                      "required": false
                    },
                    "updated_on": {
                      "name": "updated_on",
                      "type": "string",
                      "title": "更新时间",
                      "required": false
                    },
                    "varname": {
                      "name": "varname",
                      "type": "string",
                      "title": "名称",
                      "required": false
                    },
                    "varname_default_value": {
                      "name": "varname_default_value",
                      "type": "string",
                      "title": "默认值",
                      "required": false
                    },
                    "varname_type": {
                      "name": "varname_type",
                      "type": "string",
                      "title": "类型",
                      "required": false
                    },
                    "varrule_json": {
                      "name": "varrule_json",
                      "type": "object",
                      "title": "配置信息",
                      "required": false,
                      "items": {}
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
          "uri": "/api/v1/varname/search",
          "params": {},
          "headers": {}
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "CreateVarname",
        "config": {
          "path": "/api/v1/varname/create",
          "method": "post",
          "tags": [
            "变量名管理"
          ],
          "title": "创建变量",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "varname": {
                    "name": "varname",
                    "type": "string",
                    "title": "名称",
                    "required": false
                  },
                  "varname_default_value": {
                    "name": "varname_default_value",
                    "type": "string",
                    "title": "默认值",
                    "required": false
                  },
                  "varname_type": {
                    "name": "varname_type",
                    "type": "string",
                    "title": "类型",
                    "required": false
                  },
                  "varrule_json": {
                    "name": "varrule_json",
                    "type": "object",
                    "title": "配置信息",
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
                    "id": {
                      "name": "id",
                      "type": "integer",
                      "title": "id",
                      "required": false
                    },
                    "varname": {
                      "name": "varname",
                      "type": "string",
                      "title": "名称",
                      "required": false
                    },
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
                    "is_delete": {
                      "name": "is_delete",
                      "type": "integer",
                      "title": "是否删除",
                      "required": false
                    },
                    "updated_on": {
                      "name": "updated_on",
                      "type": "string",
                      "title": "更新时间",
                      "required": false
                    },
                    "varname_default_value": {
                      "name": "varname_default_value",
                      "type": "string",
                      "title": "默认值",
                      "required": false
                    },
                    "varname_type": {
                      "name": "varname_type",
                      "type": "string",
                      "title": "类型",
                      "required": false
                    },
                    "varrule_json": {
                      "name": "varrule_json",
                      "type": "object",
                      "title": "配置信息",
                      "required": false,
                      "items": {}
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
          "uri": "/api/v1/varname/create"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "详情",
        "config": {
          "path": "/api/v1/varname/detail",
          "method": "get",
          "tags": [
            "变量名管理"
          ],
          "title": "详情",
          "subTitle": "",
          "description": "",
          "params": {
            "query": {
              "varname_rule_id": {
                "description": "",
                "name": "varname_rule_id",
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
                  "required": true
                },
                "request_id": {
                  "name": "request_id",
                  "type": "string",
                  "required": true
                },
                "result": {
                  "name": "result",
                  "type": "array",
                  "required": true,
                  "items": {
                    "0": {
                      "type": "string"
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
          "uri": "/api/v1/varname/detail"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "UpdateVarname",
        "config": {
          "path": "/api/v1/varname/edit",
          "method": "put",
          "tags": [
            "变量名管理"
          ],
          "title": "编辑",
          "subTitle": "",
          "description": "",
          "params": {
            "body": {
              "items": {
                "properties": {
                  "varname_rule_id": {
                    "name": "varname_rule_id",
                    "type": "integer",
                    "title": "id",
                    "required": false
                  },
                  "varname_type": {
                    "name": "varname_type",
                    "type": "string",
                    "title": "类型",
                    "required": false
                  },
                  "varname": {
                    "name": "varname",
                    "type": "string",
                    "title": "名称",
                    "required": false
                  },
                  "varrule_json": {
                    "name": "varrule_json",
                    "type": "object",
                    "title": "配置",
                    "required": false,
                    "items": {
                      "value": {
                        "name": "value",
                        "type": "integer",
                        "required": false
                      }
                    }
                  },
                  "varname_default_value": {
                    "name": "varname_default_value",
                    "type": "string",
                    "title": "默认值",
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
                    "varname_rule_id": {
                      "name": "varname_rule_id",
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
          "method": "put",
          "uri": "/api/v1/varname/edit"
        }
      },
      {
        "isInit": false,
        "type": "http",
        "id": "DeleteVarname",
        "config": {
          "path": "/api/v1/varname/delete",
          "method": "delete",
          "tags": [
            "变量名管理"
          ],
          "title": "删除",
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
          "uri": "/api/v1/varname/delete"
        }
      }
    ]
  },
  "state": {
    "varnameRulePageListList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "currentEditRecord": {
      "type": "JSExpression",
      "value": "{}"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  if (this.utils.getTableElement) {\n    this.utils.getTableElement(this.$('table_VarnameRulePageList_ref'));\n  }\n}",
      "source": "function componentDidMount() {\n  if (this.utils.getTableElement) {\n    this.utils.getTableElement(this.$('table_VarnameRulePageList_ref'));\n  }\n}"
    }
  },
  "methods": {
    "getVarnameRulePageList": {
      "type": "JSFunction",
      "value": "async function getVarnameRulePageList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const result = await this.dataSourceMap['VarnameRulePageList'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}",
      "source": "async function getVarnameRulePageList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const result = await this.dataSourceMap['VarnameRulePageList'].load({\n    ...params,\n    page: current,\n    page_size: pageSize\n  });\n  return {\n    data: result.result.data,\n    total: result.result.total\n  };\n}"
    },
    "refreshVarnameRulePageList": {
      "type": "JSFunction",
      "value": "function refreshVarnameRulePageList() {\n  this.$('table_VarnameRulePageList_ref').reload();\n}",
      "source": "function refreshVarnameRulePageList() {\n  this.$('table_VarnameRulePageList_ref').reload();\n}"
    },
    "handleEditVarnameRulePageListBtnClick": {
      "type": "JSFunction",
      "value": "function handleEditVarnameRulePageListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    }, () => {\n      if (this.utils.handleEdit) {\n        this.utils.handleEdit(this.state.currentEditRecord);\n      }\n    });\n  }\n}",
      "source": "function handleEditVarnameRulePageListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      \"currentEditRecord\": params.record\n    }, () => {\n      if (this.utils.handleEdit) {\n        this.utils.handleEdit(this.state.currentEditRecord);\n      }\n    });\n  }\n}"
    },
    "handleCreateVarnameRulePageListBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateVarnameRulePageListBtnClick(e, isShow) {\n  // 更新可见状态\n  // this.setState({\n  //   \"isShowCreateVarnameRulePageListModal\": isShow\n  // });\n  if (this.utils.handleCreate) {\n    this.utils.handleCreate();\n  }\n}",
      "source": "function handleCreateVarnameRulePageListBtnClick(e, isShow) {\n  // 更新可见状态\n  // this.setState({\n  //   \"isShowCreateVarnameRulePageListModal\": isShow\n  // });\n  if (this.utils.handleCreate) {\n    this.utils.handleCreate();\n  }\n}"
    },
    "handleDeleteDeleteVarnameBtnClick": {
      "type": "JSFunction",
      "value": "function handleDeleteDeleteVarnameBtnClick(e, record) {\n  this.dataSourceMap['DeleteVarname'].load({\n    ids: [record.id]\n  }).then(res => {\n    this.refreshVarnameRulePageList();\n  });\n}",
      "source": "function handleDeleteDeleteVarnameBtnClick(e, record) {\n  this.dataSourceMap['DeleteVarname'].load({\n    ids: [record.id]\n  }).then(res => {\n    this.refreshVarnameRulePageList();\n  });\n}"
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
        "VarnameRulePageList": {
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
          "id": {
            "name": "id",
            "type": "integer",
            "title": "id",
            "required": false
          },
          "is_delete": {
            "name": "is_delete",
            "type": "integer",
            "title": "是否删除",
            "required": false
          },
          "updated_on": {
            "name": "updated_on",
            "type": "string",
            "title": "更新时间",
            "required": false
          },
          "varname": {
            "name": "varname",
            "type": "string",
            "title": "名称",
            "required": false
          },
          "varname_default_value": {
            "name": "varname_default_value",
            "type": "string",
            "title": "默认值",
            "required": false
          },
          "varname_type": {
            "name": "varname_type",
            "type": "string",
            "title": "类型",
            "required": false
          },
          "varrule_json": {
            "name": "varrule_json",
            "type": "object",
            "title": "配置信息",
            "required": false,
            "items": {}
          }
        },
        "UpdateVarname": {
          "varname_rule_id": {
            "name": "varname_rule_id",
            "type": "integer",
            "title": "id",
            "required": false
          },
          "varname_type": {
            "name": "varname_type",
            "type": "string",
            "title": "类型",
            "required": false
          },
          "varname": {
            "name": "varname",
            "type": "string",
            "title": "名称",
            "required": false
          },
          "varrule_json": {
            "name": "varrule_json",
            "type": "object",
            "title": "配置",
            "required": false,
            "items": {
              "value": {
                "name": "value",
                "type": "integer",
                "required": false
              }
            }
          },
          "varname_default_value": {
            "name": "varname_default_value",
            "type": "string",
            "title": "默认值",
            "required": false
          }
        },
        "CreateVarname": {
          "varname": {
            "name": "varname",
            "type": "string",
            "title": "名称",
            "required": false
          },
          "varname_default_value": {
            "name": "varname_default_value",
            "type": "string",
            "title": "默认值",
            "required": false
          },
          "varname_type": {
            "name": "varname_type",
            "type": "string",
            "title": "类型",
            "required": false
          },
          "varrule_json": {
            "name": "varrule_json",
            "type": "object",
            "title": "配置信息",
            "required": false,
            "items": {}
          }
        }
      }
    }
  },
  "originCode": "class Page extends Component {\n  state = {\n    \"varnameRulePageListList\": [],\n    \"currentEditRecord\": {},\n  }\n  componentDidMount() {\n    if (this.utils.getTableElement) {\n      this.utils.getTableElement(this.$('table_VarnameRulePageList_ref'));\n    }\n  }\n  async getVarnameRulePageList(params) {\n    const {\n      pageSize,\n      current\n    } = params;\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const result = await this.dataSourceMap['VarnameRulePageList'].load({\n      ...params,\n      page: current,\n      page_size: pageSize\n    });\n    return {\n      data: result.result.data,\n      total: result.result.total\n    };\n  }\n  refreshVarnameRulePageList() {\n    this.$('table_VarnameRulePageList_ref').reload();\n  }\n  handleEditVarnameRulePageListBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        \"currentEditRecord\": params.record\n      }, () => {\n        if (this.utils.handleEdit) {\n          this.utils.handleEdit(this.state.currentEditRecord);\n        }\n      });\n    }\n  }\n  handleCreateVarnameRulePageListBtnClick(e, isShow) {\n    // 更新可见状态\n    // this.setState({\n    //   \"isShowCreateVarnameRulePageListModal\": isShow\n    // });\n    if (this.utils.handleCreate) {\n      this.utils.handleCreate();\n    }\n  }\n  handleDeleteDeleteVarnameBtnClick(e, record) {\n    this.dataSourceMap['DeleteVarname'].load({ids:[record.id]}).then(res=>{\n      this.refreshVarnameRulePageList();\n    });\n  }\n  \n}",
  "children": [
    {
      "componentName": "ProTable",
      "id": "node_oclvjckeb07",
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
              "id": "node_oclvjckeb0k",
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
                      "id": "node_oclvjckeb0n",
                      "props": {
                        "type": "PlusOutlined",
                        "size": 16,
                        "rotate": 0,
                        "spin": false,
                        "__component_name": "Icon"
                      },
                      "docId": "doclvjcl1i6",
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ],
                  "id": "node_oclvjckeb0l"
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
                      "relatedEventName": "handleCreateVarnameRulePageListBtnClick",
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
                  "value": "function(){return this.handleCreateVarnameRulePageListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }"
                }
              },
              "docId": "doclvjcl1i6",
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ],
          "id": "node_oclvjckeb08"
        },
        "style": {
          "width": "100%"
        },
        "__component_name": "ProTable",
        "ref": "table_VarnameRulePageList_ref",
        "manualRequest": false,
        "showHeader": true,
        "size": "default",
        "tableLayout": "",
        "scroll": {
          "scrollToFirstRowOnChange": true
        },
        "rowSelection": false,
        "expandable": {
          "expandedRowRender": ""
        },
        "columns": [
          {
            "title": "id",
            "dataIndex": "id",
            "key": "id",
            "valueType": "digit",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "width": 50
          },
          {
            "title": "名称",
            "dataIndex": "label",
            "key": "label",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": false,
            "fixed": "",
            "hideInTable": false
          },
          {
            "title": "变量名",
            "dataIndex": "varname",
            "align": "left",
            "fixed": "",
            "key": "varname"
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
            "title": "更新时间",
            "dataIndex": "updated_on",
            "key": "updated_on",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "width": 200
          },
          {
            "title": "默认值",
            "dataIndex": "varname_default_value",
            "key": "varname_default_value",
            "valueType": "text",
            "required": false,
            "align": "left",
            "hideInSearch": true,
            "fixed": "",
            "ellipsis": true
          },
          {
            "title": "类型",
            "dataIndex": "varname_type",
            "key": "varname_type",
            "valueType": "select",
            "required": false,
            "align": "left",
            "hideInSearch": false,
            "fixed": "",
            "valueEnum": {
              "Data": {
                "text": "数据变量",
                "status": "Success"
              },
              "LLM": {
                "text": "模型变量",
                "status": "Success"
              },
              "API": {
                "text": "API变量",
                "status": "Success"
              },
              "FillIn": {
                "text": "填报变量",
                "status": "Success"
              }
            },
            "width": 200
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
                  "id": "node_oclvjckeb0t",
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
                          "relatedEventName": "handleEditVarnameRulePageListBtnClick",
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
                      "value": "function(){return this.handleEditVarnameRulePageListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([{\n  \"isShow\": true,\n  \"record\": this.record\n}\n])) }"
                    }
                  },
                  "docId": "doclvjcl1i6",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": ""
                },
                {
                  "componentName": "Popconfirm",
                  "id": "node_oclx2hbuqi1",
                  "props": {
                    "title": "确定删除?",
                    "okType": "primary",
                    "okText": "确定",
                    "cancelText": "取消",
                    "__component_name": "Popconfirm",
                    "__events": {
                      "eventDataList": [
                        {
                          "type": "componentEvent",
                          "name": "onConfirm",
                          "relatedEventName": "handleDeleteDeleteVarnameBtnClick",
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
                      "value": "function(){return this.handleDeleteDeleteVarnameBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }"
                    }
                  },
                  "docId": "docll5hxqmi",
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node_ocll5hxqmi17",
                      "props": {
                        "children": "删除",
                        "__component_name": "Button",
                        "htmlType": "button",
                        "type": "link",
                        "size": "middle",
                        "shape": "default",
                        "block": false,
                        "danger": false,
                        "ghost": false,
                        "disabled": false,
                        "style": {
                          "color": "#d0021b"
                        },
                        "icon": "",
                        "__events": {
                          "eventDataList": [],
                          "eventList": [
                            {
                              "name": "onClick",
                              "template": "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                              "disabled": true
                            }
                          ]
                        }
                      },
                      "docId": "docll5hxqmi",
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ]
                }
              ],
              "id": "node_oclvjckeb0s"
            }
          }
        ],
        "request": {
          "type": "JSExpression",
          "value": "this.getVarnameRulePageList"
        },
        "dateFormatter": "string"
      },
      "docId": "doclvjcl1i6",
      "hidden": false,
      "title": "分页变量名规则列表",
      "description": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }
  ]
}