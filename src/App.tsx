import "./App.css";
import NavBar from "./components/nav-bar";
import { NavBarNestedListItemProps } from "./components/nav-bar-nested-list-item/interface/nav-bar-nested-list-item-interface";
import { NavBarProps } from "./components/nav-bar/interface/nav-bar-interface";
import { HiCurrencyDollar, HiCog } from "react-icons/hi";

function App() {
  const getNavBarProps = () => {
    return {
      title:'Life Manager',
      items: [
        {
          primaryText: "Financeiro",
          primaryIcon: <HiCurrencyDollar color='white' />,
          items: [
            { itemText: "Categoria Gasto", itemIcon: <HiCog  color='white' />, link: "" },
          ],
        } as NavBarNestedListItemProps,
      ],
    } as NavBarProps;
  };
  return (
    <>
      <div>
        <NavBar {...getNavBarProps()} />
      </div>
    </>
  );
}

export default App;
