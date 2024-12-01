import { LinkComponent as Link } from "./Link";
import { Logo } from "./Logo";

type LinkType = {
  label: string;
  path: string;
}[];

export const Navigation = () => {
  const links: LinkType = [
    { label: "Home", path: "/home" },
    { label: "Create", path: "/myworks/create" },
    { label: "Library", path: "/library" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <header className="flex justify-around w-full fixed z-40 backdrop-blur-md rounded-b-lg top-0 items-center shadow-lg pl-12 gap-12">
      <Logo />
      <div className="bg-zinc-950 rounded-l-full border border-rose-950 text-zinc-100 p-4 pl-12 w-full">
        <nav className="flex items-center">
          <ul className="flex gap-4">
            {links.map(({ label, path }) => (
              <li key={label}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* hamburger */}
      </div>
    </header>
  );
};
