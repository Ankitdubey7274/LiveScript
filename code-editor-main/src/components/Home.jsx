import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Code from "./Code";
import Result from "./Result";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      {/* Code and Result vertically stacked */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Code Section */}
        <div style={{ flex: 1, position: 'relative', overflow: 'auto' }}>
          <button 
            onClick={handleLogout}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              padding: '8px 16px',
              backgroundColor: '#ff4d4f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            Logout
          </button>
          <Code />
        </div>

        {/* Result Section */}
        <div style={{ flex: 1, borderTop: '1px solid #ccc', overflow: 'auto' }}>
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Home;
