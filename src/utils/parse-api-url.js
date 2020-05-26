export default (url) => {
  const match = url.match(/^http:\/\/swapi\.dev\/api\/(\w+)\/(\d+)\/$/);
  if (match) {
    return {
      type: match[1],
      id: match[2],
    };
  }
}
