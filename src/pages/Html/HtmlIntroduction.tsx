import { List } from "@mantine/core";
import Layout from "../../components/Layout";
import { HtmlSideMenuData } from "../../utils/constants";
import CodeBlock from "../../components/CodeBlock";

const HtmlIntroduction = () => {
  return (
    <Layout data={HtmlSideMenuData}>
      <div>
        <h1 className="py-10 text-4xl">HTML Introduction</h1>
        <p className="text-lg">
          HTML is the standard markup language for creating Web pages.
        </p>
        <div className="py-5">
          <p className="text-2xl pb-2">What is HTML?</p>
          <List className="px-5">
            <List.Item>HTML stands for Hyper Text Markup Language</List.Item>
            <List.Item>
              HTML is the standardmarkup language for creating Web pages
            </List.Item>
            <List.Item>
              HTML describes the structureof a Web page HTML consists of a
              series of elements
            </List.Item>
            <List.Item>
              HTML elements tell the browser how to display the content
            </List.Item>
            <List.Item>
              HTML elements label pieces of content such as "this is a heading",
              "this is a paragraph", "this is a link", etc.
            </List.Item>
          </List>
        </div>
        <CodeBlock>
          {`
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
          `}
        </CodeBlock>
      </div>
    </Layout>
  );
};

export default HtmlIntroduction;
