import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Mock Admin Login
  app.post("/api/auth/login", (req, res) => {
    const { id, password } = req.body;
    // Simple mock logic
    if (password === "admin123" || password === "zealous2024") {
      res.cookie("zealous_token", "authorized_" + id, { httpOnly: true, secure: true, sameSite: 'none' });
      return res.json({ success: true, user: { id, role: id.startsWith('ADM') ? 'ADMIN' : 'EMPLOYEE' } });
    }
    res.status(401).json({ success: false, message: "Invalid credentials" });
  });

  // Mock Application Submission
  app.post("/api/jobs/apply", (req, res) => {
    console.log("New application received:", req.body);
    // Simulate auto-email logic
    res.json({ success: true, message: "Application received. Welcome email sent." });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
