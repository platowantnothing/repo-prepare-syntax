async function deleteStaleBranches(delay = 500) {
  var stale_branches = document.querySelectorAll(
    '[aria-label="Delete branch"]'
  );
  for (var i = 0; i < stale_branches.length; i++) {
    stale_branches.item(i).click();
    await new Promise((r) => setTimeout(r, delay));
  }
  const next = document.querySelector('[aria-label="Next Page"]');
  if (next) {
    next.click();
    setTimeout(() => deleteStaleBranches(500), 500);
  }
}
(() => {
  deleteStaleBranches(500);
})();

async function deleteStaleBranches(delay = 500) {
  let buttons = [];
  document.querySelectorAll(".State.State--merged").forEach((el) => {
    const butEl =
      el.parentElement.nextElementSibling.nextElementSibling.querySelector(
        "button"
      );
    buttons.push(butEl);
  });
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].click();
    await new Promise((r) => setTimeout(r, delay));
  }
}

(() => {
  deleteStaleBranches(500);
})();

async function deleteStaleBranches(delay = 500) {
  var stale_branches = document.getElementsByClassName(
    "types__StyledButton-sc-ws60qy-0 dOnKJi"
  );
  for (var i = 0; i < stale_branches.length; i++) {
    stale_branches.item(i).click();
    await new Promise((r) => setTimeout(r, delay));
  }
}

(() => {
  deleteStaleBranches(500);
})();

async function deleteStaleBranches(delay = 500) {
  var stale_branches = document.getElementsByClassName(
    "types__StyledButton-sc-ws60qy-0 dOnKJi"
  );
  for (var i = 0; i < stale_branches.length; i++) {
    stale_branches.item(i).click();
    await new Promise((r) => setTimeout(r, delay));
  }
  const next = document.querySelectorAll(".pagination > a")[1];
  if (next) {
    next.click();
    setTimeout(() => deleteStaleBranches(500), 500);
  }
}
(() => {
  deleteStaleBranches(500);
})();

// types__StyledButton-sc-ws60qy-0 dOnKJi

async function deleteStaleBranches() {
  var stale_branches = document.getElementsByClassName(
    "js-branch-delete-button"
  );
  for (var i = 0; i < stale_branches.length; i++) {
    stale_branches.item(i).click();
    await new Promise((r) => setTimeout(r, 500));
  }
  await document
    .evaluate(
      "//a[text()='Next']",
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    )
    .singleNodeValue.click();
  await new Promise((r) => setTimeout(r, 500));
}
while (true) {
  await deleteStaleBranches();
}

// WORK FOR　ME the signal page
async function deleteStaleBranches(delay = 500) {
  var stale_branches = document.getElementsByClassName(
    "types__StyledButton-sc-ws60qy-0 dOnKJi"
  );
  for (var i = 0; i < stale_branches.length; i++) {
    stale_branches.item(i).click();
    await new Promise((r) => setTimeout(r, delay));
  }
}
(() => {
  deleteStaleBranches(500);
})();
