import { Theme } from "./Themes";
import styles from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

const Container = styles.div`
  padding: 0 var(--container-padding);
`;

function App() {
  return (
    <>
      <Theme mode="light" />
      <Navbar />
      <Container>
        <Hero />
        <Services />
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h2>Home</h2>
        </div>
        <h2>Home</h2>
        <p>Hmoe</p>
      </Container>
    </>
  );
}

export default App;
