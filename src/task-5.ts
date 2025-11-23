type STATUS = "loading" | "success" | "error";


function logStatus(status: STATUS):void {
    if (status === "loading") {
    console.log("Loading...");
    } else if (status === "success") {
    console.log("Success!");
    } else if (status === "error") {
    console.log("Something went wrong");
    }
}

logStatus("success");
