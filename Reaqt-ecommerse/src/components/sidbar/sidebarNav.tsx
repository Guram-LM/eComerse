import { NavLink } from "react-router-dom";


interface sidbarNav {
  url: string;
  name: string;
}

const SidebarNav = () => {
  const nav: sidbarNav[] = [
    { name: "smartphones", url: "/category/smartphones" },
    { name: "laptops", url: "/category/laptops" },
    { name: "furniture", url: "/category/furniture" },
    { name: "groceries", url: "/category/groceries" },
    { name: "home-decoration", url: "/category/home-decoration" },
    { name: "tops", url: "/category/tops" },
    { name: "dresses", url: "/category/dresses" },
    { name: "womens-dresses", url: "/category/womens-dresses" },
    { name: "womens-shoes", url: "/category/womens-shoes" },
    { name: "mens-shirts", url: "/category/mens-shirts" },
    { name: "mens-shoes", url: "/category/mens-shoes" },
    { name: "mens-watches", url: "/category/mens-watches" },
    { name: "womens-watches", url: "/category/womens-watches" },
    { name: "womens-bags", url: "/category/womens-bags" },
    { name: "womens-jewellery", url: "/category/womens-jewellery" },
    { name: "sunglasses", url: "/category/sunglasses" },
    { name: "automotive", url: "/category/automotive" },
    { name: "motorcycle", url: "/category/motorcycle" },
    { name: "lighting", url: "/category/lighting" },
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
