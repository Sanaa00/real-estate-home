import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Pages/Layout";
function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-full bg-gray-100">
        <div className=" px-6 sm:px-32">
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
