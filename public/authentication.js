const contentContainer = document.getElementById('contentContainer');
let is=true;
contentContainer.addEventListener('click', (event) => {
  const targetId = event.target.id;

  if (targetId === 'LogIn') {
    is = true;
    console.log(is);
    contentContainer.innerHTML = `
      <div>
        <div id="AuthLink">
          <button id="LogIn">LogIn</button>
          <button id="SignIn">SignIn</button>
        </div>
        <form id="FormData">
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Email Address">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Password">
          <button id="Submit">Submit</button>
        </form>
      </div>
    `;
    submitListener();

  } else if (targetId === 'SignIn') {
    is = false;
    console.log(is);
    contentContainer.innerHTML = `
      <div>
        <div id="AuthLink">
          <button id="LogIn">LogIn</button>
          <button id="SignIn">SignIn</button>
        </div>
        <form id="FormData">
          <label for="first_name">First Name:</label>
          <input type="text" id="first_name" placeholder="First Name">
          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name" placeholder="Last Name">
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Email Address">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Password">
          <button id="Submit">Submit</button>
        </form>
      </div>
    `;
    submitListener();
  }
});

function submitListener() {
  document.getElementById('Submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    if (is === false) {
      const data = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };
      console.log(data);
      fetch('http://localhost:4000/users/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response)=>{
        console.log(response);
      }).catch((err)=>{
        console.log(err)
      });
    } else{
      const data={
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };
      console.log(data);
      fetch('http://localhost:4000/users/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }
    window.location.href="/blog"
  });
}
submitListener();
