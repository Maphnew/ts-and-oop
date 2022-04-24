// Java: Exception
// JavaScript: Error

// const array = new Array(10000000000000000000000000000000000000000000000);

// Error(Exception) Handling: true -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "Not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}

function run() {
  const fileName = "Not exist!";
  try {
    console.log(readFile(fileName));
  } catch (eror) {
    console.log(`catched!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`finally`);
  }
}
run();
