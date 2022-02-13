import React from "react";
import classNames from "classnames";
import "./styles/tailwind.css";
import "./styles/styles.css";
import "@fontsource/inter";

interface IStoryArgs {
  darkMode: Boolean;
  className?: string;
  children?: React.ReactNode;
  noPadding?: boolean;
}

const StoryLayout = (args: IStoryArgs) => {
  return (
    <div className={classNames({ "dark bg-gray-900": args.darkMode }, "-m-4")}>
      <div className={classNames(args.className, {"p-4": !args.noPadding})}>
        {args.children}
      </div>
    </div>
  );
};

export default StoryLayout;

