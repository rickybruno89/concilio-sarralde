import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: "/concilio-sarralde/",
  prerender: ["/"],
} satisfies Config;
