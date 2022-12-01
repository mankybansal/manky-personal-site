import { useEffect } from "react";
import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resume/Mayank_Bansal_Resume.pdf");
  }, [router]);

  return undefined;
};

export default Resume;
