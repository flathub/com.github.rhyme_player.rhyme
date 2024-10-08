let electron = require("child_process").spawn("npm", ["run", "electron"], {
  stdio: ["ignore", "inherit", "inherit"],
  shell: true,
});

let rollup = require("child_process").spawn("npm", ["run", "start"], {
  stdio: ["ignore", "inherit", "inherit"],
  shell: true,
});

function exit() {
  rollup.kill();
  electron.kill();
}

electron.on("exit", exit);
electron.on("exit", exit);
rollup.on("close", exit);
rollup.on("close", exit);
