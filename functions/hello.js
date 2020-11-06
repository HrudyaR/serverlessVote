let votesArray = [0, 0, 0, 0];

exports.handler = async (event) => {
  const vote = event.queryStringParameters.vote;
  if (vote === "a") {
    votesArray[0] = votesArray[0] + 1;
  } else if (vote === "b") {
    votesArray[1] = votesArray[1] + 1;
  } else if (vote === "c") {
    votesArray[2] = votesArray[2] + 1;
  } else if (vote === "d") {
    votesArray[3] = votesArray[3] + 1;
  } else if (vote === "r") {
    votesArray = [0, 0, 0, 0];
  }
  console.log(JSON.stringify(votesArray));
  return {
    statusCode: 200,
    header: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(votesArray),
  };
};
