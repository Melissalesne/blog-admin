import React from "react";
import { Link } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div>
      <Link className="nav-link p-2" to="/login" title="connexion">
        <RiLoginCircleLine className="text-secondary" size={"2rem"} />
      </Link>
    </div>
  );
}
