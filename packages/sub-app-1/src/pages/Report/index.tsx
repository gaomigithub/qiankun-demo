import Chat from '@/components/Chat';
import MutationIframe from '@/components/MutationIframe';
import { exportWordApi, exportWordTempApi } from '@/services/report';
import { loginApi } from '@/services/user/login';
import { IChapter, IParagraph } from '@/types/exportWord';
import { exportFile } from '@/utils/tools';
import {
  CloseOutlined,
  CustomerServiceOutlined,
  DeleteOutlined,
  EnterOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest, useUpdateEffect } from 'ahooks';
import {
  Button,
  FloatButton,
  Input,
  Modal,
  Popconfirm,
  Popover,
  Tree,
  TreeDataNode,
  Typography,
  message,
} from 'antd';
import type { DataNode, DirectoryTreeProps, TreeProps } from 'antd/es/tree';
import _ from 'lodash';
import { ReactNode, useEffect, useState } from 'react';
import SelectModal from './SelectModal';
import './index.less';

const { Paragraph } = Typography;

type TreeMap = {
  [key: string]: {
    node: DataNode;
    title?: string;
    parentKey?: string;
  };
};

/**
 * 打平数组,提高树的查询速度
 * @param tree
 * @param parentKey
 * @returns
 */
function flattenTree(tree: DataNode[], parentKey?: string): TreeMap {
  const result: TreeMap = {};
  tree.forEach((node) => {
    const key = `${node.key}`;
    result[key] = {
      node: { title: node.title, key: node.key },
      title: node.title?.toString(),
      parentKey: parentKey,
    };
    if (node.children) {
      const flattenedChildren = flattenTree(node.children, key);
      Object.assign(result, flattenedChildren);
    }
  });
  return result;
}

function buildTree(treeMap: TreeMap, parentKey?: string): DataNode[] {
  const children: DataNode[] = [];
  // 遍历 TreeMap 的所有键，查找直接子节点
  Object.keys(treeMap).forEach((key) => {
    const { node, parentKey: currentNodeParentKey } = treeMap[key];
    if (currentNodeParentKey === parentKey) {
      // 递归构建子树
      const nodeWithChildren = { ...node, children: buildTree(treeMap, key) };
      children.push(nodeWithChildren);
    }
  });

  return children;
}

function mapToArray(treeMap: TreeMap): DataNode[] {
  // 根节点的 parentKey 是 undefined，所以从 undefined 开始构建树
  return buildTree(treeMap, undefined);
}

enum PageType {
  CHAPTER = 1,
  PARAGRAPH,
  NONE,
  NEW,
}

