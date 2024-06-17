export default {
  componentName: 'Page',
  id: 'node_oclveyyt4y1',
  props: {
    ref: 'outerView',
    style: {
      height: '100%',
    },
  },
  docId: 'doclveyz7xm',
  fileName: '/',
  dataSource: {
    list: [
      {
        isInit: false,
        type: 'http',
        id: 'TemplateList',
        config: {
          path: '/api/v1/report/template/search',
          method: 'get',
          tags: ['模板管理'],
          title: '获取模板列表',
          subTitle: '',
          description: '',
          params: {
            query: {
              page: {
                description: '',
                name: 'page',
                type: 'integer',
                required: false,
              },
              page_size: {
                description: '',
                name: 'page_size',
                type: 'integer',
                required: false,
              },
              template_name: {
                description: '',
                name: 'template_name',
                type: 'string',
                required: false,
              },
              order_by: {
                description: '',
                name: 'order_by',
                type: 'string',
                required: false,
              },
            },
            body: {
              items: {},
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                data: {
                  name: 'data',
                  type: 'array',
                  required: false,
                  items: {
                    create_by: {
                      name: 'create_by',
                      type: 'string',
                      title: '创建人',
                      required: false,
                    },
                    created_on: {
                      name: 'created_on',
                      type: 'string',
                      title: '创建时间',
                      required: false,
                    },
                    docx_id: {
                      name: 'docx_id',
                      type: 'integer',
                      title: '文档id',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: true,
                    },
                    is_delete: {
                      name: 'is_delete',
                      type: 'integer',
                      title: '是否删除',
                      required: false,
                    },
                    template_name: {
                      name: 'template_name',
                      type: 'string',
                      title: '模板名称',
                      required: true,
                    },
                    updated_on: {
                      name: 'updated_on',
                      type: 'string',
                      title: '更新时间',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'get',
          uri: '/api/v1/report/template/search',
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'CreateTemplate',
        config: {
          path: '/api/v1/report/template/create',
          method: 'post',
          tags: ['模板管理'],
          title: '创建模板',
          subTitle: '',
          description: '',
          params: {
            body: {
              items: {
                properties: {
                  file: {
                    name: 'file',
                    description: '文件流',
                    type: 'string',
                    required: false,
                  },
                  template_name: {
                    name: 'template_name',
                    description: '模板名称',
                    type: 'string',
                    required: true,
                  },
                },
              },
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                result: {
                  name: 'result',
                  type: 'array',
                  required: false,
                  items: {
                    '0': {
                      type: 'string',
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'post',
          uri: '/api/v1/report/template/create',
          params: {},
          headers: {
            'Content-Type': 'application/form-data',
          },
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'VarnameList',
        config: {
          path: '/api/v1/report/template/varname/list',
          method: 'get',
          tags: ['模板管理'],
          title: '模板变量名列表',
          subTitle: '',
          description: '',
          params: {
            query: {
              template_id: {
                description: '',
                name: 'template_id',
                type: 'string',
                required: false,
              },
            },
            body: {
              items: {},
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                data: {
                  name: 'data',
                  type: 'array',
                  required: false,
                  items: {
                    default_value: {
                      name: 'default_value',
                      type: 'string',
                      title: '默认值',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: false,
                    },
                    varname: {
                      name: 'varname',
                      type: 'string',
                      title: '变量名',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'get',
          uri: '/api/v1/report/template/varname/list',
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'UpdateTemple',
        config: {
          path: '/api/v1/report/template/edit',
          method: 'put',
          tags: ['模板管理'],
          title: '编辑模板',
          subTitle: '',
          description: '',
          params: {
            body: {
              items: {
                properties: {
                  template_id: {
                    name: 'template_id',
                    type: 'integer',
                    required: false,
                  },
                  template_name: {
                    name: 'template_name',
                    type: 'string',
                    required: false,
                  },
                },
              },
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                result: {
                  name: 'result',
                  type: 'object',
                  required: false,
                  items: {
                    create_by: {
                      name: 'create_by',
                      type: 'string',
                      title: '创建人',
                      required: false,
                    },
                    created_on: {
                      name: 'created_on',
                      type: 'string',
                      title: '创建时间',
                      required: false,
                    },
                    docx_id: {
                      name: 'docx_id',
                      type: 'integer',
                      title: '文档id',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: true,
                    },
                    is_delete: {
                      name: 'is_delete',
                      type: 'integer',
                      title: '是否删除',
                      required: false,
                    },
                    template_name: {
                      name: 'template_name',
                      type: 'string',
                      title: '模板名称',
                      required: true,
                    },
                    updated_on: {
                      name: 'updated_on',
                      type: 'string',
                      title: '更新时间',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'put',
          uri: '/api/v1/report/template/edit',
          params: {},
          headers: {},
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'CopyTemple',
        config: {
          path: '/api/v1/report/template/copy',
          method: 'get',
          tags: ['模板管理'],
          title: '复制模板',
          subTitle: '',
          description: '',
          params: {
            body: {
              items: {
                properties: {
                  template_id: {
                    name: 'template_id',
                    type: 'integer',
                    required: false,
                  },
                },
              },
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                result: {
                  name: 'result',
                  type: 'object',
                  required: false,
                  items: {
                    create_by: {
                      name: 'create_by',
                      type: 'string',
                      title: '创建人',
                      required: false,
                    },
                    created_on: {
                      name: 'created_on',
                      type: 'string',
                      title: '创建时间',
                      required: false,
                    },
                    docx_id: {
                      name: 'docx_id',
                      type: 'integer',
                      title: '文档id',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: true,
                    },
                    is_delete: {
                      name: 'is_delete',
                      type: 'integer',
                      title: '是否删除',
                      required: false,
                    },
                    template_name: {
                      name: 'template_name',
                      type: 'string',
                      title: '模板名称',
                      required: true,
                    },
                    updated_on: {
                      name: 'updated_on',
                      type: 'string',
                      title: '更新时间',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'POST',
          uri: '/api/v1/report/template/copy',
          params: {},
          headers: {},
        },
      },
      {
        type: 'http',
        isInit: false,
        options: {
          params: {},
          method: 'DELETE',
          isCors: true,
          timeout: 5000,
          headers: {},
          uri: '/api/v1/report/template/delete',
        },
        id: 'DeleteTemple',
      },
      {
        type: 'fetch',
        isInit: false,
        options: {
          params: {},
          method: 'POST',
          isCors: true,
          timeout: 5000,
          headers: {},
          uri: '/api/v1/report/template/create',
        },
        id: 'CreateFormData',
      },
    ],
  },
  state: {
    templateListList: {
      type: 'JSExpression',
      value: '[]',
    },
    isShowEditTemplateListModal: {
      type: 'JSExpression',
      value: 'false',
    },
    isShowEditTemplateListModalHooks: {
      type: 'JSExpression',
      value: '[this.refreshTemplateList]',
    },
    currentEditRecord: {
      type: 'JSExpression',
      value: '{}',
    },
    isShowCreateTemplateListModal: {
      type: 'JSExpression',
      value: 'false',
    },
    isShowCreateTemplateListModalHooks: {
      type: 'JSExpression',
      value: '[this.refreshTemplateList]',
    },
    createTmpFileBase64: {
      type: 'JSExpression',
      value: "''",
    },
    updateTempleList: {
      type: 'JSExpression',
      value: '[]',
    },
    copyTempleList: {
      type: 'JSExpression',
      value: '[]',
    },
    isShowEditCopyTempleModal: {
      type: 'JSExpression',
      value: 'false',
    },
    isShowDetailCopyTempleDrawer: {
      type: 'JSExpression',
      value: 'false',
    },
    showDetailHooks: {
      type: 'JSExpression',
      value: '[]',
    },
    isShowCreateCopyTempleModal: {
      type: 'JSExpression',
      value: 'false',
    },
    createTempDto: {
      type: 'JSExpression',
      value: '{}',
    },
  },
  css: 'body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}',
  lifeCycles: {},
  methods: {
    getTemplateList: {
      type: 'JSFunction',
      value:
        "async function getTemplateList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const tpls = await this.dataSourceMap['TemplateList'].load({\n    page: current,\n    page_size: pageSize,\n    template_name: params.template_name ?? ''\n  });\n  return {\n    data: tpls.result.data,\n    // success 请返回 true，\n    // 不然 table 会停止解析数据，即使有数据\n    success: tpls.status,\n    // 不传会使用 data 的长度，如果是分页一定要传\n    total: tpls.result.total\n  };\n}",
      source:
        "async function getTemplateList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const tpls = await this.dataSourceMap['TemplateList'].load({\n    page: current,\n    page_size: pageSize,\n    template_name: params.template_name ?? ''\n  });\n  return {\n    data: tpls.result.data,\n    // success 请返回 true，\n    // 不然 table 会停止解析数据，即使有数据\n    success: tpls.status,\n    // 不传会使用 data 的长度，如果是分页一定要传\n    total: tpls.result.total\n  };\n}",
    },
    refreshTemplateList: {
      type: 'JSFunction',
      value:
        "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}",
      source:
        "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}",
    },
    handleEditTemplateListBtnClick: {
      type: 'JSFunction',
      value:
        'function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?template_id=${params.record.id}&origin_mode=ReportTemplate`);\n  }\n}',
      source:
        'function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?template_id=${params.record.id}&origin_mode=ReportTemplate`);\n  }\n}',
    },
    handleCreateTemplateListBtnClick: {
      type: 'JSFunction',
      value:
        'function handleCreateTemplateListBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateTemplateListModal": isShow\n  });\n  if (isShow === false) {\n    this.setState({\n      "createTempDto": {}\n    });\n  }\n}',
      source:
        'function handleCreateTemplateListBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateTemplateListModal": isShow\n  });\n  if (isShow === false) {\n    this.setState({\n      "createTempDto": {}\n    });\n  }\n}',
    },
    handleCreateTemplateBtnClick: {
      type: 'JSFunction',
      value:
        'function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_CreateTemplate\').getFieldsValue();\n  console.log("this.state.createTempDto.file:", this.state.createTempDto.file);\n  this.utils.handleUploadData(values.template_name, this.state.createTempDto.file ?? \'\').then(data => {\n    // 处理响应数据\n    this.setState({\n      "isShowCreateTemplateListModal": false,\n      "createTempDto": {}\n    });\n    this.state.isShowCreateTemplateListModalHooks.forEach(func => {\n      func();\n    });\n    if (this.utils.routeTo) {\n      console.log("url data:", data);\n      this.utils.routeTo(`/report/office?template_id=${data.result.template_id}&origin_mode=ReportTemplate`);\n    }\n  }).catch(error => {\n    console.error(\'There was a problem with the fetch operation:\', error);\n  });\n}',
      source:
        'function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_CreateTemplate\').getFieldsValue();\n  console.log("this.state.createTempDto.file:", this.state.createTempDto.file);\n  this.utils.handleUploadData(values.template_name, this.state.createTempDto.file ?? \'\').then(data => {\n    // 处理响应数据\n    this.setState({\n      "isShowCreateTemplateListModal": false,\n      "createTempDto": {}\n    });\n    this.state.isShowCreateTemplateListModalHooks.forEach(func => {\n      func();\n    });\n    if (this.utils.routeTo) {\n      console.log("url data:", data);\n      this.utils.routeTo(`/report/office?template_id=${data.result.template_id}&origin_mode=ReportTemplate`);\n    }\n  }).catch(error => {\n    console.error(\'There was a problem with the fetch operation:\', error);\n  });\n}',
    },
    onUpload: {
      type: 'JSFunction',
      value:
        'async function onUpload(file) {\n  console.log("upload file:", file);\n  debugger;\n  this.setState({\n    createTempDto: {\n      file: file\n    }\n  });\n  return true;\n}',
      source:
        'async function onUpload(file) {\n  console.log("upload file:", file);\n  debugger;\n  this.setState({\n    createTempDto: {\n      file: file\n    }\n  });\n  return true;\n}',
    },
    toBase64: {
      type: 'JSFunction',
      value:
        'function toBase64(file) {\n  return new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.readAsDataURL(file);\n    reader.onload = function (ev) {\n      // base64码\n      const imgFile = ev.target.result;\n      resolve(imgFile);\n    };\n    reader.onerror = err => {\n      reject(err);\n    };\n  });\n}',
      source:
        'function toBase64(file) {\n  return new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.readAsDataURL(file);\n    reader.onload = function (ev) {\n      // base64码\n      const imgFile = ev.target.result;\n      resolve(imgFile);\n    };\n    reader.onerror = err => {\n      reject(err);\n    };\n  });\n}',
    },
    copyTemple: {
      type: 'JSFunction',
      value:
        'function copyTemple(e, params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n    Message.sucess("复制成功");\n  });\n}',
      source:
        'function copyTemple(e, params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n    Message.sucess("复制成功");\n  });\n}',
    },
    getCopyTemple: {
      type: 'JSFunction',
      value:
        "function getCopyTemple(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['CopyTemple'].load(params).then(res => {\n    this.setState({\n      copyTempleList: res.data\n    });\n  });\n}",
      source:
        "function getCopyTemple(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['CopyTemple'].load(params).then(res => {\n    this.setState({\n      copyTempleList: res.data\n    });\n  });\n}",
    },
    handleEditCopyTempleBtnClick: {
      type: 'JSFunction',
      value:
        'function handleEditCopyTempleBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  this.setState({\n    "isShowEditCopyTempleModal": params.isShow\n  });\n}',
      source:
        'function handleEditCopyTempleBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  this.setState({\n    "isShowEditCopyTempleModal": params.isShow\n  });\n}',
    },
    handleCreateCopyTempleBtnClick: {
      type: 'JSFunction',
      value:
        'function handleCreateCopyTempleBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateCopyTempleModal": isShow\n  });\n}',
      source:
        'function handleCreateCopyTempleBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateCopyTempleModal": isShow\n  });\n}',
    },
    handleUpdateTempleBtnClick: {
      type: 'JSFunction',
      value:
        'function handleUpdateTempleBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_UpdateTemple\').getFieldsValue();\n  // 使用数据源映射中的 API 加载数据，合并当前记录和表单值\n  this.dataSourceMap[\'UpdateTemple\'].load({\n    // ...this.state.currentEditRecord,\n    "template_id": this.state.currentEditRecord.id,\n    ...values\n  }).then(res => {\n    // 更新模态框可见状态为 false，关闭模态框\n    this.setState({\n      "isShowEditTemplateListModal": false\n    });\n    this.state.isShowEditTemplateListModalHooks.forEach(func => {\n      func();\n    });\n  });\n}',
      source:
        'function handleUpdateTempleBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_UpdateTemple\').getFieldsValue();\n  // 使用数据源映射中的 API 加载数据，合并当前记录和表单值\n  this.dataSourceMap[\'UpdateTemple\'].load({\n    // ...this.state.currentEditRecord,\n    "template_id": this.state.currentEditRecord.id,\n    ...values\n  }).then(res => {\n    // 更新模态框可见状态为 false，关闭模态框\n    this.setState({\n      "isShowEditTemplateListModal": false\n    });\n    this.state.isShowEditTemplateListModalHooks.forEach(func => {\n      func();\n    });\n  });\n}',
    },
    handleDeleteTemp: {
      type: 'JSFunction',
      value:
        'function handleDeleteTemp(e, params) {\n  console.log("params:", params);\n  this.dataSourceMap[\'DeleteTemple\'].load({\n    "ids": [params.id]\n  }).then(res => {\n    this.refreshTemplateList();\n  });\n}',
      source:
        'function handleDeleteTemp(e, params) {\n  console.log("params:", params);\n  this.dataSourceMap[\'DeleteTemple\'].load({\n    "ids": [params.id]\n  }).then(res => {\n    this.refreshTemplateList();\n  });\n}',
    },
  },
  hidden: false,
  title: '',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  meta: {
    doc: {
      dataSource: {
        TemplateList: {
          create_by: {
            name: 'create_by',
            type: 'string',
            title: '创建人',
            required: false,
          },
          created_on: {
            name: 'created_on',
            type: 'string',
            title: '创建时间',
            required: false,
          },
          docx_id: {
            name: 'docx_id',
            type: 'integer',
            title: '文档id',
            required: false,
          },
          id: {
            name: 'id',
            type: 'integer',
            title: 'id',
            required: true,
          },
          is_delete: {
            name: 'is_delete',
            type: 'integer',
            title: '是否删除',
            required: false,
          },
          template_name: {
            name: 'template_name',
            type: 'string',
            title: '模板名称',
            required: true,
          },
          updated_on: {
            name: 'updated_on',
            type: 'string',
            title: '更新时间',
            required: false,
          },
        },
        CreateTemplate: {
          file: {
            name: 'file',
            description: '文件流',
            type: 'string',
            required: false,
          },
          template_name: {
            name: 'template_name',
            description: '模板名称',
            type: 'string',
            required: true,
          },
        },
        UpdateTemple: {
          template_id: {
            name: 'template_id',
            type: 'integer',
            required: false,
          },
          template_name: {
            name: 'template_name',
            type: 'string',
            required: false,
          },
        },
        CreateTemplate_74: {
          file: {
            name: 'file',
            description: '文件流',
            type: 'string',
            required: false,
          },
          template_name: {
            name: 'template_name',
            description: '模板名称',
            type: 'string',
            required: true,
          },
        },
      },
    },
  },
  originCode:
    'class Page extends Component {\n  state = {\n    "templateListList": [],\n    "isShowEditTemplateListModal": false,\n    "isShowEditTemplateListModalHooks": [this.refreshTemplateList],\n    "currentEditRecord": {},\n    "isShowCreateTemplateListModal": false,\n    "isShowCreateTemplateListModalHooks": [this.refreshTemplateList],\n    "createTmpFileBase64": \'\',\n    "updateTempleList": [],\n    "copyTempleList": [],\n    "isShowEditCopyTempleModal": false,\n    "isShowDetailCopyTempleDrawer": false,\n    "showDetailHooks": [],\n    "isShowCreateCopyTempleModal": false,\n    "createTempDto": {},\n  }\n\n  async getTemplateList(params) {\n    const {\n      pageSize,\n      current\n    } = params;\n\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const tpls = await this.dataSourceMap[\'TemplateList\'].load({\n      page: current,\n      page_size: pageSize,\n      template_name: params.template_name ?? \'\'\n    });\n    return {\n      data: tpls.result.data,\n      // success 请返回 true，\n      // 不然 table 会停止解析数据，即使有数据\n      success: tpls.status,\n      // 不传会使用 data 的长度，如果是分页一定要传\n      total: tpls.result.total\n    };\n  }\n  refreshTemplateList() {\n    this.$(\'table_TemplateList_ref\').reload();\n  }\n  handleEditTemplateListBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        "currentEditRecord": params.record\n      });\n    }\n    // 更新可见状态\n    if (this.utils.routeTo) {\n      this.utils.routeTo(`/report/office?template_id=${params.record.id}&origin_mode=ReportTemplate`);\n    }\n  }\n  handleCreateTemplateListBtnClick(e, isShow) {\n    this.setState({\n      "isShowCreateTemplateListModal": isShow,\n    });\n    if (isShow === false) {\n      this.setState({\n        "createTempDto": {}\n      });\n    }\n  }\n  handleCreateTemplateBtnClick() {\n    // 获取表单字段值\n    const values = this.$(\'form_CreateTemplate\').getFieldsValue();\n    console.log("this.state.createTempDto.file:", this.state.createTempDto.file);\n    this.utils.handleUploadData(values.template_name, this.state.createTempDto.file ?? \'\').then(data => {\n      // 处理响应数据\n      this.setState({\n        "isShowCreateTemplateListModal": false,\n        "createTempDto": {}\n      });\n      this.state.isShowCreateTemplateListModalHooks.forEach(func => {\n        func();\n      });\n      if (this.utils.routeTo) {\n        console.log("url data:", data);\n        this.utils.routeTo(`/report/office?template_id=${data.result.template_id}&origin_mode=ReportTemplate`);\n      }\n    })\n      .catch(error => {\n        console.error(\'There was a problem with the fetch operation:\', error);\n      });\n  }\n  async onUpload(file) {\n    console.log("upload file:", file);\n    debugger;\n    this.setState({\n      createTempDto: {\n        file: file\n      }\n    });\n    return true;\n  }\n  toBase64(file) {\n    return new Promise((resolve, reject) => {\n      const reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = function (ev) {\n        // base64码\n        const imgFile = ev.target.result;\n        resolve(imgFile);\n      };\n      reader.onerror = err => {\n        reject(err);\n      };\n    });\n  }\n  copyTemple(e, params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n      Message.sucess("复制成功");\n    });\n  }\n  getCopyTemple(params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n      this.setState({\n        copyTempleList: res.data\n      });\n    });\n  }\n  handleEditCopyTempleBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        "currentEditRecord": params.record\n      });\n    }\n    this.setState({\n      "isShowEditCopyTempleModal": params.isShow\n    });\n  }\n  handleCreateCopyTempleBtnClick(e, isShow) {\n    this.setState({\n      "isShowCreateCopyTempleModal": isShow\n    });\n  }\n  handleUpdateTempleBtnClick() {\n    // 获取表单字段值\n    const values = this.$(\'form_UpdateTemple\').getFieldsValue();\n    // 使用数据源映射中的 API 加载数据，合并当前记录和表单值\n    this.dataSourceMap[\'UpdateTemple\'].load({\n      // ...this.state.currentEditRecord,\n      "template_id": this.state.currentEditRecord.id,\n      ...values\n    }).then(res => {\n      // 更新模态框可见状态为 false，关闭模态框\n      this.setState({\n        "isShowEditTemplateListModal": false\n      });\n      this.state.isShowEditTemplateListModalHooks.forEach(func => {\n        func();\n      });\n    });\n  }\n  handleDeleteTemp(e, params) {\n    console.log("params:", params);\n    this.dataSourceMap[\'DeleteTemple\'].load({\n      "ids": [params.id]\n    }).then(res => {\n      this.refreshTemplateList();\n    });\n  }\n}',
  children: [
    {
      componentName: 'ProTable',
      id: 'node_oclveyyt7j7',
      props: {
        cardBordered: true,
        rowKey: '_id',
        pagination: {
          pageSize: 10,
          showSizeChanger: false,
          showQuickJumper: false,
          simple: false,
          size: 'default',
        },
        search: {
          defaultCollapsed: false,
          resetText: '',
          searchText: '',
          labelWidth: 'auto',
        },
        toolBarRender: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: [
            {
              componentName: 'Button',
              id: 'node_oclveyyt7jg',
              props: {
                type: 'primary',
                children: '新增',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: {
                  type: 'JSSlot',
                  value: [
                    {
                      componentName: 'Icon',
                      id: 'node_oclveyyt7jj',
                      props: {
                        type: 'PlusOutlined',
                        size: 16,
                        rotate: 0,
                        spin: false,
                        __component_name: 'Icon',
                      },
                      docId: 'doclveyz7xm',
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                    },
                  ],
                  id: 'node_oclveyyt7jh',
                },
                block: false,
                danger: false,
                ghost: false,
                disabled: false,
                __component_name: 'Button',
                __events: {
                  eventDataList: [
                    {
                      type: 'componentEvent',
                      name: 'onClick',
                      relatedEventName: 'handleCreateTemplateListBtnClick',
                      paramStr: 'true',
                    },
                  ],
                  eventList: [
                    {
                      name: 'onClick',
                      template:
                        "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                      disabled: true,
                    },
                  ],
                },
                onClick: {
                  type: 'JSFunction',
                  value:
                    'function(){return this.handleCreateTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }',
                },
              },
              docId: 'doclveyz7xm',
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
            },
          ],
          id: 'node_oclveyyt7j8',
        },
        style: {
          width: '100%',
        },
        __component_name: 'ProTable',
        ref: 'table_TemplateList_ref',
        manualRequest: false,
        showHeader: true,
        size: 'default',
        tableLayout: '',
        scroll: {
          scrollToFirstRowOnChange: true,
        },
        rowSelection: false,
        columns: [
          {
            title: '模板名称',
            dataIndex: 'template_name',
            key: 'template_name',
            valueType: 'text',
            required: true,
            align: 'left',
            hideInSearch: false,
          },
          {
            title: '作者',
            dataIndex: 'create_by',
            key: 'create_by',
            valueType: 'text',
            required: false,
            align: 'left',
            hideInSearch: true,
          },
          {
            title: '更新时间',
            dataIndex: 'updated_on',
            key: 'updated_on',
            valueType: 'text',
            required: false,
            align: 'left',
            hideInSearch: true,
          },
          {
            title: '创建时间',
            dataIndex: 'created_on',
            key: 'created_on',
            valueType: 'text',
            required: false,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: '文档id',
            dataIndex: 'docx_id',
            key: 'docx_id',
            valueType: 'digit',
            required: false,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            valueType: 'digit',
            required: true,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: '是否删除',
            dataIndex: 'is_delete',
            key: 'is_delete',
            valueType: 'digit',
            required: false,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: '操作',
            align: 'right',
            fixed: 'right',
            valueType: 'option',
            render: {
              type: 'JSSlot',
              params: ['text', 'record', 'index'],
              value: [
                {
                  componentName: 'Button',
                  id: 'node_oclveyyt7jl',
                  props: {
                    type: 'link',
                    children: '编辑',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'small',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: '',
                    __events: {
                      eventDataList: [
                        {
                          type: 'componentEvent',
                          name: 'onClick',
                          relatedEventName: 'handleEditTemplateListBtnClick',
                          paramStr:
                            '{\n  "record": this.record,\n  "isShow":true\n}\n',
                        },
                      ],
                      eventList: [
                        {
                          name: 'onClick',
                          template:
                            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                          disabled: true,
                        },
                      ],
                    },
                    onClick: {
                      type: 'JSFunction',
                      value:
                        'function(){return this.handleEditTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([{\n  "record": this.record,\n  "isShow":true\n}\n])) }',
                    },
                  },
                  docId: 'doclveyz7xm',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
                {
                  componentName: 'Button',
                  id: 'node_oclveyz7xm1',
                  props: {
                    type: 'link',
                    children: '复制',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: '',
                    __events: {
                      eventDataList: [
                        {
                          type: 'componentEvent',
                          name: 'onClick',
                          relatedEventName: 'copyTemple',
                          paramStr: '{\n\t"template_id": this.record.id,\n}',
                        },
                      ],
                      eventList: [
                        {
                          name: 'onClick',
                          template:
                            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                          disabled: true,
                        },
                      ],
                    },
                    onClick: {
                      type: 'JSFunction',
                      value:
                        'function(){return this.copyTemple.apply(this,Array.prototype.slice.call(arguments).concat([{\n\t"template_id": this.record.id,\n}])) }',
                    },
                  },
                  docId: 'doclveyz7xm',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
                {
                  componentName: 'Popconfirm',
                  id: 'node_oclvf7emzh1',
                  props: {
                    title: '确定删除?',
                    okType: 'primary',
                    okText: '确定',
                    cancelText: '取消',
                    __events: {
                      eventDataList: [
                        {
                          type: 'componentEvent',
                          name: 'onConfirm',
                          relatedEventName: 'handleDeleteTemp',
                          paramStr: 'this.record',
                        },
                      ],
                      eventList: [
                        {
                          name: 'onConfirm',
                          template:
                            "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
                          disabled: true,
                        },
                      ],
                    },
                    onConfirm: {
                      type: 'JSFunction',
                      value:
                        'function(){return this.handleDeleteTemp.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }',
                    },
                  },
                  docId: 'doclvgcwuc8',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Button',
                      id: 'node_oclvf7emzh2',
                      props: {
                        children: '删除',
                        htmlType: 'button',
                        size: 'middle',
                        shape: 'default',
                        block: false,
                        danger: false,
                        ghost: false,
                        disabled: false,
                        type: 'text',
                        style: {
                          color: '#d0021b',
                        },
                        icon: '',
                        __events: {
                          eventDataList: [
                            {
                              type: 'componentEvent',
                              name: 'onClick',
                              relatedEventName: 'handleDeleteTemp',
                              paramStr: 'this.record',
                            },
                          ],
                          eventList: [
                            {
                              name: 'onClick',
                              template:
                                "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                              disabled: true,
                            },
                          ],
                        },
                        onClick: {
                          type: 'JSFunction',
                          value:
                            'function(){return this.handleDeleteTemp.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }',
                        },
                      },
                      docId: 'doclvgcwuc8',
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                    },
                  ],
                },
              ],
              id: 'node_oclveyyt7jk',
            },
          },
        ],
        request: {
          type: 'JSExpression',
          value: 'this.getTemplateList',
        },
        dateFormatter: 'string',
      },
      docId: 'doclveyz7xm',
      hidden: false,
      title: '获取模板列表',
      description: '',
      isLocked: false,
      condition: true,
      conditionGroup: '',
    },
    {
      componentName: 'Modal',
      id: 'node_oclvf76uyn1',
      props: {
        title: '编辑',
        width: '70%',
        okText: '确认',
        cancelText: '取消',
        visible: {
          type: 'JSExpression',
          value: 'this.state.isShowEditTemplateListModal',
          mock: false,
        },
        destroyOnClose: true,
        __component_name: 'Modal',
        centered: false,
        closable: true,
        confirmLoading: false,
        forceRender: false,
        keyboard: true,
        mask: true,
        maskClosable: true,
        bodyStyle: {},
        maskStyle: {},
        __events: {
          eventDataList: [
            {
              type: 'componentEvent',
              name: 'onCancel',
              relatedEventName: 'handleEditTemplateListBtnClick',
              paramStr: 'false',
            },
            {
              type: 'componentEvent',
              name: 'onOk',
              relatedEventName: 'handleUpdateTempleBtnClick',
            },
          ],
          eventList: [
            {
              name: 'afterClose',
              templete:
                "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
              disabled: false,
            },
            {
              name: 'onCancel',
              template:
                "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
              disabled: true,
            },
            {
              name: 'onOk',
              template:
                "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
              disabled: false,
            },
          ],
        },
        onCancel: {
          type: 'JSFunction',
          value:
            'function(){\n    return this.handleEditTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}',
        },
        onOk: {
          type: 'JSFunction',
          value:
            'function(){return this.handleUpdateTempleBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }',
        },
      },
      docId: 'doclveyz7xm',
      hidden: true,
      title: '编辑',
      isLocked: false,
      condition: true,
      conditionGroup: '',
      children: [
        {
          componentName: 'Form',
          id: 'node_oclvf7brj81',
          props: {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 14,
            },
            name: '',
            __component_name: 'Form',
            ref: 'form_UpdateTemple',
            colon: true,
            hideRequiredMark: false,
            preserve: true,
            scrollToFirstError: true,
            style: {
              width: '100%',
            },
            values: {
              type: 'JSExpression',
              value: 'this.state.currentEditRecord',
            },
            validateMessages: {
              required: "'${name}' 不能为空",
            },
          },
          docId: 'doclvgcwuc8',
          hidden: false,
          title: '编辑模板',
          description: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Form.Item',
              id: 'node_oclvf7brj84',
              props: {
                label: '模板名称',
                labelAlign: 'right',
                colon: true,
                required: false,
                noStyle: false,
                valuePropName: 'value',
                name: 'template_name',
                requiredobj: {
                  required: true,
                  message: '必填',
                },
                typeobj: {
                  type: '',
                  message: '',
                },
                lenobj: {
                  max: '',
                  min: '',
                  message: '',
                },
                patternobj: {
                  pattern: '',
                  message: '',
                },
                __component_name: 'Form.Item',
                hideInSearch: true,
              },
              docId: 'doclvgcwuc8',
              hidden: false,
              title: '',
              description: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Input',
                  id: 'node_oclvf7brj85',
                  props: {
                    placeholder: '请输入',
                    bordered: true,
                    disabled: false,
                    size: 'middle',
                    __component_name: 'Input',
                  },
                  docId: 'doclvgcwuc8',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      componentName: 'Modal',
      id: 'node_oclveyzcio1',
      props: {
        title: '创建',
        width: '70%',
        okText: '确认',
        cancelText: '取消',
        visible: {
          type: 'JSExpression',
          value: 'this.state.isShowCreateTemplateListModal',
          mock: false,
        },
        destroyOnClose: true,
        __component_name: 'Modal',
        centered: false,
        closable: true,
        confirmLoading: false,
        forceRender: false,
        keyboard: true,
        mask: true,
        maskClosable: true,
        bodyStyle: {},
        maskStyle: {},
        __events: {
          eventDataList: [
            {
              type: 'componentEvent',
              name: 'onCancel',
              relatedEventName: 'handleCreateTemplateListBtnClick',
              paramStr: 'false',
            },
            {
              type: 'componentEvent',
              name: 'onOk',
              relatedEventName: 'handleCreateTemplateBtnClick',
            },
          ],
          eventList: [
            {
              name: 'afterClose',
              templete:
                "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
              disabled: false,
            },
            {
              name: 'onCancel',
              template:
                "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
              disabled: true,
            },
            {
              name: 'onOk',
              template:
                "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
              disabled: false,
            },
          ],
        },
        onCancel: {
          type: 'JSFunction',
          value:
            'function(){\n    return this.handleCreateTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}',
        },
        onOk: {
          type: 'JSFunction',
          value:
            'function(){return this.handleCreateTemplateBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }',
        },
      },
      docId: 'doclveyzcio',
      hidden: true,
      title: '创建',
      isLocked: false,
      condition: true,
      conditionGroup: '',
      children: [
        {
          componentName: 'Form',
          id: 'node_oclveyzvob1',
          props: {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 14,
            },
            name: '',
            __component_name: 'Form',
            ref: 'form_CreateTemplate',
            colon: true,
            hideRequiredMark: false,
            preserve: true,
            scrollToFirstError: true,
            style: {
              width: '100%',
            },
            validateMessages: {
              required: "'${name}' 不能为空",
            },
          },
          docId: 'doclvf71mci',
          hidden: false,
          title: '创建模板',
          description: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Form.Item',
              id: 'node_oclveyzvob4',
              props: {
                label: '模板名称',
                labelAlign: 'right',
                colon: true,
                required: true,
                noStyle: false,
                valuePropName: 'value',
                name: 'template_name',
                requiredobj: {
                  required: true,
                  message: '必填',
                },
                typeobj: {
                  type: '',
                  message: '',
                },
                lenobj: {
                  max: '',
                  min: '',
                  message: '',
                },
                patternobj: {
                  pattern: '',
                  message: '',
                },
                __component_name: 'Form.Item',
                hideInSearch: false,
              },
              docId: 'doclvf71mci',
              hidden: false,
              title: '',
              description: '模板名称',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Input',
                  id: 'node_oclveyzvob5',
                  props: {
                    placeholder: '请输入',
                    bordered: true,
                    disabled: false,
                    size: 'middle',
                    __component_name: 'Input',
                  },
                  docId: 'doclvf71mci',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
              ],
            },
            {
              componentName: 'Form.Item',
              id: 'node_oclveyzvob2',
              props: {
                label: '文件',
                labelAlign: 'right',
                colon: true,
                required: false,
                noStyle: false,
                valuePropName: 'value',
                name: 'file',
                requiredobj: {
                  required: true,
                  message: '必填',
                },
                typeobj: {
                  type: '',
                  message: '',
                },
                lenobj: {
                  max: '',
                  min: '',
                  message: '',
                },
                patternobj: {
                  pattern: '',
                  message: '',
                },
                __component_name: 'Form.Item',
                hideInSearch: true,
              },
              docId: 'doclvf71mci',
              hidden: false,
              title: '',
              description: '文件流',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Upload',
                  id: 'node_oclvlzz3px5',
                  props: {
                    multiple: false,
                    directory: false,
                    disabled: false,
                    openFileDialogOnClick: true,
                    showUploadList: true,
                    listType: 'text',
                    method: 'post',
                    withCredentials: false,
                    beforeUpload: {
                      type: 'JSFunction',
                      value:
                        'function(){\n this.onUpload.apply(this,Array.prototype.slice.call(arguments).concat([]));\n  return false;\n}',
                    },
                  },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Button',
                      id: 'node_oclvlzz3px6',
                      props: {
                        children: '选择文件',
                        htmlType: 'button',
                        size: 'middle',
                        shape: 'default',
                        icon: '',
                        block: false,
                        danger: false,
                        ghost: false,
                        disabled: false,
                      },
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const backup = {
  componentName: 'Page',
  id: 'node_oclveyyt4y1',
  props: {
    ref: 'outerView',
    style: {
      height: '100%',
    },
  },
  docId: 'doclveyz7xm',
  fileName: '/',
  dataSource: {
    list: [
      {
        isInit: false,
        type: 'http',
        id: 'TemplateList',
        config: {
          path: '/api/v1/report/template/search',
          method: 'get',
          tags: ['模板管理'],
          title: '获取模板列表',
          subTitle: '',
          description: '',
          params: {
            query: {
              page: {
                description: '',
                name: 'page',
                type: 'integer',
                required: false,
              },
              page_size: {
                description: '',
                name: 'page_size',
                type: 'integer',
                required: false,
              },
              template_name: {
                description: '',
                name: 'template_name',
                type: 'string',
                required: false,
              },
              order_by: {
                description: '',
                name: 'order_by',
                type: 'string',
                required: false,
              },
            },
            body: {
              items: {},
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                data: {
                  name: 'data',
                  type: 'array',
                  required: false,
                  items: {
                    create_by: {
                      name: 'create_by',
                      type: 'string',
                      title: '创建人',
                      required: false,
                    },
                    created_on: {
                      name: 'created_on',
                      type: 'string',
                      title: '创建时间',
                      required: false,
                    },
                    docx_id: {
                      name: 'docx_id',
                      type: 'integer',
                      title: '文档id',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: true,
                    },
                    is_delete: {
                      name: 'is_delete',
                      type: 'integer',
                      title: '是否删除',
                      required: false,
                    },
                    template_name: {
                      name: 'template_name',
                      type: 'string',
                      title: '模板名称',
                      required: true,
                    },
                    updated_on: {
                      name: 'updated_on',
                      type: 'string',
                      title: '更新时间',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'get',
          uri: '/api/v1/report/template/search',
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'CreateTemplate',
        config: {
          path: '/api/v1/report/template/create',
          method: 'post',
          tags: ['模板管理'],
          title: '创建模板',
          subTitle: '',
          description: '',
          params: {
            body: {
              items: {
                properties: {
                  file: {
                    name: 'file',
                    description: '文件流',
                    type: 'string',
                    required: false,
                  },
                  template_name: {
                    name: 'template_name',
                    description: '模板名称',
                    type: 'string',
                    required: true,
                  },
                },
              },
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                result: {
                  name: 'result',
                  type: 'array',
                  required: false,
                  items: {
                    '0': {
                      type: 'string',
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'post',
          uri: '/api/v1/report/template/create',
          params: {},
          headers: {
            'Content-Type': 'application/form-data',
          },
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'VarnameList',
        config: {
          path: '/api/v1/report/template/varname/list',
          method: 'get',
          tags: ['模板管理'],
          title: '模板变量名列表',
          subTitle: '',
          description: '',
          params: {
            query: {
              template_id: {
                description: '',
                name: 'template_id',
                type: 'string',
                required: false,
              },
            },
            body: {
              items: {},
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                data: {
                  name: 'data',
                  type: 'array',
                  required: false,
                  items: {
                    default_value: {
                      name: 'default_value',
                      type: 'string',
                      title: '默认值',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: false,
                    },
                    varname: {
                      name: 'varname',
                      type: 'string',
                      title: '变量名',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'get',
          uri: '/api/v1/report/template/varname/list',
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'UpdateTemple',
        config: {
          path: '/api/v1/report/template/edit',
          method: 'put',
          tags: ['模板管理'],
          title: '编辑模板',
          subTitle: '',
          description: '',
          params: {
            body: {
              items: {
                properties: {
                  template_id: {
                    name: 'template_id',
                    type: 'integer',
                    required: false,
                  },
                  template_name: {
                    name: 'template_name',
                    type: 'string',
                    required: false,
                  },
                },
              },
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                result: {
                  name: 'result',
                  type: 'object',
                  required: false,
                  items: {
                    create_by: {
                      name: 'create_by',
                      type: 'string',
                      title: '创建人',
                      required: false,
                    },
                    created_on: {
                      name: 'created_on',
                      type: 'string',
                      title: '创建时间',
                      required: false,
                    },
                    docx_id: {
                      name: 'docx_id',
                      type: 'integer',
                      title: '文档id',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: true,
                    },
                    is_delete: {
                      name: 'is_delete',
                      type: 'integer',
                      title: '是否删除',
                      required: false,
                    },
                    template_name: {
                      name: 'template_name',
                      type: 'string',
                      title: '模板名称',
                      required: true,
                    },
                    updated_on: {
                      name: 'updated_on',
                      type: 'string',
                      title: '更新时间',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'put',
          uri: '/api/v1/report/template/edit',
          params: {},
          headers: {},
        },
      },
      {
        isInit: false,
        type: 'http',
        id: 'CopyTemple',
        config: {
          path: '/api/v1/report/template/copy',
          method: 'get',
          tags: ['模板管理'],
          title: '复制模板',
          subTitle: '',
          description: '',
          params: {
            body: {
              items: {
                properties: {
                  template_id: {
                    name: 'template_id',
                    type: 'integer',
                    required: false,
                  },
                },
              },
            },
          },
          response: [
            {
              code: '200',
              title: '成功',
              properties: {
                message: {
                  name: 'message',
                  type: 'string',
                  required: false,
                },
                request_id: {
                  name: 'request_id',
                  type: 'string',
                  required: false,
                },
                result: {
                  name: 'result',
                  type: 'object',
                  required: false,
                  items: {
                    create_by: {
                      name: 'create_by',
                      type: 'string',
                      title: '创建人',
                      required: false,
                    },
                    created_on: {
                      name: 'created_on',
                      type: 'string',
                      title: '创建时间',
                      required: false,
                    },
                    docx_id: {
                      name: 'docx_id',
                      type: 'integer',
                      title: '文档id',
                      required: false,
                    },
                    id: {
                      name: 'id',
                      type: 'integer',
                      title: 'id',
                      required: true,
                    },
                    is_delete: {
                      name: 'is_delete',
                      type: 'integer',
                      title: '是否删除',
                      required: false,
                    },
                    template_name: {
                      name: 'template_name',
                      type: 'string',
                      title: '模板名称',
                      required: true,
                    },
                    updated_on: {
                      name: 'updated_on',
                      type: 'string',
                      title: '更新时间',
                      required: false,
                    },
                  },
                },
                status: {
                  name: 'status',
                  type: 'integer',
                  required: false,
                },
                success: {
                  name: 'success',
                  type: 'boolean',
                  required: false,
                },
                timestamp: {
                  name: 'timestamp',
                  type: 'integer',
                  required: false,
                },
              },
            },
          ],
        },
        options: {
          isCors: true,
          timeout: 5000,
          method: 'POST',
          uri: '/api/v1/report/template/copy',
          params: {},
          headers: {},
        },
      },
      {
        type: 'http',
        isInit: false,
        options: {
          params: {},
          method: 'DELETE',
          isCors: true,
          timeout: 5000,
          headers: {},
          uri: '/api/v1/report/template/delete',
        },
        id: 'DeleteTemple',
      },
      {
        type: 'fetch',
        isInit: false,
        options: {
          params: {},
          method: 'POST',
          isCors: true,
          timeout: 5000,
          headers: {},
          uri: '/api/v1/report/template/create',
        },
        id: 'CreateFormData',
      },
    ],
  },
  state: {
    templateListList: {
      type: 'JSExpression',
      value: '[]',
    },
    isShowEditTemplateListModal: {
      type: 'JSExpression',
      value: 'false',
    },
    isShowEditTemplateListModalHooks: {
      type: 'JSExpression',
      value: '[this.refreshTemplateList]',
    },
    currentEditRecord: {
      type: 'JSExpression',
      value: '{}',
    },
    isShowCreateTemplateListModal: {
      type: 'JSExpression',
      value: 'false',
    },
    isShowCreateTemplateListModalHooks: {
      type: 'JSExpression',
      value: '[this.refreshTemplateList]',
    },
    createTmpFileBase64: {
      type: 'JSExpression',
      value: "''",
    },
    updateTempleList: {
      type: 'JSExpression',
      value: '[]',
    },
    copyTempleList: {
      type: 'JSExpression',
      value: '[]',
    },
    isShowEditCopyTempleModal: {
      type: 'JSExpression',
      value: 'false',
    },
    isShowDetailCopyTempleDrawer: {
      type: 'JSExpression',
      value: 'false',
    },
    showDetailHooks: {
      type: 'JSExpression',
      value: '[]',
    },
    isShowCreateCopyTempleModal: {
      type: 'JSExpression',
      value: 'false',
    },
    createTempDto: {
      type: 'JSExpression',
      value: '{}',
    },
  },
  css: 'body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}',
  lifeCycles: {},
  methods: {
    getTemplateList: {
      type: 'JSFunction',
      value:
        "async function getTemplateList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const tpls = await this.dataSourceMap['TemplateList'].load({\n    page: current,\n    page_size: pageSize,\n    template_name: params.template_name ?? ''\n  });\n  return {\n    data: tpls.result.data,\n    // success 请返回 true，\n    // 不然 table 会停止解析数据，即使有数据\n    success: tpls.status,\n    // 不传会使用 data 的长度，如果是分页一定要传\n    total: tpls.result.total\n  };\n}",
      source:
        "async function getTemplateList(params) {\n  const {\n    pageSize,\n    current\n  } = params;\n\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  const tpls = await this.dataSourceMap['TemplateList'].load({\n    page: current,\n    page_size: pageSize,\n    template_name: params.template_name ?? ''\n  });\n  return {\n    data: tpls.result.data,\n    // success 请返回 true，\n    // 不然 table 会停止解析数据，即使有数据\n    success: tpls.status,\n    // 不传会使用 data 的长度，如果是分页一定要传\n    total: tpls.result.total\n  };\n}",
    },
    refreshTemplateList: {
      type: 'JSFunction',
      value:
        "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}",
      source:
        "function refreshTemplateList() {\n  this.$('table_TemplateList_ref').reload();\n}",
    },
    handleEditTemplateListBtnClick: {
      type: 'JSFunction',
      value:
        'function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?template_id=${params.record.id}&origin_mode=ReportTemplate`);\n  }\n}',
      source:
        'function handleEditTemplateListBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  // 更新可见状态\n  if (this.utils.routeTo) {\n    this.utils.routeTo(`/report/office?template_id=${params.record.id}&origin_mode=ReportTemplate`);\n  }\n}',
    },
    handleCreateTemplateListBtnClick: {
      type: 'JSFunction',
      value:
        'function handleCreateTemplateListBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateTemplateListModal": isShow\n  });\n  if (isShow === false) {\n    this.setState({\n      "createTempDto": {}\n    });\n  }\n}',
      source:
        'function handleCreateTemplateListBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateTemplateListModal": isShow\n  });\n  if (isShow === false) {\n    this.setState({\n      "createTempDto": {}\n    });\n  }\n}',
    },
    handleCreateTemplateBtnClick: {
      type: 'JSFunction',
      value:
        'function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_CreateTemplate\').getFieldsValue();\n  console.log("this.state.createTempDto.file:", this.state.createTempDto.file);\n  this.utils.handleUploadData(values.template_name, this.state.createTempDto.file ?? \'\').then(data => {\n    // 处理响应数据\n    this.setState({\n      "isShowCreateTemplateListModal": false,\n      "createTempDto": {}\n    });\n    this.state.isShowCreateTemplateListModalHooks.forEach(func => {\n      func();\n    });\n    if (this.utils.routeTo) {\n      console.log("url data:", data);\n      this.utils.routeTo(`/report/office?template_id=${data.result.template_id}&origin_mode=ReportTemplate`);\n    }\n  }).catch(error => {\n    console.error(\'There was a problem with the fetch operation:\', error);\n  });\n}',
      source:
        'function handleCreateTemplateBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_CreateTemplate\').getFieldsValue();\n  console.log("this.state.createTempDto.file:", this.state.createTempDto.file);\n  this.utils.handleUploadData(values.template_name, this.state.createTempDto.file ?? \'\').then(data => {\n    // 处理响应数据\n    this.setState({\n      "isShowCreateTemplateListModal": false,\n      "createTempDto": {}\n    });\n    this.state.isShowCreateTemplateListModalHooks.forEach(func => {\n      func();\n    });\n    if (this.utils.routeTo) {\n      console.log("url data:", data);\n      this.utils.routeTo(`/report/office?template_id=${data.result.template_id}&origin_mode=ReportTemplate`);\n    }\n  }).catch(error => {\n    console.error(\'There was a problem with the fetch operation:\', error);\n  });\n}',
    },
    onUpload: {
      type: 'JSFunction',
      value:
        'async function onUpload(file) {\n  console.log("upload file:", file);\n  debugger;\n  this.setState({\n    createTempDto: {\n      file: file\n    }\n  });\n  return true;\n}',
      source:
        'async function onUpload(file) {\n  console.log("upload file:", file);\n  debugger;\n  this.setState({\n    createTempDto: {\n      file: file\n    }\n  });\n  return true;\n}',
    },
    toBase64: {
      type: 'JSFunction',
      value:
        'function toBase64(file) {\n  return new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.readAsDataURL(file);\n    reader.onload = function (ev) {\n      // base64码\n      const imgFile = ev.target.result;\n      resolve(imgFile);\n    };\n    reader.onerror = err => {\n      reject(err);\n    };\n  });\n}',
      source:
        'function toBase64(file) {\n  return new Promise((resolve, reject) => {\n    const reader = new FileReader();\n    reader.readAsDataURL(file);\n    reader.onload = function (ev) {\n      // base64码\n      const imgFile = ev.target.result;\n      resolve(imgFile);\n    };\n    reader.onerror = err => {\n      reject(err);\n    };\n  });\n}',
    },
    copyTemple: {
      type: 'JSFunction',
      value:
        'function copyTemple(e, params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n    Message.sucess("复制成功");\n  });\n}',
      source:
        'function copyTemple(e, params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n    Message.sucess("复制成功");\n  });\n}',
    },
    getCopyTemple: {
      type: 'JSFunction',
      value:
        "function getCopyTemple(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['CopyTemple'].load(params).then(res => {\n    this.setState({\n      copyTempleList: res.data\n    });\n  });\n}",
      source:
        "function getCopyTemple(params) {\n  // 使用数据源映射中的 API 加载表格数据，传递参数\n  return this.dataSourceMap['CopyTemple'].load(params).then(res => {\n    this.setState({\n      copyTempleList: res.data\n    });\n  });\n}",
    },
    handleEditCopyTempleBtnClick: {
      type: 'JSFunction',
      value:
        'function handleEditCopyTempleBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  this.setState({\n    "isShowEditCopyTempleModal": params.isShow\n  });\n}',
      source:
        'function handleEditCopyTempleBtnClick(e, params) {\n  // 如果存在记录对象，则更新记录状态\n  if (params.record) {\n    this.setState({\n      "currentEditRecord": params.record\n    });\n  }\n  this.setState({\n    "isShowEditCopyTempleModal": params.isShow\n  });\n}',
    },
    handleCreateCopyTempleBtnClick: {
      type: 'JSFunction',
      value:
        'function handleCreateCopyTempleBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateCopyTempleModal": isShow\n  });\n}',
      source:
        'function handleCreateCopyTempleBtnClick(e, isShow) {\n  this.setState({\n    "isShowCreateCopyTempleModal": isShow\n  });\n}',
    },
    handleUpdateTempleBtnClick: {
      type: 'JSFunction',
      value:
        'function handleUpdateTempleBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_UpdateTemple\').getFieldsValue();\n  // 使用数据源映射中的 API 加载数据，合并当前记录和表单值\n  this.dataSourceMap[\'UpdateTemple\'].load({\n    // ...this.state.currentEditRecord,\n    "template_id": this.state.currentEditRecord.id,\n    ...values\n  }).then(res => {\n    // 更新模态框可见状态为 false，关闭模态框\n    this.setState({\n      "isShowEditTemplateListModal": false\n    });\n    this.state.isShowEditTemplateListModalHooks.forEach(func => {\n      func();\n    });\n  });\n}',
      source:
        'function handleUpdateTempleBtnClick() {\n  // 获取表单字段值\n  const values = this.$(\'form_UpdateTemple\').getFieldsValue();\n  // 使用数据源映射中的 API 加载数据，合并当前记录和表单值\n  this.dataSourceMap[\'UpdateTemple\'].load({\n    // ...this.state.currentEditRecord,\n    "template_id": this.state.currentEditRecord.id,\n    ...values\n  }).then(res => {\n    // 更新模态框可见状态为 false，关闭模态框\n    this.setState({\n      "isShowEditTemplateListModal": false\n    });\n    this.state.isShowEditTemplateListModalHooks.forEach(func => {\n      func();\n    });\n  });\n}',
    },
    handleDeleteTemp: {
      type: 'JSFunction',
      value:
        'function handleDeleteTemp(e, params) {\n  console.log("params:", params);\n  this.dataSourceMap[\'DeleteTemple\'].load({\n    "ids": [params.id]\n  }).then(res => {\n    this.refreshTemplateList();\n  });\n}',
      source:
        'function handleDeleteTemp(e, params) {\n  console.log("params:", params);\n  this.dataSourceMap[\'DeleteTemple\'].load({\n    "ids": [params.id]\n  }).then(res => {\n    this.refreshTemplateList();\n  });\n}',
    },
  },
  hidden: false,
  title: '',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  meta: {
    doc: {
      dataSource: {
        TemplateList: {
          create_by: {
            name: 'create_by',
            type: 'string',
            title: '创建人',
            required: false,
          },
          created_on: {
            name: 'created_on',
            type: 'string',
            title: '创建时间',
            required: false,
          },
          docx_id: {
            name: 'docx_id',
            type: 'integer',
            title: '文档id',
            required: false,
          },
          id: {
            name: 'id',
            type: 'integer',
            title: 'id',
            required: true,
          },
          is_delete: {
            name: 'is_delete',
            type: 'integer',
            title: '是否删除',
            required: false,
          },
          template_name: {
            name: 'template_name',
            type: 'string',
            title: '模板名称',
            required: true,
          },
          updated_on: {
            name: 'updated_on',
            type: 'string',
            title: '更新时间',
            required: false,
          },
        },
        CreateTemplate: {
          file: {
            name: 'file',
            description: '文件流',
            type: 'string',
            required: false,
          },
          template_name: {
            name: 'template_name',
            description: '模板名称',
            type: 'string',
            required: true,
          },
        },
        UpdateTemple: {
          template_id: {
            name: 'template_id',
            type: 'integer',
            required: false,
          },
          template_name: {
            name: 'template_name',
            type: 'string',
            required: false,
          },
        },
        CreateTemplate_74: {
          file: {
            name: 'file',
            description: '文件流',
            type: 'string',
            required: false,
          },
          template_name: {
            name: 'template_name',
            description: '模板名称',
            type: 'string',
            required: true,
          },
        },
      },
    },
  },
  originCode:
    'class Page extends Component {\n  state = {\n    "templateListList": [],\n    "isShowEditTemplateListModal": false,\n    "isShowEditTemplateListModalHooks": [this.refreshTemplateList],\n    "currentEditRecord": {},\n    "isShowCreateTemplateListModal": false,\n    "isShowCreateTemplateListModalHooks": [this.refreshTemplateList],\n    "createTmpFileBase64": \'\',\n    "updateTempleList": [],\n    "copyTempleList": [],\n    "isShowEditCopyTempleModal": false,\n    "isShowDetailCopyTempleDrawer": false,\n    "showDetailHooks": [],\n    "isShowCreateCopyTempleModal": false,\n    "createTempDto": {},\n  }\n  \n  async getTemplateList(params) {\n    const {\n      pageSize,\n      current\n    } = params;\n    \n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    const tpls = await this.dataSourceMap[\'TemplateList\'].load({\n      page: current,\n      page_size: pageSize,\n      template_name: params.template_name ?? \'\'\n    });\n    return {\n      data: tpls.result.data,\n      // success 请返回 true，\n      // 不然 table 会停止解析数据，即使有数据\n      success: tpls.status,\n      // 不传会使用 data 的长度，如果是分页一定要传\n      total: tpls.result.total\n    };\n  }\n  refreshTemplateList() {\n    this.$(\'table_TemplateList_ref\').reload();\n  }\n  handleEditTemplateListBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        "currentEditRecord": params.record\n      });\n    }\n    // 更新可见状态\n    if (this.utils.routeTo) {\n      this.utils.routeTo(`/report/office?template_id=${params.record.id}&origin_mode=ReportTemplate`);\n    }\n  }\n  handleCreateTemplateListBtnClick(e, isShow) {\n    this.setState({\n      "isShowCreateTemplateListModal": isShow\n    });\n  }\n  handleCreateTemplateBtnClick() {\n    // 获取表单字段值\n    const values = this.$(\'form_CreateTemplate\').getFieldsValue();\n    console.log("this.state.createTempDto.file:", this.state.createTempDto.file);\n    this.utils.handleUploadData(values.template_name, this.state.createTempDto.file ?? \'\').then(data => {\n        // 处理响应数据\n        this.setState({\n          "isShowCreateTemplateListModal": false\n        });\n        this.state.isShowCreateTemplateListModalHooks.forEach(func => {\n          func();\n        });\n        if (this.utils.routeTo) {\n          console.log("url data:", data);\n          this.utils.routeTo(`/report/office?template_id=${data.result.template_id}&origin_mode=ReportTemplate`);\n        }\n      })\n      .catch(error => {\n        console.error(\'There was a problem with the fetch operation:\', error);\n      });\n  }\n  async onUpload(file) {\n    console.log("upload file:", file);    \n    debugger;\n    this.setState({\n      createTempDto: {\n        file: file\n      }\n    });\n    return true;\n  }\n  toBase64(file) {\n    return new Promise((resolve, reject) => {\n      const reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = function(ev) {\n        // base64码\n        const imgFile = ev.target.result;\n        resolve(imgFile);\n      };\n      reader.onerror = err => {\n        reject(err);\n      };\n    });\n  }\n  copyTemple(e, params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n      Message.sucess("复制成功");\n    });\n  }\n  getCopyTemple(params) {\n    // 使用数据源映射中的 API 加载表格数据，传递参数\n    return this.dataSourceMap[\'CopyTemple\'].load(params).then(res => {\n      this.setState({\n        copyTempleList: res.data\n      });\n    });\n  }\n  handleEditCopyTempleBtnClick(e, params) {\n    // 如果存在记录对象，则更新记录状态\n    if (params.record) {\n      this.setState({\n        "currentEditRecord": params.record\n      });\n    }\n    this.setState({\n      "isShowEditCopyTempleModal": params.isShow\n    });\n  }\n  handleCreateCopyTempleBtnClick(e, isShow) {\n    this.setState({\n      "isShowCreateCopyTempleModal": isShow\n    });\n  }\n  handleUpdateTempleBtnClick() {\n    // 获取表单字段值\n    const values = this.$(\'form_UpdateTemple\').getFieldsValue();\n    // 使用数据源映射中的 API 加载数据，合并当前记录和表单值\n    this.dataSourceMap[\'UpdateTemple\'].load({\n      // ...this.state.currentEditRecord,\n      "template_id": this.state.currentEditRecord.id,\n      ...values\n    }).then(res => {\n      // 更新模态框可见状态为 false，关闭模态框\n      this.setState({\n        "isShowEditTemplateListModal": false\n      });\n      this.state.isShowEditTemplateListModalHooks.forEach(func => {\n        func();\n      });\n    });\n  }\n  handleDeleteTemp(e, params) {\n    console.log("params:", params);\n    this.dataSourceMap[\'DeleteTemple\'].load({\n      "ids": [params.id]\n    }).then(res => {\n      this.refreshTemplateList();\n    });\n  }\n}',
  children: [
    {
      componentName: 'ProTable',
      id: 'node_oclveyyt7j7',
      props: {
        cardBordered: true,
        rowKey: '_id',
        pagination: {
          pageSize: 10,
          showSizeChanger: false,
          showQuickJumper: false,
          simple: false,
          size: 'default',
        },
        search: {
          defaultCollapsed: false,
          resetText: '',
          searchText: '',
          labelWidth: 'auto',
        },
        toolBarRender: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: [
            {
              componentName: 'Button',
              id: 'node_oclveyyt7jg',
              props: {
                type: 'primary',
                children: '新增',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: {
                  type: 'JSSlot',
                  value: [
                    {
                      componentName: 'Icon',
                      id: 'node_oclveyyt7jj',
                      props: {
                        type: 'PlusOutlined',
                        size: 16,
                        rotate: 0,
                        spin: false,
                        __component_name: 'Icon',
                      },
                      docId: 'doclveyz7xm',
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                    },
                  ],
                  id: 'node_oclveyyt7jh',
                },
                block: false,
                danger: false,
                ghost: false,
                disabled: false,
                __component_name: 'Button',
                __events: {
                  eventDataList: [
                    {
                      type: 'componentEvent',
                      name: 'onClick',
                      relatedEventName: 'handleCreateTemplateListBtnClick',
                      paramStr: 'true',
                    },
                  ],
                  eventList: [
                    {
                      name: 'onClick',
                      template:
                        "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                      disabled: true,
                    },
                  ],
                },
                onClick: {
                  type: 'JSFunction',
                  value:
                    'function(){return this.handleCreateTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([true])) }',
                },
              },
              docId: 'doclveyz7xm',
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
            },
          ],
          id: 'node_oclveyyt7j8',
        },
        style: {
          width: '100%',
        },
        __component_name: 'ProTable',
        ref: 'table_TemplateList_ref',
        manualRequest: false,
        showHeader: true,
        size: 'default',
        tableLayout: '',
        scroll: {
          scrollToFirstRowOnChange: true,
        },
        rowSelection: false,
        columns: [
          {
            title: '模板名称',
            dataIndex: 'template_name',
            key: 'template_name',
            valueType: 'text',
            required: true,
            align: 'left',
            hideInSearch: false,
          },
          {
            title: '作者',
            dataIndex: 'create_by',
            key: 'create_by',
            valueType: 'text',
            required: false,
            align: 'left',
            hideInSearch: true,
          },
          {
            title: '更新时间',
            dataIndex: 'updated_on',
            key: 'updated_on',
            valueType: 'text',
            required: false,
            align: 'left',
            hideInSearch: true,
          },
          {
            title: '创建时间',
            dataIndex: 'created_on',
            key: 'created_on',
            valueType: 'text',
            required: false,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: '文档id',
            dataIndex: 'docx_id',
            key: 'docx_id',
            valueType: 'digit',
            required: false,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            valueType: 'digit',
            required: true,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: '是否删除',
            dataIndex: 'is_delete',
            key: 'is_delete',
            valueType: 'digit',
            required: false,
            align: 'left',
            hideInSearch: true,
            fixed: '',
            hideInTable: true,
          },
          {
            title: '操作',
            align: 'right',
            fixed: 'right',
            valueType: 'option',
            render: {
              type: 'JSSlot',
              params: ['text', 'record', 'index'],
              value: [
                {
                  componentName: 'Button',
                  id: 'node_oclveyyt7jl',
                  props: {
                    type: 'link',
                    children: '编辑',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'small',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: '',
                    __events: {
                      eventDataList: [
                        {
                          type: 'componentEvent',
                          name: 'onClick',
                          relatedEventName: 'handleEditTemplateListBtnClick',
                          paramStr:
                            '{\n  "record": this.record,\n  "isShow":true\n}\n',
                        },
                      ],
                      eventList: [
                        {
                          name: 'onClick',
                          template:
                            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                          disabled: true,
                        },
                      ],
                    },
                    onClick: {
                      type: 'JSFunction',
                      value:
                        'function(){return this.handleEditTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([{\n  "record": this.record,\n  "isShow":true\n}\n])) }',
                    },
                  },
                  docId: 'doclveyz7xm',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
                {
                  componentName: 'Button',
                  id: 'node_oclveyz7xm1',
                  props: {
                    type: 'link',
                    children: '复制',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: '',
                    __events: {
                      eventDataList: [
                        {
                          type: 'componentEvent',
                          name: 'onClick',
                          relatedEventName: 'copyTemple',
                          paramStr: '{\n\t"template_id": this.record.id,\n}',
                        },
                      ],
                      eventList: [
                        {
                          name: 'onClick',
                          template:
                            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                          disabled: true,
                        },
                      ],
                    },
                    onClick: {
                      type: 'JSFunction',
                      value:
                        'function(){return this.copyTemple.apply(this,Array.prototype.slice.call(arguments).concat([{\n\t"template_id": this.record.id,\n}])) }',
                    },
                  },
                  docId: 'doclveyz7xm',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
                {
                  componentName: 'Popconfirm',
                  id: 'node_oclvf7emzh1',
                  props: {
                    title: '确定删除?',
                    okType: 'primary',
                    okText: '确定',
                    cancelText: '取消',
                    __events: {
                      eventDataList: [
                        {
                          type: 'componentEvent',
                          name: 'onConfirm',
                          relatedEventName: 'handleDeleteTemp',
                          paramStr: 'this.record',
                        },
                      ],
                      eventList: [
                        {
                          name: 'onConfirm',
                          template:
                            "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
                          disabled: true,
                        },
                      ],
                    },
                    onConfirm: {
                      type: 'JSFunction',
                      value:
                        'function(){return this.handleDeleteTemp.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }',
                    },
                  },
                  docId: 'doclvgcwuc8',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Button',
                      id: 'node_oclvf7emzh2',
                      props: {
                        children: '删除',
                        htmlType: 'button',
                        size: 'middle',
                        shape: 'default',
                        block: false,
                        danger: false,
                        ghost: false,
                        disabled: false,
                        type: 'text',
                        style: {
                          color: '#d0021b',
                        },
                        icon: '',
                        __events: {
                          eventDataList: [
                            {
                              type: 'componentEvent',
                              name: 'onClick',
                              relatedEventName: 'handleDeleteTemp',
                              paramStr: 'this.record',
                            },
                          ],
                          eventList: [
                            {
                              name: 'onClick',
                              template:
                                "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                              disabled: true,
                            },
                          ],
                        },
                        onClick: {
                          type: 'JSFunction',
                          value:
                            'function(){return this.handleDeleteTemp.apply(this,Array.prototype.slice.call(arguments).concat([this.record])) }',
                        },
                      },
                      docId: 'doclvgcwuc8',
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                    },
                  ],
                },
              ],
              id: 'node_oclveyyt7jk',
            },
          },
        ],
        request: {
          type: 'JSExpression',
          value: 'this.getTemplateList',
        },
        dateFormatter: 'string',
      },
      docId: 'doclveyz7xm',
      hidden: false,
      title: '获取模板列表',
      description: '',
      isLocked: false,
      condition: true,
      conditionGroup: '',
    },
    {
      componentName: 'Modal',
      id: 'node_oclvf76uyn1',
      props: {
        title: '编辑',
        width: '70%',
        okText: '确认',
        cancelText: '取消',
        visible: {
          type: 'JSExpression',
          value: 'this.state.isShowEditTemplateListModal',
          mock: false,
        },
        destroyOnClose: true,
        __component_name: 'Modal',
        centered: false,
        closable: true,
        confirmLoading: false,
        forceRender: false,
        keyboard: true,
        mask: true,
        maskClosable: true,
        bodyStyle: {},
        maskStyle: {},
        __events: {
          eventDataList: [
            {
              type: 'componentEvent',
              name: 'onCancel',
              relatedEventName: 'handleEditTemplateListBtnClick',
              paramStr: 'false',
            },
            {
              type: 'componentEvent',
              name: 'onOk',
              relatedEventName: 'handleUpdateTempleBtnClick',
            },
          ],
          eventList: [
            {
              name: 'afterClose',
              templete:
                "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
              disabled: false,
            },
            {
              name: 'onCancel',
              template:
                "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
              disabled: true,
            },
            {
              name: 'onOk',
              template:
                "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
              disabled: false,
            },
          ],
        },
        onCancel: {
          type: 'JSFunction',
          value:
            'function(){\n    return this.handleEditTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}',
        },
        onOk: {
          type: 'JSFunction',
          value:
            'function(){return this.handleUpdateTempleBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }',
        },
      },
      docId: 'doclveyz7xm',
      hidden: true,
      title: '编辑',
      isLocked: false,
      condition: true,
      conditionGroup: '',
      children: [
        {
          componentName: 'Form',
          id: 'node_oclvf7brj81',
          props: {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 14,
            },
            name: '',
            __component_name: 'Form',
            ref: 'form_UpdateTemple',
            colon: true,
            hideRequiredMark: false,
            preserve: true,
            scrollToFirstError: true,
            style: {
              width: '100%',
            },
            values: {
              type: 'JSExpression',
              value: 'this.state.currentEditRecord',
            },
            validateMessages: {
              required: "'${name}' 不能为空",
            },
          },
          docId: 'doclvgcwuc8',
          hidden: false,
          title: '编辑模板',
          description: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Form.Item',
              id: 'node_oclvf7brj84',
              props: {
                label: '模板名称',
                labelAlign: 'right',
                colon: true,
                required: false,
                noStyle: false,
                valuePropName: 'value',
                name: 'template_name',
                requiredobj: {
                  required: true,
                  message: '必填',
                },
                typeobj: {
                  type: '',
                  message: '',
                },
                lenobj: {
                  max: '',
                  min: '',
                  message: '',
                },
                patternobj: {
                  pattern: '',
                  message: '',
                },
                __component_name: 'Form.Item',
                hideInSearch: true,
              },
              docId: 'doclvgcwuc8',
              hidden: false,
              title: '',
              description: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Input',
                  id: 'node_oclvf7brj85',
                  props: {
                    placeholder: '请输入',
                    bordered: true,
                    disabled: false,
                    size: 'middle',
                    __component_name: 'Input',
                  },
                  docId: 'doclvgcwuc8',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      componentName: 'Modal',
      id: 'node_oclveyzcio1',
      props: {
        title: '创建',
        width: '70%',
        okText: '确认',
        cancelText: '取消',
        visible: {
          type: 'JSExpression',
          value: 'this.state.isShowCreateTemplateListModal',
          mock: false,
        },
        destroyOnClose: true,
        __component_name: 'Modal',
        centered: false,
        closable: true,
        confirmLoading: false,
        forceRender: false,
        keyboard: true,
        mask: true,
        maskClosable: true,
        bodyStyle: {},
        maskStyle: {},
        __events: {
          eventDataList: [
            {
              type: 'componentEvent',
              name: 'onCancel',
              relatedEventName: 'handleCreateTemplateListBtnClick',
              paramStr: 'false',
            },
            {
              type: 'componentEvent',
              name: 'onOk',
              relatedEventName: 'handleCreateTemplateBtnClick',
            },
          ],
          eventList: [
            {
              name: 'afterClose',
              templete:
                "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
              disabled: false,
            },
            {
              name: 'onCancel',
              template:
                "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
              disabled: true,
            },
            {
              name: 'onOk',
              template:
                "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
              disabled: false,
            },
          ],
        },
        onCancel: {
          type: 'JSFunction',
          value:
            'function(){\n    return this.handleCreateTemplateListBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([false]))\n}',
        },
        onOk: {
          type: 'JSFunction',
          value:
            'function(){return this.handleCreateTemplateBtnClick.apply(this,Array.prototype.slice.call(arguments).concat([])) }',
        },
      },
      docId: 'doclveyzcio',
      hidden: false,
      title: '创建',
      isLocked: false,
      condition: true,
      conditionGroup: '',
      children: [
        {
          componentName: 'Form',
          id: 'node_oclveyzvob1',
          props: {
            labelCol: {
              span: 6,
            },
            wrapperCol: {
              span: 14,
            },
            name: '',
            __component_name: 'Form',
            ref: 'form_CreateTemplate',
            colon: true,
            hideRequiredMark: false,
            preserve: true,
            scrollToFirstError: true,
            style: {
              width: '100%',
            },
            validateMessages: {
              required: "'${name}' 不能为空",
            },
          },
          docId: 'doclvf71mci',
          hidden: false,
          title: '创建模板',
          description: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Form.Item',
              id: 'node_oclveyzvob4',
              props: {
                label: '模板名称',
                labelAlign: 'right',
                colon: true,
                required: true,
                noStyle: false,
                valuePropName: 'value',
                name: 'template_name',
                requiredobj: {
                  required: true,
                  message: '必填',
                },
                typeobj: {
                  type: '',
                  message: '',
                },
                lenobj: {
                  max: '',
                  min: '',
                  message: '',
                },
                patternobj: {
                  pattern: '',
                  message: '',
                },
                __component_name: 'Form.Item',
                hideInSearch: false,
              },
              docId: 'doclvf71mci',
              hidden: false,
              title: '',
              description: '模板名称',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Input',
                  id: 'node_oclveyzvob5',
                  props: {
                    placeholder: '请输入',
                    bordered: true,
                    disabled: false,
                    size: 'middle',
                    __component_name: 'Input',
                  },
                  docId: 'doclvf71mci',
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                },
              ],
            },
            {
              componentName: 'Form.Item',
              id: 'node_oclveyzvob2',
              props: {
                label: '文件',
                labelAlign: 'right',
                colon: true,
                required: false,
                noStyle: false,
                valuePropName: 'value',
                name: 'file',
                requiredobj: {
                  required: true,
                  message: '必填',
                },
                typeobj: {
                  type: '',
                  message: '',
                },
                lenobj: {
                  max: '',
                  min: '',
                  message: '',
                },
                patternobj: {
                  pattern: '',
                  message: '',
                },
                __component_name: 'Form.Item',
                hideInSearch: true,
              },
              docId: 'doclvf71mci',
              hidden: false,
              title: '',
              description: '文件流',
              isLocked: false,
              condition: true,
              conditionGroup: '',
              children: [
                {
                  componentName: 'Upload',
                  id: 'node_oclvlzz3px5',
                  props: {
                    multiple: false,
                    directory: false,
                    disabled: false,
                    openFileDialogOnClick: true,
                    showUploadList: true,
                    listType: 'text',
                    method: 'post',
                    withCredentials: false,
                    beforeUpload: {
                      type: 'JSFunction',
                      value:
                        'function(){\n this.onUpload.apply(this,Array.prototype.slice.call(arguments).concat([]));\n  return false;\n}',
                    },
                  },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: '',
                  children: [
                    {
                      componentName: 'Button',
                      id: 'node_oclvlzz3px6',
                      props: {
                        children: '选择文件',
                        htmlType: 'button',
                        size: 'middle',
                        shape: 'default',
                        icon: '',
                        block: false,
                        danger: false,
                        ghost: false,
                        disabled: false,
                      },
                      hidden: false,
                      title: '',
                      isLocked: false,
                      condition: true,
                      conditionGroup: '',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
