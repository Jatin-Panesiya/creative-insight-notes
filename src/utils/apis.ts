import axios from "axios";

export const executeCode = async (sourceCode: any) => {
  const response = await axios.post(
    "https://codesandbox.io/api/v1/sandboxes/define",
    {
      files: {
        "index.html": {
          content: sourceCode,
        },
      },
    }
  );

  console.log(response, "response");

  return response.data;
};
