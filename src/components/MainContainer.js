import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grow overflow-x-auto h-[calc(100vh-4.3rem)] bg-[#080808] pr-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
