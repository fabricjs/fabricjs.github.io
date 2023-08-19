export const functionToCodeString = (fn) =>
  fn.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1];
