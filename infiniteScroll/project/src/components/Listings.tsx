import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsers } from "../services/api";
import type { Users } from "../types/users";
import React, { useEffect } from "react";

export const Listings = () => {
  const infiniteScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;

    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  const { data, hasNextPage, fetchNextPage  } = useInfiniteQuery<Users[]>({
    queryKey: ["users"],
    queryFn: getUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  },[hasNextPage]);

  


  return (
<div>
  <ul>
  {data?.pages.map((page:any, pageIndex) => (
    <React.Fragment key={pageIndex}>
      {page.map((user: Users) => (
        <li key={user.id}>
          <img src={user.avatar_url} alt={`User ${user.id}`} width={50} />
          <p>{user.id}</p>
        </li>
      ))}
    </React.Fragment>
  ))}
</ul>
 {/* {!isLoading && (
      <h3 style={{ textAlign: "center", padding: "20px" }}>
        Loading more users...
      </h3>
    )} */}
</div>
  );
};
