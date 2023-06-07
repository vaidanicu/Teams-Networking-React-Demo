import logo from "./logo.svg";
import "./App.css";
import "./loading.css";
import selfie from "./Pictures/2.jpg";
import logoGitHub from "./Pictures/GitHub_logo_2013.svg.png";
import logoLinkeding from "./Pictures/1.gif";
import { TeamsTableComponent } from "./teams/TeamsTable";

// function App_old() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//     </div>
//   );
// }
function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form id="sectione-left-menu">
          <div id="Email">
            <label htmlFor="e">Email: </label>
            <input type="email" id="e" name="e," required placeholder="example@yahoo.com" />
          </div>
          <div id="UserName">
            <label htmlFor="n"> Name: </label>
            <input type="text" id="Name" name="na" required placeholder="Full Name" />
          </div>

          <div className="Contact-Us">
            <button>Contact us</button>
          </div>
        </form>
      </section>
      <section>
        <h2>React</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </section>
    </div>
  );
}

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img src={selfie} />
        </div>
        <div id="header-info">
          <h1>Vaida Aurel Nicolae</h1>
          <h2>
            Student:
            <a target="_blank" href="https://fasttrackit.org/">
              {" "}
              FastTrackIt
            </a>
          </h2>
        </div>
      </div>
      <MainMenu />
    </header>
  );
}

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>

      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Known Languages
        </a>
      </li>
    </ul>
  );
}

function AppFooter() {
  return (
    <footer className="Footer">
      <a target="_blank" href="https://www.google.com">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height="20" />
      </a>

      <a target="_blank" href="https://fasttrackit.org/">
        <img src="https://fasttrackit.org/wp-content/uploads/2020/08/fasttrackit.png" height="20" />
      </a>
      <a target="_blank" href="https://github.com/vaidanicu">
        <img src={logoGitHub} height="20" />
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/vaidaaurelnicolae/">
        <img src={logoLinkeding} height="20" />
      </a>
    </footer>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <TeamsTableComponent />
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
