import React, { createElement } from "react";

function InjectCss(props: { css: string }) {
  return props.css.trim() !== ""
    ? createElement("style", {
        dangerouslySetInnerHTML: { __html: props.css },
      })
    : null;
}

export default InjectCss;
