import Header from '../Header/Header';
import Home from '../Home';
import About from '../About/About';
import News from '../News';
import Portfolio from '../Portfolio';
import Team from '../Team';
import Contact from '../Contact';
import Footer from '../Footer/Footer';

const appRoutes = [
    { path: "/", name: "Home", icon: "pe-7s-graph", component: Home },
    { path: "/About", name: "About", icon: "pe-7s-user", component: About },
    { path: "/News", name: "News", icon: "pe-7s-note2", component: News },
    { path: "/Portfolio", name: "Portfolio", icon: "pe-7s-news-paper", component: Portfolio },
    { path: "/Team", name: "Team", icon: "pe-7s-science", component: Team },
    { path: "/Contact", name: "Contact", icon: "pe-7s-map-marker", component: Contact }
  ]

export default appRoutes;
