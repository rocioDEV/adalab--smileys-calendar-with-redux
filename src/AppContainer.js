import App from "./App";
import { connect } from "react-redux";
import { setCurrentStatus, setStatusList, addNewStatus } from "./redux";

// La función mapStateToProps mapea el estado del store
// (state) a las props de nuestro componente.
const mapStateToProps = state => {
  return {
    // LO QUE QUEREMOS QUE NOS LLEGUE POR PROPS
    // AL COMPONENTE:
    allStatus: state.allStatus,
    currentStatus: state.currentStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // Funciones para enviar acciones
    dispatchSetCurrentStatus: status => {
      // Envía la acción creada por setCurrentStatus()
      dispatch(setCurrentStatus(status));
    },
    dispatchSetStatusList: status => {
      // Envía la acción creada por setStatusList()
      dispatch(setStatusList(status));
    },
    dispatchAddNewStatus: status => {
      // Envía la acción creada por addNewStatus()
      dispatch(addNewStatus(status));
    },

    // Otras funciones
    saveDataToLocalStorage: allStatus => {
      localStorage.setItem("allStatus", JSON.stringify(allStatus));
    },
    recoverDataFromLocalStorage: () => {
      const savedStatus = JSON.parse(localStorage.getItem("allStatus"));

      if (savedStatus !== null) {
        dispatch(setStatusList(savedStatus));
      }
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AppContainer;
