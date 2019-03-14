import React from 'react';
import { Link } from 'react-router-dom';
import './Navboxstyle.scss';

const Navbox = () => {
  return (
    <div className='navbox'>
      <div className='category'>
        <img className='cateimg' src="//static.winxuancdn.com/topic/subject/201605/m_pl/plhc1.jpg" alt=''/>
        <ul>
          <Link to = { '/search/kind=烹饪' }>
            <span className="iconfont icon-icon--"></span>
            <p>烹饪</p>
          </Link>
          <Link to = { '/search/kind=文学' }>
            <span className="iconfont icon-wenxue"></span>
            <p>文学</p>
          </Link>
          <Link to = { '/search/kind=小说' }>
            <span className="iconfont icon-duxiaoshuo"></span>
            <p>小说</p>
          </Link>
          <Link to = { '/search/kind=动漫' }>
            <span className="iconfont icon-dongman"></span>
            <p>动漫</p>
          </Link>
          <Link to = { '/search/kind=旅游' }>
            <span className="iconfont icon-lvyou"></span>
            <p>旅游</p>
          </Link>
          <Link to = { '/search/kind=运动' }>
            <span className="iconfont icon-tiyu-paobu"></span>
            <p>运动</p>
          </Link>
          <Link to = { '/search/kind=体育' }>
            <span className="iconfont icon-yundong"></span>
            <p>体育</p>
          </Link>
          <Link to = { '/kind' }>
            <span className="iconfont icon-gengduo"></span>
            <p>更多</p>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbox
