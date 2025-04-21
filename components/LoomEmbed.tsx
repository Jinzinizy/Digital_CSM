export default function LoomEmbed() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '75vw',
          height: '75vh',
          transform: 'translateY(-10%)',
        }}
      >
        <iframe
          src="https://www.loom.com/embed/45e7b015aeae4848b10e98d4ca968124?sid=36a5be4f-9269-4443-9ce1-0ddaebce95c3&autoplay=1"
          frameBorder="0"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        ></iframe>
      </div>
    </div>
  );
}
