import { AsideHeader } from "@gravity-ui/navigation";
import { useState } from "react";
import { Router } from "./app/router";

export const App = () => {
  const [compact, setCompact] = useState(false);

  return (
    <AsideHeader
      compact={compact}
      onChangeCompact={setCompact}
      menuItems={[]}
      renderContent={() => <Router />}
    />
  );
};
