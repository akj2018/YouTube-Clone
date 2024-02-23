import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="card-skeleton grid grid-cols-12 grid-rows-6 bg-neutral-950 w-96 h-80">
      <div className="col-span-12 row-span-4 mb-1  ">
        <Skeleton className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="col-span-2 row-span-2 my-1 flex justify-center items-start">
        <Skeleton circle width={"2.5rem"} height={"2.5rem"} />
      </div>
      <div className="col-span-10 row-span-2 pr-3 pt-2">
        <Skeleton count={2} className="mb-3" />
        <Skeleton width={"50%"} />
      </div>
    </div>
  );
};

export default SkeletonCard;
