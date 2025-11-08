import { useState } from "react";

export default function Login({ supabase }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMessage(error.message);
    else setMessage("📩 Check your email for the login link!");
  };

  return (
    <div className="login-container">
      <h1>Welcome to <span>Loop</span> 🔁</h1>
      <p>Connect, share & loop back anytime.</p>

      <input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Send Magic Link</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
