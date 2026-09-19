import { spawnSync } from "node:child_process"
import { copyFileSync, writeFileSync } from "node:fs"
// Override BASE_PATH for a different repository or use / for a custom domain.
const result = spawnSync(
  process.execPath,
  ["node_modules/vite/bin/vite.js", "build"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      BASE_PATH: process.env.BASE_PATH || "/lcmmusa/",
      VITE_ROUTER_MODE: "hash",
    },
  },
)
if (result.status !== 0) process.exit(result.status ?? 1)
for (const page of ["about", "ministries", "testimonies", "media", "contact"])
  copyFileSync("dist/index.html", `dist/${page}.html`)
writeFileSync("dist/.nojekyll", "")
