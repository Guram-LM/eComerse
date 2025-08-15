import { useState, type FormEvent } from "react";
import type { userData } from "../../../components/inpute/interface";
import usegetUzer from "../../../hook/queryHook/usegetUzer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Vaidatsion = () => {
  const { data, isLoading } = usegetUzer("icommersUserApp");
  const userdata: userData[] =
    data?.map((item) => ({
      ...item.data,
      id: item.id,
    })) ?? [];

  const [showPassword, setShowPassword] = useState(false);
 
  const [email, setemail] = useState("")
  

  const [password, setpassword] = useState("")

  const onsubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   
    if(!password)return alert(" გთხოვთ შეიყვანეთ ფასვორდი")
    if(!email)return alert(" გთხოვთ შეიყვანეთ იმეილი")
    const validationuser = userdata.find((user) => user.email === email && user.password === password )
    if(validationuser){
        localStorage.setItem("validationuser", JSON.stringify(validationuser))
        
    }
    else{alert(" მომხმარებლის უსერი ან პაროლი არასწორია")}
    
 
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <form onSubmit={onsubmit} className="v-form">
      <div className="v-input-group">
        <label htmlFor="v-email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="v-email"
          className="v-input"
          onChange={(event) => setemail(event.target.value)}
        />
      </div>

      <div className="v-input-group v-password-group">
        <label htmlFor="v-password">Password</label>
        <div className="v-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            id="v-password"
            className="v-input"
            onChange={(event) => setpassword(event.target.value)}
          />
          <span
            className="v-eye-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <button type="submit" className="v-submit-btn">
        Log in
      </button>
    </form>
  );
};

export default Vaidatsion;
