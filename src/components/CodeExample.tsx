const CodeExample = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <p>Example</p>
      <div className="bg-slate-900 text-white">{children}</div>
    </div>
  );
};

export default CodeExample;
