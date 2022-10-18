import Footer from "../Footer/footer";
import OpinionForm from "../Display/opinionForm";
import OpinionList from "../Display/opinionList";

const App = () => {
  return (
    <div>
      <div>
        <OpinionList />
        <OpinionForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
