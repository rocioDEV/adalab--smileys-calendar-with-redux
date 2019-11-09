import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { StatusDetail } from "./components/StatusDetail";
import StatusFormContainer from "./components/StatusFormContainer";
import "./App.scss";

class App extends React.Component {
  componentDidMount() {
    // Recuperamos la lista de caritas del localStorage
    this.props.recoverDataFromLocalStorage();
  }

  // Esta función se ejecuta al hacer submit del formulario
  handleSubmit = () => {
    // Todos estos datos nos llegan por props (desde AppContainer)!!
    const {
      currentStatus,
      dispatchAddNewStatus,
      saveDataToLocalStorage,
      allStatus
    } = this.props;

    // Guardamos la nueva carita en el store
    dispatchAddNewStatus(currentStatus);

    // Guardamos nuevamos la nueva lista de caritas en el localStorage
    saveDataToLocalStorage([...allStatus, currentStatus]);
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home allStatus={this.props.allStatus} />;
            }}
          />
          <Route
            path="/form"
            render={() => {
              return <StatusFormContainer handleSubmit={this.handleSubmit} />;
            }}
          />
          <Route
            path="/detail/:id"
            render={routerProps => {
              return (
                <StatusDetail
                  allStatus={this.props.allStatus}
                  routerProps={routerProps}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
