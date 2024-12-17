import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  const loopOnehundred = () => {
    // u can also loop based on the datas length
    const items = [];
    for (let index = 0; index < 100; index++) {
      items.push(
        <Skeleton key={index} className="h-[250px] w-full rounded-xl" />
      );
    }
    return items;
  };

  return <>{loopOnehundred()}</>;
};

export default SkeletonCard;
