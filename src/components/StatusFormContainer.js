import { connect } from "react-redux";
import { setCurrentStatus } from "../redux";
import { StatusForm } from "./StatusForm";

// La función mapStateToProps mapea el estado del store
// (state) a las props de nuestro componente.
const mapStateToProps = state => {
  return {
    // LO QUE QUEREMOS QUE NOS LLEGUE POR PROPS
    // AL COMPONENTE:
    allStatus: state.allStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // Funciones para enviar acciones al store
    dispatchSetCurrentStatus: status => {
      // Envía la acción creada por setCurrentStatus()
      dispatch(setCurrentStatus(status));
    }
  };
};

const StatusFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusForm);

export default StatusFormContainer;
