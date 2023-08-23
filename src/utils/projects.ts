const isProjects = (path: string): boolean =>
  ['/projects', '/projects/'].includes(path);

export default isProjects;
