const BackgroundScene = () => {
  return (
    <div className="background">
      <video src={'/videos/header-bg.mp4'} autoPlay muted loop />
    </div>
  );
};

export default BackgroundScene;
