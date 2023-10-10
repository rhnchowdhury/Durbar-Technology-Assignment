import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DASHBOARD from "./pages/DASHBOARD";
import ORDERLIST from "./pages/ORDERLIST";
import MENULAYOUT01 from "./pages/MENULAYOUT01";
import MENULAYOUT02 from "./pages/MENULAYOUT02";
import MENULAYOUT03 from "./pages/MENULAYOUT03";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DASHBOARD />} />
      <Route path="/menu1" element={<MENULAYOUT01 />} />
      <Route path="/menu2" element={<MENULAYOUT02 />} />
      <Route path="/menu3" element={<MENULAYOUT03 />} />
      <Route path="/order" element={<ORDERLIST />} />
    </Routes>
  );
}
export default App;
