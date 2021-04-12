/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesUnic = [];
  const namesAddUnic = [];
  return names.map((item) => {
    let lastName = item;
    namesUnic.push(item);
    const suffiks = namesUnic.filter((itemFilter) => itemFilter === item).length - 1;
    if (suffiks > 0) lastName += `(${suffiks})`;
    namesAddUnic.push(lastName);
    const suffiksAdd = namesAddUnic.filter((itemFilter) => itemFilter === item).length - 1;
    if (namesAddUnic.includes(item) && suffiksAdd > 0) lastName += `(${suffiksAdd})`;
    return lastName;
  });
}

module.exports = renameFiles;
