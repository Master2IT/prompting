"use client";

import Form from "@components/Form";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const UpdatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptID = searchParams.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    prompt: "",
    tags: [],
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptID}`);
      const _data = await response.json();

      setData({
        prompt: _data.prompt,
        tags: _data.tags,
      });
    };

    if (promptID) getPromptDetails();
  }, [promptID]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptID) {
      return alert("Prompt ID not found!");
    }

    if (!data.prompt || !data.tags.length) {
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/prompt/${promptID}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: data.prompt,
          tags: data.tags,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Update"
      data={data}
      setData={setData}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
