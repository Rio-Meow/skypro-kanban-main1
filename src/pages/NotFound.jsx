import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Такой страницы не существует.
      </p>
      <Link
        to="/"
        style={{
          fontSize: "18px",
          color: "#646cffaa",
          textDecoration: "underline",
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
