import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/user.png";
import { Link } from "react-router-dom";


interface userType {
  userIsValid: boolean;
}

const UserMenu: React.FC<userType> = ({ userIsValid }) => {
  const [togly, settogly] = useState<boolean>(false);

  const isvalid = () => {
    settogly((prev) => !prev);
  };

  // click outside to close + ESC to close
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (togly && !menuRef.current.contains(e.target as Node)) {
        settogly(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") settogly(false);
    }
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocumentClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [togly]);

  return (
    <div className="user-menu" ref={menuRef}>
      <img
        onClick={isvalid}
        src={img}
        alt="user avatar"
        className="user-avatar"
        aria-haspopup="true"
        aria-expanded={togly}
      />

      {togly && (
        <div className="user-dropdown" role="menu" aria-hidden={!togly}>
          {userIsValid ? (
            <div className="menu-list">
              <Link to={"/profile"} className="menu-item" role="menuitem">
                Profile
              </Link>
              <button className="menu-item danger" role="menuitem">
                Log out
              </button>
            </div>
          ) : (
            <div className="menu-list">
              <Link to={"/register"} className="menu-item" role="menuitem">
                Registration
              </Link>
              <Link to={"/Vaidatsion"} className="menu-item" role="menuitem">
                Log in
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
