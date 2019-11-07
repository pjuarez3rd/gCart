const apiURL = 'http://cart.api/a/p/i';

export default {
  getTasks() {
    return fetch(`${apiURL}/items`)
      .then(tasksResponse => tasksResponse.json())
      .catch(error => {
        console.log(error);
      });
  }
};