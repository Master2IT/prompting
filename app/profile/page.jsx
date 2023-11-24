"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`);
      setData(await response.json());
    };

    if (session?.user.id) fetchData();
    // else {
    //   router.push("/");
    // }
  }, []);

  const handleEdit = (id) => {
    router.push(`/update-prompt?id=${id}`);
  };
  const handleDelete = async (id) => {
    const hasConfirm = confirm("Are you sure you want to delete this prompt?");

    if (hasConfirm) {
      try {
        await fetch(`/api/prompt/${id.toString()}`, {
          method: "DELETE",
        });

        const filteredPrompts = data.filter((d) => d._id !== id);
        setData(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={data}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
