import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {useFormulario} from "../../utilities/hooks/useFormulario";
import CreateUser from "../../models/CreateUser";
import * as encrypt from 'js-sha512';
import UserLogin from "../../services/UserLogin";
import ApiBack from "../../utilities/domains/ApiBack";

export const Login = () => {
  const myNavigate = useNavigate();

  type formHTML = React.FormEvent<HTMLFormElement>;
  const [inProcess, setInProcess] = useState<boolean>(false);
  let {nameUser, passUser, emailUser, doubleLink, object} = useFormulario<CreateUser>(new CreateUser("","",""));
  const cleanBoxes = (myForm: HTMLFormElement)=>{
    myForm.reset();
    object.nameUser = "";
    object.emailUser = "";
    object.passUser = "";

    myForm.nameUser.value = "";
    myForm.emailUser.value = "";
    myForm.passUser.value = "";

    myForm.classList.remove("was-validated");
  };
  const processingForm = async (fh: formHTML)=>{
    fh.preventDefault();
    setInProcess(true);
    const currentForm = fh.currentTarget;
    currentForm.classList.add("was-validated");

    if(currentForm.checkValidity()===false){
      fh.preventDefault();
      fh.stopPropagation();
    }else{
      
      const passwordEncrypted = encrypt.sha512(object.passUser);
      object.passUser = passwordEncrypted;
      const URLInitiated = ApiBack.URL+ApiBack.INIT_PUBLIC_USER;
      const respuesta = await UserLogin.ConsumeService(URLInitiated, object);
      console.log(respuesta);
      if(respuesta.tokenUSTA){
        localStorage.setItem("tokenUSTA", respuesta.tokenUSTA);
        console.log("falta el CONTEXT");
        setInProcess(false);
        myNavigate("/home-route");
      }else{
        cleanBoxes(currentForm);
      }
    }
  };


  return (
    <div>
      
      <div>
        <main>
          <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Login to Your Account
                          </h5>
                          <p className="text-center small">
                            Enter your username & password to login
                          </p>
                        </div>

                        <Form className="row g-3"
                          noValidate
                          validated={inProcess}
                          onSubmit={processingForm}>
                          

                          <div className="col-12">
                            <Form.Group controlId = "emailUser">
                              <Form.Label>Email User</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">@</span>
                                <Form.Control 
                                required
                                type="text"
                                name="emailUser"
                                className="form-control"
                                value={emailUser}
                                onChange={doubleLink}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter a valid Email adddress!
                                </Form.Control.Feedback>
                              </div>
                              
                            </Form.Group>
                          </div>

                          <div className="col-12">
                            <Form.Group controlId = "passUser">
                              <Form.Label>Password</Form.Label>
                              <Form.Control 
                              required
                              type="password"
                              name="passUser"
                              className="form-control"
                              minLength={7}
                              value={passUser}
                              onChange={doubleLink}
                              />
                              <Form.Control.Feedback type="invalid">
                              Please enter your password!
                              </Form.Control.Feedback>
                            </Form.Group>
                          </div>

                          

                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Create Account
                            </button>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Already have an account?{" "}
                              <a href="pages-login.html">Log in</a>
                            </p>
                          </div>
                        </Form>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      
      
      
    </div>
  );
};
