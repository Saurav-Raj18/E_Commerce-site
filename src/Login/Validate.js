export default function Validate(values){
    const email_pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const pass_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    const errors={};
    if(values.name===""){
        errors.name="Name is required"
    }

     if(values.email===""){
        errors.email="Email is required"
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Please provide a valid email."
    }

     if(values.password===""){
        errors.password="Password is required"
    }
    else if(!pass_pattern.test(values.password)){
        errors.password="Please provide a valid password";
    }

    if(values.confpassword===""){
        errors.confpassword="password is required"
    }
    else if(values.password!==values.confpassword){
        errors.confpassword="password is not matching";
    }
    return errors
}