import { message } from "antd";


export const exportFile = (res: BlobPart) => {
  
  try {
    // 创建 Blob 对
   const blob = new Blob([res]);
   // 创建 URL
   const url = window.URL.createObjectURL(blob);
   // 创建下载链接
   const a = document.createElement('a');
   a.href = url;
   a.download = 'document.docx'; // 设置下载文件的名称
   // 触发下载
   document.body.appendChild(a);
   a.click();
   // 清理
   document.body.removeChild(a);
   window.URL.revokeObjectURL(url);
   message.success('导出成功');

  } catch (error) {
    message.error('导出失败')
  }
  
  
}