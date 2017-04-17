import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal, Icon } from 'antd';
import { isLocalStorageNameSupported } from '../utils';

class Footer extends React.Component {
  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    // if (
    //   localStorage.getItem('antd@2.0.0-notification-sent') !== 'true' &&
    //     Date.now() < new Date('2016/10/14').getTime()
    // ) {
    //   this.infoNewVersion();
    // }
  }

  infoNewVersion() {
    const messages = this.props.intl.messages;
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img src="https://os.alipayobjects.com/rmsportal/nyqBompsynAQCpJ.svg" alt="Ant Design" />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="/changelog">antd@2.0.0</a>
            {messages['app.publish.intro']}
            {messages['app.publish.old-version-guide']}
            <a target="_blank" rel="noopener noreferrer" href="http://1x.ant.design">1x.ant.design</a>
            {messages['app.publish.old-version-tips']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('antd@2.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2><Icon type="github" /> GitHub</h2>
            <div>
              <a target="_blank " href="https://github.com/ant-design-vue/antv">
                <FormattedMessage id="app.footer.repo" />
              </a>
            </div>
            <div>
              <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                <FormattedMessage id="app.footer.awesome" />
              </a>
            </div>
          </li>
          <li>
            <h2><Icon type="link" /> <FormattedMessage id="app.footer.links" /></h2>
            <div>
              <a href="http://ant.design">Ant Design</a>
              <span> - </span>
              Ant Design
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">AntD Library</a>
              <span> - </span>
              <FormattedMessage id="app.footer.antd-library" />
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
              <span> - </span>
              <FormattedMessage id="app.footer.antux" />
            </div>
          </li>
          <li>
            <h2><Icon type="customer-service" /> <FormattedMessage id="app.footer.community" /></h2>
            <div>
              <a href="/changelog">
                <FormattedMessage id="app.footer.change-log" />
              </a>
            </div>
          </li>
          <li>
            <h2>Copyright © {new Date().getFullYear()}</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/flashhk">
                @flashhk
              </a>
            </div>
            <div>
              Built with&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/benjycui/bisheng">
                BiSheng
              </a>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}

export default injectIntl(Footer);
