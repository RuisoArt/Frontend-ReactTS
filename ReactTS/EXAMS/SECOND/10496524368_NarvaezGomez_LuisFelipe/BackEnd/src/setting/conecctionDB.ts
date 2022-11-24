import { connect } from "mongoose";

const conecctionDB = ()=>{
    const URL = String(process.env.URL_MONGODB);

    connect(URL)
        .then(()=>{
            console.log("loading mongoDB: ", URL);
        })
        .catch((myError)=>{
            console.log("Exit Error: ", myError);
        });
};

export default conecctionDB;