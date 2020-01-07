import React, {useState} from "react";
import ReactDOM from "react-dom";
import isElectron from "is-electron";

// Theme
import Theme from "../css/theme";
import { ThemeProvider } from "emotion-theming";

// Components
import Login from "./login/login";
import Home from './src/home/home';
import Main from "./main";
import Sales from "./src/sales/sales";
import Reports from "./src/finances/graphs/reports";
import Products from "./src/products/items/products";
import Clients from "./src/comingSoon/clients";
import Transactions from "./src/finances/transactions/transactions";
import Admin from "./src/admin/admin";
import Config from "./src/conf/config";

// Icons
import IconCastor from '../medias/svg/iconCastor'
import IconTransactions from "../medias/svg/iconTransactions";
import IconProducts from "../medias/svg/iconProducts";
import IconCashier from "../medias/svg/iconCashier";
import IconGraphs from "../medias/svg/iconGraphs";
import IconAdmin from "../medias/svg/iconAdmin";
import IconClients from "../medias/svg/iconClients";
import IconConfig from "../medias/svg/iconConfiguration";

export default function App() {
  let userConfig = {
    theme: {
      themeColor: "day",
      navPosition: "left"
    },
    userType: "admin",
    lastLogin: "",
    registeredAt: "",
    personal: {
      firstName: "Leone",
      lastName: "Souza",
      cpf: "451854",
      photo: "",
      address: {
        street: "",
        city: "",
        cep: "",
        number: ""
      }
    },
    expireAt: null
  };

  let routes = [
    {
      title: "Inicio",
      url: "/",
      Component: Home,
      Icon: IconCastor
    },
    {
      title: "Caixa",
      url: "/sells",
      Component: Sales,
      Icon: IconCashier
    },
    {
      title: "Transações",
      url: "/cashier",
      Component: Transactions,
      Icon: IconTransactions
    },
    {
      title: "Produtos",
      url: "/products",
      Component: Products,
      Icon: IconProducts
    },
    {
      title: "Graficos",
      url: "/reports",
      Component: Reports,
      Icon: IconGraphs
    },
    {
      title: "Clientes",
      url: "/clients",
      Component: Clients,
      Icon: IconClients
    },
    {
      title: "Admin",
      url: "/admin",
      Component: Admin,
      Icon: IconAdmin
    },
    {
      title: "Config",
      url: "/config",
      Component: Config,
      Icon: IconConfig
    }
  ];

  let isLogged = true

  let [theme, setTheme] = useState(Theme(userConfig.theme));

  let updateTheme = (value) => {
    let option ={ 
      ...userConfig.theme,
      ...value
    }
    setTheme(Theme(option))
  };

  if (isElectron() && isLogged) {
    return (
      <ThemeProvider theme={theme}>
        <Main routes={routes} userConfig={userConfig} updateTheme={updateTheme} />
      </ThemeProvider>
    );
  } else if (isLogged) {
    return <h1>you are not in desktop environment</h1>;
  } else {
    return <Login/>;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
