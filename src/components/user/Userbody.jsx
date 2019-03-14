import React from 'react';
import './Userbodystyle.scss';

const Userbody = () => {
  return (
    <div className = 'userbody'>
      <div className = 'selectbox'>
        <div className = 'selecthead'>
          <div className = 'selecthead-l'>
            <span className = 'iconfont icon-order'></span>
            我的订单
          </div>
          <p>查看全部订单></p>
        </div>
        <div className = 'selectbody'>
          <div>
            <span className = 'iconfont icon-fukuanzhuangtai'></span>
            <p>代付款</p>
          </div>
          <div>
            <span className = 'iconfont icon-daishouhuo'></span>
            <p>待收货</p>
          </div>
          <div>
            <span className = 'iconfont icon-shouhou'></span>
            <p>退款/售后</p>
          </div>
        </div>
      </div>
      <div className = 'selectbox'>
        <div className = 'selecthead'>
          <div className = 'selecthead-l'>
            <span className = 'iconfont icon-order'></span>
            我的钱包
          </div>
          <p>礼券/购书卡等></p>
        </div>
        <div className = 'selectbody'>
          <div>
            <span>￥0.00</span>
            <p>暂存款</p>
          </div>
          <div>
            <span>0</span>
            <p>购书卡</p>
          </div>
          <div>
            <span>0</span>
            <p>礼券</p>
          </div>
        </div>
      </div>
      <div className = 'selectbox'>
        <div className = 'selecthead'>
          <div className = 'selecthead-l'>
            <span className = 'iconfont icon-kefu'></span>
            联系客服
          </div>
          <p>点击联系在线客服></p>
        </div>
      </div>
      <div className = 'selectbox'>
        <div className = 'selecthead'>
          <div className = 'selecthead-l'>
            <span className = 'iconfont icon-kefu'></span>
            帮助中心
          </div>
          <p>客服电话及常见问题></p>
        </div>
      </div>
    </div>
  )
}

export default Userbody
