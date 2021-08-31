import React from "react";
import ReactDOM from "react-dom";
import { React, SideSheet, Paragraph, Button } from "evergreen-ui";

function PreventBodyScrollingSidesheetExample() {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <React.Fragment>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        preventBodyScrolling
      >
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Button onClick={() => setIsShown(true)}>Show Basic Side Sheet</Button>
    </React.Fragment>
  );
}

ReactDOM.render(
  <PreventBodyScrollingSidesheetExample />,
  document.getElementById("root")
);
