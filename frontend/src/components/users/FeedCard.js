import React, { Component } from 'react'
import { Card, CardTitle } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import SearchIcon from '../../images/icons/feed_search.svg'
import Feed from '../../components/feed/Feed'

class FeedCard extends Component {
  render() {
    return (
      <Card>
        <div className='header header-search'>
          <CardTitle>
            Feed<small className={'subtitle'}>Show all</small>
          </CardTitle>
          <div className='header-search-ico'>
            <a href='#!' className={'search-btn'}>
              <InlineSVG src={SearchIcon} />
            </a>
          </div>
        </div>
        <div className='profile-band'>
          <Feed />
        </div>
      </Card>
    )
  }
}

export default FeedCard
