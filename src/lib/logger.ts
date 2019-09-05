export default function (message: string | Error) {
  if (process.env.CD_DEBUG) {
    console.debug(message)
  }
};
