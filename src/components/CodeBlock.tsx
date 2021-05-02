import { Component } from 'react'
import hljs from 'highlight.js'
import escape from 'escape-html'

interface CodeBlockProps {
  path: string,
  language: string
}

interface CodeBlockState {
  code: string,
  isFetch: boolean
}

class CodeBlock extends Component<CodeBlockProps> {
  state: CodeBlockState = {
    isFetch: false,
    code: ''
  }

  async componentDidMount() {
    const response = await fetch(this.props.path)
    const data = await response.text()
    this.setState({
      code: data,
      isFetch: true
    })
    hljs.highlightAll()
  }

  render() {
    const { language } = this.props
    const { code } = this.state

    return (
      <pre>
        <code className={language}
          dangerouslySetInnerHTML={
            { __html: this.state.isFetch ? escape(code) : ''}
          }
        />
      </pre>
    )
  }
}

export default CodeBlock
