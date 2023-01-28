import { useSession, signIn, signOut } from "next-auth/react";

const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="flex">
      <h1 className="text-3xl">EVE Base</h1>
      <div className="flex flex-grow items-center justify-between p-2">
        <nav>
          <h2 className="hidden">Main Navigation</h2>
          <ul className="flex gap-1">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </nav>
        <nav>
          <h2 className="hidden">User Navigation</h2>
          <ul>
            {sessionData?.user ? (
              <button onClick={() => void signOut()}>
                <li>Sign-Out</li>
              </button>
            ) : (
              <li>
                <button onClick={() => void signIn()}>Sign-In</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
