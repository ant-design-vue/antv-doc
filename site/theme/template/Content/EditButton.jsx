import React from 'react';
import { Tooltip, Icon } from 'antd';

const branchUrl = 'https://github.com/ant-design-vue/antv-doc/edit/master/';

export default function EditButton({ title, filename }) {
  return (
    <Tooltip title={title}>
      <a className="edit-button" href={`${branchUrl}${filename}`}>
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
}
