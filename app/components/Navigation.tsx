import { LinkComponent as Link } from "./Link";
import { Logo } from "./Logo";

type LinkType = {
  label: string;
  path: string;
}[];

export const Navigation = () => {
  const links: LinkType = [
    { label: "Home", path: "/" },
    { label: "Create", path: "/myworks/create" },
    { label: "Library", path: "/library" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <header className="flex justify-between p-4 w-full fixed z-40 backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-rose-950 shadow-lg">
      <nav className="flex justify-evenly">
        <Logo />
        <ul className="flex gap-4">
          {links.map(({ label, path }) => (
            <li key={label}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
