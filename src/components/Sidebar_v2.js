import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { PiUserSquareThin } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { TbHexagon3D } from "react-icons/tb";
import { PiTelevisionFill } from "react-icons/pi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import { PiMusicNote } from "react-icons/pi";
import { PiFilmSlateThin } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { HiNewspaper } from "react-icons/hi2";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbBold } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { SiPodcastindex } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import SidebarBtn from "./SidebarBtn";

const SidebarV2 = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  const toggleSidebarhandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    isSidebarOpen && (
      <div className="sidebar w-[15%] bg-black text-white px-4 pr-12 top-0 absolute z-20 overflow-y-auto max-h-full">
        <div className="flex items-center h-[3.9rem] py-2 px-2 mb-4">
          <RxHamburgerMenu
            onClick={toggleSidebarhandler}
            className="h-8 mr-4 cursor-pointer text-white"
            size={"1.5rem"}
          />
          <img
            className="h-[1.4rem] ml-4"
            alt="youtube-icon"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png"
          />
        </div>

        <div className="border-b-zinc-600 border-b ">
          <ul className="flex flex-col mb-3">
            <SidebarBtn text="Home" icon={<IoHomeSharp size={"1.5rem"} />} />
            <SidebarBtn
              text="Shorts"
              icon={<SiYoutubeshorts size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Subscriptions"
              icon={<MdOutlineSubscriptions size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Youtube Music"
              icon={<SiYoutubemusic size={"1.5rem"} />}
            />
          </ul>
        </div>

        <div className="border-b-zinc-600 border-b py-2">
          <ul className="flex flex-col my-2">
            <li className="py-2 px-4 mb-1  rounded-lg cursor-pointer flex items-center hover:bg-zinc-800">
              <div className="w-[25%] justify-self-start">
                <span className="text-lg font-bold leading-none ">You</span>
              </div>
              <div className="w-[75%]">
                <IoIosArrowForward className="text-lg font-bold" />
              </div>
            </li>
            <SidebarBtn
              text="Your Channel"
              icon={<PiUserSquareThin size={"1.5rem"} />}
            />
            <SidebarBtn text="History" icon={<GoHistory size={"1.5rem"} />} />
            <SidebarBtn
              text="Your Videos"
              icon={<AiOutlinePlaySquare size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Watch Later"
              icon={<MdOutlineWatchLater size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Show More"
              icon={<IoIosArrowDown size={"1.5rem"} />}
            />
          </ul>
        </div>

        <div className="border-b-zinc-600 border-b py-2">
          <ul className="flex flex-col my-2">
            <li className="py-2 px-4 mb-1  flex items-center">
              <span className="text-lg font-bold">More From Youtube</span>
            </li>
            <SidebarBtn
              text="Youtube Premium"
              icon={<BsYoutube size={"1.5rem"} className="text-red-600" />}
            />
            <SidebarBtn
              text="Youtube Studio"
              icon={<TbHexagon3D size={"1.5rem"} className="text-red-600" />}
            />
            <SidebarBtn
              text="Youtube TV"
              icon={
                <PiTelevisionFill size={"1.5rem"} className="text-red-600" />
              }
            />
            <SidebarBtn
              text="Youtube Music"
              icon={<SiYoutubemusic size={"1.5rem"} className="text-red-600" />}
            />
            <SidebarBtn
              text="Youtube Kids"
              icon={
                <TbBrandYoutubeKids size={"1.5rem"} className="text-red-600" />
              }
            />
          </ul>
        </div>

        <div className="border-b-zinc-600 border-b py-2">
          <ul className="flex flex-col my-2">
            <li className="py-2 px-4 mb-1  flex items-center">
              <span className="text-lg font-bold">Explore</span>
            </li>
            <SidebarBtn text="Trending" icon={<BsFire size={"1.5rem"} />} />
            <SidebarBtn
              text="Shopping"
              icon={<RiShoppingBagFill size={"1.5rem"} />}
            />
            <SidebarBtn text="Music" icon={<PiMusicNote size={"1.5rem"} />} />
            <SidebarBtn
              text="Movies & TV"
              icon={<PiFilmSlateThin size={"1.5rem"} />}
            />
            <SidebarBtn text="Live" icon={<SiPodcastindex size={"1.5rem"} />} />
            <SidebarBtn
              text="Gaming"
              icon={<SiYoutubegaming size={"1.5rem"} />}
            />
            <SidebarBtn text="News" icon={<HiNewspaper size={"1.5rem"} />} />
            <SidebarBtn text="Sports" icon={<TfiCup size={"1.5rem"} />} />
            <SidebarBtn
              text="Learning"
              icon={<PiLightbulbBold size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Fashion & beauty"
              icon={<GiHanger size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Podcast"
              icon={<MdOutlinePodcasts size={"1.5rem"} />}
            />
          </ul>
        </div>

        <div className="border-b-zinc-600 border-b py-2">
          <ul className="flex flex-col my-2">
            <SidebarBtn
              text="Settings"
              icon={<MdOutlineSettings size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Report history"
              icon={<FaRegFlag size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Help"
              icon={<IoMdHelpCircleOutline size={"1.5rem"} />}
            />
            <SidebarBtn
              text="Send Feedback"
              icon={<MdOutlineFeedback size={"1.5rem"} />}
            />
          </ul>
        </div>

        <div className="border-b-zinc-600 border-b py-2 pl-3">
          <ul className="flex flex-col my-2">
            <div className="text-neutral-400 text-sm font-semibold flex gap-x-2 flex-wrap">
              <span className="cursor-pointer">About</span>
              <span className="cursor-pointer">Press</span>
              <span className="cursor-pointer">Copyright</span>
              <span className="cursor-pointer">Contact us</span>
              <span className="cursor-pointer">Creator</span>
              <span className="cursor-pointer">Advertise</span>
              <span className="cursor-pointer">Developers</span>
            </div>
            <div className="mt-3 text-neutral-400 text-sm font-semibold flex gap-x-2 flex-wrap">
              <span className="cursor-pointer">Terms</span>
              <span className="cursor-pointer">Privacy</span>
              <span className="cursor-pointer">Policy & Safety </span>
              <span className="cursor-pointer">How YouTube works</span>
              <span className="cursor-pointer">Test new features</span>
              <span className="cursor-pointer"> NFL Sunday Ticket</span>
            </div>
            <div className="my-4 text-neutral-500 text-xs font-semibold">
              <span className="cursor-pointer">Made By Akshay Jain</span>
            </div>
          </ul>
        </div>
      </div>
    )
  );
};

export default SidebarV2;
