import { Component } from 'react'
import CodeBlock from '../../components/CodeBlock'
import 'highlight.js/styles/solarized-dark.css'


// import fs from 'fs'

import * as Foundation from 'react-foundation'

class HelloWorld extends Component {
  // componentDidMount() {
  //   hljs.highlightAll()
  // }
  
  render() {
    return (
      <Foundation.Grid>
        <Foundation.Grid vertical>
          <h1>Hello, World!</h1>

          <p>
            Como uma das propostas deste espaço é falar sobre linguagens de programação,
            tive a ideia de iniciar com o clássico <code>Hello, World!</code>.
            A ideia é poder discutir vários assuntos diferentes, então nada mais adequado
            que dizer <em>Hello, World!</em> em 10 linguagens diferentes.
          </p>

          <p>Vamos lá?</p>

          <h2>C</h2>
          <CodeBlock path="/resources/code/HelloWorld.c" language="c" />

          <h2>C++</h2>
          <CodeBlock path="/resources/code/HelloWorld.cpp" language="c++" />

          <h2>Python</h2>
          <CodeBlock path="/resources/code/HelloWorld.py" language="python" />

          <h2>Ruby</h2>
          <CodeBlock path="/resources/code/HelloWorld.rb" language="ruby" />

          <h2>Julia</h2>
          <CodeBlock path="/resources/code/HelloWorld.jl" language="julia" />

          <h2>Scala</h2>
          <CodeBlock path="/resources/code/HelloWorld.scala" language="scala" />

          <h2>Java</h2>
          <CodeBlock path="/resources/code/HelloWorld.java" language="java" />

          <h2>PHP</h2>
          <CodeBlock path="/resources/code/HelloWorld.php" language="php" />

          <h2>Haskell</h2>
          <CodeBlock path="/resources/code/HelloWorld.hs" language="haskell" />

          <h2>Javascript</h2>
          <CodeBlock path="/resources/code/HelloWorld.js" language="javascript" />

        </Foundation.Grid>
      </Foundation.Grid>
    )
  }
}

export default HelloWorld
