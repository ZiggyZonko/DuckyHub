import { onRequestGet as __api_messages_js_onRequestGet } from "/home/ziggy/Desktop/2026Projects/Lindlesxyz/functions/api/messages.js"
import { onRequestPost as __api_messages_js_onRequestPost } from "/home/ziggy/Desktop/2026Projects/Lindlesxyz/functions/api/messages.js"
import { onRequestGet as __api_visitors_js_onRequestGet } from "/home/ziggy/Desktop/2026Projects/Lindlesxyz/functions/api/visitors.js"

export const routes = [
    {
      routePath: "/api/messages",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_messages_js_onRequestGet],
    },
  {
      routePath: "/api/messages",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_messages_js_onRequestPost],
    },
  {
      routePath: "/api/visitors",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_visitors_js_onRequestGet],
    },
  ]