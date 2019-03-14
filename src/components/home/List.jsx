import React from 'react';
import { Link } from 'react-router-dom';
import './Liststyle.scss';

const List = ({ list }) => {
  // console.log(list)
  return (
    <div>
      <img className='titleimg' src="//static.winxuancdn.com/topic/subject/201605/m_pl/pl-wxxs.jpg" alt=''/>
      <ul className="booklist">
        {
          list.slice(0, 99).map((item, index) => {
            return (
              // index < 10 && 
              <Link to = { '/detail/' + item.id } key = { item.id }>
                <div className="bookimg">
                  <img src={ item.image } alt={ item.alt } />
                </div>
                <div className="info">
                  <h3>{ item.title }</h3>
                </div>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List
