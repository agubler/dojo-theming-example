import { tsx, create } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import dojo from "@dojo/widgets/theme/dojo";
import material from "@dojo/widgets/theme/material";

import Switch from "@dojo/widgets/switch";
import Stack, { Spacer } from "@dojo/widgets/stack";

import * as css from "./App.m.css";

const factory = create({ theme });

export default factory(function App() {
  return (
    <div classes={[css.root]}>
      <Stack direction="vertical" spacing="large">
        <Spacer />
        <Switch
          theme={{
            theme: dojo,
            variant: { name: "default", value: dojo.variants.default },
          }}
          value={true}
          onValue={() => {}}
        />
        <Switch
          theme={{
            theme: material,
            variant: { name: "default", value: material.variants.default },
          }}
          value={true}
          onValue={() => {}}
        />
        <Spacer />
      </Stack>
    </div>
  );
});
