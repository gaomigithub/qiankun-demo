const Chapter: React.FC = () => {
  console.log(process.env.iframe_url);
  return (
    <>
      <div style={{ width: '100%', height: '94vh' }}>
        <iframe
          style={{ border: 'none' }}
          src={`${process.env.iframe_url}/dashboard/list/`}
          title="章节配置"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default Chapter;
