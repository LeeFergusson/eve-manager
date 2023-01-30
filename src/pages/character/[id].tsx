import type { NextPage } from "next";
import { useRouter } from "next/router";
import CharacterDetails from "../../components/ui/CharacterDetails";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <article>
      <h2>Character Details</h2>
      <div className="grid grid-cols-2 gap-2">
        <CharacterDetails name="Test" />
        <p>{id}</p>
      </div>
    </article>
  );
};

export default CharacterPage;
