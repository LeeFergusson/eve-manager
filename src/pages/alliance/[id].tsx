import type { NextPage } from "next";
import { useRouter } from "next/router";

const AlliancePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <section>{id}</section>;
};

export default AlliancePage;
