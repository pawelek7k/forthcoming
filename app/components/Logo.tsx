import { IoIosMoon } from "react-icons/io";
import { LinkComponent as Link } from "./Link";

export const Logo = () => (
  <Link to="/home">
    <div className="flex items-center font-semibold">
      <span>Forth</span>
      <IoIosMoon />
      <span>oming</span>
    </div>
  </Link>
);
