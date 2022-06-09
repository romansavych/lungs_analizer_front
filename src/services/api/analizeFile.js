 


// Example POST method implementation:
export async function getAnalizingResult(data = {}) {
    // Default options are marked with *
    const url = 'http://127.0.0.1:5000/'
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "form-data"
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  export async function getAll() {
    // Default options are marked with *
    const url = 'http://127.0.0.1:5000/all'
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  export async function getAllByEmail(data={}) {
    // Default options are marked with *
    const url = 'http://127.0.0.1:5000/find_by_email'
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "form-data"
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
