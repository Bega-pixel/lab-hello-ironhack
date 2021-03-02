import "./App.css";

function App() {

  const title = "ReactJS";
  return (
    
    <div className="container">
      
      <header className="header p-4">
        <nav className="container d-flex justify-content-between align-items-center">

          <img src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
            <a href="/">
          <img src="/images/menu-top.svg" 
               alt="menu-top"/>
            </a>  
        </nav>

    <div className="text-light ">
        <h2>Say hello to<br/>{title}</h2>
    </div>

    <div className="text-light">
      <p >
      You will learn how to use the most popular frontend library,
      <br/>and become a super Ninja developer.
      </p>
    </div>
    <div className="boton">
      <a href="/" className="btn btn-light m-3 mainColor">Awesome!</a>
    </div>

</header>

    <section className="container w-80">
      
    <div className="row">
      <div className="col-md-3"> 
      <div className="card text-center">
        <img src="/images/icon1.png" className="card-img-top "/>
          <div classNme="card-body">
            <h4 className="card-title"><b>Declarative</b></h4>
            <p className="card-text">
            React makes it painless to create interactive UIs.
            </p>
          </div>
      </div>
      </div>

      <div className="col-md-3"> 
      <div className="card text-center"> 
        <img src="/images/icon2.png" className="card-img-top" />
          <div classNme="card-body">
            <h4 lassName="mainColor"><b>Components</b></h4>
            <p className="card-text">
            Build encapsulated components that manage their state.
            </p>
          </div>
      </div>
      </div>

      <div className="col-md-3"> 
      <div className="card text-center">
        <img src="/images/icon3.png" className="card-img-top"/>
          <div classNme="card-body">
            <h4 lassName="mainColor"><b>Single-Way</b></h4>
            <p className="card-text">
            A set of immutable values are passed to the component's
            </p>
          </div>
      </div>
      </div>

      <div className="col-md-3"> 
      <div className="card text-center">
          <img src="/images/icon4.png" className="card-img-top "/>
            <div classNme="card-body">
              <h4 lassName="mainColor"><b>JSX</b></h4>
              <p className="card-text">
              Statically-typed, designed to run on modern browsers.
              </p>
            </div>
      </div>
      </div>

      </div>  
           
      </section>

      </div>

  );
 
}

export default App;
