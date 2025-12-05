// checkReactScripts.jsx
import { execSync } from "child_process";

function checkReactScripts() {
  try {
    // Check installed version
    const version = execSync("npm list react-scripts --json", { encoding: "utf8" });
    const parsed = JSON.parse(version);

    const installed = parsed.dependencies?.["react-scripts"]?.version;

    if (!installed) {
      console.log("?? react-scripts not installed. Installing latest...");
      execSync("npm install react-scripts@latest", { stdio: "inherit" });
    } else {
      console.log(`? react-scripts is installed (version ${installed}).`);

      // Check if update is available
      const latest = execSync("npm view react-scripts version", { encoding: "utf8" }).trim();

      if (installed !== latest) {
        console.log(`?? Update available: ${installed}  ${latest}`);
        console.log("Updating...");
        execSync("npm install react-scripts@" + latest, { stdio: "inherit" });
      } else {
        console.log("?? Already up to date.");
      }
    }
  } catch (err) {
    console.error("Error checking react-scripts:", err.message);
  }
}

// Run the check
checkReactScripts();
