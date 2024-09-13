import SyntaxHighlighter from "react-syntax-highlighter";

interface CodeBlockProps {
  children: string;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <div className="p-5 bg-[#38444d] rounded-[10px] my-5">
      <p className="text-2xl pb-5">Example</p>
      <SyntaxHighlighter
        language="html"
        customStyle={{
          background: "#15202b",
          color: "white",
          borderRadius: "10px",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
