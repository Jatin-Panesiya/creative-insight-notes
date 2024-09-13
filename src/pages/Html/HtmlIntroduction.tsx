import { List } from "@mantine/core";
import Layout from "../../components/Layout";
import { HtmlSideMenuData } from "../../utils/constants";
import CodeBlock from "../../components/CodeBlock";
import CodeLabel from "../../components/CodeLabel";
import Notice from "../../components/Notice";

const HtmlIntroduction = () => {
  return (
    <Layout data={HtmlSideMenuData}>
      <div>
        <h1 className="py-10 text-4xl">HTML Introduction</h1>
        <p className="text-lg">
          HTML is the standard markup language for creating Web pages.
        </p>
        <div className="py-5">
          <p className="text-2xl pb-5">What is HTML?</p>
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

        <div className="py-5">
          <p className="text-2xl pb-5">Example Explained</p>
          <List className="px-5">
            <List.Item>
              The
              <CodeLabel label="<!DOCTYPE html>" />
              declaration defines that this document is an HTML5 document
            </List.Item>
            <List.Item>
              The <CodeLabel label="<html>" /> element is the root element of an
              HTML page
            </List.Item>
            <List.Item>
              The <CodeLabel label="<head>" /> element contains meta information
              about the HTML page
            </List.Item>
            <List.Item>
              The <CodeLabel label="<title>" /> element specifies a title for
              the HTML page (which is shown in the browser's title bar or in the
              page's tab)
            </List.Item>
            <List.Item>
              The <CodeLabel label="<body>" /> element defines the document's
              body, and is a container for all the visible contents, such as
              headings, paragraphs, images, hyperlinks, tables, lists, etc.
            </List.Item>
            <List.Item>
              The <CodeLabel label="<h1>" /> element defines a large heading
            </List.Item>
            <List.Item>
              The <CodeLabel label="<p>" /> element defines a paragraph
            </List.Item>
          </List>
        </div>

        <div>
          <p className="text-2xl pb-5">What is an HTML Element?</p>
          <p className="pb-3">
            An HTML element is defined by a start tag, some content, and an end
            tag:
          </p>
          <p className="text-xl pb-5">
            <CodeLabel label="<tagname>" />
            Content goes here... <CodeLabel label="</tagname>" />
          </p>
          <p className="pb-3">
            The HTML element is everything from the start tag to the end tag:
          </p>
          <p className="text-xl pb-5">
            <CodeLabel label="<h1>" /> My First Heading{" "}
            <CodeLabel label="</h1>" />
          </p>
          <p className="text-xl pb-5">
            <CodeLabel label="<p>" /> My first paragraph{" "}
            <CodeLabel label="</p>" />
          </p>
        </div>

        <Notice label="Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!" />
        <Notice label="The content inside the <body> section will be displayed in a browser. The content inside the <title> element will be shown in the browser's title bar or in the page's tab." />
      </div>
    </Layout>
  );
};

export default HtmlIntroduction;
