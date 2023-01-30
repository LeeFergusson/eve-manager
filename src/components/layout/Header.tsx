import { useSession, signIn, signOut } from "next-auth/react";
import type { ReactElement } from "react";

const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      <div className="flex items-center">
        <h1 className="m-3 text-3xl font-semibold">EVE Base</h1>
        <div className="m-3 flex flex-grow items-baseline justify-between">
          <nav>
            <h2 className="hidden">Main Navigation</h2>
            <ul className="flex gap-1"></ul>
          </nav>
          <nav>
            <h2 className="hidden">User Navigation</h2>
            <ul>
              {sessionData?.user ? (
                <li>
                  <MenuButton onClick={() => void signOut()}>
                    Sign-Out
                  </MenuButton>
                </li>
              ) : (
                <li>
                  <MenuButton onClick={() => void signIn()}>Sign-In</MenuButton>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

interface MenuButtonProps {
  children?: ReactElement | ReactElement[] | string;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <button
      className="font-header border-b-2 border-gray-500 p-1 hover:border-gray-800"
      onClick={() => props.onClick()}
    >
      {props.children && props.children}
    </button>
  );
};

export default Header;
