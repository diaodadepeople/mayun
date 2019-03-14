import React from 'react';
import { Link } from 'react-router-dom';
import './Kindbodystyle.scss';

const Kindbody = ({kindlist}) => {
  return (
    <div className = "content">
      <div className = 'kindbox'>
        <span className="iconfont icon-shu">&nbsp;&nbsp;分类搜索</span>
        <ul>
          {
            kindlist.map((item, index) => {
              return (
                <Link to = { `/search/kind=${ item }` } key = { index }>{ item }</Link>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Kindbody
