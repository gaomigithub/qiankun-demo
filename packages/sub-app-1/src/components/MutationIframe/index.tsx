import React, { useEffect, useRef } from 'react';

interface MutationIframeProps {
  initialUrl: string;
  onUrlChange?: (newUrl: string) => void;
}

const MutationIframe: React.FC<MutationIframeProps> = ({ initialUrl, onUrlChange }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      try {
        if (iframeRef.current) {
          // 从 http://localhost:8008/dataq3/dashboard/8/?edit=true 提取 出 8 
          if (iframeRef.current.contentWindow?.location.href) {
            onUrlChange &&   onUrlChange(iframeRef.current.contentWindow?.location.href);
          } 
          console.log("iframeRef.current:", iframeRef.current.contentWindow?.location.href)
          
        }
      } catch (error) {
        onUrlChange && onUrlChange("http://localhost:8088/dataq3/dashboard/11/?edit=true ")
        console.error('Error in handleLoad:', error);
      }
    };
  
    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleLoad);
    }
  
    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, [iframeRef, onUrlChange]);

  return (
    <iframe
      style={{ border: 'none' }}
      ref={iframeRef}
      src={initialUrl}
      title="段落配置"
      width="100%"
      height="100%"
    />
  );
};

export default MutationIframe;