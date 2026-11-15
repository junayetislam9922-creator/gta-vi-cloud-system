export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        project: "GTA VI Cloud System",
        status: "online",
        version: "1.0.0",
        language: ["English", "Bangla"],
        automation: "development"
      });
    }

    return Response.json({
      name: "GTA VI Media Engine",
      message: "Welcome to your cloud system",
      endpoints: ["/health"]
    });
  },

  async scheduled(event, env, ctx) {
    console.log("GTA VI scheduled automation started");
    console.log("Execution time:", new Date().toISOString());
  }
};