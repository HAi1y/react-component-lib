import * as React from 'react';
import {createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HamburgerMenu, NavigationSection } from "../dist"
import "../src/moba11y/components/navigation/HamburgerMenu.css"

function ExampleList() {
  return (
    <ul>
      <li><a href="/hamburger-menu">Hamburger</a></li>
    </ul>
  )
}

function ExampleHamburgerMenu() {

  const navigation: Array<NavigationSection> = [{
    heading: "",
    children: [{
      label: "Home",
      url: "/"
    } ,{
      label: "About",
      url: "https://google.com"
    }
  ]
  },{
    heading: "Services",
    children: [{
      label: "Accessibility Consulting",
      url: "/"
    }, {
      label: "Engineering Support",
      url: "https://google.com"
    }]
  },{
    heading: "Products",
    children: [{
      label: "VoiceOver Simulator (Coming Soon)",
      url: "/hamburger-menu/android"
    }]
  }];

  return ( 
    <>
      <HamburgerMenu navigation={navigation} title={"MobA11y"} />
    </>
  )
}

function ExampleHamburgerMenuAndroid() {

  const navigation: Array<NavigationSection> = [{
    heading: "",
    children: [{
      label: "MobA11y",
      url: "/hamburger-menu/"
    }
  ]
  }];

  return ( 
    <>
      <HamburgerMenu navigation={navigation} title={"MobA11y - VoiceOver"} />
    </>
  )
}


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ExampleList()} />
          <Route path="/hamburger-menu" element={ExampleHamburgerMenu()} />
          <Route path="/hamburger-menu/android" element={ExampleHamburgerMenuAndroid()} />
          <Route path="/hamburger-menu/blog" element={ExampleHamburgerMenu()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
