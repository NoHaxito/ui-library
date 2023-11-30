/* eslint-disable react/function-component-definition -- A? */
import {
  type ReactNode,
  type ComponentProps,
  type ElementType,
  type FC,
  type PropsWithChildren,
  forwardRef,
  useId,
} from "react";
import { cn } from "../../utils";
import { sidebar, type SidebarVariant } from "./theme";

interface SidebarProps extends SidebarVariant, ComponentProps<"div"> {
  children: ReactNode;
  as?: ElementType;
  collapseBehavior?: "collapse" | "hide";
  collapsed?: boolean;
}
type SidebarItemsProps = ComponentProps<"div">;
const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = "nav",
  collapsed = false,
  className,
  ...props
}) => {
  const { base, inner } = sidebar();
  return (
    <Component
      aria-label={props["aria-label"] ?? "Sidebar"}
      className={cn(base({ collapsed }))}
      {...props}
    >
      <div className={cn(inner({ className }))}>{children}</div>
    </Component>
  );
};
SidebarComponent.displayName = "Sidebar";

const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  ...props
}) => {
  const { items } = sidebar();
  return (
    <div className={items({ className })} {...props}>
      {children}
    </div>
  );
};
SidebarItems.displayName = "Sidebar.Items";

export type SidebarItemGroupProps = ComponentProps<"ul">;

const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  ...props
}) => {
  const { itemGroup } = sidebar();
  return (
    <ul className={itemGroup({ className })} {...props}>
      {children}
    </ul>
  );
};

SidebarItemGroup.displayName = "Sidebar.ItemGroup";

export interface SidebarItemProps extends Omit<ComponentProps<"div">, "ref"> {
  as?: ElementType;
  href?: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>;
  collapsed?: boolean;
  active?: boolean;
}
const ListItem: FC<
  PropsWithChildren<{
    id: string;
    collapsed: boolean;
    className?: string;
  }>
> = ({ collapsed, children: wrapperChildren, ...props }) => (
  <li {...props}>{collapsed ? wrapperChildren : wrapperChildren}</li>
);

const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      active: isActive,
      collapsed,
      as: Component = "a",
      children,
      className,
      icon: Icon,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { item, itemIcon } = sidebar();
    return (
      <ListItem className="" collapsed={collapsed ?? false} id={id}>
        <Component
          className={item({ className, active: isActive })}
          ref={ref}
          {...props}
        >
          {Icon ? (
            <Icon aria-hidden className={itemIcon({ active: isActive })} />
          ) : null}
          {collapsed && !Icon ? (
            <span className="font-bold">
              {(children as string).charAt(0).toLocaleUpperCase()}
            </span>
          ) : null}
          {!collapsed && (
            <span className="px-3 flex-1 whitespace-nowrap" id={id}>
              {children}
            </span>
          )}
        </Component>
      </ListItem>
    );
  },
);

SidebarItem.displayName = "Sidebar.Item";

export { SidebarComponent, SidebarItems, SidebarItemGroup, SidebarItem };
