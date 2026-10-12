enum Response {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response): void {
  console.log(recipient + ' responded with ' + message);
}
respond('Princess Caroline', Response.Yes);

let dir: Response = 1;
console.log(dir);
