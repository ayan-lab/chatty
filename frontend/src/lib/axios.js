
const fetchInstance = async (url, options = {}) => {
  const baseUrl = "https://chatty-backend-1i8b.onrender.com/api"

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || "Something went wrong");
  }

  return await response.json();
};
export default fetchInstance;
