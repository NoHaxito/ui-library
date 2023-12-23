import { accordion } from "./accordion";
import { collapsible } from "./collapsible";
import { dropdownMenu } from "./dropdown-menu";
import { tooltip } from "./tooltip";

export const examples = {
  ...accordion,
  ...collapsible,
  ...dropdownMenu,
  ...tooltip,
};

export type ExampleComponent = {
  component: any;
  code: string;
};
