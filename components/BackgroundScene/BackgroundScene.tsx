const BackgroundScene = () => {
  return (
    <div className="background" data-scroll>
      <video
        src={'/videos/header-bg.mp4'}
        className="background__video"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default BackgroundScene;
