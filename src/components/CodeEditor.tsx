import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import Output from "./Output";
import { Button } from "@mantine/core";

const CodeEditor = () => {
  const [value, setValue] = useState<string | undefined>("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef<any>();

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 bg-[#38444d] rounded-[10px] my-5">
      <div className="mb-5 flex justify-end">
        <Button onClick={runCode} loading={isLoading} disabled={isLoading}>
          Run Code
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Editor
          onMount={onMount}
          height="50vh"
          theme="vs-dark"
          defaultLanguage="html"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Output output={output} />
      </div>
    </div>
  );
};

export default CodeEditor;
