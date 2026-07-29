let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    profileUrl:
      "https://imgs.search.brave.com/18RQiKGpB8TB3-cG3FsNqsf_7coyu8xxmQ-WdZAxTUo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy51/cy1lYXN0LTEuYW1h/em9uYXdzLmNvbS9j/ZG4uZGVzaWduY3Jv/d2QuY29tL2Jsb2cv/eC1tYW4tbG9nb3Mt/Zm9yLWEtc3Ryb25n/LWFuZC1tYXNjdWxp/bmUtYnJhbmRpbmcv/TWFuJTIwTW91c3Rh/Y2hlJTIwQmFyYmVy/c2hvcCUyMGJ5JTIw/Sm9lbWFyLnBuZw",
    name: "Pankaj Tripathi",
    email: "pankajbhai333@gmail.com",
  },

  {
    profileUrl:
      "https://imgs.search.brave.com/FPQu7SbNw8fYthCqM6txTVKW_kEkDIxRKTo676TyO5k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/My83OC9oaXBzdGVy/LW1hbi1wb3J0cmFp/dC1oYW5kLWRyYXdu/LXZlY3Rvci04ODYw/Mzc4LmpwZw",
    name: "Sabin Gautam",
    email: "sabinjbhai333@gmail.com",
  },

  {
    profileUrl:
      "https://imgs.search.brave.com/m3aIO8ytQnbRnPcZYWqhyryxJSOVADFg94w19awrabs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIyMTIwNy9vdXJt/aWQvcG5ndHJlZS1i/ZWF1dHktc2Fsb24t/bW9ub2dyYW0tbGV0/dGVyLWMtd29tYW4t/c2lsaG91ZXR0ZS1s/b2dvLWRlc2lnbi1w/bmctaW1hZ2VfNjUx/NDQ4OS5wbmc",
    name: "Kritika Tripathi",
    email: "kritikabhai333@gmail.com",
  },

  {
    profileUrl:
      "https://imgs.search.brave.com/77Vq_5glX2nA7qqq2zFifXJCbXiLyDECVw0qT6dud9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzAv/NzcwLzU2MS9zbWFs/bC9taW5pbWFsLWFu/ZC1hYnN0cmFjdC1s/b2dvLW9mLWxhZHkt/Z2lybC1pY29uLXdv/bWFuLXNpbGhvdWV0/dGUtZmVtYWxlLWlz/b2xhdGVkLXRlbXBs/YXRlLWRlc2lnbi1w/aW5rLWZlbWFsZS12/ZWN0b3IuanBn",
    name: "Sita Tripathi",
    email: "sitabhai333@gmail.com",
  },

  {
    profileUrl:
      "https://imgs.search.brave.com/z4BCT5Ihsu7Lf1yclXyFO245DNsP7PyKsUo_5z5JdcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWFy/ZGVkLW1hbi1oYWly/LWN1dC1mYXNoaW9u/LWxvZ28tc2lsaG91/ZXR0ZS1iZWFyZGVk/LW1hbi1oYWlyLWN1/dC1mYXNoaW9uLWxv/Z28tc2lsaG91ZXR0/ZS1iYXJiZXItYmxh/Y2stbWVuLXNob3At/dmVjdG9yLTE0NjQy/NjkyOC5qcGc",
    name: "Akkal Dhami",
    email: "akkaljbhai333@gmail.com",
  },

  {
    profileUrl:
    "https://imgs.search.brave.com/ACedRZHztn-OEwyhM1B15tdkWFNDmr_vu6lbM9Pyr10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/cmVpbWFnaW5lLndl/YnA",
    name: "Rubina Nepal",
    email: "rubinbhai333@gmail.com",
  },
];

function renderUsers(users) {
      userContainer.innerHTML = "";
  let resultArray = users.map(function (obj) {
    let { profileUrl, name, email } = obj;
    let elem = document.createElement("div");
    elem.className = "userItem";
    elem.innerHTML = `
        <div class="userItem">
          <img
            src=${profileUrl}
            alt="Error Loading Image"
          />
          <div class="userDetail">
            <h3>${name}</h3>
            <p><small>${email}</small></p>
          </div>
        </div>
        `;
    userContainer.append(elem);
  });
}

renderUsers(users);

function handleSearch(e) {
  let searchValue = e.target.value;
  let filterUsers = users.filter((obj) => {
    return obj.name.toLowerCase().includes(searchValue.toLowerCase())
    ||  obj.email.toLowerCase().includes(searchValue.toLowerCase());
  });
  renderUsers(filterUsers);
}

searchInput.addEventListener("input", handleSearch);
