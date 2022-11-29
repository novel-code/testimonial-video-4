import Testimonial from "./components/Testimonial";
import data from "./data.json";

function App() {
  return (
    <div>
      <Testimonial testimonialData={data} />
    </div>
  );
}

export default App;
