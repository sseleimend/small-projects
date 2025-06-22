import { useParams } from "react-router";

export default function User() {
  const { id } = useParams();

  return (
    <div className="bg-orange-500 text-black text-3xl p-5 text-center">
      User {id}
    </div>
  );
}
