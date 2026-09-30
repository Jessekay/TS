let strictValue: unknown = "Hello";
strictValue = 50;
if (typeof strictValue === "number")
  console.log(strictValue + 1);


  type Status = "success" | "error";
  function handleStatus(status: Status) {
    if (status === "success") {
      console.log("All good!");
    } else if( status === "error") {
      console.log("Something is not right!");
    } else {
      const neverValue: never = status;
    }
  }

  handleStatus("error");

  