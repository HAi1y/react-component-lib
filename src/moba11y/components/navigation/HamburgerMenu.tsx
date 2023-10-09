import * as React from 'react';
import { Navigation, NavigationSection } from './Navigation';
import { ToggleButton } from '../ToggleButton';

export interface HamburgerIconProps {
  onClick: (isExpanded: boolean) => any;
}

export function HamburgerIcon({ onClick } : HamburgerIconProps) {

  return (
    <ToggleButton className={"hamburger icon"} onClick={onClick} description={"Hamburger Menu"}>
      <svg className={"icon"} viewBox="0 0 100 100">
        <path className="hamburger-line hamburger-line1" d="M 20,30 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="hamburger-line hamburger-line2" d="M 20,50 H 80" />
        <path className="hamburger-line hamburger-line3" d="M 20,70 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </ToggleButton>
  )
}

export interface ThreeDotsIconProps {
  onClick?: (isExpanded: boolean) => any;
}

export function ThreeDotsIcon({ onClick } : ThreeDotsIconProps) {
  return (
    <ToggleButton className={"three-dots icon"} onClick={onClick} description={"Three Dots Menu"}></ToggleButton>
  )
}

export interface HamburgerMenuProps {
  navigation: Array<NavigationSection>;
  title: string;
}

export const HamburgerMenu = ({ navigation, title } : HamburgerMenuProps) => {
  
  var [isExpanded, setExpanded] = React.useState(false);

  var onClick = (expanded: boolean) => {
    setExpanded(expanded);
  }

  return (
    <div className="hamburger-menu">
        <HamburgerIcon onClick={onClick} />
        
      <div className={isExpanded ? "title-bar expanded" : "title-bar"}>
        <div className={isExpanded ? "hamburger-title-container expanded" : "hamburger-title-container"}><h1>{title}</h1></div>  
          <Navigation isHidden={!isExpanded} navigation={navigation} />
        </div>
        <ThreeDotsIcon/>
    </div>
  )
}