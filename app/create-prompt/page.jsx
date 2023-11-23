"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    prompt: "",
    tags: [],
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!data.prompt || !data.tags.length) {
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
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
      type="Create"
      data={data}
      setData={setData}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
