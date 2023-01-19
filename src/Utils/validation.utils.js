export let convert = (errors) => {
  //console.log(errors);
  return errors.inner.reduce((z, item) => {
    let name = (item.path || "").includes(".")
      ? item.path.split(".")[0]
      : item.path || "";
    return z[item.path || ""] ? z : { ...z, [name]: item.message };
  }, {});
};
