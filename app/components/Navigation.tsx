import { LinkComponent as Link } from "./Link";

type LinksType = {
  label: string;
  path: string;
}[];

export const Navigation = () => {
  const links: LinksType = [
    { label: "Home", path: "/" },
    { label: "Create", path: "/myworks/create" },
    { label: "Library", path: "/library" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <header className="flex justify-between p-4 w-full fixed z-40 backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-rose-950 shadow-lg">
      <nav>
        <ul className="flex space-x-4">
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
