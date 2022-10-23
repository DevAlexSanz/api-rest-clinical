const getModelName = (name) => {
  const lengthName = name.length;
  const internalName = name.charAt(0).toLowerCase() + name.slice(1);

  // plural name
  if (name[lengthName - 1] === 's') {
    const singularName = internalName.substring(0, lengthName - 1);
    return {
      singularName:
        singularName.charAt(0).toUpperCase() + singularName.slice(1),
      pluralName: internalName,
    };
  }

  const singularName = `${internalName
    .charAt(0)
    .toUpperCase()}${internalName.slice(1)}`;

  if (name[lengthName - 1] === 'y') {
    return {
      singularName,
      pluralName: `${internalName.substring(0, lengthName - 1)}ies`,
    };
  }

  if (name[lengthName - 1] === 'x') {
    return {
      singularName,
      pluralName: `${internalName}ies`,
    };
  }

  return {
    singularName,
    pluralName: `${internalName}s`,
  };
};

export default getModelName;
