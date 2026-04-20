import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-card">

        <p className="auth-subtitle">
          {isLogin ? "Welcome back" : "Create your account"}
        </p>

        <h2 className="auth-title">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="auth-form">

          {!isLogin && (
            <input type="text" placeholder="Full Name" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;