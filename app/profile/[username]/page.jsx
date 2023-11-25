"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const { data: session } = useSession();
  const { username } = params;
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/users/profile/${username}`);
      const _data = await response.json();
      setData(_data?.prompts || []);
      setUser(_data?.user || null);
    };

    if (username + "@gmail.com" == session?.user.email) router.push("/profile");
    else if (username) fetchData();
    else {
      router.push("/");
    }
  }, []);

  return (
    <Profile
      name={user?.name}
      desc={`Welcome to ${user?.name} personalized profile page`}
      data={data}
    />
  );
};

export default UserProfile;
