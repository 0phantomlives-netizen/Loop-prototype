export default function Home({ supabase, session }) {
  const user = session?.user;

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="home-container">
      <h2>👋 Hey {user?.email.split("@")[0]}, welcome to Loop!</h2>
      <p>You’re logged in successfully.</p>

      <div className="feed">
        <div className="post">
          <h3>🔥 Prototype Feed</h3>
          <p>This is just a placeholder for now. Soon you’ll see stories, chats, and more.</p>
        </div>
      </div>

      <button onClick={handleLogout} className="logout">Logout</button>
    </div>
  );
}
