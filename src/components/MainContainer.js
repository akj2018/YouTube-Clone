import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-[85%] grow overflow-x-auto h-[calc(100vh-4.3rem)]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
