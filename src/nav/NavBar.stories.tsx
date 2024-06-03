import type { Meta, StoryFn } from "@storybook/react";
import { NavLinkGroup } from "./NavLinkGroup";
import { NavLink } from "./NavLink";
import { NavBar } from "./NavBar";
import { NavLinkGroupOption } from "./NavLinkGroupOption";
import { MobileNavLinkGroupOption } from "./MobileNavLinkGroupOption";
import { Logo } from "../graphics";
import { NavBarLine } from "./NavBarLine";
import { Icon } from "../icons";
import { MobileNavLinkMenu } from "./MobileNavLinkMenu";
import { MobileNavLinkGroup } from "./MobileNavLinkGroup";

const meta: Meta<typeof NavBar> = {
  title: "Nav/Nav Bar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Desktop: StoryFn<typeof NavBar> = () => {
  return (
    <NavBar.DesktopRoot>
      <NavBar.LeftContent>
        <Logo href="/" />
      </NavBar.LeftContent>
      <NavBar.RightContent>
        <NavLink href="/home" label="Home" iconName="Home" />
        <NavLinkGroup
          width={180}
          active={false}
          iconName="Insights"
          label="Your Spend"
        >
          <NavLinkGroupOption
            href="/invoices"
            iconName="Search"
            label="Invoices"
          />
          <NavLinkGroupOption
            href="/transactions"
            iconName="MonetizationOn"
            label="Transactions"
          />
          <NavLinkGroupOption
            href="/location"
            iconName="LocationCity"
            label="DC Compare"
            isPremium
          />
        </NavLinkGroup>
        <NavLinkGroup
          width={212}
          active={false}
          iconName="TrackChanges"
          label="Your Prices"
        >
          <NavLinkGroupOption
            href="/agreements"
            iconName="FolderOpen"
            label="Agreements"
            isPremium
          />
          <NavLinkGroupOption
            href="/contract-audits"
            iconName="Receipt"
            label="Violations"
            isPremium
          />
        </NavLinkGroup>
        <NavLink
          href="/price-benchmark"
          label="Benchmarking"
          iconName="Search"
        />
        <NavBarLine />
        <NavLinkGroup
          position="right"
          width={180}
          active={false}
          iconName="AccountCircle"
        >
          <NavLinkGroupOption
            href="/account/business"
            iconName="Settings"
            label="Settings"
          />
          <NavLinkGroupOption
            iconName="RestaurantMenu"
            label="Start Tour"
            onClick={() => {}}
          />
          <NavLinkGroupOption
            iconName="Help"
            label="Help Center"
            onClick={() => {}}
          />
          <NavLinkGroupOption
            iconName="Logout"
            label="Sign Out"
            onClick={() => {}}
          />
        </NavLinkGroup>
      </NavBar.RightContent>
    </NavBar.DesktopRoot>
  );
};

export const Mobile = () => {
  return (
    <NavBar.MobileRoot>
      <NavBar.LeftContent>
        <Logo mobile href="/" />
      </NavBar.LeftContent>
      <NavBar.RightContent>
        <Icon color="black" size="medium" name="LocationOn" />
        <MobileNavLinkMenu iconName="Menu">
          <NavLink href="/home" label="Home" iconName="Home" />
          <MobileNavLinkGroup
            active={false}
            iconName="Insights"
            label="Your Spend"
          >
            <MobileNavLinkGroupOption
              href="/invoices"
              iconName="Search"
              label="Invoices"
            />
            <MobileNavLinkGroupOption
              href="/transactions"
              iconName="MonetizationOn"
              label="Transactions"
            />
            <MobileNavLinkGroupOption
              href="/location"
              iconName="LocationCity"
              label="DC Compare"
              isPremium
            />
          </MobileNavLinkGroup>
          <MobileNavLinkGroup
            active={false}
            iconName="TrackChanges"
            label="Your Prices"
          >
            <MobileNavLinkGroupOption
              href="/agreements"
              iconName="FolderOpen"
              label="Agreements"
              isPremium
            />
            <MobileNavLinkGroupOption
              href="/contract-audits"
              iconName="Receipt"
              label="Violations"
              isPremium
            />
          </MobileNavLinkGroup>
          <NavLink
            href="/price-benchmark"
            label="Benchmarking"
            iconName="Search"
          />
          <MobileNavLinkGroup
            active={false}
            label="Account"
            iconName="AccountCircle"
          >
            <MobileNavLinkGroupOption
              href="/account/business"
              iconName="Settings"
              label="Settings"
            />
            <MobileNavLinkGroupOption
              iconName="RestaurantMenu"
              label="Start Tour"
              onClick={() => {}}
            />
            <MobileNavLinkGroupOption
              iconName="Help"
              label="Help Center"
              onClick={() => {}}
            />
            <MobileNavLinkGroupOption
              iconName="Logout"
              label="Sign Out"
              onClick={() => {}}
            />
          </MobileNavLinkGroup>
        </MobileNavLinkMenu>
      </NavBar.RightContent>
    </NavBar.MobileRoot>
  );
};