const Report: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCreatePop, setShowCreatePop] = useState(false);
  const [showCreateNodePop, setShowCreateNodePop] = useState(false);
  const [showAddParagraphBtn, setShowAddParagraphBtn] = useState(false);
  const [newCapterName, setNewCapterName] = useState<string>();
  const [newNodeName, setNewNodeName] = useState<string>();
  const [currentSelectedNodeKey, setCurrentSelectedNodeKey] =
    useState<string>();
  const [currentPageType, setCurrentPageType] = useState<PageType>();
  const [currentCreateNodeKey, setCurrentCreateNodeKey] = useState<string>();
  const [displayIframeUrl, setDisplayIframeURL] = useState<string>();
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [treeMap, setTreeMap] = useState<TreeMap>();
  const [paragraphMap, setParagraphMap] = useState<Record<string, string>>({});
  const [chapterIdMap, setChapterIdMap] = useState<Record<string, string>>({});

  const [showChatView, setShowChatView] = useState(false);

  const handleParagraphShow = (key: string) => {
    if (_.get(treeMap, key)) {
      const nodeInfo = _.get(treeMap, key);
      if (nodeInfo?.parentKey) {
        setShowAddParagraphBtn(true);
      } else {
        setShowAddParagraphBtn(false);
      }
    }
  };

  const onSelect: TreeProps['onSelect'] = (keys, info) => {
    if (_.isArray(keys) && keys.length > 0) {
      setCurrentSelectedNodeKey(`${keys[0]}`);
      handleParagraphShow(`${keys[0]}`);
      setDisplayIframeURL(`${process.env.iframe_url}/dashboard/list/`);
    }
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };

  const { run: login } = useRequest(loginApi, {
    manual: true,
    onSuccess: (res) => {
      localStorage.setItem('token', res.access_token);
    },
  });

  const { run: exportWord } = useRequest(exportWordApi, {
    manual: true,
    onSuccess: (res) => {
      exportFile(res);
    },
  });

  const { run: exportWordTemp } = useRequest(exportWordTempApi, {
    manual: true,
    onSuccess: (res) => {
      exportFile(res);
    },
  });

  useEffect(() => {
    login({
      username: process.env.user_name ?? '',
      password: process.env.user_password ?? '',
      provider: 'db',
    });
  }, [login]);

  useUpdateEffect(() => {
    setTreeMap(flattenTree(treeData));
    if (treeData && treeData.length > 0) {
      if (!currentSelectedNodeKey) {
        setCurrentSelectedNodeKey(`${treeData[0].key}`);
      }
    }
  }, [treeData]);

  useUpdateEffect(() => {
    if (currentSelectedNodeKey) {
      setShowAddParagraphBtn(true);
      const nodeInfo = _.get(treeMap, currentSelectedNodeKey);
      if (nodeInfo && nodeInfo?.parentKey) {
        // 段落节点
        if (_.get(paragraphMap, `${nodeInfo.node.key}`)) {
          // 有绑定
          const dashboardID = _.get(paragraphMap, `${nodeInfo.node.key}`);

          setDisplayIframeURL(
            `${process.env.iframe_url}/dataq3/dashboard/` + dashboardID + '/',
          );

          setCurrentPageType(PageType.PARAGRAPH);
        } else {
          // 无绑定
          setDisplayIframeURL(undefined);
          setCurrentPageType(PageType.NONE);
        }
      } else if (nodeInfo) {
        if (_.get(chapterIdMap, `${nodeInfo.node.key}`)) {
          // 有绑定
          const dashboardID = _.get(chapterIdMap, `${nodeInfo.node.key}`);
          setDisplayIframeURL(
            `${process.env.iframe_url}/dataq3/dashboard/` + dashboardID + '/',
          );

          setCurrentPageType(PageType.CHAPTER);
        } else {
          // 章节节点
          setDisplayIframeURL(`${process.env.iframe_url}/dashboard/list/`);
          setCurrentPageType(PageType.CHAPTER);
        }
      }
    }
  }, [currentSelectedNodeKey]);

  const handleSelectClick = (record: Record<string, unknown>) => {
    setShowModal(false);
    const dashboardID = record.id;
    if (currentSelectedNodeKey) {
      _.set(paragraphMap, currentSelectedNodeKey, dashboardID);
      setParagraphMap(paragraphMap);
    }

    setDisplayIframeURL(
      `${process.env.iframe_url}/dataq3/dashboard/` + dashboardID + '/',
    );

    setCurrentPageType(PageType.PARAGRAPH);
  };

  const handleChapterSelectClick = (record: Record<string, unknown>) => {
    setShowModal(false);
    const dashboardID = record.id;
    if (currentSelectedNodeKey) {
      _.set(chapterIdMap, currentSelectedNodeKey, dashboardID);
    }

    setDisplayIframeURL(
      `${process.env.iframe_url}/dataq3/dashboard/` + dashboardID + '/',
    );

    setCurrentPageType(PageType.CHAPTER);
  };

  const handleRename = (key: string, newName: string) => {
    const node = _.get(treeMap, key);
    if (node) {
      node.node.title = newName;
      if (treeMap) {
        const newTreeData = mapToArray(treeMap);
        setTreeData(newTreeData);
      }
    }
  };

  const handleAddChild = (key: string) => {
    const node = _.get(treeMap, key)?.node;
    if (node) {
      const newKey = `${key}-${_.uniqueId(key)}`;
      const newNode: DataNode = {
        title: newNodeName,
        key: newKey,
      };
      if (treeMap) {
        _.set(treeMap, `${newNode.key}`, {
          node: newNode,
          parentKey: `${node.key}`,
        });
        const newTreeData = mapToArray(treeMap);
        setTreeData(newTreeData);
      }
      setCurrentSelectedNodeKey(newKey);
    }
    setNewNodeName(undefined);
  };

  const handleCreateNewCapter = () => {
    setShowCreatePop(false);
    if (newCapterName && newCapterName.length > 0) {
      setTreeData([
        ...treeData,
        {
          key: _.uniqueId(),
          title: newCapterName,
          children: [],
        },
      ]);
    }
    setNewCapterName(undefined);
  };

  const handleCreateNewNode = (key: string) => {
    if (newNodeName && newNodeName.length > 0) {
      handleAddChild(key);
    }
    setShowCreateNodePop(false);
  };

  const handleParagraphTitle = (
    node: TreeDataNode,
  ): ReactNode | ((data: DataNode) => ReactNode) => {
    if (_.get(treeMap, `${node.key}`)) {
      const nodeInfo = _.get(treeMap, `${node.key}`);
      if (nodeInfo?.parentKey && !_.get(paragraphMap, `${node.key}`)) {
        return (
          <span
            style={{
              fontSize: 10,
              top: 2,
              position: 'absolute',
              right: 0,
              color: 'red',
              textAlign: 'right',
            }}
          >{`(未配置)`}</span>
        );
      }
      return '';
    }
    return '';
  };

  const converParagraph = (
    treeData: TreeDataNode,
  ): IParagraph[] | undefined => {
    let paras: IParagraph[] | undefined = [];
    treeData.children?.forEach((para) => {
      if (_.get(paragraphMap, `${para.key}`)) {
        const paraInfo = _.get(treeMap, `${para.key}`);
        if (paras !== undefined) {
          paras!.push({
            paragraph_id: Number(paragraphMap[`${para.key}`]),
            paragraph_name: paraInfo?.title ?? '',
          });
        }
      } else {
        message.info('段落配置未完成');
        paras = undefined;
      }
    });

    return paras;
  };

  const converWordData = () => {
    const wordData: IChapter[] = [];
    treeData.forEach((item) => {
      const nodeInfo = _.get(treeMap, `${item.key}`);
      if (!nodeInfo?.parentKey) {
        const list = converParagraph(item);
        if (!list) return;
        wordData.push({
          chapter: nodeInfo?.title ?? '',
          key: `${nodeInfo?.node.key}`,
          chapter_id: ` ${_.get(chapterIdMap, `${nodeInfo?.node.key}`) ?? ''}`,
          paragraph_list: list,
        });
      }
    });
    return wordData;
  };

  const handleExportWord = () => {
    exportWord(converWordData());
  };

  const handleExportWordTemp = () => {
    exportWordTemp(converWordData());
  };

  return (
    <>
      <PageContainer
        title="报告配置"
        extra={
          showAddParagraphBtn && [
            <Button
              key="add_dashboard"
              onClick={() => setShowModal(true)}
              type="primary"
            >
              加载段落模块
            </Button>,
          ]
        }
      >
        <div
          style={{
            display: 'flex',
            height: '94vh',
            backgroundColor: '#fff',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '240px',
              paddingRight: 20,
              borderRight: '1px solid #f0f0f0',
            }}
          >
            <Popover
              placement="bottom"
              content={() => {
                return (
                  <Input
                    suffix={<EnterOutlined />}
                    onPressEnter={handleCreateNewCapter}
                    size="small"
                    value={newCapterName}
                    onChange={(e) =>
                      setNewCapterName(e.target.value as unknown as string)
                    }
                  />
                );
              }}
              title="章节名称"
              trigger="click"
              open={showCreatePop}
              onOpenChange={(newOpen) => {
                setShowCreatePop(newOpen);
              }}
            >
              <Button
                type="link"
                style={{
                  color: '#1fa7c9',
                  width: '100%',
                  marginBottom: 20,
                  marginTop: 20,
                  marginLeft: 10,
                  textAlign: 'left',
                }}
              >
                <PlusOutlined size={12} color="#1fa7c9" />
                {'新 增 章 节'}
              </Button>
            </Popover>
            <Tree
              expandedKeys={[currentSelectedNodeKey ?? '']}
              autoExpandParent
              defaultExpandAll
              selectedKeys={[currentSelectedNodeKey ?? '']}
              defaultSelectedKeys={[currentSelectedNodeKey ?? '']}
              rootStyle={{
                padding: 0,
              }}
              blockNode
              titleRender={(node: TreeDataNode) => {
                return (
                  <div
                    style={{
                      width: '100%',
                      position: 'relative',
                      textAlign: 'left',
                      display: 'inline-flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        position: 'relative',
                        justifyContent: 'end',
                        alignItems: 'baseline',
                        height: 30,
                      }}
                    >
                      <Paragraph
                        style={{
                          display: 'inline-flex',
                        }}
                        ellipsis
                        editable={{
                          tooltip: 'click to edit text',
                          onChange: (value) => {
                            handleRename(`${node.key}`, value);
                          },
                          triggerType: ['text'],
                        }}
                      >
                        {node.title as ReactNode}
                      </Paragraph>
                      {handleParagraphTitle(node) as ReactNode}
                    </div>
                    <div style={{ textAlign: 'right', width: 40, height: 30 }}>
                      <Popconfirm
                        placement="bottom"
                        style={{ width: 600 }}
                        title="确定删除吗?"
                        onConfirm={(e) => {
                          if (e) {
                            e.stopPropagation();
                          }
                          if (treeMap && _.unset(treeMap, `${node.key}`)) {
                            const newTreeData = mapToArray(treeMap);
                            setTreeData(newTreeData);
                          }
                        }}
                        onCancel={() => {}}
                        okText="确定"
                        cancelText="取消"
                      >
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          icon={
                            <DeleteOutlined
                              style={{ marginTop: -5, width: 12, height: 12 }}
                            />
                          }
                          style={{ width: '20px' }}
                          type="text"
                        ></Button>
                      </Popconfirm>
                      {!_.get(treeMap, `${node.key}`)?.parentKey && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            // setCurrentSelectedNodeKey(`${node.key}`);
                            setCurrentCreateNodeKey(`${node.key}`);
                            setShowCreateNodePop(true);
                          }}
                          icon={
                            <PlusOutlined
                              style={{ padding: 0, width: 14, height: 14 }}
                            />
                          }
                          style={{ width: '20px' }}
                          type="text"
                        ></Button>
                      )}
                    </div>
                  </div>
                );
              }}
              style={{ width: '100%', backgroundColor: '#fff' }}
              onSelect={onSelect}
              onExpand={onExpand}
              treeData={treeData}
            />
            <Button
              style={{ position: 'absolute', bottom: 10, left: 10 }}
              type="default"
              onClick={() => {
                handleExportWord();
              }}
            >
              导出Word
            </Button>
            <Button
              onClick={() => {
                handleExportWordTemp();
              }}
              style={{ position: 'absolute', bottom: 10, left: 130 }}
              type="default"
            >
              导出到模板
            </Button>
          </div>
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            {currentPageType === PageType.CHAPTER && (
              <iframe
                style={{ border: 'none' }}
                src={displayIframeUrl}
                title="章节列表"
                width="100%"
                height="100%"
              ></iframe>
            )}
            {currentPageType === PageType.PARAGRAPH && (
              <iframe
                style={{ border: 'none' }}
                src={displayIframeUrl}
                title="段落配置"
                width="100%"
                height="100%"
              ></iframe>
            )}
            {currentPageType === PageType.NONE && (
              <Button
                onClick={() => {
                  setCurrentPageType(PageType.NEW);
                }}
                type="primary"
              >
                新建段落看板
              </Button>
            )}
            {currentPageType === PageType.NEW && (
              <MutationIframe
                initialUrl={`${process.env.iframe_url}/dashboard/new/`}
                onUrlChange={(newUrl) => {
                  if (newUrl) {
                    const match = newUrl.match(/\/dashboard\/(\d+)\/?/);
                    if (match && match[1]) {
                      const dynamicValue = parseInt(match[1]);
                      if (currentSelectedNodeKey) {
                        _.set(
                          paragraphMap,
                          currentSelectedNodeKey,
                          dynamicValue,
                        );
                        setParagraphMap(paragraphMap);

                        setDisplayIframeURL(
                          `${process.env.iframe_url}/dataq3/dashboard/` +
                            dynamicValue +
                            '/',
                        );

                        setCurrentPageType(PageType.PARAGRAPH);
                      }
                    } else {
                      console.log(
                        'Unable to extract dynamic value from URL:',
                        newUrl,
                      );
                    }
                  } else {
                    console.log(
                      'iframeRef.current.contentWindow?.location.href is undefined',
                    );
                  }
                }}
              />
            )}
          </div>
        </div>
      </PageContainer>
      <Modal
        title="选择段落"
        width={1200}
        closable={true}
        onCancel={() => setShowModal(false)}
        open={showModal}
      >
        <SelectModal
          handleSelectClick={(record) => {
            // 判断当前节点是段落还是章节
            const node = _.get(treeMap, `${currentSelectedNodeKey}`);
            if (node) {
              if (node.parentKey) {
                handleSelectClick(record);
              } else {
                handleChapterSelectClick(record);
              }
            }
          }}
        />
      </Modal>
      <Modal
        title="新增段落"
        width={500}
        closable={true}
        open={showCreateNodePop}
        onOk={() => {
          handleCreateNewNode(currentCreateNodeKey ?? '');
        }}
        onCancel={() => setShowCreateNodePop(false)}
      >
        <Input
          suffix={<EnterOutlined />}
          value={newNodeName}
          onChange={(e) => setNewNodeName(e.target.value as unknown as string)}
        />
      </Modal>

      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 94, bottom: 40 }}
        onClick={() => {
          setShowChatView(true);
        }}
        icon={<CustomerServiceOutlined />}
      />

      <div
        className="shadowed-div "
        hidden={!showChatView}
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          right: 20,
          bottom: 80,
          width: '35%',
          height: '80%',
          border: '1px solid #f1f1f1',
          borderRadius: 15,
          backgroundColor: '#fff',
          zIndex: 999,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {' '}
            {'智能助手'}{' '}
          </span>
          <Button
            type="text"
            onClick={() => {
              setShowChatView(false);
            }}
            icon={<CloseOutlined />}
          ></Button>
        </div>
        <div style={{ flex: 1 }}>
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Report;
