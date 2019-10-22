import React ,{useState} from 'react'
import preval from 'preval.macro';
import '../index.css'

const components = preval
` const fs = require('fs');
  const files = fs.readdirSync('src/atoms');
  module.exports = files;
`

const AtomList = () => {

    const [newFileName, setNewFileName] = useState('avatar');


    const fileUnderComponent = preval
        `   const fs = require('fs')
            const path = require('path');
            const file = fs.readFileSync('src/atoms/${newFileName}/${newFileName}.js');
            module.exports = file.toString();
        `;

    const setNewComponent = (componentName) => {
        setNewFileName(componentName)
    }

    const eachAtom = (component) => {
        return (
            <ul><li className="list-item-group" onClick={() => setNewComponent(component)}>{component}</li></ul>
        )
    }

    return (
        <div>
            <div className="list-group inlineBlock atomList width20">
                <div>List of Reusable Components</div>
                {components.map((component, i) => {
                    return eachAtom(component)
                })}
            </div>
            <div className="list-group inlineBlock atomDescription width80">
                {typeof fileUnderComponent === 'string' ? fileUnderComponent : null}
            </div>

        </div>
    )
}

export default AtomList

