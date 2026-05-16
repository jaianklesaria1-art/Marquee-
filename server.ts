import express from "express";
import cors from "cors";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API to proxy form submissions to Formspree
  app.post("/api/contact", async (req, res) => {
    try {
      const response = await fetch("https://formspree.io/f/xjglnjap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        const result = await response.json();
        res.status(response.status).json(result);
      }
    } catch (error) {
      console.error("Error communicating with Formspree:", error);
      res.status(500).json({ error: "Failed to communicate with Formspree." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
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
