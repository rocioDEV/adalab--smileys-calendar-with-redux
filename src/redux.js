// CREADORES DE ACCIONES = Funciones que reciben datos y
// crean una acción para enviar al store con los datos recibidos
export function setCurrentStatus(status) {
  return {
    type: "SET_CURRENT_STATUS",
    status
  };
}

export function setStatusList(statusList) {
  return {
    type: "SET_STATUS_LIST",
    statusList
  };
}

export function addNewStatus(newStatus) {
  return {
    type: "ADD_NEW_STATUS",
    newStatus
  };
}

const initialState = {
  allStatus: [],
  currentStatus: {
    currentDay: "",
    currentStatus: "",
    currentMessage: ""
  }
};

// REDUCER!! This is where the magic happens :)
// Esta función es llamada por redux cada vez que enviamos (dispatcheamos)
// una acción, para generar un nuevo estado en base al estado actual
// y a los datos que estamos recibiendo en la acción que se dispara
// [ESTADO ACTUAL] + [ACCIÓN] = NUEVO ESTADO
export function reducer(state = initialState, action) {
  let newState;
  if (action.type === "SET_CURRENT_STATUS") {
    newState = {
      ...state,
      currentStatus: {
        ...state.currentStatus,
        ...action.status
      }
    };
  } else if (action.type === "SET_STATUS_LIST") {
    newState = {
      ...state,
      allStatus: action.statusList
    };
  } else if (action.type === "ADD_NEW_STATUS") {
    newState = {
      ...state,
      allStatus: [...state.allStatus, action.newStatus]
    };
  } else {
    newState = state;
  }

  return newState;
}
