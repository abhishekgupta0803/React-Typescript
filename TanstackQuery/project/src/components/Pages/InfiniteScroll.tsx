import { fetchUsers } from "../../api";
import { useInfiniteQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
};

const InfiniteScroll = () => {
  const { data } = useInfiniteQuery<User[], Error>({
    queryKey: ["users"],

    // initialPageParam: 1,

    queryFn: fetchUsers,

    getNextPageParam: (lastPage, allPages) => {
      console.log("last page:", allPages);
      return  lastPage.length === 10 ? allPages.length + 1 : undefined;

    },
  });

  console.log(data);

  return <div>InfiniteScroll</div>;
};

export default InfiniteScroll;