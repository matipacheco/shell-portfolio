const fileSystem = require('./config/file_system.json');

export const pwd = (directoryTree) => {
  return directoryTree.join("/");
}

const lsDirectory = content => {
  let files = content.files.map((file) => file.name);
  let directories = content.directories.map((file) => file.name);
  return files.concat(directories);
}

export const ls = (directoryTree) => {}
