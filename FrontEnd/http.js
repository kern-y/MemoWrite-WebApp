export default class Http {
  static fetchMemos(url) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", url);
      http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
          resolve(http.response);
        } else if (http.readyState === XMLHttpRequest.DONE) {
          reject("There was a problem with the server...");
        }
      };
      http.send();
    });
  }

  static storeMemo(url, memo) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("POST", url);
      http.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
          resolve(http.response);
        } else if (http.readyState === XMLHttpRequest.DONE) {
          reject("There was a problem with the server...");
        }
      };
      http.send(`text=${memo.text}&date=${memo.date}`);
    });
  }
}
