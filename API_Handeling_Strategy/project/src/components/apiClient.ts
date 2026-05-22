export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

export const apiClient = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) { 
      throw new ApiError(
        `Request failed with status ${res.status}`,
        res.status
      );
    }

    return await res.json();
  } catch (error: any) {
    if (error.name === "TypeError") {
      throw new ApiError("Network Error: Check your internet");
    }

    throw error;
  }
};