
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // img(image) {
    //   return ( <Image
    //       src={`/images/posts/${post.slug}/${image.properties.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    // look for the image inside the paragraphs and replace the entire
    // paragraph with a div with an image
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },
    // get code from React markdown and return the custom JSX element
    code(code){
        const {className, children} = code;
        const language = className.split('-')[1] // js part is needed from className-js
     return <SyntaxHighlighter style={atomDark} language={language} children={children}/>
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers} children={post.content} />
    </article>
  );
}

export default PostContent;
