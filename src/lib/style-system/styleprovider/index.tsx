import React from "react";
import InjectCss from "./InjectCss";

export type StyleProviderProps = {
  children: React.ReactNode;
  css: string;
};

function StyleProvider({ children, css }: StyleProviderProps) {
  return (
    <>
      <InjectCss css={css.replace(/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, "")} />
      {children}
    </>
  );
}

export default StyleProvider;
