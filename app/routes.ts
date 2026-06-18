import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("brochure", "routes/brochure.tsx"),
] satisfies RouteConfig;
