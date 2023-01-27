import type { NextPage } from "next";
import { useRouter } from "next/router";

const CorporationPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <section>{id}</section>;
};

export default CorporationPage;
