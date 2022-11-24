const opcionesAdmin = [
    { nombre: "AboutUs", icono: "bi bi-grid", ruta: "/home-route/aboutUs", hijos: [], },

    { nombre: "Home-Dashboard", icono: "bi bi-grid", ruta: "/home-route", hijos: [], },

    { nombre: "Profiles", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/home-route/newProfile" },
        { nombre: "Admin", icono: "bi bi-circle", ruta: "/home-route/adminProfile" },
        { nombre: "List", icono: "bi bi-circle", ruta: "/home-route/listProfile" },   
      ]
    },

    { nombre: "Aviones", icono: "bi bi-clipboard-data", ruta: "", hijos: [
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/home-route/newAvion" },
      { nombre: "List", icono: "bi bi-circle", ruta: "/home-route/listAvion" },   
    ]
  },

    { nombre: "Usuarios", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
      { nombre: "Todabia naa", icono: "bi bi-circle", ruta: "/home-route/listusers", },
      { nombre: "Todabia naa", icono: "bi bi-circle", ruta: "/home-route/adduser" },
      { nombre: "Todabia naa", icono: "bi bi-circle", ruta: "/home-route/admuser", },
      ]
    },
    
    { nombre: "Citas", icono: "bi bi-calendar", ruta: "", hijos: [
      { nombre: "Todabia naa", icono: "bi bi-circle", ruta: "/home-route/listma", },
      { nombre: "Todabia naa", icono: "bi bi-circle", ruta: "/home-route/addma" },
      { nombre: "Todabia naa", icono: "bi bi-circle", ruta: "/home-route/admma", },
      ]
    }
  ];
  
  // *********************************************************************************
  
  const opcionesInvitado = [
    { nombre: "Acerca de", icono: "bi bi-grid", ruta: "/home-route/about", hijos: [], },
    { nombre: "Compras", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "Pendientes", icono: "bi bi-circle", ruta: "/home-route/admuser", },
        { nombre: "Productos", icono: "bi bi-circle", ruta: "/home-route/admuser" },
        { nombre: "Antiguas", icono: "bi bi-circle", ruta: "/home-route/admuser", }
      ]
    }
  ];
  
  export { opcionesAdmin, opcionesInvitado };
  