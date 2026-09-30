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

let numbers: number[] = [2,3,53,5,7,5];
numbers.push(9);

let person: [string, number] = ["Jesse", 25];
person = ["bob", 34];

enum EnumStatus{
  Success = "SUCCESS",
  Failure = "FAILED"
}

let currentStatus: EnumStatus = EnumStatus.Success
console.log(currentStatus);
