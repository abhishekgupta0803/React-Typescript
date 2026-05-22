export type Post = {
  id: number;
  title: string;
  likes: number;
};

// fake delay + failure simulation
export const likePostAPI = async (id: number) => {
  await new Promise((res) => setTimeout(res, 800));

  // 20% chance of failure
  if (Math.random() < 0.2) {
    throw new Error("Server error");
  }

  return { success: true };
};