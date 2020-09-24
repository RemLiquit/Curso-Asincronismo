const dosomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do somethin Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const dosomething = async () => {
  const something = await dosomethingAsync();
  console.log(something);
};

console.log("Before");
dosomething();
console.log("After");

const anoherFunction = async () => {
  try {
    const something = await dosomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before 1");
dosomething();
console.log("After 1");
