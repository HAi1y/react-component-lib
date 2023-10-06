import * as React from 'react';

export interface NavigationElement {
  label: string;
  url: string;
}

export interface NavigationSection {
  heading: string;
  children: Array<NavigationElement>
}

export interface NavigationProps {
  navigation: Array<NavigationSection>;
  isHidden: boolean;
}

export const Navigation = ({ navigation, isHidden }: NavigationProps) => {
  return (<>
    <nav className={isHidden ? "hidden" : "not-hidden"}>
      {navigation.map((section: NavigationSection, index1:number) => {
        return (
          <ul key={"ul-" + index1} >
            <li>
              <h2>{section.heading}</h2>
            </li>
            {section.children.map((element: NavigationElement, index: number) => {

              const key = "" + index1 + "-" + index;

              return (
                <li key={"li-" + key} className={"li-" + key}>
                  <a href={element.url} key={"a-" + key} className={"a-" + key}>{element.label}</a>
                </li>)
            })}
          </ul>)
      })}
    </nav>
  </>)
}
