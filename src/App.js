import './App.scss';

function App() {
  return (
    <div className="container">
      <div id="content-container" className="pos-flex-split">
        <div id="nav-box">
          <h2 className="title-sm">Name</h2>
          <ul id="nav-list">
            <li><a href="#">Goals</a></li>
            <li><a href="#">Saving History</a></li>
            <li><a href="#">Statictics</a></li>
          </ul>
          <div id="nav-footer">
            <ul id="nav-footer-list" className="pos-flex-split">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <p>&copy;All Rights Reserved
              <br/>
              Build by /RZ</p>
          </div>
        </div>
        <div id="main-box"></div>
      </div>
    </div>
  );
}

export default App;
