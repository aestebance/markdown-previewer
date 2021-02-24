import React, {useState} from 'react';
import marked from 'marked';
import './App.scss';

const initialText = `# My first Markdown previewer

## This is a sub-header

[go to google](https://www.google.es)

Inline code: \` const a = ""; \`

\`\`\`
let a = 1;
let b = 3;
let z = a + b;
return z;
\`\`\`

- list item 1
- list item 2
- list item 3

> blockquote

**This is a bolded text**

This is a React image:

![React Image](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
`

function App() {
    const [text, setText] = useState(initialText);

    const result = marked(text, {breaks: true});

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Markdown converter</h1>
            <div className="row mt-4">
                <div className="col-6">
                    <h5 className="text-center">Editor:</h5>
                    <textarea className="form-control" id="editor" onChange={handleChange} value={text}/>
                </div>
                <div className="col-6">
                    <h5 className="text-center">Result:</h5>
                    <div id="preview" className="preview rounded p-2" dangerouslySetInnerHTML={{__html: result}}/>
                </div>
            </div>
        </div>
    );
}

export default App;
