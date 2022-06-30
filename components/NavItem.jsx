import Link from "next/link";

const NavItem = ({ link, title }) => {
  if (!title) title = link;
  return (
    <Link href={link}>
      <a>{title}</a>
    </Link>
  );
};

export default NavItem;
