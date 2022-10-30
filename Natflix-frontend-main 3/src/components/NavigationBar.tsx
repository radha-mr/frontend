// Node modules
import { Link } from "react-router-dom";
import Search from "./Search";

// Project files
import Logo from "assets/images/logo.svg";
import CustomerLinks from "data/links-customer.json";

export default function NavigationBar() {
  // Components
  const Links = CustomerLinks.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));

  return (
    <nav className="navigation-bar">
      <Link to={CustomerLinks[0].url}>
        <img src={Logo} />
      </Link>
      <div>{Links}</div>
      <div className="left-items">
        {/* Search bar goes here... */}
        <Search/></div>
    </nav>
  );
}
