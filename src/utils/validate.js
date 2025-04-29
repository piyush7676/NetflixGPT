const validateformData = (email, password)=> {

    const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ 
    if(!isEmailvalid.test(email)) return "Email is not valid";
    if(!isPasswordvalid.test(password)) return "password is not valid";
    return isEmailvalid.test(email) && isPasswordvalid.test(password);
};


export default validateformData