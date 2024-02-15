import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-[85%] grow overflow-x-auto h-[89vh]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
