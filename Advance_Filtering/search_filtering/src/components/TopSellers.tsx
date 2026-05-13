import { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {
  const [author, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=5"
        );
        const data = await response.json();

        const authorData: Author[] = data.results.map(
          (user: any) => ({
            name: `${user.name.first} ${user.name.last}`,
            isFollowing: false,
            image: user.picture.medium,
          })
        );

        setAuthors(authorData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handelFollowClick = (index: number) => {
    setAuthors((prev) =>
      prev.map((author, i) =>
        i === index
          ? { ...author, isFollowing: !author.isFollowing }
          : author
      )
    );
  };

  return (
    <div className=" card bg-white p-5 mt-19 border rounded w-full mr-15  mr-15">
      <h2 className="text-xl font-bold mb-5">
        Top Sellers
      </h2>

      <ul>
        {author.map((author, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-5"
          >
            <div className="flex items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-12 h-12 rounded-full"
              />

              <span className="ml-10">
                {author.name}
              </span>
            </div>

            <button
              onClick={() =>
                handelFollowClick(index)
              }
              className={`px-3 py-1 rounded text-white ${
                author.isFollowing
                  ? "bg-red-500"
                  : "bg-black"
              }`}
            >
              {author.isFollowing
                ? "Unfollow"
                : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;