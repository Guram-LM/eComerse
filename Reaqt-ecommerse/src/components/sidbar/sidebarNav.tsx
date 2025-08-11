import { NavLink } from "react-router-dom";


interface sidbarNav {
  url: string;
  name: string;
}

const SidebarNav = () => {
  const nav: sidbarNav[] = [
    { name: "smartphones", url: "/smartphones" },
    { name: "laptops", url: "/category/laptops" },
    { name: "skincare", url: "/skincare" },
    { name: "furniture", url: "/furniture" },
    { name: "groceries", url: "/groceries" },
    { name: "home-decoration", url: "/home-decoration" },
    { name: "tops", url: "/tops" },
    { name: "dresses", url: "/dresses" },
    { name: "womens-dresses", url: "/womens-dresses" },
    { name: "womens-shoes", url: "/womens-shoes" },
    { name: "mens-shirts", url: "/mens-shirts" },
    { name: "mens-shoes", url: "/mens-shoes" },
    { name: "mens-watches", url: "/mens-watches" },
    { name: "womens-watches", url: "/womens-watches" },
    { name: "womens-bags", url: "/womens-bags" },
    { name: "womens-jewellery", url: "/womens-jewellery" },
    { name: "sunglasses", url: "/sunglasses" },
    { name: "automotive", url: "/automotive" },
    { name: "motorcycle", url: "/motorcycle" },
    { name: "lighting", url: "/lighting" },
    { name: "Go Back", url: "/" }
  ];

  return (
    <nav className="sidebar-nav">
      {nav.map((el) => (
        <NavLink
          key={el.url}
          to={el.url}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {el.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarNav;
