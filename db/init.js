const { app } = require("@azure/functions");

app.http("importSongs", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async () => {
    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, message: "Function is alive" })
    };
  }
});