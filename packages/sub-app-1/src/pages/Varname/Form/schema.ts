export default {
  "componentName": "Page",
  "id": "node_oclwgfmwqb1",
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
        "type": "http",
        "isInit": false,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/varname/list"
        },
        "id": "GetVarnameList"
      },
      {
        "type": "http",
        "isInit": false,
        "options": {
          "params": {},
          "method": "POST",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/varname/preview"
        },
        "config": {
          "method": "POST"
        },
        "id": "PreViewVarname"
      },
      {
        "type": "http",
        "isInit": false,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/metabase/dbmetadatas"
        },
        "id": "DBMetaDatas"
      },
      {
        "type": "http",
        "isInit": false,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/varrule/all"
        },
        "id": "AllVarrules"
      },
      {
        "type": "http",
        "isInit": false,
        "options": {
          "params": {},
          "method": "POST",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "/api/v1/varname/create"
        },
        "id": "CreateVarname"
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
          "uri": "/api/v1/metabase/apiconnector"
        },
        "id": "ApiConnector"
      }
    ]
  },
  "state": {
    "selectedOptionType": {
      "type": "JSExpression",
      "value": "\"Data\""
    },
    "dbMetas": {
      "type": "JSExpression",
      "value": "[]"
    },
    "varnameList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "currentDbMeta": {
      "type": "JSExpression",
      "value": "{}"
    },
    "currentQueryMode": {
      "type": "JSExpression",
      "value": "\"condit_expr\""
    },
    "data_json": {
      "type": "JSExpression",
      "value": "{\n  \"query_mode\": \"condit_expr\"\n}"
    },
    "basicFetchObj": {
      "type": "JSExpression",
      "value": "{}"
    },
    "varrules": {
      "type": "JSExpression",
      "value": "[]"
    },
    "open_converter": {
      "type": "JSExpression",
      "value": "false"
    },
    "open_api_converter": {
      "type": "JSExpression",
      "value": "false"
    },
    "varNameOptions": {
      "type": "JSExpression",
      "value": "[]"
    },
    "sqlInfo": {
      "type": "JSExpression",
      "value": "{\n  contentArr: [\"select * from \", \" where \"],\n  tableName: '',\n  varName: ''\n}"
    },
    "actionMode": {
      "type": "JSExpression",
      "value": "\"create\""
    },
    "sqlResult": {
      "type": "JSExpression",
      "value": "\"\""
    },
    "previewResult": {
      "type": "JSExpression",
      "value": "{}"
    },
    "showPreview": {
      "type": "JSExpression",
      "value": "false"
    },
    "apiParamList": {
      "type": "JSExpression",
      "value": "[]"
    },
    "currentApiSource": {
      "type": "JSExpression",
      "value": "{}"
    },
    "currentFormData": {
      "type": "JSExpression",
      "value": "{}"
    },
    "pageMode": {
      "type": "JSExpression",
      "value": "\"Create\""
    },
    "isInputAllowed": {
      "type": "JSExpression",
      "value": "true"
    },
    "showMultiLine": {
      "type": "JSExpression",
      "value": "false"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  this.getDbMetas();\n  this.getAllVarrules();\n  this.getVarnameList();\n  this.getApiSourceList();\n  if (this.utils.currentRecord) {\n    this.setState({\n      \"currentRecord\": this.utils.currentRecord()\n    }, () => {\n      this.initData();\n    });\n  }\n}",
      "source": "function componentDidMount() {\n  this.getDbMetas();\n  this.getAllVarrules();\n  this.getVarnameList();\n  this.getApiSourceList();\n  if (this.utils.currentRecord) {\n    this.setState({\n      \"currentRecord\": this.utils.currentRecord()\n    }, () => {\n      this.initData();\n    });\n  }\n}"
    }
  },
  "methods": {
    "initData": {
      "type": "JSFunction",
      "value": "function initData() {\n  if (this.state.currentRecord) {\n    this.setState({\n      \"currentFormData\": {\n        ...this.state.currentRecord,\n        varname_definition_json: {}\n      },\n      \"pageMode\": \"Edit\"\n    }, () => {\n      switch (this.state.currentRecord.varname_type) {\n        case 'Data':\n          this.initDataValue();\n          break;\n        default:\n          return;\n      }\n    });\n  }\n}",
      "source": "function initData() {\n  if (this.state.currentRecord) {\n    this.setState({\n      \"currentFormData\": {\n        ...this.state.currentRecord,\n        varname_definition_json: {}\n      },\n      \"pageMode\": \"Edit\"\n    }, () => {\n      switch (this.state.currentRecord.varname_type) {\n        case 'Data':\n          this.initDataValue();\n          break;\n        default:\n          return;\n      }\n    });\n  }\n}"
    },
    "initDataValue": {
      "type": "JSFunction",
      "value": "function initDataValue() {\n  const dataList = this.converDataSourceList(this.state.currentRecord.varname_definition_json.condit_expr);\n  this.setState({\n    currentFormData: {\n      varname_definition_json: {\n        condit_expr: dataList\n      }\n    }\n  });\n}",
      "source": "function initDataValue() {\n  const dataList = this.converDataSourceList(this.state.currentRecord.varname_definition_json.condit_expr);\n  this.setState({\n    currentFormData: {\n      varname_definition_json: {\n        condit_expr: dataList\n      }\n    }\n  });\n}"
    },
    "handleCreateVarname": {
      "type": "JSFunction",
      "value": "function handleCreateVarname(params) {\n  this.dataSourceMap['CreateVarname'].load(params).then(res => {\n    if (this.utils.finishCreate) {\n      this.utils.finishCreate();\n    }\n  }).catch(err => {\n    if (this.utils.errCreate) {\n      this.utils.errCreate();\n    }\n  });\n}",
      "source": "function handleCreateVarname(params) {\n  this.dataSourceMap['CreateVarname'].load(params).then(res => {\n    if (this.utils.finishCreate) {\n      this.utils.finishCreate();\n    }\n  }).catch(err => {\n    if (this.utils.errCreate) {\n      this.utils.errCreate();\n    }\n  });\n}"
    },
    "handlePreviewResult": {
      "type": "JSFunction",
      "value": "function handlePreviewResult(params) {\n  this.dataSourceMap['PreViewVarname'].load(params).then(res => {\n    this.setState({\n      \"previewResult\": res.result\n    });\n  }).catch(err => {\n    this.setState({\n      \"previewResult\": \"预览失败\"\n    });\n  });\n}",
      "source": "function handlePreviewResult(params) {\n  this.dataSourceMap['PreViewVarname'].load(params).then(res => {\n    this.setState({\n      \"previewResult\": res.result\n    });\n  }).catch(err => {\n    this.setState({\n      \"previewResult\": \"预览失败\"\n    });\n  });\n}"
    },
    "handlePreViewBtnClick": {
      "type": "JSFunction",
      "value": "function handlePreViewBtnClick() {\n  this.setState({\n    \"actionMode\": \"preview\",\n    \"showPreview\": true\n  }, () => {\n    this.executeProgram();\n  });\n}",
      "source": "function handlePreViewBtnClick() {\n  this.setState({\n    \"actionMode\": \"preview\",\n    \"showPreview\": true\n  }, () => {\n    this.executeProgram();\n  });\n}"
    },
    "executeProgram": {
      "type": "JSFunction",
      "value": "async function executeProgram() {\n  // 获取表单字段值\n  try {\n    this.$('form_CreateVarname').validateFields().then(values => {\n      if (values) {\n        if (!values.label || values.label.length === 0) {\n          this.utils.errCreate(\"名称不能为空\");\n          return;\n        }\n        if (!values.varname || values.varname.length === 0) {\n          this.utils.errCreate(\"变量名不能为空\");\n          return;\n        }\n        this.setState({\n          basicFetchObj: {\n            label: values.label ?? \"\",\n            verify_rules: values.verify_rules ?? [],\n            varname: values.varname ?? \"\",\n            varname_type: this.state.selectedOptionType,\n            column_type: \"string\",\n            varname_definition_json: values.varname_definition_json ?? {}\n          }\n        }, () => {\n          switch (this.state.selectedOptionType) {\n            case \"Data\":\n              this.processDataVariable();\n              break;\n            case \"LLM\":\n              this.processModelVariable();\n              break;\n            case \"API\":\n              this.processAPIVariable();\n              break;\n            case \"FillIn\":\n              this.processFillInVariable();\n              break;\n            default:\n              console.log(\"Unknown variable type\");\n          }\n        });\n      }\n    });\n    // const values = this.$('form_CreateVarname').getFieldsValue();\n  } catch (errorInfo) {\n    console.log('Validation failed:', errorInfo);\n  }\n}",
      "source": "async function executeProgram() {\n  // 获取表单字段值\n  try {\n    this.$('form_CreateVarname').validateFields().then(values => {\n      if (values) {\n        if (!values.label || values.label.length === 0) {\n          this.utils.errCreate(\"名称不能为空\");\n          return;\n        }\n        if (!values.varname || values.varname.length === 0) {\n          this.utils.errCreate(\"变量名不能为空\");\n          return;\n        }\n        this.setState({\n          basicFetchObj: {\n            label: values.label ?? \"\",\n            verify_rules: values.verify_rules ?? [],\n            varname: values.varname ?? \"\",\n            varname_type: this.state.selectedOptionType,\n            column_type: \"string\",\n            varname_definition_json: values.varname_definition_json ?? {}\n          }\n        }, () => {\n          switch (this.state.selectedOptionType) {\n            case \"Data\":\n              this.processDataVariable();\n              break;\n            case \"LLM\":\n              this.processModelVariable();\n              break;\n            case \"API\":\n              this.processAPIVariable();\n              break;\n            case \"FillIn\":\n              this.processFillInVariable();\n              break;\n            default:\n              console.log(\"Unknown variable type\");\n          }\n        });\n      }\n    });\n    // const values = this.$('form_CreateVarname').getFieldsValue();\n  } catch (errorInfo) {\n    console.log('Validation failed:', errorInfo);\n  }\n}"
    },
    "handleCreateVarnameBtnClick": {
      "type": "JSFunction",
      "value": "function handleCreateVarnameBtnClick() {\n  this.setState({\n    \"actionMode\": \"create\"\n  }, () => {\n    this.executeProgram();\n  });\n}",
      "source": "function handleCreateVarnameBtnClick() {\n  this.setState({\n    \"actionMode\": \"create\"\n  }, () => {\n    this.executeProgram();\n  });\n}"
    },
    "processDataVariable": {
      "type": "JSFunction",
      "value": "function processDataVariable() {\n  switch (this.state.currentQueryMode) {\n    case \"condit_expr\":\n      this.processDataForm();\n      break;\n    case \"raw_sql\":\n      this.processDataSql();\n      break;\n    default:\n      console.log(\"Unknown currentQueryMode\");\n  }\n}",
      "source": "function processDataVariable() {\n  switch (this.state.currentQueryMode) {\n    case \"condit_expr\":\n      this.processDataForm();\n      break;\n    case \"raw_sql\":\n      this.processDataSql();\n      break;\n    default:\n      console.log(\"Unknown currentQueryMode\");\n  }\n}"
    },
    "processDataForm": {
      "type": "JSFunction",
      "value": "function processDataForm() {\n  var _this$state$basicFetc, _this$state$basicFetc2, _this$state$basicFetc3;\n  if (!this.state.basicFetchObj.varname_definition_json.db_origin_id) {\n    this.utils.errCreate(\"数据源不能为空\");\n    return;\n  }\n  if (!((_this$state$basicFetc = this.state.basicFetchObj.varname_definition_json) !== null && _this$state$basicFetc !== void 0 && _this$state$basicFetc.valueas.column)) {\n    this.utils.errCreate(\"取值字段不能为空\");\n  }\n  const exprs = this.converColumnList();\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        // ...this.state.basicFetchObj.varname_definition_json,\n        \"db_origin_id\": this.state.basicFetchObj.varname_definition_json.db_origin_id,\n        \"query_mode\": this.state.currentQueryMode ?? \"condit_expr\",\n        \"condit_expr\": exprs,\n        \"valueas\": {\n          column: (_this$state$basicFetc2 = this.state.basicFetchObj.varname_definition_json) === null || _this$state$basicFetc2 === void 0 ? void 0 : _this$state$basicFetc2.valueas.column,\n          converter: this.state.open_api_converter ? {\n            \"pattern\": \"fmt\",\n            \"spec\": (_this$state$basicFetc3 = this.state.basicFetchObj.varname_definition_json) === null || _this$state$basicFetc3 === void 0 ? void 0 : _this$state$basicFetc3.valueas.converter\n          } : undefined\n        }\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}",
      "source": "function processDataForm() {\n  if (!this.state.basicFetchObj.varname_definition_json.db_origin_id) {\n    this.utils.errCreate(\"数据源不能为空\");\n    return;\n  }\n  if (!this.state.basicFetchObj.varname_definition_json?.valueas.column) {\n    this.utils.errCreate(\"取值字段不能为空\");\n  }\n  const exprs = this.converColumnList();\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        // ...this.state.basicFetchObj.varname_definition_json,\n        \"db_origin_id\": this.state.basicFetchObj.varname_definition_json.db_origin_id,\n        \"query_mode\": this.state.currentQueryMode ?? \"condit_expr\",\n        \"condit_expr\": exprs,\n        \"valueas\": {\n          column: this.state.basicFetchObj.varname_definition_json?.valueas.column,\n          converter: this.state.open_api_converter ? {\n            \"pattern\": \"fmt\",\n            \"spec\": this.state.basicFetchObj.varname_definition_json?.valueas.converter\n          } : undefined\n        }\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}"
    },
    "processDataSql": {
      "type": "JSFunction",
      "value": "function processDataSql() {\n  var _this$state$basicFetc, _this$state$basicFetc2;\n  if (!this.state.basicFetchObj.varname_definition_json.db_origin_id) {\n    this.utils.errCreate(\"数据源不能为空\");\n    return;\n  }\n  if (!this.state.sqlResult || this.state.sqlResult.length === 0) {\n    this.utils.errCreate(\"sql不能为空\");\n    return;\n  }\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        // ...this.state.basicFetchObj.varname_definition_json,\n        \"db_origin_id\": this.state.basicFetchObj.varname_definition_json.db_origin_id,\n        \"query_mode\": \"raw_sql\",\n        \"sql\": this.state.sqlResult,\n        \"valueas\": {\n          column: (_this$state$basicFetc = this.state.basicFetchObj.varname_definition_json) === null || _this$state$basicFetc === void 0 ? void 0 : _this$state$basicFetc.valueas.column,\n          converter: this.state.open_api_converter ? {\n            \"pattern\": \"fmt\",\n            \"spec\": (_this$state$basicFetc2 = this.state.basicFetchObj.varname_definition_json) === null || _this$state$basicFetc2 === void 0 ? void 0 : _this$state$basicFetc2.valueas.converter\n          } : undefined\n        }\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}",
      "source": "function processDataSql() {\n  if (!this.state.basicFetchObj.varname_definition_json.db_origin_id) {\n    this.utils.errCreate(\"数据源不能为空\");\n    return;\n  }\n  if (!this.state.sqlResult || this.state.sqlResult.length === 0) {\n    this.utils.errCreate(\"sql不能为空\");\n    return;\n  }\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        // ...this.state.basicFetchObj.varname_definition_json,\n        \"db_origin_id\": this.state.basicFetchObj.varname_definition_json.db_origin_id,\n        \"query_mode\": \"raw_sql\",\n        \"sql\": this.state.sqlResult,\n        \"valueas\": {\n          column: this.state.basicFetchObj.varname_definition_json?.valueas.column,\n          converter: this.state.open_api_converter ? {\n            \"pattern\": \"fmt\",\n            \"spec\": this.state.basicFetchObj.varname_definition_json?.valueas.converter\n          } : undefined\n        }\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}"
    },
    "processModelVariable": {
      "type": "JSFunction",
      "value": "function processModelVariable() {\n  if (!this.state.basicFetchObj.varname_definition_json.prompt || this.state.basicFetchObj.varname_definition_json.prompt.length === 0) {\n    this.utils.errCreate(\"prompt 不能为空\");\n    return;\n  }\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        // ...this.state.basicFetchObj.varname_definition_json,\n        \"prompt\": this.state.basicFetchObj.varname_definition_json.prompt\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}",
      "source": "function processModelVariable() {\n  if (!this.state.basicFetchObj.varname_definition_json.prompt || this.state.basicFetchObj.varname_definition_json.prompt.length === 0) {\n    this.utils.errCreate(\"prompt 不能为空\");\n    return;\n  }\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        // ...this.state.basicFetchObj.varname_definition_json,\n        \"prompt\": this.state.basicFetchObj.varname_definition_json.prompt\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}"
    },
    "processAPIVariable": {
      "type": "JSFunction",
      "value": "function processAPIVariable() {\n  var _this$state$basicFetc, _this$state$basicFetc2, _this$state$basicFetc3;\n  if (!this.state.basicFetchObj.varname_definition_json.params) {\n    this.utils.errCreate(\"api参数 不能为空\");\n    return;\n  }\n  if (!this.state.basicFetchObj.varname_definition_json.api_origin_id) {\n    this.utils.errCreate(\"api接口源 不能为空\");\n    return;\n  }\n  if (!((_this$state$basicFetc = this.state.basicFetchObj.varname_definition_json) !== null && _this$state$basicFetc !== void 0 && _this$state$basicFetc.api_valueas.column)) {\n    this.utils.errCreate(\"取值字段不能为空\");\n  }\n  const params = this.transformObjectToArray(this.state.basicFetchObj.varname_definition_json.params);\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        api_origin_id: this.state.basicFetchObj.varname_definition_json.api_origin_id,\n        params: params,\n        \"valueas\": {\n          column: (_this$state$basicFetc2 = this.state.basicFetchObj.varname_definition_json) === null || _this$state$basicFetc2 === void 0 ? void 0 : _this$state$basicFetc2.api_valueas.column,\n          converter: this.state.open_api_converter ? {\n            \"pattern\": \"fmt\",\n            \"spec\": (_this$state$basicFetc3 = this.state.basicFetchObj.varname_definition_json) === null || _this$state$basicFetc3 === void 0 ? void 0 : _this$state$basicFetc3.api_valueas.converter\n          } : undefined\n        }\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}",
      "source": "function processAPIVariable() {\n  if (!this.state.basicFetchObj.varname_definition_json.params) {\n    this.utils.errCreate(\"api参数 不能为空\");\n    return;\n  }\n  if (!this.state.basicFetchObj.varname_definition_json.api_origin_id) {\n    this.utils.errCreate(\"api接口源 不能为空\");\n    return;\n  }\n  if (!this.state.basicFetchObj.varname_definition_json?.api_valueas.column) {\n    this.utils.errCreate(\"取值字段不能为空\");\n  }\n  const params = this.transformObjectToArray(this.state.basicFetchObj.varname_definition_json.params);\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        api_origin_id: this.state.basicFetchObj.varname_definition_json.api_origin_id,\n        params: params,\n        \"valueas\": {\n          column: this.state.basicFetchObj.varname_definition_json?.api_valueas.column,\n          converter: this.state.open_api_converter ? {\n            \"pattern\": \"fmt\",\n            \"spec\": this.state.basicFetchObj.varname_definition_json?.api_valueas.converter\n          } : undefined\n        }\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}"
    },
    "processFillInVariable": {
      "type": "JSFunction",
      "value": "function processFillInVariable() {\n  if (!this.state.basicFetchObj.varname_definition_json.value_type) {\n    this.utils.errCreate(\"变量类型 不能为空\");\n    return;\n  }\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        value_type: this.state.basicFetchObj.varname_definition_json.value_type,\n        value: this.state.basicFetchObj.varname_definition_json.value ?? \"\",\n        has_multi_line: this.state.basicFetchObj.varname_definition_json.has_multi_line\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}",
      "source": "function processFillInVariable() {\n  if (!this.state.basicFetchObj.varname_definition_json.value_type) {\n    this.utils.errCreate(\"变量类型 不能为空\");\n    return;\n  }\n  this.setState({\n    \"basicFetchObj\": {\n      ...this.state.basicFetchObj,\n      varname_definition_json: {\n        value_type: this.state.basicFetchObj.varname_definition_json.value_type,\n        value: this.state.basicFetchObj.varname_definition_json.value ?? \"\",\n        has_multi_line: this.state.basicFetchObj.varname_definition_json.has_multi_line\n      }\n    }\n  }, () => {\n    if (this.state.actionMode === 'create') {\n      this.handleCreateVarname(this.state.basicFetchObj);\n    }\n    if (this.state.actionMode === 'preview') {\n      this.handlePreviewResult(this.state.basicFetchObj);\n    }\n  });\n}"
    },
    "transformObjectToArray": {
      "type": "JSFunction",
      "value": "function transformObjectToArray(obj) {\n  const result = [];\n  for (const key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      const {\n        label\n      } = obj[key];\n      result.push({\n        param_name: key,\n        param_value: label\n      });\n    }\n  }\n  return result;\n}",
      "source": "function transformObjectToArray(obj) {\n  const result = [];\n  for (const key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      const {\n        label\n      } = obj[key];\n      result.push({\n        param_name: key,\n        param_value: label\n      });\n    }\n  }\n  return result;\n}"
    },
    "handleOptionChange": {
      "type": "JSFunction",
      "value": "function handleOptionChange(e) {\n  const newValue = e.target.value;\n  this.setState({\n    \"selectedOptionType\": newValue\n  }, () => {\n    // 清空预览数据，关闭预览视图\n    this.setState({\n      previewResult: {},\n      showPreview: false\n    });\n    // 清空校验规则\n    this.setState({\n      currentFormData: {\n        verify_rules: []\n      }\n    });\n  });\n}",
      "source": "function handleOptionChange(e) {\n  const newValue = e.target.value;\n  this.setState({\n    \"selectedOptionType\": newValue\n  }, () => {\n    // 清空预览数据，关闭预览视图\n    this.setState({\n      previewResult: {},\n      showPreview: false\n    });\n    // 清空校验规则\n    this.setState({\n      currentFormData: {\n        verify_rules: []\n      }\n    });\n  });\n}"
    },
    "getAllVarrules": {
      "type": "JSFunction",
      "value": "function getAllVarrules() {\n  this.dataSourceMap['AllVarrules'].load().then(res => {\n    this.setState({\n      \"varrules\": res.result\n    });\n  });\n}",
      "source": "function getAllVarrules() {\n  this.dataSourceMap['AllVarrules'].load().then(res => {\n    this.setState({\n      \"varrules\": res.result\n    });\n  });\n}"
    },
    "getDbMetas": {
      "type": "JSFunction",
      "value": "function getDbMetas() {\n  this.dataSourceMap['DBMetaDatas'].load().then(res => {\n    this.setState({\n      dbMetas: res.result\n    });\n  });\n}",
      "source": "function getDbMetas() {\n  this.dataSourceMap['DBMetaDatas'].load().then(res => {\n    this.setState({\n      dbMetas: res.result\n    });\n  });\n}"
    },
    "getVarnameList": {
      "type": "JSFunction",
      "value": "function getVarnameList() {\n  this.dataSourceMap['GetVarnameList'].load().then(res => {\n    this.setState({\n      \"varnameList\": res.result\n    }, () => {\n      this.getVarnameSelectOptions();\n    });\n  });\n}",
      "source": "function getVarnameList() {\n  this.dataSourceMap['GetVarnameList'].load().then(res => {\n    this.setState({\n      \"varnameList\": res.result\n    }, () => {\n      this.getVarnameSelectOptions();\n    });\n  });\n}"
    },
    "getApiSourceList": {
      "type": "JSFunction",
      "value": "function getApiSourceList() {\n  this.dataSourceMap['ApiConnector'].load().then(res => {\n    this.setState({\n      \"apiSourceList\": res.result\n    });\n  });\n}",
      "source": "function getApiSourceList() {\n  this.dataSourceMap['ApiConnector'].load().then(res => {\n    this.setState({\n      \"apiSourceList\": res.result\n    });\n  });\n}"
    },
    "getDataMetaOptions": {
      "type": "JSFunction",
      "value": "function getDataMetaOptions() {\n  if (this.state.dbMetas) {\n    return this.state.dbMetas.map(meta => {\n      return {\n        label: meta.label,\n        value: meta.id\n      };\n    });\n  }\n  return [];\n}",
      "source": "function getDataMetaOptions() {\n  if (this.state.dbMetas) {\n    return this.state.dbMetas.map(meta => {\n      return {\n        label: meta.label,\n        value: meta.id\n      };\n    });\n  }\n  return [];\n}"
    },
    "getApiSourceOptions": {
      "type": "JSFunction",
      "value": "function getApiSourceOptions() {\n  if (this.state.apiSourceList) {\n    return this.state.apiSourceList.map(source => {\n      return {\n        key: source.id,\n        label: source.label,\n        value: source.id\n      };\n    });\n  }\n  return [];\n}",
      "source": "function getApiSourceOptions() {\n  if (this.state.apiSourceList) {\n    return this.state.apiSourceList.map(source => {\n      return {\n        key: source.id,\n        label: source.label,\n        value: source.id\n      };\n    });\n  }\n  return [];\n}"
    },
    "filterApiParams": {
      "type": "JSFunction",
      "value": "function filterApiParams(id) {\n  if (id && this.state.apiSourceList && this.state.apiSourceList.length > 0) {\n    const currentSource = this.state.apiSourceList.find(source => source.id === id);\n    if (currentSource && currentSource.params) {\n      const params = currentSource.params.map(item => {\n        return {\n          param_name: item,\n          param_value: \"\"\n        };\n      });\n      this.setState({\n        \"apiParamList\": params,\n        \"currentApiSource\": currentSource\n      });\n    }\n  }\n}",
      "source": "function filterApiParams(id) {\n  if (id && this.state.apiSourceList && this.state.apiSourceList.length > 0) {\n    const currentSource = this.state.apiSourceList.find(source => source.id === id);\n    if (currentSource && currentSource.params) {\n      const params = currentSource.params.map(item => {\n        return {\n          param_name: item,\n          param_value: \"\"\n        };\n      });\n      this.setState({\n        \"apiParamList\": params,\n        \"currentApiSource\": currentSource\n      });\n    }\n  }\n}"
    },
    "onSqlCodeChange": {
      "type": "JSFunction",
      "value": "function onSqlCodeChange(code) {\n  this.setState({\n    \"sqlResult\": code\n  });\n}",
      "source": "function onSqlCodeChange(code) {\n  this.setState({\n    \"sqlResult\": code\n  });\n}"
    },
    "onDataMetaSelect": {
      "type": "JSFunction",
      "value": "function onDataMetaSelect(value) {\n  // 选择数据源触发\n  if (value) {\n    this.setState({\n      currentDbMeta: this.state.dbMetas.find(obj => obj.id === value)\n    }, () => {\n      this.setState({\n        \"data_json\": {\n          ...this.state.data_json,\n          db_origin_id: this.state.currentDbMeta.id\n        }\n      });\n    });\n  }\n}",
      "source": "function onDataMetaSelect(value) {\n  // 选择数据源触发\n  if (value) {\n    this.setState({\n      currentDbMeta: this.state.dbMetas.find(obj => obj.id === value)\n    }, () => {\n      this.setState({\n        \"data_json\": {\n          ...this.state.data_json,\n          db_origin_id: this.state.currentDbMeta.id\n        }\n      });\n    });\n  }\n}"
    },
    "getCurrentColumnsOptions": {
      "type": "JSFunction",
      "value": "function getCurrentColumnsOptions() {\n  // 获取当前变量选项列表\n  let options = {};\n  if (this.state.currentDbMeta && this.state.currentDbMeta.columns && this.state.currentDbMeta.columns.length > 0) {\n    this.state.currentDbMeta.columns.forEach(column => {\n      options[column.name] = {\n        \"text\": `${column.comment} - ${column.name}`\n      };\n    });\n  }\n  return options;\n}",
      "source": "function getCurrentColumnsOptions() {\n  // 获取当前变量选项列表\n  let options = {};\n  if (this.state.currentDbMeta && this.state.currentDbMeta.columns && this.state.currentDbMeta.columns.length > 0) {\n    this.state.currentDbMeta.columns.forEach(column => {\n      options[column.name] = {\n        \"text\": `${column.comment} - ${column.name}`\n      };\n    });\n  }\n  return options;\n}"
    },
    "getVarnameOptions": {
      "type": "JSFunction",
      "value": "function getVarnameOptions() {\n  let options = {};\n  if (this.state.varnameList) {\n    this.state.varnameList.forEach(varname => {\n      options[varname.id] = {\n        \"text\": varname.label\n      };\n    });\n  }\n  return options;\n}",
      "source": "function getVarnameOptions() {\n  let options = {};\n  if (this.state.varnameList) {\n    this.state.varnameList.forEach(varname => {\n      options[varname.id] = {\n        \"text\": varname.label\n      };\n    });\n  }\n  return options;\n}"
    },
    "getVarnameSelectOptions": {
      "type": "JSFunction",
      "value": "function getVarnameSelectOptions() {\n  // 变量下拉框选项\n  if (this.state.varnameList) {\n    const options = this.state.varnameList.map(varname => {\n      return {\n        key: varname.id,\n        value: varname.id,\n        label: varname.label\n      };\n    });\n    this.setState({\n      \"varNameOptions\": options\n    });\n  }\n}",
      "source": "function getVarnameSelectOptions() {\n  // 变量下拉框选项\n  if (this.state.varnameList) {\n    const options = this.state.varnameList.map(varname => {\n      return {\n        key: varname.id,\n        value: varname.id,\n        label: varname.label\n      };\n    });\n    this.setState({\n      \"varNameOptions\": options\n    });\n  }\n}"
    },
    "getVarnameSelectOptionsByGroup": {
      "type": "JSFunction",
      "value": "function getVarnameSelectOptionsByGroup() {\n  return this.groupArray(this.state.varNameOptions);\n}",
      "source": "function getVarnameSelectOptionsByGroup() {\n  return this.groupArray(this.state.varNameOptions);\n}"
    },
    "groupArray": {
      "type": "JSFunction",
      "value": "function groupArray(arr) {\n  // 初始化两个分组对象\n  const customFixedGroup = {\n    label: '自定义固定值',\n    title: '自定义固定值',\n    options: []\n  };\n  const variableGroup = {\n    label: '填报变量',\n    title: '填报变量',\n    options: []\n  };\n\n  // 遍历传入的数组，根据 key 值将元素放入对应的分组\n  arr.forEach(item => {\n    if (this.checkStartsWithDollar(item.value)) {\n      customFixedGroup.options.push({\n        label: item.label,\n        value: item.value,\n        key: item.key\n      });\n    } else {\n      variableGroup.options.push({\n        label: item.label,\n        value: item.value,\n        key: item.key\n      });\n    }\n  });\n  if (customFixedGroup.options.length > 0) {\n    // 返回包含两个分组对象的数组\n    return [customFixedGroup, variableGroup];\n  } else {\n    // 返回包含两个分组对象的数组\n    return [variableGroup];\n  }\n}",
      "source": "function groupArray(arr) {\n  // 初始化两个分组对象\n  const customFixedGroup = {\n    label: '自定义固定值',\n    title: '自定义固定值',\n    options: []\n  };\n  const variableGroup = {\n    label: '填报变量',\n    title: '填报变量',\n    options: []\n  };\n\n  // 遍历传入的数组，根据 key 值将元素放入对应的分组\n  arr.forEach(item => {\n    if (this.checkStartsWithDollar(item.value)) {\n      customFixedGroup.options.push({\n        label: item.label,\n        value: item.value,\n        key: item.key\n      });\n    } else {\n      variableGroup.options.push({\n        label: item.label,\n        value: item.value,\n        key: item.key\n      });\n    }\n  });\n  if (customFixedGroup.options.length > 0) {\n    // 返回包含两个分组对象的数组\n    return [customFixedGroup, variableGroup];\n  } else {\n    // 返回包含两个分组对象的数组\n    return [variableGroup];\n  }\n}"
    },
    "getCurrentColumnSelectOptions": {
      "type": "JSFunction",
      "value": "function getCurrentColumnSelectOptions() {\n  // 变量下拉框选项\n  if (this.state.currentDbMeta.columns) {\n    return this.state.currentDbMeta.columns.map(column => {\n      return {\n        key: column.name,\n        value: column.name,\n        label: `${column.comment}-${column.name}`\n      };\n    });\n  }\n  return [];\n}",
      "source": "function getCurrentColumnSelectOptions() {\n  // 变量下拉框选项\n  if (this.state.currentDbMeta.columns) {\n    return this.state.currentDbMeta.columns.map(column => {\n      return {\n        key: column.name,\n        value: column.name,\n        label: `${column.comment}-${column.name}`\n      };\n    });\n  }\n  return [];\n}"
    },
    "getCurrentVarrulesOptions": {
      "type": "JSFunction",
      "value": "function getCurrentVarrulesOptions() {\n  if (this.state.varrules) {\n    return this.state.varrules.map(rule => {\n      return {\n        key: rule.id,\n        value: rule.id,\n        label: rule.varrule_name\n      };\n    });\n  }\n  return [];\n}",
      "source": "function getCurrentVarrulesOptions() {\n  if (this.state.varrules) {\n    return this.state.varrules.map(rule => {\n      return {\n        key: rule.id,\n        value: rule.id,\n        label: rule.varrule_name\n      };\n    });\n  }\n  return [];\n}"
    },
    "handleOpenConverter": {
      "type": "JSFunction",
      "value": "function handleOpenConverter(open) {\n  this.setState({\n    \"open_converter\": open\n  });\n}",
      "source": "function handleOpenConverter(open) {\n  this.setState({\n    \"open_converter\": open\n  });\n}"
    },
    "handleOpenAPIConverter": {
      "type": "JSFunction",
      "value": "function handleOpenAPIConverter(open) {\n  this.setState({\n    \"open_api_converter\": open\n  });\n}",
      "source": "function handleOpenAPIConverter(open) {\n  this.setState({\n    \"open_api_converter\": open\n  });\n}"
    },
    "handleAddItem": {
      "type": "JSFunction",
      "value": "function handleAddItem(value) {\n  this.setState({\n    \"varNameOptions\": [{\n      key: `$${value}`,\n      value: `$${value}`,\n      label: value\n    }, ...this.state.varNameOptions]\n  });\n}",
      "source": "function handleAddItem(value) {\n  this.setState({\n    \"varNameOptions\": [{\n      key: `$${value}`,\n      value: `$${value}`,\n      label: value\n    }, ...this.state.varNameOptions]\n  });\n}"
    },
    "converDataSourceList": {
      "type": "JSFunction",
      "value": "function converDataSourceList(dataList) {\n  if (dataList && dataList.length > 0) {\n    const confit_exprs = dataList.map((data, index) => {\n      let varValue;\n      if (data.value && data.value.varname_id) {\n        varValue = {\n          value: data.value.varname_id,\n          label: data.value.varname\n        };\n      } else {\n        varValue = {\n          label: data.value,\n          value: `$${data.value}`\n        };\n      }\n      return {\n        id: data.id ?? `${index}`,\n        column: data.column,\n        opt: data.opt,\n        value: varValue\n      };\n    });\n    return confit_exprs;\n  }\n  return [];\n}",
      "source": "function converDataSourceList(dataList) {\n  if (dataList && dataList.length > 0) {\n    const confit_exprs = dataList.map((data, index) => {\n      let varValue;\n      if (data.value && data.value.varname_id) {\n        varValue = {\n          value: data.value.varname_id,\n          label: data.value.varname\n        };\n      } else {\n        varValue = {\n          label: data.value,\n          value: `$${data.value}`\n        };\n      }\n      return {\n        id: data.id ?? `${index}`,\n        column: data.column,\n        opt: data.opt,\n        value: varValue\n      };\n    });\n    return confit_exprs;\n  }\n  return [];\n}"
    },
    "converColumnList": {
      "type": "JSFunction",
      "value": "function converColumnList() {\n  if (this.state.currentFormData.varname_definition_json && this.state.currentFormData.varname_definition_json.condit_expr && this.state.currentFormData.varname_definition_json.condit_expr.length > 0) {\n    const condit_exprs = this.state.currentFormData.varname_definition_json.condit_expr.map((datasource, index) => {\n      let varValue;\n      if (datasource.value && !this.checkStartsWithDollar(datasource.value.value)) {\n        varValue = {\n          varname_id: datasource.value.value,\n          varname: datasource.value.label\n        };\n      } else {\n        varValue = datasource.value.label;\n      }\n      return {\n        \"id\": `${datasource.id ?? index}`,\n        \"column\": datasource.column,\n        \"opt\": datasource.opt,\n        \"value\": varValue\n      };\n    });\n    return condit_exprs;\n  } else {\n    this.utils.errCreate(\"参数不能为空\");\n  }\n  return [];\n}",
      "source": "function converColumnList() {\n  if (this.state.currentFormData.varname_definition_json && this.state.currentFormData.varname_definition_json.condit_expr && this.state.currentFormData.varname_definition_json.condit_expr.length > 0) {\n    const condit_exprs = this.state.currentFormData.varname_definition_json.condit_expr.map((datasource, index) => {\n      let varValue;\n      if (datasource.value && !this.checkStartsWithDollar(datasource.value.value)) {\n        varValue = {\n          varname_id: datasource.value.value,\n          varname: datasource.value.label\n        };\n      } else {\n        varValue = datasource.value.label;\n      }\n      return {\n        \"id\": `${datasource.id ?? index}`,\n        \"column\": datasource.column,\n        \"opt\": datasource.opt,\n        \"value\": varValue\n      };\n    });\n    return condit_exprs;\n  } else {\n    this.utils.errCreate(\"参数不能为空\");\n  }\n  return [];\n}"
    },
    "dataSourceOnChange": {
      "type": "JSFunction",
      "value": "function dataSourceOnChange(dataSource) {\n  this.setState({\n    \"currentFormData\": {\n      varname_definition_json: {\n        ...this.state.currentFormData.varname_definition_json,\n        condit_expr: dataSource ?? []\n      }\n    }\n  });\n}",
      "source": "function dataSourceOnChange(dataSource) {\n  this.setState({\n    \"currentFormData\": {\n      varname_definition_json: {\n        ...this.state.currentFormData.varname_definition_json,\n        condit_expr: dataSource ?? []\n      }\n    }\n  });\n}"
    },
    "handleTabChange": {
      "type": "JSFunction",
      "value": "function handleTabChange(activeKey) {\n  this.setState({\n    currentQueryMode: activeKey\n  });\n}",
      "source": "function handleTabChange(activeKey) {\n  this.setState({\n    currentQueryMode: activeKey\n  });\n}"
    },
    "onCancelBtnClick": {
      "type": "JSFunction",
      "value": "function onCancelBtnClick(event) {\n  // 点击按钮时的回调\n  if (this.state.pageMode === 'Create') {\n    if (this.utils.onCancelCreate) {\n      this.utils.onCancelCreate();\n    }\n  } else {\n    if (this.utils.onCancelEdit) {\n      this.utils.onCancelEdit();\n    }\n  }\n}",
      "source": "function onCancelBtnClick(event) {\n  // 点击按钮时的回调\n  if (this.state.pageMode === 'Create') {\n    if (this.utils.onCancelCreate) {\n      this.utils.onCancelCreate();\n    }\n  } else {\n    if (this.utils.onCancelEdit) {\n      this.utils.onCancelEdit();\n    }\n  }\n}"
    },
    "buildSqlQuery": {
      "type": "JSFunction",
      "value": "function buildSqlQuery() {\n  const contentArr = this.state.sqlInfo.contentArr;\n  const tableName = this.state.sqlInfo.tableName;\n  const varName = this.state.sqlInfo.varName;\n  debugger;\n  // 动态拼接SQL查询字符串\n  let query = '';\n  for (let i = 0; i < this.state.sqlInfo.contentArr.length; i++) {\n    if (i === 0 && tableName) {\n      query += contentArr[i];\n      query += tableName;\n    } else if (i === 1 && varName) {\n      query += contentArr[i];\n      query += this.isNumeric(varName) ? varName : `\"${varName}\"`;\n    }\n  }\n  this.setState({\n    sqlResult: query\n  });\n}",
      "source": "function buildSqlQuery() {\n  const contentArr = this.state.sqlInfo.contentArr;\n  const tableName = this.state.sqlInfo.tableName;\n  const varName = this.state.sqlInfo.varName;\n  debugger;\n  // 动态拼接SQL查询字符串\n  let query = '';\n  for (let i = 0; i < this.state.sqlInfo.contentArr.length; i++) {\n    if (i === 0 && tableName) {\n      query += contentArr[i];\n      query += tableName;\n    } else if (i === 1 && varName) {\n      query += contentArr[i];\n      query += this.isNumeric(varName) ? varName : `\"${varName}\"`;\n    }\n  }\n  this.setState({\n    sqlResult: query\n  });\n}"
    },
    "isNumeric": {
      "type": "JSFunction",
      "value": "function isNumeric(str) {\n  return /^-?\\d+(\\.\\d+)?$/.test(str);\n}",
      "source": "function isNumeric(str) {\n  return /^-?\\d+(\\.\\d+)?$/.test(str);\n}"
    },
    "handleTableNameChange": {
      "type": "JSFunction",
      "value": "function handleTableNameChange(value) {\n  const selectedTable = this.state.dbMetas.find(table => table.id === value);\n  if (selectedTable) {\n    this.setState({\n      sqlInfo: {\n        ...this.state.sqlInfo,\n        tableName: selectedTable.tablename\n      }\n    }, () => {\n      this.buildSqlQuery();\n    });\n  }\n}",
      "source": "function handleTableNameChange(value) {\n  const selectedTable = this.state.dbMetas.find(table => table.id === value);\n  if (selectedTable) {\n    this.setState({\n      sqlInfo: {\n        ...this.state.sqlInfo,\n        tableName: selectedTable.tablename\n      }\n    }, () => {\n      this.buildSqlQuery();\n    });\n  }\n}"
    },
    "handleVarNameSelected": {
      "type": "JSFunction",
      "value": "function handleVarNameSelected(value) {\n  // if(!value) return;\n\n  // let varnameStr = '';\n  // const resultVarnameObj = this.state.varnameList.find(item => item.id === value.key)\n  // if(!resultVarnameObj) {\n  //   varnameStr = value\n  // } else {\n  //   varnameStr = resultVarnameObj.varname_type === ''\n  // }\n  debugger;\n  this.setState({\n    sqlInfo: {\n      ...this.state.sqlInfo,\n      varName: value.value\n    }\n  }, () => {\n    this.buildSqlQuery();\n  });\n}",
      "source": "function handleVarNameSelected(value) {\n  // if(!value) return;\n\n  // let varnameStr = '';\n  // const resultVarnameObj = this.state.varnameList.find(item => item.id === value.key)\n  // if(!resultVarnameObj) {\n  //   varnameStr = value\n  // } else {\n  //   varnameStr = resultVarnameObj.varname_type === ''\n  // }\n  debugger;\n  this.setState({\n    sqlInfo: {\n      ...this.state.sqlInfo,\n      varName: value.value\n    }\n  }, () => {\n    this.buildSqlQuery();\n  });\n}"
    },
    "handleClosePreview": {
      "type": "JSFunction",
      "value": "function handleClosePreview() {\n  this.setState({\n    \"showPreview\": false,\n    \"previewResult\": {}\n  });\n}",
      "source": "function handleClosePreview() {\n  this.setState({\n    \"showPreview\": false,\n    \"previewResult\": {}\n  });\n}"
    },
    "handleTypeSelectChange": {
      "type": "JSFunction",
      "value": "function handleTypeSelectChange(event) {\n  handleTypeSelectChange;\n  this.setState({\n    isInputAllowed: event === 'string'\n  });\n}",
      "source": "function handleTypeSelectChange(event) {\n  handleTypeSelectChange;\n  this.setState({\n    isInputAllowed: event === 'string'\n  });\n}"
    },
    "allowLineNum": {
      "type": "JSFunction",
      "value": "function allowLineNum() {\n  console.log(this.state.currentFormData.varname_definition_json.has_multi_line);\n  return this.state.currentFormData.varname_definition_json.has_multi_line ? 1 : 3;\n}",
      "source": "function allowLineNum() {\n  console.log(this.state.currentFormData.varname_definition_json.has_multi_line);\n  return this.state.currentFormData.varname_definition_json.has_multi_line ? 1 : 3;\n}"
    },
    "handleShowMultiLine": {
      "type": "JSFunction",
      "value": "function handleShowMultiLine(e) {\n  console.log(e);\n  this.setState({\n    showMultiLine: e\n  });\n}",
      "source": "function handleShowMultiLine(e) {\n  console.log(e);\n  this.setState({\n    showMultiLine: e\n  });\n}"
    },
    "checkStartsWithDollar": {
      "type": "JSFunction",
      "value": "function checkStartsWithDollar(str) {\n  return `${str}`.startsWith('$');\n}",
      "source": "function checkStartsWithDollar(str) {\n  return `${str}`.startsWith('$');\n}"
    }
  },
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "originCode": "class Page extends Component {\n  state = {\n    \"selectedOptionType\": \"Data\",\n    \"dbMetas\": [],\n    \"varnameList\": [],\n    \"currentDbMeta\": {},\n    \"currentQueryMode\": \"condit_expr\",\n    \"data_json\": {\n      \"query_mode\": \"condit_expr\"\n    },\n    \"basicFetchObj\": {},\n    \"varrules\": [],\n    \"open_converter\": false,\n    \"open_api_converter\": false,\n    \"varNameOptions\": [],\n    \"sqlInfo\": {\n      contentArr: [\"select * from \", \" where \"],\n      tableName: '',\n      varName: ''\n    },\n    \"actionMode\": \"create\",\n    \"sqlResult\": \"\",\n    \"previewResult\": {},\n    \"showPreview\": false,\n    \"apiParamList\": [],\n    \"currentApiSource\":{},\n    \"currentFormData\": {},\n    \"pageMode\":\"Create\",\n    \"isInputAllowed\": true,\n    \"showMultiLine\": false,\n  }\n  componentDidMount() {\n    this.getDbMetas();\n    this.getAllVarrules();\n    this.getVarnameList();\n    this.getApiSourceList();\n \n    if (this.utils.currentRecord) {\n      this.setState({\n        \"currentRecord\": this.utils.currentRecord()\n      }, () => {\n        this.initData()\n      })\n    }\n  }\n  initData() {\n    if(this.state.currentRecord) {\n      this.setState({\n        \"currentFormData\": {\n          ...this.state.currentRecord,\n          varname_definition_json:{}\n        },\n        \"pageMode\": \"Edit\"\n      },()=>{\n        switch (this.state.currentRecord.varname_type) {\n          case 'Data':\n            this.initDataValue();\n            break;\n          default:\n            return;\n        }\n      })\n    }\n  }\n\n  initDataValue() {\n    const dataList = this.converDataSourceList(this.state.currentRecord.varname_definition_json.condit_expr);\n    this.setState({\n      currentFormData: {\n        varname_definition_json: {\n          condit_expr: dataList\n        }\n      }\n    })\n  }\n\n  handleCreateVarname(params) {\n    this.dataSourceMap['CreateVarname'].load(params).then(res => {\n      if (this.utils.finishCreate) {\n        this.utils.finishCreate();\n      }\n    }).catch(err => {\n      if (this.utils.errCreate) {\n        this.utils.errCreate();\n      }\n    });\n  }\n  handlePreviewResult(params) {\n    this.dataSourceMap['PreViewVarname'].load(params).then(res => {\n     this.setState({\n       \"previewResult\": res.result,\n     })\n    }).catch(err => {\n      this.setState({\n        \"previewResult\": \"预览失败\",\n      })\n    });\n  }\n  handlePreViewBtnClick() {\n    this.setState({\n      \"actionMode\": \"preview\",\n      \"showPreview\": true,\n    },()=>{\n      this.executeProgram()\n    })\n  }\n \n  async executeProgram() {\n    // 获取表单字段值\n    try { \n      this.$('form_CreateVarname').validateFields().then(values => {\n        if (values) {\n          if (!values.label || values.label.length === 0) {\n            this.utils.errCreate(\"名称不能为空\");\n            return;\n          }\n\n          if (!values.varname || values.varname.length === 0) {\n            this.utils.errCreate(\"变量名不能为空\");\n            return;\n          }\n\n          this.setState({\n            basicFetchObj: {\n              label: values.label ?? \"\",\n              verify_rules: values.verify_rules ?? [],\n              varname: values.varname ?? \"\",\n              varname_type: this.state.selectedOptionType,\n              column_type: \"string\",\n              varname_definition_json: values.varname_definition_json ?? {}\n            }\n          }, () => {\n            switch (this.state.selectedOptionType) {\n              case \"Data\":\n                this.processDataVariable();\n                break;\n              case \"LLM\":\n                this.processModelVariable();\n                break;\n              case \"API\":\n                this.processAPIVariable();\n                break;\n              case \"FillIn\":\n                this.processFillInVariable();\n                break;\n              default:\n                console.log(\"Unknown variable type\");\n            }\n          });\n        }\n      });\n      // const values = this.$('form_CreateVarname').getFieldsValue();\n      \n    } catch (errorInfo) {\n      console.log('Validation failed:', errorInfo);\n    }\n   \n  }\n  handleCreateVarnameBtnClick() {\n    this.setState({\n      \"actionMode\": \"create\"\n    }, () => {\n      this.executeProgram()\n    })\n  }\n  processDataVariable() {\n    switch (this.state.currentQueryMode) {\n      case \"condit_expr\":\n        this.processDataForm();\n        break;\n      case \"raw_sql\":\n        this.processDataSql();\n        break;\n      default:\n        console.log(\"Unknown currentQueryMode\");\n    }\n  }\n  processDataForm() {\n    if (!this.state.basicFetchObj.varname_definition_json.db_origin_id) {\n      this.utils.errCreate(\"数据源不能为空\");\n      return;\n    }\n\n    if (!this.state.basicFetchObj.varname_definition_json?.valueas.column) {\n      this.utils.errCreate(\"取值字段不能为空\");\n    }\n\n    const exprs = this.converColumnList();\n\n    this.setState({\n      \"basicFetchObj\": {\n        ...this.state.basicFetchObj,\n        varname_definition_json: {\n          // ...this.state.basicFetchObj.varname_definition_json,\n          \"db_origin_id\": this.state.basicFetchObj.varname_definition_json.db_origin_id,\n          \"query_mode\": this.state.currentQueryMode ?? \"condit_expr\",\n          \"condit_expr\": exprs,\n          \"valueas\": {\n            column: this.state.basicFetchObj.varname_definition_json?.valueas.column,\n            converter: this.state.open_api_converter ? {\n              \"pattern\": \"fmt\",\n              \"spec\": this.state.basicFetchObj.varname_definition_json?.valueas.converter\n            } : undefined\n          }\n          \n        }\n      }\n    }, () => {\n      if (this.state.actionMode === 'create') {\n        this.handleCreateVarname(this.state.basicFetchObj);\n      }\n      if (this.state.actionMode === 'preview') {\n        this.handlePreviewResult(this.state.basicFetchObj);\n      }\n    });\n  }\n  processDataSql() {\n    if (!this.state.basicFetchObj.varname_definition_json.db_origin_id) {\n      this.utils.errCreate(\"数据源不能为空\");\n      return;\n    }\n\n    if (!this.state.sqlResult || this.state.sqlResult.length === 0) {\n      this.utils.errCreate(\"sql不能为空\");\n      return;\n    }\n\n    this.setState({\n      \"basicFetchObj\": {\n        ...this.state.basicFetchObj,\n        varname_definition_json:{\n          // ...this.state.basicFetchObj.varname_definition_json,\n          \"db_origin_id\": this.state.basicFetchObj.varname_definition_json.db_origin_id,\n          \"query_mode\": \"raw_sql\",\n          \"sql\": this.state.sqlResult,\n          \"valueas\": {\n            column: this.state.basicFetchObj.varname_definition_json?.valueas.column,\n            converter: this.state.open_api_converter ? {\n              \"pattern\": \"fmt\",\n              \"spec\": this.state.basicFetchObj.varname_definition_json?.valueas.converter\n            } : undefined\n          }\n        }\n      }\n    },() => {\n      if (this.state.actionMode === 'create') {\n        this.handleCreateVarname(this.state.basicFetchObj);\n      }\n\n      if (this.state.actionMode === 'preview') {\n        this.handlePreviewResult(this.state.basicFetchObj);\n      }\n    })\n  }\n  processModelVariable() {\n    if (!this.state.basicFetchObj.varname_definition_json.prompt || this.state.basicFetchObj.varname_definition_json.prompt.length === 0) {\n      this.utils.errCreate(\"prompt 不能为空\");\n      return;\n    }\n\n    this.setState({\n      \"basicFetchObj\": {\n        ...this.state.basicFetchObj,\n        varname_definition_json: {\n          // ...this.state.basicFetchObj.varname_definition_json,\n          \"prompt\": this.state.basicFetchObj.varname_definition_json.prompt,\n        }\n      }\n    }, () => {\n      if (this.state.actionMode === 'create') {\n        this.handleCreateVarname(this.state.basicFetchObj);\n      }\n\n      if (this.state.actionMode === 'preview') {\n        this.handlePreviewResult(this.state.basicFetchObj);\n      }\n    })\n\n  }\n  processAPIVariable() {\n    \n    if (!this.state.basicFetchObj.varname_definition_json.params ) {\n      this.utils.errCreate(\"api参数 不能为空\");\n      return;\n    }\n\n    if (!this.state.basicFetchObj.varname_definition_json.api_origin_id) {\n      this.utils.errCreate(\"api接口源 不能为空\");\n      return;\n    }\n\n    if (!this.state.basicFetchObj.varname_definition_json?.api_valueas.column) {\n      this.utils.errCreate(\"取值字段不能为空\");\n    }\n    \n    const params = this.transformObjectToArray(this.state.basicFetchObj.varname_definition_json.params);\n\n    this.setState({\n      \"basicFetchObj\":{\n        ...this.state.basicFetchObj,\n        varname_definition_json: {\n          api_origin_id: this.state.basicFetchObj.varname_definition_json.api_origin_id,\n          params: params,\n          \"valueas\": {\n            \n            column: this.state.basicFetchObj.varname_definition_json?.api_valueas.column,\n            converter: this.state.open_api_converter ? {\n              \"pattern\": \"fmt\",\n              \"spec\": this.state.basicFetchObj.varname_definition_json?.api_valueas.converter\n            } : undefined\n          }\n        }\n      }\n    }, () => {\n      if (this.state.actionMode === 'create') {\n        this.handleCreateVarname(this.state.basicFetchObj);\n      }\n\n      if (this.state.actionMode === 'preview') {\n        this.handlePreviewResult(this.state.basicFetchObj);\n      }\n    })\n  }\n  processFillInVariable() {\n    if (!this.state.basicFetchObj.varname_definition_json.value_type) {\n      this.utils.errCreate(\"变量类型 不能为空\");\n      return;\n    }\n\n    this.setState({\n      \"basicFetchObj\": {\n        ...this.state.basicFetchObj,\n        varname_definition_json: {\n          value_type: this.state.basicFetchObj.varname_definition_json.value_type,\n          value: this.state.basicFetchObj.varname_definition_json.value ?? \"\",\n          has_multi_line: this.state.basicFetchObj.varname_definition_json.has_multi_line\n        }\n      }\n    }, () => {\n      if (this.state.actionMode === 'create') {\n        this.handleCreateVarname(this.state.basicFetchObj);\n      }\n\n      if (this.state.actionMode === 'preview') {\n        this.handlePreviewResult(this.state.basicFetchObj);\n      }\n    })\n  }\n  transformObjectToArray(obj) {\n    const result = [];\n\n    for (const key in obj) {\n      if (obj.hasOwnProperty(key)) {\n        const { label } = obj[key];\n        result.push({\n          param_name: key,\n          param_value: label\n        });\n      }\n    }\n    return result;\n  }\n\n  handleOptionChange(e) {\n    const newValue = e.target.value;\n    this.setState({\n      \"selectedOptionType\": newValue\n    },()=>{\n      // 清空预览数据，关闭预览视图\n      this.setState({\n        previewResult: {},\n        showPreview: false\n      })\n      // 清空校验规则\n      this.setState({\n        currentFormData:{\n          verify_rules: []\n        }\n      })\n    });\n  }\n  getAllVarrules() {\n    this.dataSourceMap['AllVarrules'].load().then(res => {\n      this.setState({\n        \"varrules\": res.result\n      });\n    });\n  }\n  getDbMetas() {\n    this.dataSourceMap['DBMetaDatas'].load().then(res => {\n      this.setState({\n        dbMetas: res.result\n      });\n    });\n  }\n  getVarnameList() {\n    this.dataSourceMap['GetVarnameList'].load().then(res => {\n      this.setState({\n        \"varnameList\": res.result\n      }, () => {\n        this.getVarnameSelectOptions();\n        \n      });\n    });\n  }\n  getApiSourceList() {\n    this.dataSourceMap['ApiConnector'].load().then(res=> {\n      this.setState({\n        \"apiSourceList\": res.result\n      })\n    })\n  }\n  getDataMetaOptions() {\n    if (this.state.dbMetas ){\n      return this.state.dbMetas.map(meta => {\n        return {\n          label: meta.label,\n          value: meta.id\n        };\n      });\n    }\n    return []\n    \n  }\n  getApiSourceOptions() {\n    if (this.state.apiSourceList) {\n      return this.state.apiSourceList.map(source => {\n        return {\n          key: source.id,\n          label: source.label,\n          value: source.id\n        }\n      })\n    }\n    return []\n  }\n  filterApiParams(id){\n   \n    if (id && this.state.apiSourceList && this.state.apiSourceList.length > 0) {\n      const currentSource = this.state.apiSourceList.find(source => source.id === id);\n      if(currentSource && currentSource.params) {\n        const params = currentSource.params.map(item => {\n          return {\n            param_name: item,\n            param_value: \"\"\n          }\n        })\n\n        this.setState({\n          \"apiParamList\": params,\n          \"currentApiSource\": currentSource\n        })\n      }\n    }\n  }\n  onSqlCodeChange(code) {\n    this.setState({\n      \"sqlResult\": code\n    })\n  }\n  onDataMetaSelect(value) {\n    // 选择数据源触发\n    if (value) {\n      this.setState({\n        currentDbMeta: this.state.dbMetas.find(obj => obj.id === value)\n      }, () => {\n        this.setState({\n          \"data_json\": {\n            ...this.state.data_json,\n            db_origin_id: this.state.currentDbMeta.id\n          }\n        });\n      });\n    }\n  }\n  getCurrentColumnsOptions() {\n    // 获取当前变量选项列表\n    let options = {};\n    if (this.state.currentDbMeta && this.state.currentDbMeta.columns && this.state.currentDbMeta.columns.length > 0) {\n      this.state.currentDbMeta.columns.forEach(column => {\n        options[column.name] = {\n          \"text\": `${column.comment} - ${column.name}`\n        };\n      });\n    }\n    return options;\n  }\n  getVarnameOptions() {\n    let options = {};\n    if (this.state.varnameList) {\n      this.state.varnameList.forEach(varname => {\n        options[varname.id] = {\n          \"text\": varname.label\n        };\n      });\n    }\n    return options;\n  }\n  getVarnameSelectOptions() {\n    // 变量下拉框选项\n    if (this.state.varnameList) {\n\n      const options = this.state.varnameList.map(varname => {\n        return {\n          key: varname.id,\n          value: varname.id,\n          label: varname.label\n        };\n      });\n      this.setState({\n        \"varNameOptions\": options\n      });\n    }\n  }\n\n  getVarnameSelectOptionsByGroup() {\n    return this.groupArray(this.state.varNameOptions)\n  }\n\n  groupArray(arr) {\n    // 初始化两个分组对象\n    const customFixedGroup = {\n      label: '自定义固定值',\n      title: '自定义固定值',\n      options: [],\n    };\n\n    const variableGroup = {\n      label: '填报变量',\n      title: '填报变量',\n      options: [],\n    };\n\n    // 遍历传入的数组，根据 key 值将元素放入对应的分组\n    arr.forEach(item => {\n      if (this.checkStartsWithDollar(item.value)) {\n        customFixedGroup.options.push({\n          label: item.label,\n          value: item.value,\n          key: item.key,\n        });\n      } else {\n        variableGroup.options.push({\n          label: item.label,\n          value: item.value,\n          key: item.key,\n        });\n      }\n    });\n\n    if (customFixedGroup.options.length  > 0) {\n      // 返回包含两个分组对象的数组\n      return [customFixedGroup, variableGroup];\n    } else {\n      // 返回包含两个分组对象的数组\n      return [ variableGroup];\n    }\n  }\n  getCurrentColumnSelectOptions() {\n    // 变量下拉框选项\n    if (this.state.currentDbMeta.columns) {\n      return this.state.currentDbMeta.columns.map(column => {\n        return {\n          key: column.name,\n          value: column.name,\n          label: `${column.comment}-${column.name}`\n        };\n      });\n    }\n    return [];\n  }\n  getCurrentVarrulesOptions() {\n    if (this.state.varrules) {\n      return this.state.varrules.map(rule => {\n        return {\n          key: rule.id,\n          value: rule.id,\n          label: rule.varrule_name\n        };\n      });\n    }\n    return [];\n  }\n  handleOpenConverter(open) {\n    this.setState({\n      \"open_converter\": open\n    });\n  }\n  handleOpenAPIConverter(open) {\n    this.setState({\n      \"open_api_converter\": open\n    });\n  }\n\n  handleAddItem(value) {\n    this.setState({\n      \"varNameOptions\": [{\n        key: `$${value}`,\n        value: `$${value}`,\n        label: value\n      }, ...this.state.varNameOptions]\n    });\n  }\n\n  converDataSourceList(dataList) {\n\n    if(dataList && dataList.length > 0){\n      \n      const confit_exprs = dataList.map((data,index) => {\n        \n        let varValue;\n        if (data.value && data.value.varname_id) {\n          varValue = {\n            value: data.value.varname_id,\n            label: data.value.varname\n          }\n        } else {\n          varValue = {\n            label: data.value,\n            value: `$${data.value}`\n          }\n        }\n\n        return {\n          id: data.id ?? `${index}`,\n          column: data.column,\n          opt: data.opt,\n          value: varValue\n        }\n      })\n\n      return confit_exprs;\n    }\n    return [];\n  }\n  converColumnList() {\n    if (this.state.currentFormData.varname_definition_json && this.state.currentFormData.varname_definition_json.condit_expr && this.state.currentFormData.varname_definition_json.condit_expr.length > 0 ) {\n     \n      const condit_exprs = this.state.currentFormData.varname_definition_json.condit_expr.map((datasource, index) => {\n        let varValue;\n        if (datasource.value && !this.checkStartsWithDollar(datasource.value.value)) {\n          varValue = {\n            varname_id: datasource.value.value,\n            varname: datasource.value.label\n          };\n        } else {\n          varValue = datasource.value.label;\n        }\n        return {\n          \"id\": `${datasource.id ?? index}`,\n          \"column\": datasource.column,\n          \"opt\": datasource.opt,\n          \"value\": varValue\n        };\n      });\n      return condit_exprs;\n    } else {\n      this.utils.errCreate(\"参数不能为空\");\n    }\n    return [];\n  }\n  dataSourceOnChange(dataSource) {\n    this.setState({\n      \"currentFormData\": {\n        varname_definition_json: {\n          ...this.state.currentFormData.varname_definition_json,\n          condit_expr: dataSource ?? []\n        }\n      }\n    });\n  }\n  handleTabChange(activeKey) {\n    this.setState({\n      currentQueryMode: activeKey\n    });\n  }\n  onCancelBtnClick(event) {\n    // 点击按钮时的回调\n    if(this.state.pageMode === 'Create')\n    {\n      if (this.utils.onCancelCreate) {\n        this.utils.onCancelCreate();\n      }\n    } else {\n      if (this.utils.onCancelEdit) {\n        this.utils.onCancelEdit();\n      }\n    }\n  }\n  buildSqlQuery () {\n    const contentArr = this.state.sqlInfo.contentArr\n    const tableName = this.state.sqlInfo.tableName;\n    const varName = this.state.sqlInfo.varName;\n    debugger;\n    // 动态拼接SQL查询字符串\n    let query = '';\n    for (let i = 0; i < this.state.sqlInfo.contentArr.length; i++) {\n      if (i === 0 && tableName) {\n        query += contentArr[i];\n        query += tableName;\n      } else if (i === 1 && varName) {\n        query += contentArr[i];\n        query += this.isNumeric(varName) ? varName : `\"${varName}\"`;\n      }\n    }\n    this.setState({\n      sqlResult: query\n    })\n  }\n  isNumeric(str) {\n    return /^-?\\d+(\\.\\d+)?$/.test(str);\n  }\n  handleTableNameChange (value) {\n    const selectedTable = this.state.dbMetas.find(table => table.id === value);\n    if (selectedTable) {\n      this.setState({\n        sqlInfo: {\n          ...this.state.sqlInfo,\n          tableName: selectedTable.tablename\n        }\n      },() => {\n        this.buildSqlQuery();\n      });\n    }\n  }\n  handleVarNameSelected(value) {\n    \n    // if(!value) return;\n    \n    // let varnameStr = '';\n    // const resultVarnameObj = this.state.varnameList.find(item => item.id === value.key)\n    // if(!resultVarnameObj) {\n    //   varnameStr = value\n    // } else {\n    //   varnameStr = resultVarnameObj.varname_type === ''\n    // }\ndebugger;\n    \n    this.setState({\n      sqlInfo: {\n        ...this.state.sqlInfo,\n        varName: value.value\n      }\n    }, () => {\n      this.buildSqlQuery();\n    });\n  }\n\thandleClosePreview(){\n    this.setState({\n      \"showPreview\": false,\n      \"previewResult\": {}\n    })\n\t}\n  handleTypeSelectChange(event) {\n    handleTypeSelectChange\n    this.setState({\n      isInputAllowed: event === 'string'\n    });\n  }\n  allowLineNum() {\n    console.log(this.state.currentFormData.varname_definition_json.has_multi_line);\n    return this.state.currentFormData.varname_definition_json.has_multi_line ? 1 : 3\n  }\n  handleShowMultiLine (e){\n    console.log(e);\n    \n    this.setState({\n      showMultiLine: e\n    })\n  }\n  checkStartsWithDollar(str) {\n    return `${str}`.startsWith('$')\n  }\n}",
  "children": [
    {
      "componentName": "Form",
      "id": "node_oclvjcoluk1",
      "props": {
        "labelCol": {
          "span": 5
        },
        "wrapperCol": {
          "span": 24
        },
        "name": "",
        "__component_name": "Form",
        "ref": "form_CreateVarname",
        "colon": true,
        "hideRequiredMark": false,
        "preserve": true,
        "scrollToFirstError": true,
        "style": {
          "width": "100%",
          "paddingBottom": "70px"
        },
        "layout": "vertical",
        "validateMessages": {
          "required": "'${name}' 不能为空"
        },
        "labelAlign": "right",
        "size": "middle",
        "values": {
          "type": "JSExpression",
          "value": "this.state.currentFormData"
        }
      },
      "hidden": false,
      "title": "创建变量",
      "description": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Form.Item",
          "id": "node_oclvjcoluk2",
          "props": {
            "label": "名称",
            "labelAlign": "right",
            "colon": true,
            "required": true,
            "noStyle": false,
            "valuePropName": "value",
            "name": "label",
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
            },
            "__component_name": "Form.Item",
            "hideInSearch": true
          },
          "hidden": false,
          "title": "名称",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input",
              "id": "node_oclvjcoluk3",
              "props": {
                "placeholder": "请输入",
                "bordered": true,
                "disabled": false,
                "size": "middle",
                "__component_name": "Input"
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
          "id": "node_oclvywk1xn1",
          "props": {
            "label": "变量名",
            "labelAlign": "right",
            "colon": true,
            "required": true,
            "noStyle": false,
            "valuePropName": "value",
            "name": "varname",
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
            },
            "__component_name": "Form.Item",
            "hideInSearch": true
          },
          "hidden": false,
          "title": "名称",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Input",
              "id": "node_oclvywk1xn2",
              "props": {
                "placeholder": "请输入",
                "bordered": true,
                "disabled": false,
                "size": "middle",
                "__component_name": "Input"
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
          "id": "node_oclwg0uj261",
          "props": {
            "label": "类型",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "name": "varname_type",
            "requiredobj": {
              "required": false,
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
            },
            "__component_name": "Form.Item",
            "hideInSearch": true
          },
          "hidden": false,
          "title": "类型",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Radio.Group",
              "id": "node_oclwg0uj263",
              "props": {
                "options": [
                  {
                    "label": "数据变量",
                    "value": "Data"
                  },
                  {
                    "label": "模型变量",
                    "value": "LLM"
                  },
                  {
                    "label": "API变量",
                    "value": "API"
                  },
                  {
                    "label": "填报变量",
                    "value": "FillIn",
                    "disabled": false
                  }
                ],
                "disabled": false,
                "size": "middle",
                "buttonStyle": "outline",
                "defaultValue": "Data",
                "value": {
                  "type": "JSExpression",
                  "value": "this.state.selectedOptionType",
                  "mock": "Data"
                },
                "optionType": "default",
                "style": {
                  "paddingLeft": "10px",
                  "paddingRight": "10px"
                },
                "__events": {
                  "eventDataList": [
                    {
                      "type": "componentEvent",
                      "name": "onChange",
                      "relatedEventName": "handleOptionChange"
                    }
                  ],
                  "eventList": [
                    {
                      "name": "onChange",
                      "template": "onChange(event,${extParams}){\n// 选项变化时的回调函数\nconsole.log('onChange',event);}",
                      "disabled": true
                    }
                  ]
                },
                "onChange": {
                  "type": "JSFunction",
                  "value": "function(){return this.handleOptionChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
          "id": "node_oclwghkm58b",
          "props": {
            "label": "",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "name": "varname_definition_json",
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
            },
            "__component_name": "Form.Item",
            "hideInSearch": true
          },
          "hidden": false,
          "title": "类型",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Div",
              "id": "node_oclwg0v6uoz",
              "props": {
                "style": {
                  "padding": "10px",
                  "borderRadius": "1px",
                  "borderWidth": "1px",
                  "borderColor": "#f1f1f1",
                  "borderStyle": "solid",
                  "marginBottom": "10px",
                  "display": "flex",
                  "flexDirection": "column",
                  "justifyContent": "flex-start"
                },
                "ref": "div-c14ecf2b"
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "loopArgs": [
                "",
                ""
              ],
              "children": [
                {
                  "componentName": "Card",
                  "id": "node_oclwghkm5818",
                  "props": {
                    "hidden": {
                      "type": "JSExpression",
                      "value": "this.state.selectedOptionType !== 'API'"
                    },
                    "bordered": false,
                    "hoverable": false,
                    "loading": false,
                    "size": "default",
                    "type": "default",
                    "ref": "card-92ccb7f8"
                  },
                  "title": "API",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "hidden": false,
                  "loopArgs": [
                    "",
                    ""
                  ],
                  "children": [
                    {
                      "componentName": "Form.Item",
                      "id": "node_oclwqd5pgg1",
                      "props": {
                        "label": "API接口源",
                        "name": "varname_definition_json.api_origin_id",
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
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Select",
                          "id": "node_oclwqd5pgg2",
                          "props": {
                            "style": {
                              "width": "100%"
                            },
                            "options": {
                              "type": "JSExpression",
                              "value": "this.getApiSourceOptions()"
                            },
                            "allowClear": false,
                            "autoFocus": false,
                            "defaultActiveFirstOption": true,
                            "disabled": false,
                            "labelInValue": false,
                            "showSearch": false,
                            "loading": false,
                            "bordered": true,
                            "optionFilterProp": "value",
                            "tokenSeparators": [],
                            "maxTagCount": 0,
                            "maxTagTextLength": 0,
                            "__events": {
                              "eventDataList": [
                                {
                                  "type": "componentEvent",
                                  "name": "onSelect",
                                  "relatedEventName": "filterApiParams"
                                }
                              ],
                              "eventList": [
                                {
                                  "name": "onBlur",
                                  "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onChange",
                                  "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onDeselect",
                                  "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onFocus",
                                  "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onInputKeyDown",
                                  "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onMouseEnter",
                                  "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onMouseLeave",
                                  "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onPopupScroll",
                                  "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onSearch",
                                  "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onSelect",
                                  "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                  "disabled": true
                                },
                                {
                                  "name": "onDropdownVisibleChange",
                                  "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                  "disabled": false
                                }
                              ]
                            },
                            "onSelect": {
                              "type": "JSFunction",
                              "value": "function(){return this.filterApiParams.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                            },
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
                      "componentName": "Row",
                      "id": "node_oclwq1jqf71",
                      "props": {
                        "align": "middle",
                        "justify": "start",
                        "wrap": true,
                        "ref": "row-3baad834",
                        "_unsafe_MixedSetter____loop____select": "VariableSetter"
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "loopArgs": [
                        "",
                        ""
                      ],
                      "children": [
                        {
                          "componentName": "Col",
                          "id": "node_oclwq1jqf73",
                          "props": {
                            "span": 12,
                            "order": 0,
                            "style": {
                              "padding": "10px"
                            },
                            "ref": "col-8aff70e4",
                            "_unsafe_MixedSetter____loop____select": "VariableSetter"
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "loopArgs": [
                            "",
                            ""
                          ],
                          "loop": {
                            "type": "JSExpression",
                            "value": "this.state.apiParamList"
                          },
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwqd6mt819",
                              "props": {
                                "label": {
                                  "type": "JSExpression",
                                  "value": "this.item.param_name ? this.item.param_name: \"变量名\""
                                },
                                "name": {
                                  "type": "JSExpression",
                                  "value": "`varname_definition_json.params.${this.item.param_name}`"
                                },
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
                                },
                                "_unsafe_MixedSetter_label_select": "VariableSetter",
                                "ref": "form.item-c5d6eba6"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "loopArgs": [
                                "",
                                ""
                              ],
                              "children": [
                                {
                                  "componentName": "EditSelect",
                                  "id": "node_oclwqd71l51",
                                  "props": {
                                    "style": {
                                      "width": "100%"
                                    },
                                    "options": {
                                      "type": "JSExpression",
                                      "value": "this.state.varNameOptions"
                                    },
                                    "value": {
                                      "type": "JSExpression",
                                      "value": "this.record.value.varname_id ?? this.record.value"
                                    },
                                    "allowClear": true,
                                    "autoFocus": false,
                                    "defaultActiveFirstOption": false,
                                    "disabled": false,
                                    "labelInValue": true,
                                    "showSearch": false,
                                    "loading": false,
                                    "bordered": true,
                                    "optionFilterProp": "value",
                                    "tokenSeparators": [],
                                    "maxTagCount": 1,
                                    "maxTagTextLength": 100,
                                    "actionTitle": "新增",
                                    "addItemAction": {
                                      "type": "JSFunction",
                                      "value": "function(){return this.handleAddItem.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                    },
                                    "__events": {
                                      "eventDataList": [
                                        {
                                          "type": "componentEvent",
                                          "name": "addItemAction",
                                          "relatedEventName": "handleAddItem"
                                        }
                                      ],
                                      "eventList": [
                                        {
                                          "name": "onBlur",
                                          "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onChange",
                                          "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "addItemAction",
                                          "template": "addItemAction(value){\n// 点击按钮时，调用此函数\nconsole.log('addItemAction',value);}",
                                          "disabled": true
                                        },
                                        {
                                          "name": "onDeselect",
                                          "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onFocus",
                                          "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onInputKeyDown",
                                          "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onMouseEnter",
                                          "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onMouseLeave",
                                          "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onPopupScroll",
                                          "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onSearch",
                                          "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onSelect",
                                          "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                          "disabled": false
                                        },
                                        {
                                          "name": "onDropdownVisibleChange",
                                          "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                          "disabled": false
                                        }
                                      ]
                                    },
                                    "_unsafe_MixedSetter_value_select": "StringSetter",
                                    "mode": "single",
                                    "showArrow": true,
                                    "ref": "editselect-a509696b",
                                    "_unsafe_MixedSetter_options_select": "ExpressionSetter",
                                    "inputPlaceholder": "自定义值内容"
                                  },
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "loopArgs": [
                                    "",
                                    ""
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "componentName": "Row",
                      "id": "node_oclwqdh3ku1",
                      "props": {
                        "align": "middle",
                        "justify": "start",
                        "wrap": false,
                        "style": {
                          "paddingTop": "20px"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Col",
                          "id": "node_oclwqdh3ku2",
                          "props": {
                            "span": 10,
                            "order": 0
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwqdh3ku3",
                              "props": {
                                "label": "取值字段",
                                "colon": true,
                                "required": true,
                                "noStyle": false,
                                "valuePropName": "value",
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
                                },
                                "requiredobj": {
                                  "required": "",
                                  "message": ""
                                },
                                "name": "varname_definition_json.api_valueas.column"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Input",
                                  "id": "node_oclwr9o0691",
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
                            }
                          ]
                        },
                        {
                          "componentName": "Col",
                          "id": "node_oclwqdh3ku5",
                          "props": {
                            "span": 4,
                            "order": 0
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwqdh3ku6",
                              "props": {
                                "label": "是否转换",
                                "colon": true,
                                "required": false,
                                "noStyle": false,
                                "valuePropName": "value",
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
                                },
                                "style": {
                                  "display": "flex",
                                  "justifyContent": "center"
                                },
                                "requiredobj": {
                                  "required": "",
                                  "message": ""
                                },
                                "name": ""
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Switch",
                                  "id": "node_oclwqdh3ku7",
                                  "props": {
                                    "defaultChecked": {
                                      "type": "JSExpression",
                                      "value": "this.state.open_api_converter"
                                    },
                                    "autoFocus": false,
                                    "disabled": false,
                                    "loading": false,
                                    "__events": {
                                      "eventDataList": [
                                        {
                                          "type": "componentEvent",
                                          "name": "onChange",
                                          "relatedEventName": "handleOpenAPIConverter"
                                        }
                                      ],
                                      "eventList": [
                                        {
                                          "name": "onChange",
                                          "template": "onChange(checked,event,${extParams}){\n// 变化时回调函数\nconsole.log('onChange',checked,event);}",
                                          "disabled": true
                                        },
                                        {
                                          "name": "onClick",
                                          "template": "onClick(checked,event,${extParams}){\n// 点击时回调函数\nconsole.log('onClick',checked,event);}",
                                          "disabled": false
                                        }
                                      ]
                                    },
                                    "onChange": {
                                      "type": "JSFunction",
                                      "value": "function(){return this.handleOpenAPIConverter.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                        },
                        {
                          "componentName": "Col",
                          "id": "node_oclwqdh3ku8",
                          "props": {
                            "span": 10,
                            "order": 0,
                            "ref": "col-bdb53fa5"
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "loopArgs": [
                            "",
                            ""
                          ],
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwqdh3ku9",
                              "props": {
                                "label": "转换内容",
                                "colon": true,
                                "required": false,
                                "noStyle": false,
                                "valuePropName": "value",
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
                                },
                                "requiredobj": {
                                  "required": "",
                                  "message": ""
                                },
                                "name": "varname_definition_json.api_valueas.converter",
                                "ref": "form.item-793baaa2",
                                "hidden": {
                                  "type": "JSExpression",
                                  "value": "!this.state.open_api_converter"
                                }
                              },
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "hidden": false,
                              "loopArgs": [
                                "",
                                ""
                              ],
                              "children": [
                                {
                                  "componentName": "Input",
                                  "id": "node_oclwqdh3kua",
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
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "componentName": "Card",
                  "id": "node_oclwg0w0nn1n",
                  "props": {
                    "hidden": {
                      "type": "JSExpression",
                      "value": "this.state.selectedOptionType !== 'FillIn'"
                    },
                    "bordered": false,
                    "hoverable": false,
                    "loading": false,
                    "size": "default",
                    "type": "default"
                  },
                  "hidden": false,
                  "title": "填报变量(FillIn)",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Form.Item",
                      "id": "node_oclwghkm582",
                      "props": {
                        "label": "类型",
                        "colon": true,
                        "required": false,
                        "noStyle": false,
                        "valuePropName": "value",
                        "labelCol": {
                          "span": 2,
                          "offset": 0
                        },
                        "wrapperCol": {
                          "offset": 0
                        },
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
                        },
                        "name": "varname_definition_json.value_type"
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Select",
                          "id": "node_oclwghkm583",
                          "props": {
                            "style": {
                              "width": 200
                            },
                            "options": [
                              {
                                "label": "字符串",
                                "value": "string"
                              },
                              {
                                "label": "数字",
                                "value": "number"
                              },
                              {
                                "label": "时间",
                                "value": "datetime",
                                "disabled": false
                              }
                            ],
                            "allowClear": false,
                            "autoFocus": false,
                            "defaultActiveFirstOption": true,
                            "disabled": false,
                            "labelInValue": false,
                            "showSearch": false,
                            "loading": false,
                            "bordered": true,
                            "optionFilterProp": "value",
                            "tokenSeparators": [],
                            "maxTagCount": 0,
                            "maxTagTextLength": 0,
                            "__events": {
                              "eventDataList": [
                                {
                                  "type": "componentEvent",
                                  "name": "onSelect",
                                  "relatedEventName": "handleTypeSelectChange"
                                }
                              ],
                              "eventList": [
                                {
                                  "name": "onBlur",
                                  "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onChange",
                                  "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onDeselect",
                                  "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onFocus",
                                  "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onInputKeyDown",
                                  "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onMouseEnter",
                                  "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onMouseLeave",
                                  "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onPopupScroll",
                                  "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                  "disabled": false
                                },
                                {
                                  "name": "onSearch",
                                  "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onSelect",
                                  "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                  "disabled": true
                                },
                                {
                                  "name": "onDropdownVisibleChange",
                                  "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                  "disabled": false
                                }
                              ]
                            },
                            "onSelect": {
                              "type": "JSFunction",
                              "value": "function(){return this.handleTypeSelectChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                      "id": "node_oclwghkm586",
                      "props": {
                        "label": "允许多行",
                        "colon": true,
                        "required": false,
                        "noStyle": false,
                        "valuePropName": "value",
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
                        },
                        "labelAlign": "left",
                        "requiredobj": {
                          "required": "",
                          "message": ""
                        },
                        "name": "varname_definition_json.has_multi_line",
                        "ref": "form.item-c0d6fef1",
                        "hidden": {
                          "type": "JSExpression",
                          "value": "!this.state.isInputAllowed"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "loopArgs": [
                        "",
                        ""
                      ],
                      "children": [
                        {
                          "componentName": "Switch",
                          "id": "node_oclwghkm588",
                          "props": {
                            "defaultChecked": false,
                            "autoFocus": false,
                            "disabled": false,
                            "loading": false,
                            "__events": {
                              "eventDataList": [
                                {
                                  "type": "componentEvent",
                                  "name": "onClick",
                                  "relatedEventName": "handleShowMultiLine"
                                }
                              ],
                              "eventList": [
                                {
                                  "name": "onChange",
                                  "template": "onChange(checked,event,${extParams}){\n// 变化时回调函数\nconsole.log('onChange',checked,event);}",
                                  "disabled": false
                                },
                                {
                                  "name": "onClick",
                                  "template": "onClick(checked,event,${extParams}){\n// 点击时回调函数\nconsole.log('onClick',checked,event);}",
                                  "disabled": true
                                }
                              ]
                            },
                            "onClick": {
                              "type": "JSFunction",
                              "value": "function(){return this.handleShowMultiLine.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                      "id": "node_oclwghkm58d",
                      "props": {
                        "label": "默认值",
                        "colon": true,
                        "required": false,
                        "noStyle": false,
                        "valuePropName": "value",
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
                        },
                        "labelAlign": "left",
                        "labelCol": {
                          "span": 2,
                          "offset": 0
                        },
                        "requiredobj": {
                          "required": "",
                          "message": ""
                        },
                        "name": "varname_definition_json.value",
                        "ref": "form.item-c2ab66d2",
                        "hidden": {
                          "type": "JSExpression",
                          "value": "!this.state.isInputAllowed"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "loopArgs": [
                        "",
                        ""
                      ],
                      "children": [
                        {
                          "componentName": "Input.TextArea",
                          "id": "node_oclwypu1va1",
                          "props": {
                            "autoSize": {
                              "minRows": {
                                "type": "JSExpression",
                                "value": "this.state.showMultiLine ? 3 :1",
                                "mock": 1
                              },
                              "maxRows": 3
                            },
                            "placeholder": "请输入",
                            "bordered": true,
                            "disabled": false,
                            "showCount": false
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
                },
                {
                  "componentName": "Card",
                  "id": "node_oclwg0vu9f7",
                  "props": {
                    "hidden": {
                      "type": "JSExpression",
                      "value": "this.state.selectedOptionType !== 'LLM'"
                    },
                    "bordered": false,
                    "hoverable": false,
                    "loading": false,
                    "size": "default",
                    "type": "default"
                  },
                  "hidden": false,
                  "title": "模型变量",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Row",
                      "id": "node_oclwg0vu9f8",
                      "props": {
                        "align": "middle",
                        "justify": "start",
                        "wrap": false,
                        "h-gutter": 0,
                        "v-gutter": 0,
                        "gutter": [
                          0,
                          0
                        ]
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Col",
                          "id": "node_oclwg0vu9f9",
                          "props": {
                            "span": 24,
                            "order": 0
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwg0vu9fc",
                              "props": {
                                "label": "prompt",
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
                                },
                                "name": "varname_definition_json.prompt"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Input.TextArea",
                                  "id": "node_oclwg0vu9fd",
                                  "props": {
                                    "autoSize": {
                                      "minRows": 6,
                                      "maxRows": 3
                                    },
                                    "placeholder": "请输入",
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
                        },
                        {
                          "componentName": "Col",
                          "id": "node_oclwg0vu9fa",
                          "props": {
                            "span": 2,
                            "order": 0,
                            "style": {
                              "display": "flex",
                              "justifyContent": "center",
                              "alignItems": "center"
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
                },
                {
                  "componentName": "Card",
                  "id": "node_oclwteibzc3",
                  "props": {
                    "hidden": {
                      "type": "JSExpression",
                      "value": "this.state.selectedOptionType !== 'Data'"
                    },
                    "bordered": false,
                    "hoverable": false,
                    "loading": false,
                    "size": "default",
                    "type": "default"
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Tabs",
                      "id": "node_oclwg0uj26j",
                      "props": {
                        "type": "card",
                        "items": [
                          {
                            "label": "表单配置",
                            "key": "condit_expr",
                            "children": {
                              "type": "JSSlot",
                              "value": [
                                {
                                  "componentName": "Form.Item",
                                  "id": "node_oclwg0v6uot",
                                  "props": {
                                    "label": "数据源",
                                    "colon": true,
                                    "required": true,
                                    "noStyle": false,
                                    "valuePropName": "value",
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
                                    },
                                    "requiredobj": {
                                      "required": true,
                                      "message": ""
                                    },
                                    "name": "varname_definition_json.db_origin_id",
                                    "ref": "form.item-cc1d5127"
                                  },
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "loopArgs": [
                                    "",
                                    ""
                                  ],
                                  "children": [
                                    {
                                      "componentName": "Select",
                                      "id": "node_oclwg0v6uou",
                                      "props": {
                                        "style": {
                                          "width": "100%"
                                        },
                                        "options": {
                                          "type": "JSExpression",
                                          "value": "this.getDataMetaOptions()"
                                        },
                                        "allowClear": false,
                                        "autoFocus": false,
                                        "defaultActiveFirstOption": true,
                                        "disabled": false,
                                        "labelInValue": false,
                                        "showSearch": false,
                                        "loading": false,
                                        "bordered": true,
                                        "optionFilterProp": "value",
                                        "tokenSeparators": [],
                                        "maxTagCount": 0,
                                        "maxTagTextLength": 0,
                                        "_unsafe_MixedSetter_options_select": "ExpressionSetter",
                                        "__events": {
                                          "eventDataList": [
                                            {
                                              "type": "componentEvent",
                                              "name": "onSelect",
                                              "relatedEventName": "onDataMetaSelect"
                                            }
                                          ],
                                          "eventList": [
                                            {
                                              "name": "onBlur",
                                              "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onChange",
                                              "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onDeselect",
                                              "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onFocus",
                                              "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onInputKeyDown",
                                              "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onMouseEnter",
                                              "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onMouseLeave",
                                              "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onPopupScroll",
                                              "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onSearch",
                                              "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onSelect",
                                              "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                              "disabled": true
                                            },
                                            {
                                              "name": "onDropdownVisibleChange",
                                              "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                              "disabled": false
                                            }
                                          ]
                                        },
                                        "onSelect": {
                                          "type": "JSFunction",
                                          "value": "function(){return this.onDataMetaSelect.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                  "id": "node_oclwg0v6uox",
                                  "props": {
                                    "label": "参数",
                                    "colon": true,
                                    "required": true,
                                    "noStyle": false,
                                    "valuePropName": "value",
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
                                    },
                                    "wrapperCol": {
                                      "offset": 0
                                    },
                                    "style": {},
                                    "requiredobj": {
                                      "required": "",
                                      "message": ""
                                    },
                                    "name": "varname_definition_json.condit_expr",
                                    "ref": "form.item-7ce2e72a"
                                  },
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "loopArgs": [
                                    "",
                                    ""
                                  ],
                                  "children": [
                                    {
                                      "componentName": "ProEditTable",
                                      "id": "node_oclwghkm581",
                                      "props": {
                                        "cardBordered": true,
                                        "dataSource": [],
                                        "columns": [
                                          {
                                            "title": "字段名",
                                            "dataIndex": "column",
                                            "tooltip": "",
                                            "align": "left",
                                            "fixed": "",
                                            "valueType": "select",
                                            "valueEnum": {
                                              "type": "JSExpression",
                                              "value": "this.getCurrentColumnsOptions()"
                                            }
                                          },
                                          {
                                            "title": "操作符",
                                            "dataIndex": "opt",
                                            "tooltip": "",
                                            "width": "15%",
                                            "align": "left",
                                            "fixed": "",
                                            "valueEnum": {
                                              "=": {
                                                "text": "="
                                              },
                                              "<": {
                                                "text": "<"
                                              },
                                              ">": {
                                                "text": ">"
                                              },
                                              "!=": {
                                                "text": "!="
                                              },
                                              "<=": {
                                                "text": "<="
                                              },
                                              ">=": {
                                                "text": ">="
                                              }
                                            },
                                            "valueType": "select"
                                          },
                                          {
                                            "title": "值",
                                            "key": "value",
                                            "dataIndex": "value",
                                            "valueType": "select",
                                            "align": "left",
                                            "fixed": "",
                                            "fieldProps": {
                                              "showSearch": false,
                                              "mode": "tags",
                                              "autoClearSearchValue": true
                                            },
                                            "renderFormItem": {
                                              "type": "JSSlot",
                                              "params": [
                                                "text",
                                                "record",
                                                "index"
                                              ],
                                              "value": [
                                                {
                                                  "componentName": "EditSelect",
                                                  "id": "node_oclwypqmzw1",
                                                  "props": {
                                                    "style": {
                                                      "width": "100%"
                                                    },
                                                    "options": {
                                                      "type": "JSExpression",
                                                      "value": "this.getVarnameSelectOptionsByGroup()"
                                                    },
                                                    "allowClear": true,
                                                    "autoFocus": false,
                                                    "defaultActiveFirstOption": false,
                                                    "disabled": false,
                                                    "labelInValue": true,
                                                    "showSearch": false,
                                                    "loading": false,
                                                    "bordered": true,
                                                    "optionFilterProp": "value",
                                                    "tokenSeparators": [],
                                                    "maxTagCount": 1,
                                                    "maxTagTextLength": 100,
                                                    "actionTitle": "新增",
                                                    "addItemAction": {
                                                      "type": "JSFunction",
                                                      "value": "function(){return this.handleAddItem.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                    },
                                                    "__events": {
                                                      "eventDataList": [
                                                        {
                                                          "type": "componentEvent",
                                                          "name": "addItemAction",
                                                          "relatedEventName": "handleAddItem"
                                                        }
                                                      ],
                                                      "eventList": [
                                                        {
                                                          "name": "onBlur",
                                                          "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onChange",
                                                          "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "addItemAction",
                                                          "template": "addItemAction(value){\n// 点击按钮时，调用此函数\nconsole.log('addItemAction',value);}",
                                                          "disabled": true
                                                        },
                                                        {
                                                          "name": "onDeselect",
                                                          "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onFocus",
                                                          "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onInputKeyDown",
                                                          "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onMouseEnter",
                                                          "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onMouseLeave",
                                                          "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onPopupScroll",
                                                          "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onSearch",
                                                          "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onSelect",
                                                          "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                                          "disabled": false
                                                        },
                                                        {
                                                          "name": "onDropdownVisibleChange",
                                                          "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                                          "disabled": false
                                                        }
                                                      ]
                                                    },
                                                    "_unsafe_MixedSetter_value_select": "StringSetter",
                                                    "mode": "single",
                                                    "showArrow": true,
                                                    "ref": "editselect-a509696b",
                                                    "_unsafe_MixedSetter_options_select": "ExpressionSetter",
                                                    "inputPlaceholder": "自定义值内容",
                                                    "defaultValue": [],
                                                    "value": ""
                                                  },
                                                  "hidden": false,
                                                  "title": "",
                                                  "isLocked": false,
                                                  "condition": true,
                                                  "conditionGroup": "",
                                                  "loopArgs": [
                                                    "",
                                                    ""
                                                  ]
                                                }
                                              ],
                                              "id": "node_oclwypqmzw2"
                                            }
                                          }
                                        ],
                                        "rowKey": "id",
                                        "ref": "pro_table_gm8udlcnphj",
                                        "manualRequest": false,
                                        "showHeader": true,
                                        "position": "bottomRight",
                                        "size": "default",
                                        "tableLayout": "",
                                        "pagination": {
                                          "showSizeChanger": false,
                                          "showQuickJumper": false,
                                          "simple": false,
                                          "size": "default"
                                        },
                                        "scroll": {
                                          "scrollToFirstRowOnChange": true
                                        },
                                        "style": {
                                          "marginLeft": "5px"
                                        },
                                        "__events": {
                                          "eventDataList": [
                                            {
                                              "type": "componentEvent",
                                              "name": "onDataSourceChange",
                                              "relatedEventName": "dataSourceOnChange"
                                            },
                                            {
                                              "type": "componentEvent",
                                              "name": "onSave",
                                              "relatedEventName": "dataSourceOnSave"
                                            }
                                          ],
                                          "eventList": [
                                            {
                                              "name": "onSave",
                                              "description": "保存后触发",
                                              "disabled": true
                                            },
                                            {
                                              "name": "onChange",
                                              "description": "改变时触发",
                                              "disabled": false
                                            },
                                            {
                                              "name": "onDataSourceChange",
                                              "description": "数据源变化时触发",
                                              "disabled": true
                                            }
                                          ]
                                        },
                                        "onDataSourceChange": {
                                          "type": "JSFunction",
                                          "value": "function(){return this.dataSourceOnChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                        },
                                        "onSave": {
                                          "type": "JSFunction",
                                          "value": "function(){return this.dataSourceOnSave.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                              ],
                              "id": "node_oclwg0uj26m"
                            }
                          },
                          {
                            "label": "SQL",
                            "key": "raw_sql",
                            "children": {
                              "type": "JSSlot",
                              "value": [
                                {
                                  "componentName": "Row",
                                  "id": "node_oclwhr5end28",
                                  "props": {
                                    "align": "top",
                                    "justify": "start",
                                    "wrap": false,
                                    "style": {
                                      "paddingBottom": "10px"
                                    }
                                  },
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "children": [
                                    {
                                      "componentName": "Col",
                                      "id": "node_oclwhr5end29",
                                      "props": {
                                        "span": 12,
                                        "order": 0,
                                        "pull": 0,
                                        "push": 0,
                                        "style": {
                                          "paddingRight": "20px"
                                        }
                                      },
                                      "hidden": false,
                                      "title": "",
                                      "isLocked": false,
                                      "condition": true,
                                      "conditionGroup": "",
                                      "children": [
                                        {
                                          "componentName": "Div",
                                          "id": "node_oclwizoyom2r",
                                          "props": {
                                            "style": {
                                              "paddingBottom": "10px"
                                            }
                                          },
                                          "hidden": false,
                                          "title": "",
                                          "isLocked": false,
                                          "condition": true,
                                          "conditionGroup": "",
                                          "children": [
                                            {
                                              "componentName": "Typography.Text",
                                              "id": "node_oclwizoyom2s",
                                              "props": {
                                                "children": "数据源",
                                                "code": false,
                                                "delete": false,
                                                "disabled": false,
                                                "mark": false,
                                                "keyboard": false,
                                                "underline": false,
                                                "strong": false,
                                                "style": {
                                                  "paddingTop": "10px",
                                                  "paddingBottom": "10px"
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
                                          "componentName": "Select",
                                          "id": "node_oclwizoyom2",
                                          "props": {
                                            "style": {
                                              "width": "100%"
                                            },
                                            "options": {
                                              "type": "JSExpression",
                                              "value": "this.getDataMetaOptions()"
                                            },
                                            "allowClear": false,
                                            "autoFocus": false,
                                            "defaultActiveFirstOption": true,
                                            "disabled": false,
                                            "labelInValue": false,
                                            "showSearch": false,
                                            "loading": false,
                                            "bordered": true,
                                            "optionFilterProp": "value",
                                            "tokenSeparators": [],
                                            "maxTagCount": 0,
                                            "maxTagTextLength": 0,
                                            "_unsafe_MixedSetter_options_select": "ExpressionSetter",
                                            "__events": {
                                              "eventDataList": [
                                                {
                                                  "type": "componentEvent",
                                                  "name": "onSelect",
                                                  "relatedEventName": "handleTableNameChange"
                                                }
                                              ],
                                              "eventList": [
                                                {
                                                  "name": "onBlur",
                                                  "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onChange",
                                                  "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onDeselect",
                                                  "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onFocus",
                                                  "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onInputKeyDown",
                                                  "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onMouseEnter",
                                                  "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onMouseLeave",
                                                  "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onPopupScroll",
                                                  "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onSearch",
                                                  "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onSelect",
                                                  "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                                  "disabled": true
                                                },
                                                {
                                                  "name": "onDropdownVisibleChange",
                                                  "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                                  "disabled": false
                                                }
                                              ]
                                            },
                                            "onSelect": {
                                              "type": "JSFunction",
                                              "value": "function(){return this.handleTableNameChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                                      "componentName": "Col",
                                      "id": "node_oclwizoyom2t",
                                      "props": {
                                        "span": 12,
                                        "order": 0,
                                        "pull": 0,
                                        "push": 0,
                                        "style": {
                                          "paddingRight": "20px"
                                        }
                                      },
                                      "hidden": false,
                                      "title": "",
                                      "isLocked": false,
                                      "condition": true,
                                      "conditionGroup": "",
                                      "children": [
                                        {
                                          "componentName": "Div",
                                          "id": "node_oclwizoyom2u",
                                          "props": {
                                            "style": {
                                              "paddingBottom": "10px"
                                            }
                                          },
                                          "hidden": false,
                                          "title": "",
                                          "isLocked": false,
                                          "condition": true,
                                          "conditionGroup": "",
                                          "children": [
                                            {
                                              "componentName": "Typography.Text",
                                              "id": "node_oclwizoyom2v",
                                              "props": {
                                                "children": "变量",
                                                "code": false,
                                                "delete": false,
                                                "disabled": false,
                                                "mark": false,
                                                "keyboard": false,
                                                "underline": false,
                                                "strong": false,
                                                "style": {
                                                  "paddingTop": "10px",
                                                  "paddingBottom": "10px"
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
                                          "componentName": "EditSelect",
                                          "id": "node_oclwizoyom2x",
                                          "props": {
                                            "style": {
                                              "width": "100%"
                                            },
                                            "options": {
                                              "type": "JSExpression",
                                              "value": "this.getVarnameSelectOptionsByGroup()"
                                            },
                                            "allowClear": true,
                                            "autoFocus": false,
                                            "defaultActiveFirstOption": false,
                                            "disabled": false,
                                            "labelInValue": true,
                                            "showSearch": false,
                                            "loading": false,
                                            "bordered": true,
                                            "optionFilterProp": "value",
                                            "tokenSeparators": [],
                                            "maxTagCount": 1,
                                            "maxTagTextLength": 100,
                                            "actionTitle": "新增",
                                            "addItemAction": {
                                              "type": "JSFunction",
                                              "value": "function(){return this.handleAddItem.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                            },
                                            "__events": {
                                              "eventDataList": [
                                                {
                                                  "type": "componentEvent",
                                                  "name": "addItemAction",
                                                  "relatedEventName": "handleAddItem"
                                                },
                                                {
                                                  "type": "componentEvent",
                                                  "name": "onSelect",
                                                  "relatedEventName": "handleVarNameSelected"
                                                }
                                              ],
                                              "eventList": [
                                                {
                                                  "name": "onBlur",
                                                  "template": "onBlur(${extParams}){\n// 失去焦点时回调\nconsole.log('onBlur');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onChange",
                                                  "template": "onChange(value,option,${extParams}){\n// 选中 option，或 input 的 value 变化时，调用此函数\nconsole.log('onChange',value,option);}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "addItemAction",
                                                  "template": "addItemAction(value){\n// 点击按钮时，调用此函数\nconsole.log('addItemAction',value);}",
                                                  "disabled": true
                                                },
                                                {
                                                  "name": "onDeselect",
                                                  "template": "onDeselect(value,${extParams}){\n// 取消选中时调用\nconsole.log('onDeselect',value);}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onFocus",
                                                  "template": "onFocus(${extParams}){\n// 获得焦点时回调\nconsole.log('onFocus');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onInputKeyDown",
                                                  "template": "onInputKeyDown(${extParams}){\n// 按键按下时回调\nconsole.log('onInputKeyDown');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onMouseEnter",
                                                  "template": "onMouseEnter(${extParams}){\n// 鼠标移入时回调\nconsole.log('onMouseEnter');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onMouseLeave",
                                                  "template": "onMouseLeave(${extParams}){\n// 鼠标移出时回调\nconsole.log('onMouseLeave');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onPopupScroll",
                                                  "template": "onPopupScroll(${extParams}){\n// 下拉列表滚动时的回调\nconsole.log('onPopupScroll');}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onSearch",
                                                  "template": "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
                                                  "disabled": false
                                                },
                                                {
                                                  "name": "onSelect",
                                                  "template": "onSelect(value,option,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,option);}",
                                                  "disabled": true
                                                },
                                                {
                                                  "name": "onDropdownVisibleChange",
                                                  "template": "onDropdownVisibleChange(open,${extParams}){\n// 展开下拉菜单的回调\nconsole.log('onDropdownVisibleChange',open);}",
                                                  "disabled": false
                                                }
                                              ]
                                            },
                                            "_unsafe_MixedSetter_value_select": "StringSetter",
                                            "mode": "single",
                                            "showArrow": true,
                                            "ref": "editselect-a509696b",
                                            "_unsafe_MixedSetter_options_select": "ExpressionSetter",
                                            "inputPlaceholder": "自定义值内容",
                                            "onSelect": {
                                              "type": "JSFunction",
                                              "value": "function(){return this.handleVarNameSelected.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                            }
                                          },
                                          "hidden": false,
                                          "title": "",
                                          "isLocked": false,
                                          "condition": true,
                                          "conditionGroup": "",
                                          "loopArgs": [
                                            "",
                                            ""
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "componentName": "AdaEditor",
                                  "id": "node_oclwg0v6uo18",
                                  "props": {
                                    "value": {
                                      "type": "JSExpression",
                                      "value": "this.state.sqlResult",
                                      "mock": ""
                                    },
                                    "options": {},
                                    "path": "",
                                    "language": "sql",
                                    "theme": "",
                                    "defaultValue": "",
                                    "enableOutline": false,
                                    "onChange": {
                                      "type": "JSFunction",
                                      "value": "function(){ return this.onSqlCodeChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                    }
                                  },
                                  "hidden": false,
                                  "title": "",
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": ""
                                }
                              ],
                              "id": "node_oclwg0uj26n"
                            }
                          }
                        ],
                        "size": "large",
                        "centered": false,
                        "tabPosition": "top",
                        "keyboard": false,
                        "hideAdd": false,
                        "style": {},
                        "defaultActiveKey": {
                          "type": "JSExpression",
                          "value": "this.state.currentQueryMode"
                        },
                        "__events": {
                          "eventDataList": [
                            {
                              "type": "componentEvent",
                              "name": "onChange",
                              "relatedEventName": "handleTabChange"
                            }
                          ],
                          "eventList": [
                            {
                              "name": "onChange",
                              "template": "onChange(activeKey,${extParams}){\n// 切换面板的回调\nconsole.log('onChange',activeKey);}",
                              "disabled": true
                            },
                            {
                              "name": "onEdit",
                              "template": "onEdit(targetKey,action,${extParams}){\n// 新增和删除页签的回调\nconsole.log('onEdit',targetKey,action);}",
                              "disabled": false
                            },
                            {
                              "name": "onTabClick",
                              "template": "onTabClick(key,event,${extParams}){\n// tab 被点击的回调\nconsole.log('onTabClick',key,event);}",
                              "disabled": false
                            },
                            {
                              "name": "onTabScroll",
                              "template": "onTabScroll({direction},${extParams}){\n// tab 滚动时触\nconsole.log('onTabScroll',direction);}",
                              "disabled": false
                            }
                          ]
                        },
                        "onChange": {
                          "type": "JSFunction",
                          "value": "function(){return this.handleTabChange.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                        },
                        "ref": "tabs-b273edeb"
                      },
                      "hidden": false,
                      "title": "数据变量",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "loopArgs": [
                        "",
                        ""
                      ]
                    },
                    {
                      "componentName": "Row",
                      "id": "node_oclwhr5ende",
                      "props": {
                        "align": "middle",
                        "justify": "start",
                        "wrap": false,
                        "style": {
                          "paddingTop": "20px"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": "",
                      "children": [
                        {
                          "componentName": "Col",
                          "id": "node_oclwhr5endf",
                          "props": {
                            "span": 10,
                            "order": 0
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwg0v6uo10",
                              "props": {
                                "label": "取值字段",
                                "colon": true,
                                "required": true,
                                "noStyle": false,
                                "valuePropName": "value",
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
                                },
                                "requiredobj": {
                                  "required": "",
                                  "message": ""
                                },
                                "name": "varname_definition_json.valueas.column"
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Select",
                                  "id": "node_oclwg0v6uo11",
                                  "props": {
                                    "style": {
                                      "width": "100%"
                                    },
                                    "options": {
                                      "type": "JSExpression",
                                      "value": "this.getCurrentColumnSelectOptions()"
                                    },
                                    "allowClear": false,
                                    "autoFocus": false,
                                    "defaultActiveFirstOption": true,
                                    "disabled": false,
                                    "labelInValue": false,
                                    "showSearch": false,
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
                            }
                          ]
                        },
                        {
                          "componentName": "Col",
                          "id": "node_oclwhr5endg",
                          "props": {
                            "span": 4,
                            "order": 0
                          },
                          "hidden": false,
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwhr5end1f",
                              "props": {
                                "label": "是否转换",
                                "colon": true,
                                "required": false,
                                "noStyle": false,
                                "valuePropName": "value",
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
                                },
                                "style": {
                                  "display": "flex",
                                  "justifyContent": "center"
                                },
                                "requiredobj": {
                                  "required": "",
                                  "message": ""
                                },
                                "name": ""
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Switch",
                                  "id": "node_oclwhr5end1g",
                                  "props": {
                                    "defaultChecked": {
                                      "type": "JSExpression",
                                      "value": "this.state.open_converter",
                                      "mock": true
                                    },
                                    "autoFocus": false,
                                    "disabled": false,
                                    "loading": false,
                                    "__events": {
                                      "eventDataList": [
                                        {
                                          "type": "componentEvent",
                                          "name": "onChange",
                                          "relatedEventName": "handleOpenConverter"
                                        }
                                      ],
                                      "eventList": [
                                        {
                                          "name": "onChange",
                                          "template": "onChange(checked,event,${extParams}){\n// 变化时回调函数\nconsole.log('onChange',checked,event);}",
                                          "disabled": true
                                        },
                                        {
                                          "name": "onClick",
                                          "template": "onClick(checked,event,${extParams}){\n// 点击时回调函数\nconsole.log('onClick',checked,event);}",
                                          "disabled": false
                                        }
                                      ]
                                    },
                                    "onChange": {
                                      "type": "JSFunction",
                                      "value": "function(){return this.handleOpenConverter.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
                        },
                        {
                          "componentName": "Col",
                          "id": "node_oclwhr5endh",
                          "props": {
                            "span": 10,
                            "order": 0,
                            "style": {}
                          },
                          "title": "",
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "hidden": false,
                          "children": [
                            {
                              "componentName": "Form.Item",
                              "id": "node_oclwr9lo3p5",
                              "props": {
                                "label": "转换值",
                                "name": "varname_definition_json.valueas.converter",
                                "colon": true,
                                "required": false,
                                "noStyle": false,
                                "valuePropName": "value",
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
                                },
                                "requiredobj": {
                                  "required": "",
                                  "message": ""
                                },
                                "hidden": {
                                  "type": "JSExpression",
                                  "value": "!this.state.open_converter"
                                }
                              },
                              "hidden": false,
                              "title": "",
                              "isLocked": false,
                              "condition": true,
                              "conditionGroup": "",
                              "children": [
                                {
                                  "componentName": "Input",
                                  "id": "node_oclwr9lo3pa",
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
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "componentName": "Form.Item",
          "id": "node_oclwg0uj26p",
          "props": {
            "label": "智能校验",
            "labelAlign": "right",
            "colon": true,
            "required": false,
            "noStyle": false,
            "valuePropName": "value",
            "name": "verify_rules",
            "requiredobj": {
              "required": false,
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
            },
            "__component_name": "Form.Item",
            "hideInSearch": true
          },
          "hidden": false,
          "title": "类型",
          "description": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Select",
              "id": "node_oclwg0vu9f1",
              "props": {
                "style": {
                  "width": "100%"
                },
                "options": {
                  "type": "JSExpression",
                  "value": "this.getCurrentVarrulesOptions()"
                },
                "value": [],
                "allowClear": false,
                "autoFocus": false,
                "defaultActiveFirstOption": true,
                "disabled": false,
                "labelInValue": false,
                "mode": "multiple",
                "showArrow": true,
                "showSearch": true,
                "size": "middle",
                "loading": false,
                "bordered": true,
                "filterOption": true,
                "optionFilterProp": "value",
                "tokenSeparators": [],
                "maxTagCount": 200,
                "maxTagTextLength": 100,
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
          "componentName": "Row",
          "id": "node_oclwnzd7pz1",
          "props": {
            "align": "top",
            "justify": "start",
            "wrap": false
          },
          "hidden": false,
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
            {
              "componentName": "Col",
              "id": "node_oclwnzd7pz2",
              "props": {
                "span": 24,
                "order": 0,
                "hidden": {
                  "type": "JSExpression",
                  "value": "!this.state.showPreview"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": "",
              "children": [
                {
                  "componentName": "Div",
                  "id": "node_oclwnze6k51",
                  "props": {
                    "style": {
                      "display": "flex",
                      "position": "relative",
                      "justifyContent": "flex-start",
                      "alignItems": "center",
                      "padding": "20px",
                      "backgroundColor": "rgba(184,233,134,0.35)"
                    }
                  },
                  "hidden": false,
                  "title": "",
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                    {
                      "componentName": "Icon",
                      "id": "node_oclwnze6k52",
                      "props": {
                        "type": "CheckCircleOutlined",
                        "size": 20,
                        "color": "#9b9b9b",
                        "rotate": 0,
                        "spin": false
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    },
                    {
                      "componentName": "Typography.Text",
                      "id": "node_oclwnze6k53",
                      "props": {
                        "children": "预览数据：",
                        "code": false,
                        "delete": false,
                        "disabled": false,
                        "mark": false,
                        "keyboard": false,
                        "underline": false,
                        "strong": false,
                        "style": {
                          "marginLeft": "20px"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    },
                    {
                      "componentName": "Icon",
                      "id": "node_oclwq1j1zf1",
                      "props": {
                        "type": "CloseOutlined",
                        "size": 15,
                        "rotate": 0,
                        "spin": false,
                        "style": {
                          "position": "absolute",
                          "right": "5px",
                          "top": "5px"
                        },
                        "__events": {
                          "eventDataList": [
                            {
                              "type": "componentEvent",
                              "name": "onClick",
                              "relatedEventName": "handleClosePreview"
                            }
                          ],
                          "eventList": [
                            {
                              "name": "onClick",
                              "disabled": true
                            }
                          ]
                        },
                        "onClick": {
                          "type": "JSFunction",
                          "value": "function(){return this.handleClosePreview.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    },
                    {
                      "componentName": "Typography.Text",
                      "id": "node_oclwnze6k54",
                      "props": {
                        "children": {
                          "type": "JSExpression",
                          "value": "this.state.previewResult.varname_rule_id",
                          "mock": "text"
                        },
                        "code": false,
                        "delete": false,
                        "disabled": false,
                        "mark": false,
                        "keyboard": false,
                        "underline": false,
                        "strong": false,
                        "style": {
                          "marginLeft": "10px"
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
          ]
        }
      ]
    },
    {
      "componentName": "Div",
      "id": "node_oclwhr51j01",
      "props": {
        "style": {
          "position": "absolute",
          "bottom": "0",
          "right": "30",
          "display": "flex",
          "width": "100%",
          "flexDirection": "row-reverse",
          "justifyContent": "flex-start",
          "paddingRight": "50px",
          "paddingBottom": "20px",
          "alignItems": "center"
        }
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": "",
      "children": [
        {
          "componentName": "Button",
          "id": "node_oclwhr51j05",
          "props": {
            "type": "primary",
            "children": "提交",
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
                  "relatedEventName": "handleCreateVarnameBtnClick"
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
              "value": "function(){return this.handleCreateVarnameBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
          "id": "node_oclwhr5end3",
          "props": {
            "type": "primary",
            "children": "预览结果",
            "htmlType": "button",
            "size": "middle",
            "shape": "default",
            "block": false,
            "danger": false,
            "ghost": false,
            "disabled": false,
            "hidden": {
              "type": "JSExpression",
              "value": "this.state.selectedOptionType === 'FillIn'"
            },
            "style": {
              "marginRight": "10px"
            },
            "icon": "",
            "__events": {
              "eventDataList": [
                {
                  "type": "componentEvent",
                  "name": "onClick",
                  "relatedEventName": "handlePreViewBtnClick"
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
              "value": "function(){return this.handlePreViewBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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
          "id": "node_oclwhr51j08",
          "props": {
            "type": "default",
            "children": "取消",
            "htmlType": "button",
            "size": "middle",
            "shape": "default",
            "icon": "",
            "block": false,
            "danger": false,
            "ghost": false,
            "disabled": false,
            "style": {
              "marginRight": "10px"
            },
            "__events": {
              "eventDataList": [
                {
                  "type": "componentEvent",
                  "name": "onClick",
                  "relatedEventName": "onCancelBtnClick"
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
              "value": "function(){return this.onCancelBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
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