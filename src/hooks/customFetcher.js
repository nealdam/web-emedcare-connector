const fetcher = (...args) => fetch(...args).then((res) => new Promise((resolve, reject) => {
  res.json()
    .then(responseData => {
      if (responseData.code != 200) reject(responseData.message);

      resolve(responseData);
    })
    .catch(error => {
      reject(error);
    })
}));

export default fetcher;