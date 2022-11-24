// cambiar nombre de rutas y todos
const ApiBack = {

    URL: "http://localhost:3123",

    CREATE_PUBLIC_USER : "/api/public/users/postCreate",
    INIT_PUBLIC_USER : "/api/public/users/init",
  
    CREATE_PRIVATE_PROFILE : "/api/private/profiles/postCreate",
    GET_PRIVATE_PROFILE: "/api/private/profiles/getAll",
    DELETE_PRIVATE_PROFILE: "/api/private/profiles/delete",
    F5_PRIVATE_PROFILE: "/api/private/profiles/update",
    /*
    
    PERFILES_OBTENER_UNO: "/api/privado/perfil/uno",
   
  
    USUARIOS_CREAR: "/api/privado/usuario/crear",
    USUARIOS_OBTENER: "/api/privado/usuario/todos",
    USUARIOS_OBTENER_UNO: "/api/privado/usuario/uno",
    USUARIOS_ELIMINAR: "/api/privado/usuario/eliminar",
    USUARIOS_ACTUALIZAR: "/api/privado/usuario/actualizar",
    */
};
export default ApiBack;