import React from "react";
import { Dropdown } from "@nextui-org/react";

const OptionDropdown = ({ content }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Button flat color={"secondary"}></Dropdown.Button>
        <Dropdown.Menu color={"secondary"} aria-label="Static Actions">
          {content.map((item, index) => {
            if (index === content.length - 1)
              return (
                <Dropdown.Item key="delete" color="error">
                  {item}
                </Dropdown.Item>
              );
            return <Dropdown.Item key={item}>{item}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default OptionDropdown;
