import { useLoaderData } from "react-router";

export default function GitHub() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Followers: {data.followers}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sseleimend");
  return response.json();
};
