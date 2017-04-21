import React from 'react';
import ReactDOM from 'react-dom';
import { FormattedMessage } from 'react-intl';
import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';
import { Icon, Tooltip } from 'antd';
import EditButton from './EditButton';
import BrowserFrame from '../BrowserFrame';
import Vue from 'vue'

import Antv from 'antv/dist/antv.js'
import 'antv/dist/antv.css'

Vue.use(Antv)


let vueComponents = []

export default class Demo extends React.Component {
  static contextTypes = {
    intl: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      codeExpand: false,
      sourceCode: '',
      copied: false,
      copyTooltipVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { meta, highlightedCode } = nextProps;
    if (highlightedCode){
      const div = document.createElement('div');
      div.innerHTML = highlightedCode;
      document.getElementById(meta.id + '-highlightedCode').innerHTML = highlightedCode
      this.setState({ sourceCode: div.textContent });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.codeExpand || this.props.expand) !== (nextState.codeExpand || nextProps.expand)
     || this.state.copied !== nextState.copied
     || this.state.copyTooltipVisible !== nextState.copyTooltipVisible;
  }

  componentDidMount() {
    const { meta, location, preview } = this.props;
    if (meta.id === location.hash.slice(1)) {
      this.anchor.click();
    }
    this.componentWillReceiveProps(this.props);
    if (preview){
      preview().then((vm) => {
        var DemoVM = Vue.extend(vm)
        vueComponents.push(new DemoVM().$mount(document.getElementById(meta.id + '-vue')))
      })
    }
  }

  handleCodeExapnd = () => {
    this.setState({ codeExpand: !this.state.codeExpand });
  }

  saveAnchor = (anchor) => {
    this.anchor = anchor;
  }

  handleCodeCopied = () => {
    this.setState({ copied: true });
  }

  onCopyTooltipVisibleChange = (visible) => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false,
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible,
    });
  }

  render() {
    if (vueComponents.length > 0) {
      vueComponents.forEach((component) => {
        component.$destroy()
      })
      vueComponents = []
    }
    const state = this.state;
    const props = this.props;
    const {
      meta,
      content,
      style,
      highlightedStyle,
      expand,
    } = props;


    const codeExpand = state.codeExpand || expand;
    const codeBoxClass = classNames({
      'code-box': true,
      expand: codeExpand,
    });

    const locale = this.context.intl.locale;
    const localizedTitle = meta.title[locale] || meta.title;
    const localizeIntro = content[locale] || content;
    const introChildren = props.utils
      .toReactComponent(['div'].concat(localizeIntro));

    const highlightClass = classNames({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand,
    });
    return (
      <section className={codeBoxClass} id={meta.id}>
        <section className="code-box-demo">
          <div  id={meta.id + '-vue'}></div>
          {
            style ?
              <style dangerouslySetInnerHTML={{ __html: style }} /> :
              null
          }
        </section>
        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${meta.id}`} ref={this.saveAnchor}>
              {localizedTitle}
            </a>
            <EditButton title={<FormattedMessage id="app.content.edit-page" />} filename={meta.filename} />
          </div>
          {introChildren}
          <Icon type="down-circle-o" title="Show Code" className="collapse" onClick={this.handleCodeExapnd} />
        </section>
        <section className={highlightClass}
          key="code"
        >
          <div className="highlight">
            <CopyToClipboard
              text={state.sourceCode}
              onCopy={this.handleCodeCopied}
            >
              <Tooltip
                visible={state.copyTooltipVisible}
                onVisibleChange={this.onCopyTooltipVisibleChange}
                title={
                  <FormattedMessage
                    id={`app.demo.${state.copied ? 'copied' : 'copy'}`}
                  />
                }
              >
                <Icon
                  type={(state.copied && state.copyTooltipVisible) ? 'check' : 'copy'}
                  className="code-box-code-copy"
                />
              </Tooltip>
            </CopyToClipboard>
            <pre className="language-jsx">
              <code id={meta.id + '-highlightedCode'}></code>
            </pre>
          </div>
          {
            highlightedStyle ?
              <div key="style" className="highlight">
                <pre>
                  <code className="css" dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
                </pre>
              </div> :
              null
          }
        </section>
      </section>
    );
  }
}
