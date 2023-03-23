function getParams(str: string) {
  let init: any = {};
  return str
    .split("&")
    .map((i) => i.split("="))
    .reduce((acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    }, init);
}

// function getParams(query: string) {
// 	const parts = query.split('&');
// 	const init: any = {};
// 	return parts.reduce((acc, part) => {
// 		const [key, value] = part.split('=');
// 		acc[key] = value;
// 		return acc;
// 	}, init);
// }

console.log(getParams("per=10&page=5"));
