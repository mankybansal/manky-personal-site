import { useEffect } from "react";
import { useRouter } from "next/router";

const Meet = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("https://calend.ly/mankybansal");
  }, [router]);

  return undefined;
};

export default Meet;
