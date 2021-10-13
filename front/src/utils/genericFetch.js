const genericFetch = async (url, method = 'GET', data = {}) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    };

    return await (await fetch(url, options)).json();
  } catch (e) {
    console.error(`error during fetch to ${url}`);
    return null;
  }
};

export default genericFetch;