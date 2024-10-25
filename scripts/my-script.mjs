async function run() {
  const response = await fetch(
    "https://raw.githubusercontent.com/histories-in-transition/hit-baserow-dump/refs/heads/main/data/works.json"
  );

  const data = await response.json();

  console.log(data);
}

run();
