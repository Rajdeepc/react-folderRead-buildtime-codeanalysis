import React, { useState } from "react";
import preval from "preval.macro";
import shortid from "shortid";
import '../index.css'

const components = preval`
const fs = require("fs");
const files = fs.readdirSync("src/atoms");
module.exports = files`;

const contentOfComponents = preval`
const fs = require("fs");
const files = fs.readdirSync("src/atoms");
const content = files.map(filename => {
  const fs = require("fs");
  const url = 'src/atoms/'+filename+'/'+filename+'.js';
  return fs.readFileSync(url).toString();
})
module.exports = content`;

const AtomList = () => {
  const [fileUnderComponent, setFileUnderComponent] = useState(null);

  const setNewComponent = componentName => {
    const _index = components.indexOf(componentName);
    setFileUnderComponent(contentOfComponents[_index]);
  };

  const eachAtom = (component,indexOfItem) => {
    return (
      <li
        key={shortid.generate()}
        className={"list-item-group" + (component === components[indexOfItem]) ? 'active': ''}
        onClick={() => setNewComponent(component)}
      >
        {component}
      </li>
    );
  };

  return (
    <div>
      <div className="list-group inlineBlock atomList width20">
        <div>List of Reusable Components</div>
        <ul>
          {components.map((component,i) => {
            return eachAtom(component,i);
          })}
        </ul>
      </div>
      <div className="list-group inlineBlock atomDescription width80">
          <div className="innerDiv">
          <pre>{
            fileUnderComponent
          }</pre>
          </div>
       
      </div>
    </div>
  );
};

export default AtomList;