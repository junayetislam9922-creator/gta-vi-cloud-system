export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === "/health") {
      return Response.json({
        project: "GTA VI Auto Poster",
        status: "active",
        message: "System is ready for auto posting!"
      });
    }

    return Response.json({
      name: "GTA VI Cloud System",
      instruction: "Please visit /health to check status."
    });
  },

  async scheduled(event, env, ctx) {
    // এখানে অটোমেটিক পোস্ট পাঠানোর ব্যাকএন্ড প্রসেস কাজ করবে
    console.log("GTA VI automated task triggered successfully.");
  }
};
