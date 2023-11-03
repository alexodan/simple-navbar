# A Simple Navbar component made with React

## Site

A demo is hosted using github pages [here](https://alexodan.github.io/navbar-challenge/)

## About

This repo holds a `Navbar` component, visually similar to the one in this dribbble, it was part of a challenge made in this [other repo](https://github.com/alexodan/navbar-challenge), but I was curious on how to publish it to npm, though it's still a WIP.

https://dribbble.com/shots/5487895-Tab-bar-active-animation/attachments/10896293?mode=media

![Navbar gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZ5MHpudjVoeHVnNTdpaDFheWRvZml3bG43M2FxdG9zNHcweWpyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qmHC2pILnevhCXbwq5/giphy.gif)

## Credits

Definitely credits to Ignacio and his template to set this up! https://github.com/IgnacioNMiranda/vite-component-library-template/tree/main

## Setup (WIP)

In order to run it local, follow these steps:

```bash
- `npm i --save @fortawesome/fontawesome-svg-core` # for now depending on this for the icons
- `npm install ...`
```

## Usage:

A small code snippet of its usage:

```jsx
import { Navbar, NavbarItem } from "simeple-navbar";
import { faClock, ... } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "navbar-challenge/dist/style.css";

const initialItems = [{
    icon: faClock,
    title: "Time",
  },
  ...
] as const;

type Tab = (typeof initialItems)[number]["title"];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(initialItems[0].title);

  const handleItemClicked = ({ title, id }: { title: Tab; id: number }) => {
    console.log(`Item clicked title ${title} id ${id}`);
    setActiveTab(title);
  };

  return (
    <>
      <Navbar defaultActive={0}>
        {initialItems.map((item, i) => (
          <NavbarItem
            key={`${item.title}-${i}`}
            icon={item.icon}
            title={item.title}
            onSelect={handleItemClicked}
          />
        ))}
      </Navbar>
      <div style={{ padding: "10px" }}>Active tab: {activeTab}</div>
    </>
  );
}

export default App;
```

### Overriding defaults

You can override the default styles providing variables with your own values:

```css
:root {
  --navbar-width: 480px;
  --navbar-dot-size: 12px;

  --light-background: #fff;
  --light-text: #000;

  --dark-background: #000;
  --dark-text: #fff;

  --primary: #4c21ea;
}
```
