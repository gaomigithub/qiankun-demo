const Chart: React.FC = () => {
  console.log(process.env.iframe_url);
  return (
    <>
      <div style={{ width: '100%', height: '94vh' }}>
        {/* <MicroApp name="chart" base="/prefix/router-path" /> */}
        <iframe
          style={{ border: 'none' }}
          src={`${process.env.iframe_url}/chart/list/`}
          title="图表配置"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default Chart;
