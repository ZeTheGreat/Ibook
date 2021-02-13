const envDev = process.env.ENVIRONMENT === "dev";

export default function (er) {
  let errors = er.errors?.map((err) => err.message);
  let status = 400;
  if (!errors) {
    status = 500;
    errors = "server_error_internal";
  }
  envDev && console.log(er);

  return [status, errors];
}

class ResponseHelper {
  isDev = process.env.ENVIRONMENT === "dev";
  constructor() {}
  prepareResponse(er) {
    let errors = er.errors?.map((err) => err.message);
    let status = 400;
    if (!errors) {
      status = 500;
      errors = "server_error_internal";
    }
    envDev && console.log(er);

    return [status, errors];
  }
  saveInfo(status, response) {}
}
