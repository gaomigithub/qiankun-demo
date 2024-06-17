import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DocumentEditor } from "@onlyoffice/document-editor-react";
import { IDocumentResult } from '@/types/document';
import { Button, Modal } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import './index.css'


const OfficeDocument: React.FC<IDocumentResult & { id: string }> = (props) => {

  const { id, document_server_uri } = props;
  const onDocumentReady = () => {
    console.log("Document is loaded");
  };

  const onLoadComponentError = (errorCode: any, errorDescription: any) => {
    switch (errorCode) {
      case -1: // Unknown error loading component
        console.log(errorDescription);
        break;

      case -2: // Error load DocsAPI from http://documentserver/
        console.log(errorDescription);
        break;

      case -3: // DocsAPI is not defined
        console.log(errorDescription);
        break;
    }
  };

  const DocumentCom = useMemo(() => {
    return <DocumentEditor
      id={id ?? "docxEditor"}
      documentServerUrl={document_server_uri}
      config={JSON.parse(JSON.stringify(props))}
      events_onDocumentReady={onDocumentReady}
      onLoadComponentError={onLoadComponentError}
    />
  }, [props])

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: "relative",
        }}
      >
        {
          props && DocumentCom
        }
      </div>

    </>
  );
}

export default OfficeDocument;

