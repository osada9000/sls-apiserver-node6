function main(requestBody) {
  return {
    number: 100,
    str: `body: ${requestBody}`,
  };
}

module.exports = {
  main,
};
