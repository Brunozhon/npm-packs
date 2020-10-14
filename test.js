exports.importdo = (name = "", something = () => {}) => {
  return import(name).then((module) => {
    something();
  });
}
